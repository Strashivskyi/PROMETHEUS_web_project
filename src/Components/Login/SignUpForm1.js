import React from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"

function SignUpForm1() {
    return(
        <div>
       <LoginNavigation/>
         <form className="form-itself">
  
    <p className="personal_text">Особиста інформація</p>
    <div className="input-text-name">
    <input type="text" id="fname" name="firstname" placeholder="Ім'я"/>
    </div>
    <div className="input-text-passw">
    <input type="text" id="lname" name="lastname" placeholder="Прізвище"/>
    </div>
    <input type="button" value="Дата народження"/>
    <p className="gender">Стать</p>
    <div class="container">
      <div class="group">
        <input className="gender_checks" type="checkbox" id="xd" />
        <label for="xd">Чоловіча</label>
      </div>

      <div class="group">
      
      <input type="checkbox" id="figma" />
      <label for="figma">Жіноча</label>
      </div>

      <div class="group">
          
        <input type="checkbox" id="sketch" />
        <label for="sketch">Інше</label>
       
      </div> 
       <input className="first_form_submit" type="submit" value="Далі"></input>
    </div>
   

</form>

</div>
    );
}
export default SignUpForm1;