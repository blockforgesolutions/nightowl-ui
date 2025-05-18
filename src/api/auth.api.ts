import axios from "axios";
import { AuthResponse } from "../types/auth";
import { ErrorResponse } from "../types/error";
import api from "./api";

interface LoginBody {
    emailOrPhoneNumber: string
    password: string;
}

export const login = async (loginBody: LoginBody): Promise<AuthResponse | ErrorResponse> => {
    try {
        const response = await api.post('/auth/login', loginBody);

        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {            
            return {
                success: false,
                error: error.response?.data?.error || 'API Error'
            };
        } else {
            return {
                success: false,
                error: 'An unexpected error occurred'
            };
        }
    }
}