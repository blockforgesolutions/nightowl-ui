import api from "../lib/api";

export async function currentUser() {
    const response = await api.get('/user/current');

    return response.data;
}