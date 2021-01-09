import app from "../../Firebase/firebase";
function Home(){
    return(
        <>
        <h1>
            Home page
        </h1>
        <p onClick={() => app.auth().signOut()} >Logout button</p>
        </>
    )
}
export default Home