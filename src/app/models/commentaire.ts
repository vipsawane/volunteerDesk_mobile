import { Publication } from "./publication";
import { Ressource } from "./ressource";

export interface Commentaire {
    idCommentaire:      number;
    contenuCommentaire: string;
    dateCommentaire:    string;
    publication:        Publication;
    ressource:          Ressource;
}

