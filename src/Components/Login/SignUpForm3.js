import React from "react";
import "./SignUpForm1.css";
import LoginNavigation from "./Navigation/LoginNavigation";
import "fontsource-dm-sans"

import "./SignUpForm3.css";
import Select from "react-select";

const options = [
  { value: 'therapist', label: 'терапевт' },
  { value: 'ordinary doctor', label: 'звичайний лікар' },
  { value: 'psychologist', label: 'психолог' },
  { value: 'child psychologist', label: 'дитячий психолог' }

]


function SignUpForm3() {
  return (
    <div>
      <LoginNavigation />
      <form className="third_form">
        <div className="work_text">Робота</div>
        <div className="choose_profession">Оберіть вашу професію:</div>
        <Select
          className="third_form_select"
          defaultValue={options[2]}
          label="Single select"
          options={options}
          theme={theme => ({
            ...theme,
            borderRadius: 0,
            colors: {
              ...theme.colors,
              primary25: 'whitesmoke',
              primary: '#48535F',
            },
          })}
        />
        <div className="input-work-second">
          <input type="text" id="organizationname" name="organizationname" placeholder="Назва організації" />
        </div>
        <div>

        </div>

      </form>

    </div>
  );
}
export default SignUpForm3;