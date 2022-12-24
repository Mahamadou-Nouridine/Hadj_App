export declare interface pelerin {
    nom: string;
    prenom: string;
    tel: string | number;
    photo: string | ArrayBuffer;
    lieuNaissance: string;
    lieuPovenance: string;
    dateNaissance: string;
    passport: string | number;
    dateEnregistrement: string;
    accepted: boolean;
    agence: string;
    id: string;
    rejected: boolean
}

export declare interface agence {
    nom: string;
    Description: string;
    image: string | ArrayBuffer;
    id: string;
    number: string | number,
    pass: string | number
    pelerins: pelerin[];

}


