import React, { Component } from 'react';
import { Link } from "react-router-dom";

class forgot extends Component {
    state = {
        notValid: false,
        sended: false,
        Validation: () => {
            let notValid = !this.state.notValid;
            this.setState({ notValid })
        },
    }
    componentDidMount(){
        document.title = "პაროლის აღდგენა - Anima Chatbotics"
    }
    render() {
        return (
            <div id="login">
                <form className="auth">
                    <h1 className="auth-text">პაროლის<br />აღდგენა</h1>
                    <div className="auth-form">
                        {
                            this.state.sended ?  
                            <p className="sended-password">თქვენს მეილზე გამოიგზავნა პაროლის აღსადგენი ლინკი</p> 
                            : 
                            <div className="input-group">
                                <input type="mail" className="form-control" placeholder="ელ.ფოსტა"  />
                                <div className="input-group-append">
                                    <span className="input-group-text">
                                        <i className="material-icons">mail_outline</i>
                                    </span>
                                </div>
                            </div>
                        }
                    </div>
                    <button className="auth-submit" onClick={this.state.Validation} type="button">{ this.state.sended ? " თავიდან გაგზავნა " : "აღდგენა" }</button>
                    <Link to="/login" className="auth-forgot-password" >შესვლა</Link>
                    {/* <Link to="/registration" className="auth-registration" >რეგისტრაცია</Link> */}
                </form>
            </div>
        );
    }
}

export default forgot;