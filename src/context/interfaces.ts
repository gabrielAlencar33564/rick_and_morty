import { ReactNode } from "react";

export interface IProvider {
    children: ReactNode;
}

export interface InfoProps {
    count: number;
    pages: number;
    next: string;
    prev: null | string;
}

export interface IResults {
    id: number | string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: {
        name: string;
    }
    image: string;
}

export interface DataProps {
    data: {
        info: InfoProps;
        results: IResults[];
    }
}

export interface IContext {
    personList: IResults[];
}