import { Evenement } from "./evenement";

export interface DetailsEvenement {
    idDetailsEvenement: number;
    lieuEvenement:      string;
    dateDebutEvenement: string;
    dateFinEvenement:   string;
    participation:      boolean;
    nbrCandidat:        number;
    organisateur:       string;
    evenement:          Evenement;
    formateur:          string;
}

