import { Genre } from "./genre";

export type Movie = {
        id: number;
        title: string;
        subTitle: string;
        synopsis: string;
        imgUrl: string
        year: number;
        genre: Genre[];            
}