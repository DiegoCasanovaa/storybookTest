import { JsxElement } from "typescript";

export interface cardBasic{
    text1: string,
    title: string,
    description: string,
    buttonName: string
}

export interface tableGridColumns{ 

        title: string,
        dataIndex?: string,
        key: string,
        render?:(props: string) => any
}

export interface tableGridData {
    
    key: string,
    name: string,
    age: number,
    address: string
}