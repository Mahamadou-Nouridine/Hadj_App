/* eslint-disable no-undef */
import { agence, pelerin} from './types'

import { Pagevideagence } from "./Pagevideagence"
import { Pelerinform } from "./Pelerinform"
import { Profilepelerinagence } from "./Profilepelerinagence"



// export declare interface pelerin {
//     nom: string;
//     prenom: string;
//     tel: string;
//     photo: string;
//     lieuNaissance: string;
//     lieuPovenance: string;
//     dateNaissance: string;
//     passport: string;
//     dateEnregistrement: string;
//     accepted: boolean;
//     agence: string;
//     id: string;
//     rejected: boolean
// }

// export declare interface agence {
//     nom: string;
//     Description: string;
//     image: string|ArrayBuffer;
//     id: string;
//     number:string| number,
//     pass: string|number
//     pelerins: pelerin[];
    
// }


// let agences = localStorage.getItem('agences')
// agences = JSON.parse(agences) 
// let peleri = agences[0].pelerins[0]

export const Infovariableagence = (props:{affichage: 'Pelerinformadd'|'Profilepelerinagence'|'Pelerinformedit'|null, pelerin:pelerin, handleUpdate:(id:string,prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuProvenance:string, dateNaissance:string, passport:string|number)=>void, handleDelete:(id: string)=>void, handleAdd:(prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuPovenance:string, dateNaissance:string, passport:string|number)=>void, handleCancel:()=>void, handleEditClick:()=>void, agence:agence}):JSX.Element => {
    return <>
        {
            props.affichage === 'Pelerinformadd'
            ? <Pelerinform agence={props.agence} handleCancel = {props.handleCancel} handleEditClick={props.handleEditClick} pelerin={props.pelerin} handleAdd={props.handleAdd}   handleUpdate={props.handleUpdate} edit={false} />
            : props.affichage === 'Profilepelerinagence'
            ? <Profilepelerinagence handleDelete={props.handleDelete} handleEditClick={props.handleEditClick} pelerin={props.pelerin} />
            : props.affichage === 'Pelerinformedit'
            ? <Pelerinform agence={props.agence} handleCancel = {props.handleCancel} handleEditClick={props.handleEditClick} pelerin={props.pelerin} handleAdd={props.handleAdd}   handleUpdate={props.handleUpdate} edit={true} />
            : <Pagevideagence/>
        }
    </>
}