import { Candidature } from "./candidature";
import { Role } from "./role";
import { Sanction } from "./sanction";
import { TypeOrganisation } from "./typeOrganisation";

export interface Organisation {
    idOrganisation:       number;
    numeroIdentification: string;
    password:           string;
    raisonSocial:         string;
    logo:                 string;
    description:          string;
    emailOrganisation:    string;
    contact:              string;
    adresse:              string;
    siege:                string;
    domaineActivite:      string;
    dateCreation:         string;
    nbrSanction:          number;
    sanction:             Sanction;
    typeOrganisation:     TypeOrganisation;
    candidature:          Candidature;
    role:                   Role;
}

