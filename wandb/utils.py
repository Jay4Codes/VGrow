import wandb

import pandas as pd
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

import params
import pickle
import joblib

def get_df_wandb(name):
    data_artifact = wandb.use_artifact(f"{params.DATA_ART}:latest")
    table = data_artifact.get(f"{name}_data_table")
    df = pd.DataFrame(data=table.data, columns=table.columns)

    return df


def encode_crop(df_crop):
    label_encoder = LabelEncoder()

    encoded_crop = label_encoder.fit_transform(df_crop["label"])

    dict_crop = {}
    for i in range(len(encoded_crop)):
        dict_crop[df_crop.loc[i, "label"]] = encoded_crop[i]

    df_crop["label"] = df_crop["label"].map(dict_crop)

    return df_crop, dict_crop


def decode_crop(dict_crop, val):
    for key, value in dict_crop.items():
        if value == val:
            return key


def split_data(x, y, test_size=0.2, random_state=42):
    x_train, x_test, y_train, y_test = train_test_split(x,
                                                        y,
                                                        test_size=test_size,
                                                        random_state=random_state)

    y_train = np.reshape(y_train, (-1,))
    y_test = np.reshape(y_test, (-1,))

    return x_train, x_test, y_train, y_test


def standardize(x, type):
    scaler = StandardScaler().fit(x)
    x_scaled = scaler.transform(x)

    joblib.dump(scaler, f"../scalers/{type}_scaler.gz")

    return x_scaled


def save_model(model, name):

    with open(f"../models/{name}_model.pkl", "wb") as f:
        pickle.dump(model, f)


def upload_model(name):
    model_artifact = wandb.Artifact(name, type="model")
    model_artifact.add_file(f"../models/{name}_model.pkl")
    wandb.log_artifact(model_artifact)