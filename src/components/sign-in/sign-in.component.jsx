import React, {Component} from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.ultils';
import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefaut();

        this.setState({ email: "", password: ""})
    }

    handleOnchange = (event) => {
        // const {}
        const {name, value} = event.target;

        this.setState({ [name]: value})
    }
    render() {
        return (
            <div className="sign-in">
                <h2 className="title">I have already had an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} required type="email" onChange={this.handleOnchange} label="email"/>
                    
                    <FormInput name="password" value={this.state.password} required type="password" onChange={this.handleOnchange} label="password" />
                    <div className="buttons">
                      <CustomButton type="submit">Submit Form</CustomButton>
                        <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>         
                </form>
            </div>
        )
    }
}

export default SignIn;