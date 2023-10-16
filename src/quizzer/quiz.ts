import { Question } from "../interfaces/question";

export interface Quiz {
    id: number;
    title: string;
    body: string;
    published: boolean;
    questionList: Question[];
}
