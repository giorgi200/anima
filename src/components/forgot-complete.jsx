import React, { Component } from 'react';
import { Link } from "react-router-dom";

class login extends Component {
    state = {
        notValid: false,
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
                        <div className="input-group">
                            <input type="password" className="form-control" placeholder="ახალი პაროლი"  />
                            <div className="input-group-append">
                                <span className="input-group-text">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                        <div className="input-group ">
                            <input type="password" className="form-control" placeholder="გაიმეორეთ პაროლი"  />
                            <div className="input-group-append">
                                <span className="input-group-text" id="basic-addon2">
                                    <i className="material-icons">lock_outline</i>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <button className="auth-submit reco" onClick={this.state.Validation} type="button">დასრულება</button>
                </form>
            </div>
        );
    }
}

export default login;