import axios from 'axios';
import API_BASE_URL from '../config';

const   api = axios.create({
    baseURL: API_BASE_URL,
});

export const registerUser =async (userData)=>{
    const response = await api.post('/api/users/register',userData);
    return response.data;
}

export const loginUser = async (userData)=>{
    const response = await api.post('/api/users/login', userData);
    return response.data;
}

export const getProducts = async ()=>{
    const response = await api.get('/api/products');
    return response.data;
}

export const getUserProfile = async (token)=>{
    const response = await api.get('/api/users/profile',{
        headers:{
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

