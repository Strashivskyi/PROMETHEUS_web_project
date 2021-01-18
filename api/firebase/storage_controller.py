from firebase import pyrebase
from firebase.firebase_secret import config


firebase = pyrebase.initialize_app(config)
storage = firebase.storage()


def download_file(telegram_id, file):
    path_on_cloud = f"patient_result/{telegram_id}/{file}"
    storage.child(path_on_cloud).download(f"{file}")
