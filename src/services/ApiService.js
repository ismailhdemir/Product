import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getProducts = async () => {
    const response = await apiClient.get('/product');
    return response.data;
};


export const createProduct = async (product) => {
    const response = await apiClient.post('/product', product);
    return response.data;
};


export const updateProduct = async (id, product) => {
    const response = await apiClient.put(`/product/${id}`, product);
    return response.data;
};


export const deleteProduct = async (id) => {
    await apiClient.delete(`/product/${id}`);
};


export const searchProducts = async (keyword) => {
    const response = await apiClient.get(`/product/search?keyword=${keyword}`);
    return response.data;
};


export const createProductGroup = async (group) => {
    const response = await apiClient.post('/productgroup', group); 
    return response.data;
};
