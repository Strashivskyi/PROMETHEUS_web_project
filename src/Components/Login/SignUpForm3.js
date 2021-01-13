import React from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"

import "./SignUpForm3.css";
import Select  from "react-select";

const options = [
  { value: 'therapist', label: 'therapist' },
  { value: 'ordinary doctor', label: 'ordinary' },
  { value: 'psychologist', label: 'psychologist' }
]


function SignUpForm3() {
    return(
        <div>
         <LoginNavigation/>
         <form className="third_form">
         <div className="work_text">Робота</div>
         <Select className="third_form_select" options={options} id="bank_name" placeholder="Спеціальність" required/>
         <div className="input-work-second">
         <input type="text" id="organizationname" name="organizationname" placeholder="Назва організації"/>
         </div>
         <input className="third_form_submit" type="submit" value="Далі"/>
         <div>
        
      </div>

</form>

</div>
    );
}
export default SignUpForm3;