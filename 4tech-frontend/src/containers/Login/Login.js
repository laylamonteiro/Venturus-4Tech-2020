import React, { useState } from 'react'
import { Button, TextField } from '@material-ui/core'

//Função
const Login = ({ name }) => {
    const [login, setLogin] = useState('')
    const [fullName, setFullName] = useState('')
    const [userLogin, setUserLogin] = useState('')

    const onLoginChange = (event) => {
        console.log(event.target.value)
        setLogin(event.target.value)
    }

    return (
    
        <div className="login">
            <form>
                <TextField 
                    id="fullName"
                    label="Full Name"
                    value={fullName}
                    onChange={ (event) => setFullName(event.target.value)}
                    required
                />
                <TextField 
                    id="userLogin"
                    label="User Login"
                    value={fullName}
                    onChange={ (event) => setFullName(event.target.value)}
                    required
                />
                <Button color='primary'>Sign in</Button>
            </form>
            <input type='text' value={login} onChange={onLoginChange}/>
            Login works {name}
        </div>
    );
};

export default Login;

