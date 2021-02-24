import time
import datetime
from pprint import pprint

from firebase.storage_controller import firebase
from firebase.firebase_secret import config
from pyrebase import pyrebase

from firebase import storage_controller
from flask import Flask, request, jsonify, abort, send_file, send_from_directory
from generate_exel.generate_exel import create_xlsx
from generate_exel.firebase_data import firestore_get_protocol_data
import logging
import os


app = Flask(__name__)
app.config["DEBUG"] = True
app.config["ClIENT_FILES"] = "C:\\Users\\svyat\\OneDrive\\Рабочий стол\\PROMETHEUS_web_project\\api"


@app.route("/get_files/<telegram_id>/<file_name>", methods=['GET'])
def get_file(telegram_id, file_name):
    storage_controller.download_file(telegram_id, file_name)
    # try:
    return send_from_directory(app.config["ClIENT_FILES"], filename=file_name, as_attachment=True)
    # finally:
    #     os.remove(file_name)


@app.route("/time")
def get_current_time():
    return {"time": time.time()}


@app.route("/get_files", methods=['GET'])
def get_file_names():
    pass


@app.route("/files/<userEmail>/<childName>", methods=["GET"])
def get_protocol_file(userEmail, childName):
    print(userEmail, childName)
    data = firestore_get_protocol_data(userEmail, childName)
    # pprint(data)
    storage = firebase.storage()
    date = datetime.DATE.today().strftime("%d-%m-%Y")
    patient_name = str(data[0].get("PatientName"))
    filename = f"{patient_name}_{date}.xlsx"
    path_local = filename

    create_xlsx(filename, data)
    path_on_cloud = f"docs/{patient_name}/{filename}"
    storage.child(path_on_cloud).put(path_local)
    return "file_api: OK"


if __name__ == '__main__':
    app.run(port=5000)
