import api from "../lib/api";

export async function currentUser() {
    const response = await api.get('/employee/current');
    
    return response.data;
}