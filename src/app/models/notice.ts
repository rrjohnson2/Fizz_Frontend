export class Notice {
    username:string;
    action:Notice_Actions
    data:any

    constructor(data)
    {
        this.action = data.action;
        this.data = data.data;
        this.username = data.username;
    }

}

export enum Notice_Actions{
    FOCUS = "FOCUS",
    RETORT = "RETORT",
    COMMENT = "COMMENT"
}
