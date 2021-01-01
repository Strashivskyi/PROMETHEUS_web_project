import React from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"

import "./SignUpForm2.css";
function SignUpForm2() {
    return(
        <div>
         <LoginNavigation/>
         <form className="form-second-personal-data">
   
<p className="personal_text">PERSONAL</p>
<input type="file" size="1000" />
<input type="text" id="fname" name="firstname" placeholder="Enter your country"/>
<input type="text" id="fname" name="firstname" placeholder="Enter your city"/>
<input className="second_form_submit" type="submit" value="Next"></input>

</form>

</div>
    );
}
export default SignUpForm2;