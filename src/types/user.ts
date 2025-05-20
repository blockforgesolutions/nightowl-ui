
export enum Roles {
    WAITER = "Waiter",
    CHECKOUT = "Casher",
    MANAGER = "Manager",
    OWNER = "Owner",
}

export interface User {
    id: number,
    no: number,
    fullName: string,
    email: string,
    phoneNumber: string,
    role: Roles,
    lastEntry?: Date
    lastExit?: Date
}