import React from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"

function SignUpForm1() {
    return(
        <div>
       <LoginNavigation/>
         <form className="form-itself">
  
    <p className="personal_text">PERSONAL</p>
    <input type="text" id="fname" name="firstname" placeholder="First name"/>
    <input type="text" id="lname" name="lastname" placeholder="Last name"/>
    <input type="button" value="Date of birth"/>
    <p className="gender">Gender</p>
    <div class="container checks">
      <div class="group">
        <input type="checkbox" id="xd" />
        <label for="xd">Male</label>
      </div>

      <div class="group">
      
      <input type="checkbox" id="figma" />
      <label for="figma">Female</label>
      </div>

      <div class="group">
          
        <input type="checkbox" id="sketch" />
        <label for="sketch">Non-Binary</label>
      </div>
    </div>
    <input className="first_form_submit" type="submit" value="Next"></input>

</form>

</div>
    );
}
export default SignUpForm1;