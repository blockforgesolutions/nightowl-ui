import api from "../lib/api"
import { Category } from "../types/category";

export const getCategoriesByClub = async (clubId: string): Promise<Category[]> => {
    const response = await api.get(`/category/club/${clubId}`);

    return response.data;
}

export const newCategory = async (title: string, color: string, club: string): Promise<Category> => {
    const response = await api.post('/category', { title, color, club });

    return response.data;
}

export const getCategoryById = async (id: string): Promise<Category> => {
    const response = await api.get(`/category/${id}`);

    return response.data;
}

export const deleteCategory = async (id: string): Promise<{ message: string }> => {
    const response = await api.delete(`/category/${id}`);

    return response.data;
}

export const updateCategory = async (id: string, title: string, color: string, club: string): Promise<Category> => {
    const response = await api.put(`/category/${id}`, { title, color, club });

    return response.data;
}