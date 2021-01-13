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
   
<p className="personal_text">Особиста інформація</p>

<input type="file" size="1000" />
<div className="input-city">
<input type="text" id="fname" name="firstname" placeholder="Країна"/>
</div>
<div className="input-city">
<input type="text" id="fname" name="firstname" placeholder="Місто"/>
</div>
<input className="second_form_submit" type="submit" value="Далі"></input>

</form>

</div>
    );
}
export default SignUpForm2;