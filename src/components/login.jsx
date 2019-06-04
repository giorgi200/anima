import React, { Component } from 'react';
import { Link } from "react-router-dom";

class login extends Component {
    state = {
        notValid: false,
    }
    componentDidMount(){
        document.title = "Anima Chatbotics"
    }
    render() {
        return (
            <div id="login">
                <form className="auth">
                    <h1 className="auth-text">ავტორიზაცია</h1>
                    <div className="auth-form">
                        <div className="input-group">
                            <input type="mail" className="form-control" placeholder="ელ.ფოსტა"  />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">mail_outline</i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group ">
                            <input type="password" className="form-control" placeholder="პაროლი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    {   this.state.notValid ? <p  className="invalid-feedback custom-error">ფორმატი არ ემთხვევა</p> : ""}
                    <button className="auth-submit" type="button">შესვლა</button>
                    <Link to="/main" className="auth-forgot-password" >პაროლის აღდგენა</Link>
                    <Link to="/registration" className="auth-registration" >რეგისტრაცია</Link>
                </form>
            </div>
        );
    }
}

export default login;