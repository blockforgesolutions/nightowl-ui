import api from "../lib/api";
import { Product } from "../types/product";

export const getProductsByCategory = async (categoryId: string): Promise<Product[]> => {
    const response = await api.get(`/product/category/${categoryId}`);

    return response.data;
}

export const newProduct = async (product: { name: string, category: string, price: number, unit: string, club: string }): Promise<Product> => {
    const response = await api.post('/product', product);

    return response.data;
}

export const updateProduct = async (id: string, product: { name: string, category: string, price: number, unit: string }): Promise<Product> => {
    const response = await api.put(`/product/${id}`, product);

    return response.data;
}

export const deleteProduct = async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/product/${id}`);

    return response.data;
}