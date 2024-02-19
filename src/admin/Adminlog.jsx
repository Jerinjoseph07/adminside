import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './adminlog.css'


const Adminlog = () => {
var [inputs,setInputs]=useState({"username":'',"password":''})
const inputHandler = (event)=>{
const {name,value}=event.target
setInputs((inputs)=>({...inputs,[name]:value}))
console.log(inputs)
}
const navigate=useNavigate()
const checkData = async (event) => {
event.preventDefault();
try {
const response = await axios.post("http://localhost:3005/Loginsearch",{
username: inputs.username,
password: inputs.password,
})
if (response.data.success) {
alert('Login successful');
navigate('/home');
} 
else {
alert('Invalid email and Password. Please try again.');
console.log(response.data);
}
} catch (err) {
alert('Error occurred during login. Please try again.');
}
};
return (
    <div className='back'>
     <div className='border' >
        
        
        <form>
        <h2 >ADMIN-LOGIN</h2>
            <TextField
                required
                id="outlined-required"
                label="Username"
                name="username"
                value={inputs.username}
                onChange={inputHandler}
               
            />
            <TextField
                required
                name="password"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={inputs.password}
                onChange={inputHandler}
                
            />
            <br /><br />
            <Button variant="contained" onClick={checkData}>Login</Button>
        </form>
    </div>
</div>
)
}
export default Adminlog