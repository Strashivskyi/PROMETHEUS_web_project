import firebase from "firebase";
import "firebase/database";

const app=firebase.initializeApp({
 
        apiKey: "AIzaSyAyDL7DShOrN7ef-8E5DyZUzFNwgeJNeiM",
        authDomain: "ionkid-abd2f.firebaseio.com",
        databaseURL: "https://ionkid-abd2f.firebaseio.com/"
      
});


export default app;