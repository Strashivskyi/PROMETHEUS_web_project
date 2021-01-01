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
         <div className="work_text">WORK</div>
         <Select className="third_form_select" options={options} id="bank_name" placeholder="Choose your profession..." required/>
         <input type="text" id="certificate" name="certificate" placeholder="Enter the id of your certificate"/>
         <input className="third_form_submit" type="submit" value="Check"/>
         <input type="text" id="organizationname" name="organizationname" placeholder="Enter the organization name..."/>
         <div className="therapist_check">
         <input type="checkbox" id="xd" />
         <label for="xd">I'm a private therapist</label>
         </div>
         <input className="third_form_submit" type="submit" value="Next"/>
         <div>
        
      </div>

</form>

</div>
    );
}
export default SignUpForm3;