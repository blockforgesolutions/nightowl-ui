import { WorkType } from "./types/company"
import { Roles } from "./types/user"

export const todaysTotalSales = 10000.00
export const todaysTotalTables = 52
export const todaysOpenedSales = 1250.00
export const todaysTotalExpedntirue = 1250.00


export const areas = [
    {
        _id: 1,
        name: "Salon",
        tables: [
            {
                _id: "s1",
                name: "Masa 1",
            },
            {
                _id: "s2",
                name: "Masa 2"
            },
            {
                _id: "s3",
                name: "Masa 3"
            },
            {
                _id: "s4",
                name: "Masa 4"
            },
            {
                _id: "s5",
                name: "Masa 5"
            },
            {
                _id: "s6",
                name: "Masa 6"
            },
        ]
    },
    {
        _id: 2,
        name: "Bahçe",
        tables: [
            {
                _id: "b1",
                name: "Masa 1",
            },
            {
                _id: "b2",
                name: "Masa 2"
            },
            {
                _id: "b3",
                name: "Masa 3"
            },
            {
                _id: "b4",
                name: "Masa 4"
            },
            {
                _id: "b5",
                name: "Masa 5"
            },
            {
                _id: "b6",
                name: "Masa 6"
            },
        ]
    },
    {
        _id: 3,
        name: "Üst Kat",
        tables: [
            {
                _id: "uk1",
                name: "Masa 1",
            },
            {
                _id: "uk2",
                name: "Masa 2"
            },
            {
                _id: "uk3",
                name: "Masa 3"
            },
            {
                _id: "uk4",
                name: "Masa 4"
            },
        ]
    },
]

export const categories = [
    {
        id: 1,
        title: "Çaylar",
        color: 'green'
    },
    {
        id: 2,
        title: "Sıcak İçecekler",
        color: 'red'
    },
    {
        id: 3,
        title: "Kahveler",
        color: 'brown'
    },
    {
        id: 4,
        title: "Soğuk İçecekler",
        color: 'aqua'
    },
    {
        id: 5,
        title: "Tatlılar",
        color: 'pink'
    },
    {
        id: 6,
        title: "Aperatifler",
        color: 'orange'
    },
    {
        id: 7,
        title: "Ana Yemekler",
        color: 'yellow'
    },
    {
        id: 8,
        title: "Atıştırmalıklar",
        color: 'purple'
    },
    {
        id: 9,
        title: "Dondurmalar",
        color: 'lightblue'
    },
    {
        id: 10,
        title: "İçecekler",
        color: 'teal'
    },
    {
        id: 11,
        title: "Alkolsüz İçecekler",
        color: 'lightgreen'
    },
    {
        id: 12,
        title: "Alkol İçkiler",
        color: 'darkred'
    },
    {
        id: 13,
        title: "Meyveler",
        color: 'orange'
    },
    {
        id: 14,
        title: "Sebzeler",
        color: 'green'
    },
    {
        id: 15,
        title: "Ekmek ve Ürünleri",
        color: 'wheat'
    },
    {
        id: 16,
        title: "Pizza ve Makarna",
        color: 'tomato'
    },
    {
        id: 17,
        title: "Süt Ürünleri",
        color: 'lightyellow'
    },
    {
        id: 18,
        title: "Beyaz Et",
        color: 'lightpink'
    },
    {
        id: 19,
        title: "Kırmızı Et",
        color: 'darkred'
    },
    {
        id: 20,
        title: "Deniz Ürünleri",
        color: 'skyblue'
    }
];


export const products = [
    {
        id: 1,
        categoryId: 1,
        name: "Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 2,
        categoryId: 1,
        name: "Orelet",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 3,
        categoryId: 1,
        name: "Fincan Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: -1,
        categoryId: 1,
        name: "Fincan Çay",
        price: 20.00,
        unit: "Adet"
    },
    {
        id: 4,
        categoryId: 2,
        name: "Sıcak Çikolata",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 5,
        categoryId: 2,
        name: "Salep",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 6,
        categoryId: 3,
        name: "Türk Kahvesi",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 7,
        categoryId: 3,
        name: "Filtre Kahve",
        price: 100.00,
        unit: "Adet"
    },
    {
        id: 8,
        categoryId: 3,
        name: "Dibek Kahvesi",
        price: 100.00,
        unit: "Adet"
    },
]

export const orders = [
    {
        id: 1,
        areaId: 1,
        tableId: "s1",
        items: [
            {
                productId: 1,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 3
            },
        ],
        status: "preparing",
    },
    {
        id: 2,
        areaId: 2,
        tableId: "b4",
        items: [
            {
                productId: 4,
                quantity: 2
            },
            {
                productId: 2,
                quantity: 3
            },
        ],
        status: "preparing",
    },

]

export const users = [
    {
        id: 1,
        no: 1,
        fullName: "Ferhat Yesari",
        email: "test@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.MANAGER,
    },
    {
        id: 2,
        no: 2,
        fullName: "Micheal Scofield",
        email: "msco@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.CHECKOUT,
    },
    {
        id: 3,
        no: 3,
        fullName: "Andrew Garfield",
        email: "agar@gmail.com",
        phoneNumber: "5552221122",
        role: Roles.WAITER,
    },
]

export const companyInfo = {
    title: "Fibonacci",
    dayStart: "10:00",
    dayEnd: "23:59",
    notificationSound: ["Ses 1", "Ses 2"],
    workType: WorkType.TABLE_ORDER,
    socketAdress: "0",
    screenLockTime: 0,
    changeTableTime: 0,
    country: "Turkey",
    city: 'Elazığ',
    district: 'Merkez',
    neighborhood: "A Mahallesi",
    street: 'B sokak',
    no: 23,
    address: " Fibonacci cafe ",
    zipCode: "23100"
}

export const paymentTypes = [
    "Nakit", "Kredi Kartı", "Diğer"
]

export const mockDailyData = {
    dailySales: [
        { hour: "00:00", amount: 0 },
        { hour: "01:00", amount: 0 },
        { hour: "02:00", amount: 0 },
        { hour: "03:00", amount: 0 },
        { hour: "04:00", amount: 0 },
        { hour: "05:00", amount: 0 },
        { hour: "06:00", amount: 0 },
        { hour: "07:00", amount: 50 },
        { hour: "08:00", amount: 100 },
        { hour: "09:00", amount: 150 },
        { hour: "10:00", amount: 75 },
        { hour: "11:00", amount: 125 },
        { hour: "12:00", amount: 200 },
        { hour: "13:00", amount: 300 },
        { hour: "14:00", amount: 250 },
        { hour: "15:00", amount: 325 },
        { hour: "16:00", amount: 200 },
        { hour: "17:00", amount: 150 },
        { hour: "18:00", amount: 100 },
        { hour: "19:00", amount: 50 },
        { hour: "20:00", amount: 0 },
        { hour: "21:00", amount: 0 },
        { hour: "22:00", amount: 0 },
        { hour: "23:00", amount: 0 },
    ],
    paymentMethods: [
        { type: "Nakit", amount: 200 },
        { type: "Kredi Kartı", amount: 125 },
    ],
    tableOccupancy: {
        occupied: 87, // Yüzde
        empty: 13, // Yüzde
    },
    stats: {
        totalSales: 325.0,
        totalOrders: 258.0,
        totalOpenedTables: 6,
        totalExpenses: 0.0,
    },
};

export const packetDetail = {
    packetName: 'Lite Paket',
    maxUser: 3,
    membershipStartDate: '17.12.2024',
    membershipEndDate: '17.01.2025',
    paymentDetail: {
        bank: "Ziraat",
        cartNumber: '5314107627789095',
        issuer: "mastercard",
        expiryDate: "03/27",
        cvv: "319"
    },
    invoiceDetails: {
        fullName: 'Ferhat Yesari',
        address: 'Arif Nihat Asya Sok. Bahcesehir Sitesi C Blok No 26/2',
        identityNumber: '12354511854',
        phoneNumber: '5365411154',
        email: 'test@gmail.com',
        city: 'Elazığ'
    },
    payments: [
        {
            status: 'Onaylandı',
            amount: 660.00,
            paymentDate: '17.12.20024',
            paymentType: 'Kredi Kartı'
        },
        {
            status: 'Onaylanmadı',
            amount: 660.00,
            paymentDate: '17.12.20024',
            paymentType: 'Kredi Kartı'
        },
    ]
}

