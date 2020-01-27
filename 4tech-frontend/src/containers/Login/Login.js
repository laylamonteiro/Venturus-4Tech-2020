import React, { useState, useEffect } from 'react';

//Função
const Login = ({ name }) => {
    const [login, setLogin] = useState('')

    useEffect(() => {
        console.log('alterei o login')

    return (() => {
        console.log('This shit is done')
    })

    }, [login])

    const onLoginChange = (event) => {
        console.log(event.target.value)
        setLogin(event.target.value)
    }

    return (
    
        <div>
            <input type='text' value={login} onChange={onLoginChange}/>
            Login works {name}
        </div>
    );
};

export default Login;

