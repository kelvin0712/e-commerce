import React, {Component} from 'react';
import {connect} from 'react-redux';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInGoogleStart, signInEmailStart} from '../../redux/user/user.actions';

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {signInEmailStart} = this.props;
        const {email, password} = this.state; 

        signInEmailStart(email, password);
  
    }

    handleOnchange = (event) => {
        // const {}
        const {name, value} = event.target;

        this.setState({ [name]: value})
    }
    render() {
        const {signInGoogleStart} = this.props;
        return (
            <div className="sign-in">
                <h2 className="title">I have already had an account</h2>
                <span className="title">Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" value={this.state.email} required type="email" onChange={this.handleOnchange} label="email"/>
                    
                    <FormInput name="password" value={this.state.password} required type="password" onChange={this.handleOnchange} label="password" />
                    <div className="buttons">
                      <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInGoogleStart} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>         
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signInGoogleStart: () => dispatch(signInGoogleStart()),
    signInEmailStart: (email, password) => dispatch(signInEmailStart({email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);