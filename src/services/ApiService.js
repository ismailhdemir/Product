import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://localhost:5001/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Ürünleri al
export const getProducts = async () => {
    const response = await apiClient.get('/product');
    return response.data;
};

// Ürün oluþtur
export const createProduct = async (product) => {
    const response = await apiClient.post('/product', product);
    return response.data;
};

// Ürün güncelle
export const updateProduct = async (id, product) => {
    const response = await apiClient.put(`/product/${id}`, product);
    return response.data;
};

// Ürün sil
export const deleteProduct = async (id) => {
    await apiClient.delete(`/product/${id}`);
};

// Ürün arama
export const searchProducts = async (keyword) => {
    const response = await apiClient.get(`/product/search?keyword=${keyword}`);
    return response.data;
};

// Ürün grubu oluþtur
export const createProductGroup = async (group) => {
    const response = await apiClient.post('/productgroup', group); // Doðru endpointi kullandýðýndan emin ol
    return response.data;
};
