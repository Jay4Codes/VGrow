from flask_cors import CORS
from json import *
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
import requests
import warnings
import joblib
warnings.filterwarnings('ignore')

app = Flask(__name__)
CORS(app)

crop_recommendation_model_path = './random_forest_model.pkl'
crop_recommendation_model = pickle.load(
    open(crop_recommendation_model_path, 'rb'))

fertilizer_recommendation_model_path = './xgb_pipeline.pkl'
fertilizer_recommendation_model = pickle.load(
    open(fertilizer_recommendation_model_path, 'rb'))


@app.route("/crop", methods=['POST'])
def members1():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        ph = float(request.json['Ph'])
        state = request.json['state']
        district = request.json['district']
        start_month = int(request.json['start_month'])
        end_month = int(request.json['end_month'])
    except:
        return jsonify({"crop": 'Enter Valid Details', "data": request.json})

    x = requests.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + district + ' ' + state +
                     '.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg')

    coordinates = x.json()['features'][0]['center']

    y = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=' + str(
        coordinates[1]) + '&lon=' + str(coordinates[0]) + '&appid=288a2f93f39e83cd21b86dba6b329fd8')

    humidity = y.json()['main']['humidity']
    temprature = y.json()['main']['temp'] - 273.15

    df = pd.read_csv("./rainfall.csv")
    q = df.loc[(df['STATE_UT_NAME'] == state) & (df['DISTRICT'] == district)]

    total = 0
    l = 12

    if start_month <= end_month:
        l = (end_month-start_month)+1
        for i in range(start_month, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
    elif start_month > end_month:
        l = (end_month+12) - start_month + 1
        for i in range(start_month, 13):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
        for i in range(1, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1

    avg_rainfall = total/l
    data = np.array([N, P, K, temprature, humidity,
                    ph, avg_rainfall]).reshape(1, -1)

    scaler = joblib.load("./scalers/all_scaler.gz")
    x_scaled = scaler.transform(data)
    my_prediction = crop_recommendation_model.predict(x_scaled)
    dict_crop = {'rice': 20,
                 'maize': 11,
                 'chickpea': 3,
                 'kidneybeans': 9,
                 'pigeonpeas': 18,
                 'mothbeans': 13,
                 'mungbean': 14,
                 'blackgram': 2,
                 'lentil': 10,
                 'pomegranate': 19,
                 'banana': 1,
                 'mango': 12,
                 'grapes': 7,
                 'watermelon': 21,
                 'muskmelon': 15,
                 'apple': 0,
                 'orange': 16,
                 'papaya': 17,
                 'coconut': 4,
                 'cotton': 6,
                 'jute': 8,
                 'coffee': 5}

    for key, value in dict_crop.items():
        if value == my_prediction[0]:
            final_prediction = key

    return jsonify({"crop": final_prediction, "data": y.json()['main'], 'l': l})


@app.route("/fertilizer", methods=['POST'])
def members2():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        state = request.json['state']
        district = request.json['district']
        moisture = float(request.json['moisture'])
        soil_type = request.json['soil_type']
        crop_type = request.json['crop_type']
        start_month = int(request.json['start_month'])
        end_month = int(request.json['end_month'])
    except:
        return jsonify({"crop": 'Enter Valid Data', "data": request.json})

    humidity = 30

    x = requests.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + district + ' ' + state +
                     '.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg')

    coordinates = x.json()['features'][0]['center']

    y = requests.get('https://api.openweathermap.org/data/2.5/weather?lat=' + str(
        coordinates[1]) + '&lon=' + str(coordinates[0]) + '&appid=8d51fbf3b5ad7f3cc65ba0ea07220782')

    humidity = y.json()['main']['humidity']

    df = pd.read_csv("./rainfall.csv")
    q = df.loc[(df['STATE_UT_NAME'] == state) & (df['DISTRICT'] == district)]
    total = 0
    l = 12

    if start_month <= end_month:
        l = (end_month-start_month)+1
        for i in range(start_month, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
    elif start_month > end_month:
        l = (end_month+12) - start_month + 1
        for i in range(start_month, 13):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1
        for i in range(1, end_month+1):
            try:
                total += int(q[i:i+1].value)
            except:
                total -= 1

    avg_rainfall = total/l

    data = np.array(
        [[avg_rainfall, humidity, moisture, soil_type, crop_type, N, K, P]])

    my_prediction = fertilizer_recommendation_model.predict(data)
    final_prediction = my_prediction[0]

    fertname = {"0": "10-26-26", "1": "14-35-14", "2": "17-17-17",
                "3": "20-20", "4": "28-28", "5": "DAP", "6": "Urea"}

    return jsonify({"crop": str(fertname[str(final_prediction)]), "data": fertname})


if __name__ == "__main__":
    app.run(debug=True)