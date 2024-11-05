import { Organisation } from "./organisation";
import { StatutMessage } from "./statutMessage";
import { User } from "./user";

export interface Message {
    idMessage:      number;
    imageMessage:   string;
    contenuMessage: string;
    user:           User;
    organisation:   Organisation;
    statutMessage:  StatutMessage;
    dateMessage:    string;
}

