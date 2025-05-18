export enum WorkType {
    TABLE_ORDER = "Masa Siparişi",
    PACKET_ORDER = "Paket Siparişi",
    COME_AND_TAKE_ORDER = "Gel Al Siparişi"
}


export interface Company {
    title:string,
    dayStart: string,
    dayEnd: string,
    notificationSound: string[],
    workType: WorkType,
    socketAdress: string,
    screenLockTime: number,
    changeTableTime: number,
    country: string,
    city: string,
    district: string,
    neighborhood: string,
    street: string,
    no: number,
    address: string,
    zipCode: string
}