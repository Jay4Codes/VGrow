import pickle
import numpy as np
import joblib

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

x_columns = ['N', 'P', 'K', 'temperature', 'humidity', 'ph', 'rainfall', 'label'] # for reference only

def standardize(x, type):
    scaler = joblib.load(f"../scalers/{type}_scaler.gz")
    x_scaled = scaler.transform(x)

    return x_scaled

def load_model(model_name):
    with open(f"../models/{model_name}_model.pkl", "rb") as f:
        model = pickle.load(f)

    return model

def predict(model, x):
    y_pred = model.predict(x)

    return y_pred

def decode_crop(dict_crop, val):
    for key, value in dict_crop.items():
        if value == val:
            return key

data = np.array([ 90.        ,  42.        ,  43.        ,  20.87974371,
         82.00274423,   6.50298529, 202.9355362 ]).reshape(1, -1)

data_scaled = standardize(data, "all") # or "train" or "test" but keep it "all" for now
model = load_model("random_forest") # or "decision_tree" or "logistic_regression"
temp_predict = predict(model, data_scaled)

print(f"Predicted Encoded Value: {temp_predict[0]}")
print(f"Predicted Crop: {decode_crop(dict_crop, temp_predict[0])}")

