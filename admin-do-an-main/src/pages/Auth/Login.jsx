import axios from 'axios'
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import './Login.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useHistory,
    useLocation,
    useRouteMatch
} from "react-router-dom";

function Login() {
    const [username, setUsername] = useState('annv')
    const [password, setPassword] = useState('annv')
    const [isLogin, setIsLogin] = useState(sessionStorage.getItem('accessToken')!=null)
    let { path, url } = useRouteMatch();
    const history = useHistory()
    let setParams = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value)
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value)
        }
    }

    const LoginSubmit = (e) => {
        history.push('/MainLayout')
        // e.preventDefault()
        // var myHeaders = new Headers()
        // myHeaders.append('Contenr-Type', 'application/x-www-form-urlencoded');

        // var urlencoded = new URLSearchParams
        // urlencoded.append("username", username);
        // urlencoded.append("password", password);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: urlencoded,
        //     redirect: 'follow'
        // };

        // fetch("http://localhost:8000/v1/auth/login", requestOptions)
        //     .then(res => {
        //         console.log((res));
        //         if (res.ok) {
        //             return res.json()
        //         }
        //         throw new Error(res.status)
        //     })
        //     .then(result => {
        //         console.log((result));
        //         sessionStorage.setItem('accessToken', result.accessToken)
        //         sessionStorage.setItem('user_name', result.username)
        //         setIsLogin(true)
        //         history.push('/MainLayout')
        //     })
        //     .catch(err => {
        //         console.log(err);
        //         alert('T??i kho???n ho???c m???t kh???u sai')
        //     })
    }

    // let onLogout =()=>{
    //     setIsLogin(false)
    // }

    // const URL = 'http:localhost:8080/api/auth/signin'
    // function LoginSubmit(e) {
    //     e.preventDefault()
    //     axios.post(URL, {
    //         username: username,
    //         password: password
    //     }).then(res => {
    //         console.log(res)
    //         alert('????ng nh???p th??nh c??ng')
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //         alert('????ng nh???p th???t b???i')
    //     })
    // }
    return (
        <div className='login'>
        <div className="form-tt">
            <form className="form-signin" onSubmit={LoginSubmit}>
            <h2 className="form-signin-heading"> Please sign in </h2>
                {/* <label for="inputUsername" className="sr-only"> User Name
                </label>
                <input type="text" name="username" value={username} onChange={setParams} placeholder="Nh???p t??n ????ng k??" />
                <label for="inputUsername" className="sr-only"> User Name
                </label>
                <input type="password" name="password" value={password} onChange={setParams} placeholder="Nh???p m???t kh???u" /> */}
                <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={LoginSubmit}> Sign in
                </button>
            </form>
        </div>
        </div>
    )
}
export default Login

