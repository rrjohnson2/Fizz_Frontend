export class Preference {
    private category:String;
    private weight: number;

    /**
     * Preference
     */
    constructor(
        category:String,
        weight:number
    ){
        this.category=category;
        this.weight=weight;
    }
}
