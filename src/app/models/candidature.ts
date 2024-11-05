import { Evenement } from "./evenement";

export interface Candidature {
    idCandidature:      number;
    libelleCandidature: string;
    etatCandidature:    string;
    dateCandidature:    string;
    evenement:          Evenement;
}

