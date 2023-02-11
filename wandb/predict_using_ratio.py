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

x_columns = ['N-P', 'N-K', 'P-K', 'temperature', 'humidity', 'ph', 'rainfall'] # for reference only

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


data = np.array([ 1.31481481,  4.4375    ,  3.375     , 22.61359953, 63.69070564,
        5.74991442, 87.75953857]).reshape(1, -1)

data_scaled = standardize(data, "ratio_model")
model = load_model("random_forest_ratio") # or "decision_tree_ratio" or "logistic_regression_ratio"
temp_predict = predict(model, data_scaled)

print(f"Predicted Encoded Value: {temp_predict[0]}")
print(f"Predicted Crop: {decode_crop(dict_crop, temp_predict[0])}")
