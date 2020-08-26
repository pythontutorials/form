import React from "react";
import "./style.css";

class UserForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:"",
            email:"",
            phone:"",
            password:"",
            gender:""
        }
    }

    change = (event) =>{
        const key = event.target.id;
        const value = event.target.value;
        this.setState({
            [key]:value
        })
    }
    clearForm = () =>{
        window.alert("name: "+this.state.name+"\n"+
                     "Email: "+this.state.email+"\n"+
                     "Phone: "+this.state.phone+"\n"+
                     "Gender: "+this.state.gender+"\n"+
                     "Password: "+this.state.password)
        this.setState({
            name:"",
            email:"",
            phone:"",
            password:"",
            gender:""
        })
    }
    submit = () =>{
        
        this.clearForm();
    }
    //@override
    render = () =>{
        return(
        <div className="container">
            <div className="form-container">
                <p>-------- User Form --------</p>
                <input 
                value = {this.state.name}
                onChange={this.change}
                id="name"
                type = "text" 
                placeholder="Enter Name" />

                <input 
                value = {this.state.email}
                onChange={this.change}
                id ="email"
                type = "email" 
                placeholder="Enter Email" />

                <input 
                value = {this.state.phone}
                onChange={this.change}
                id="phone"
                type = "text" 
                placeholder="Enter Phone Number" />

                <select value = {this.state.gender} id= "gender" onChange={this.change}>
                    <option value = "">Choose Gender</option>
                    <option value = "Male">Male</option>
                    <option value = "Female">Fmale</option>
                </select>

                <input 
                value = {this.state.password}
                onChange={this.change}
                id ="password"
                type = "password" 
                placeholder="Enter Password" />

                <button 
                onClick ={this.submit}
                className = "submit-btn"
                >
                    Submit
                </button>
                
            </div>
        </div>
            )
    }
}

export default UserForm;
