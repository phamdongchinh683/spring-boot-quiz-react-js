import React from 'react';
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

import "./signup.scss";
import Input from "../../../components/forms/Input";

const SignUp = (props) => {
  return (
    <div className='signup-center'>
      <div className="container-signup">
        <form>
          <div className="title">Sign Up</div>
          <div className="input-box underline">
            <Input type={'text'} placeholder={'Enter Your Username'} className={"input-box-placeholder"} required />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <Input type={'password'} placeholder={'Enter Your Password'} className={"input-box-placeholder"} required />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <Input type={'email'} placeholder={'Enter Your Email'} className={"input-box-placeholder"} required />
            <div className="underline"></div>
          </div>
          <div className="input-box">
            <PhoneInput
              international
              countryCallingCodeEditable={false}
              defaultCountry="VN"
              placeholder="Enter telephone Number"
              className='input-box'
              required
            />
            <div className="underline"></div>
          </div>
          <div className="input-box button">
            <Input type={'submit'} className={'button-signup'} value={'Sign Up'} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;