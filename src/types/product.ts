import { Category } from "./category";
import { Club } from "./club";

export interface Product {
    id: string,
    category: Category,
    name: string,
    price: number,
    unit: string
    club: Club
    createdAt: string
    updatedAt: string
}