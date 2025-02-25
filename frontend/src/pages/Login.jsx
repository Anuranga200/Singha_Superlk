import React ,{useState } from 'react';
import {useDispatch, useSelector } from 'react-redux';
//import {userLogin} from '../redux/actions/userActions';
import './Login.css';

const Login = ()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const {user,error}=useSelector((state)=>state.auth);

    const handleLogin=()=>{
        dispatch(userLogin({email,password}));
    };

    return(
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            {user &&<p> Welcome {user.name} </p>}
            </div>
    );
}
export default Login;
    