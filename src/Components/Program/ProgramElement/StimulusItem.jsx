import Delete from '../../../assets/delete.png'
import app from '../../../Firebase/firebase'
function StimulusItem({name, stimulId}) {
    return (
        <div className="stymuls">
            <li>
                <div className="stymul_grid_container">
                    <div>{name}</div>
                    <img
                        onClick={() => DeleteStimul(stimulId)}
                        src={Delete}
                        height="15"
                        className="delete_stymul"
                        style={{
                            cursor: 'pointer',
                            marginLeft: '60px',
                            marginRight: '30px',
                            marginTop: '5px',
                            color: '#EEEEEE',
                        }}
                    />
                </div>
            </li>
        </div>
    )
}
export default StimulusItem
function DeleteStimul(stimulId) {
    const db = app.firestore()
    db.collection("Users")
    .doc(localStorage.getItem('user'))
    .collection(localStorage.getItem('proffesion'))
        .doc(localStorage.getItem('child'))
        .collection('Protocols')
        .doc(localStorage.getItem('program'))
        .collection('Stimulus')
        .doc(stimulId)
        .delete()
}
