
export interface Table {
    _id: string
    name: string;
}

export interface Area {
    _id: number;
    name: string;
    tables: Table[];
}