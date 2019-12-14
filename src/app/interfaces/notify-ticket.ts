import { Actions } from "../constants/app.constants";

export interface NotifyTicket {
    msg:string,
    type:string,
    action_attempted:Actions
}
