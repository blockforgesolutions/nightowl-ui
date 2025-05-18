
export interface Items {
    productId: number,
    quantity: number
}

export interface Order {
    id: number,
    areaId: number,
    tableId: string,
    items: Items[],
    status: string
}