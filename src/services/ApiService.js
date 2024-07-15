import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// �r�nleri al
export const getProducts = async () => {
    const response = await apiClient.get('/product');
    return response.data;
};

// �r�n olu�tur
export const createProduct = async (product) => {
    const response = await apiClient.post('/product', product);
    return response.data;
};

// �r�n g�ncelle
export const updateProduct = async (id, product) => {
    const response = await apiClient.put(`/product/${id}`, product);
    return response.data;
};

// �r�n sil
export const deleteProduct = async (id) => {
    await apiClient.delete(`/product/${id}`);
};

// �r�n arama
export const searchProducts = async (keyword) => {
    const response = await apiClient.get(`/product/search?keyword=${keyword}`);
    return response.data;
};

// �r�n grubu olu�tur
export const createProductGroup = async (group) => {
    const response = await apiClient.post('/productgroup', group); // Do�ru endpointi kulland���ndan emin ol
    return response.data;
};
