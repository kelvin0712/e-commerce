import React, { useState} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInGoogleStart, signInEmailStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

const SignIn = ({signInEmailStart, signInGoogleStart}) => {
    const [userCredentials, setUserCredentials] = useState({email: '', password: ''});

    const {email, password} = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        signInEmailStart(email, password);
    }

    const handleOnchange = (event) => {
        const {name, value} = event.target;
        setUserCredentials({ ...userCredentials, [name]: value});
    }

    return (
        <div className="sign-in">
            <h2 className="title">I have already had an account</h2>
            <span className="title">Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput name="email" value={email} required type="email" onChange={handleOnchange} label="email"/>
                
                <FormInput name="password" value={password} required type="password" onChange={handleOnchange} label="password" />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={signInGoogleStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>         
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signInGoogleStart: () => dispatch(signInGoogleStart()),
    signInEmailStart: (email, password) => dispatch(signInEmailStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);