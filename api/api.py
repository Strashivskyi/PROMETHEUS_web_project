from flask import Flask, request, jsonify, abort, send_file, send_from_directory
from firebase import storage_controller
import logging
import os

app = Flask(__name__)
app.config["DEBUG"] = True
app.config["ClIENT_FILES"] = "C:\\Users\\svyat\\OneDrive\\Рабочий стол\\PROMETHEUS_web_project\\api"

#"/get_files/<telegram_id>/<child_name>/<file_name>"
@app.route("/get_files/<telegram_id>/<child_name>/<file_name>", methods=['GET'])
def get_file(telegram_id,child_name, file_name):
    storage_controller.download_file(telegram_id,child_name, file_name)
    # try:
    return send_from_directory(app.config["ClIENT_FILES"], filename=file_name, as_attachment=True)
    # finally:
    #     os.remove(file_name)


@app.route("/get_files", methods=['GET'])
def get_file_names():
    pass


if __name__ == '__main__':
    app.run()
