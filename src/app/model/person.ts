import { House } from "./house";

export interface Person {
    name: string;
    slug: string;
    house: House;
    quotes: any[];
}