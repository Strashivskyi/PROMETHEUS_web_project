import firebase_admin
from firebase_admin import credentials, firestore, storage
# from firebase.firebase_secret import config


def firestore_get_protocol_data(email: str, child_id: str):
    # initialize_firestore

    if not firebase_admin._apps:
        cred = credentials.Certificate('firebaseAccountKey.json')
        firebase_admin.initialize_app(cred)

    db = firestore.client()

    therapist_name_link_bd = db.collection("User").document(email).get()
    patient_name_link_bd = db.collection("User").document(email).collection("Patient") \
        .document(child_id).get()

    protocol_list = db.collection("User").document(email).collection("Patient") \
        .document(child_id).collection("Protocols").get()

    data_list = []

    for protocol in protocol_list:
        protocol_link_db = db.collection("User").document(email).collection("Patient") \
            .document(child_id).collection("Protocols").document(protocol.id).get()

        stimulus_link_bd = db.collection("User").document(email).collection("Patient") \
            .document(child_id).collection("Protocols").document(protocol.id).collection("Stimulus").get()

        protocol_data = protocol_link_db.to_dict()
        protocol_data['TherapistNameSurname'] = str(therapist_name_link_bd.to_dict().get("Name") + " " +
                                                    therapist_name_link_bd.to_dict().get("Surname"))
        protocol_data['PatientName'] = patient_name_link_bd.get("Name")

        stimulus_data = []
        for _ in stimulus_link_bd:
            stimulus_data.append(_.to_dict().get("Name"))
        protocol_data['StimulusList'] = stimulus_data
        data_list.append(protocol_data)

    return data_list


def export_protocol_to_storage():
    pass



if __name__ == '__main__':
    pass
    # firestore_get_protocol_data("m0nitor2048@gmail.com", "dFpC2e42XjBFZk6bHa82")
    # print(config)