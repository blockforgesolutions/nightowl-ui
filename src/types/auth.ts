import { Employee } from "./employee"
import { User } from "./user"

export interface AuthResponse {
    access_token: string,
    refresh_token: string
    user:User
}

export interface EmployeeAuthResponse {
    access_token: string
    refresh_token: string
    user: Employee
}