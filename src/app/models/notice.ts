export class Notice {
    username:string;
    action:Actions
    data:any

    constructor(data)
    {
        this.action = data.action;
        this.data = data.data;
        this.username = data.username;
    }

}

enum Actions{
    FOCUS
}
