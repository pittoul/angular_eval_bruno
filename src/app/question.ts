import { Reponse } from './reponse';

export interface Question {
    // id?: number
    enonce: string
    reponses: Reponse[]
}