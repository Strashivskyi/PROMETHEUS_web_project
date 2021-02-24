from firebase import pyrebase
from firebase.firebase_secret import config

"ValueError: The default Firebase app already exists. This means you called initialize_app() more than once without " \
"providing an app name as the second argument. In most cases you only need to call initialize_app() once. But if you " \
"do want to initialize multiple apps, pass a second argument to initialize_app() to give each app a unique name. "

firebase = pyrebase.initialize_app(config)
storage = firebase.storage()

def download_file(telegram_id, file):
    path_on_cloud = f"patient_result/{telegram_id}/{file}"
    storage.child(path_on_cloud).download(f"{file}")