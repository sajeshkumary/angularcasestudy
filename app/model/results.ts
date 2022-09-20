import { resultitem } from "./resultitem";

export class results{
    constructor(public total?:number,
        public totalHits?:number,
        public hits?:resultitem[]
        ){
            
        }
}

