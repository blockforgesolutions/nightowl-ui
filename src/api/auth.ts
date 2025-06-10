import axios from "axios";
import { AuthResponse, EmployeeAuthResponse } from "../types/auth";
import { ErrorResponse } from "../types/error";
import api from "../lib/api";
interface LoginBody {
    email: string
    password: string;
}

export const login = async (loginBody: LoginBody): Promise<AuthResponse | ErrorResponse> => {
    try {
        const response = await api.post('/auth/login', loginBody);
        console.log(response);

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

export const employeeLogin = async(loginBody: LoginBody): Promise<EmployeeAuthResponse | ErrorResponse> => {
    const response = await api.post('/auth/employeeLogin', loginBody);
    return response.data;
}