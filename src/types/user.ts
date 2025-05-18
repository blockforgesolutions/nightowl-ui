
export enum Roles {
    WAITER = "Garson",
    KITCHEN = "Mutfak",
    CHECKOUT = "Kasa",
    MANAGER = "Yönetici",
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