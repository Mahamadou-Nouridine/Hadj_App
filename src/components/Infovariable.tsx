


import { Agenceform } from "./Agenceform"
import { Listpelerins } from "./Listpelerins"
import { Pagevide } from "./Pagevide"
import { Pelerinform } from "./Pelerinform"
import { Profileagence } from "./Profileagenge"
import { Profilepelerin } from "./Profilepelerin"
import { agence, pelerin } from "./types"

// eslint-disable-next-line no-undef
export const Infovariable = (props : {affichage : "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform' | 'Profileagence' |undefined|null, pelerin: pelerin | undefined, pelerins: pelerin[] | undefined, pilgrimSelect: any, handleValidate: (id: string) => void,  handleReject: (id: string) => void, setAffichage: (affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform'|'Profileagence'|undefined|null ) => void, addAgence: (nom: string, number: string, Description: string, image: string|ArrayBuffer, pass:number|string) => void, selectedAgence: agence|undefined, displayingAgence:agence|undefined, handleAgenceDelete: (id:string)=>void}): JSX.Element => {




// const accptedPilgrim = (arr: pelerin[]| undefined) =>{
//     let accepte : number = 0;
//     if(arr){
//         for(let i = 0; i< arr.length; i++){
//             if(arr[i].accepted && !arr[i].rejected){
//                 accepte ++
//             }
//         }
//         return accepte
//     }
// }
// const rejectedPilgrim = (arr: pelerin[]| undefined) =>{
//     let reject : number = 0;
//     if(arr){
//         for(let i = 0; i< arr.length; i++){
//             if(!arr[i].accepted && arr[i].rejected){
//                 reject ++
//             }
//         }
//         return reject
//     }
// }
// const waitingPilgrim = (arr: pelerin[]| undefined) =>{
//     let waiting : number = 0;
//     if(arr){
//         for(let i = 0; i< arr.length; i++){
//             if(!arr[i].accepted && !arr[i].rejected){
//                 waiting ++
//             }
//         }
//         return waiting
//     }
// }
// const waiting = waitingPilgrim(props.pelerins)
// const rejected = rejectedPilgrim(props.pelerins)
// const accepted = accptedPilgrim(props.pelerins)

    return <>
                        {
                            props.affichage === 'Listpelerins'
                            ? <Listpelerins handleValidate = {props.handleValidate} handleReject = {props.handleReject}  selectPilgrim={props.pilgrimSelect} pelerins={props.pelerins}/> 
                            :props.affichage === 'Pelerinform'
                            ? <Pelerinform/> 
                            :props.affichage === 'Profilepelerin'
                            ? <Profilepelerin setAffichage= {props.setAffichage}  handleValidate = {props.handleValidate} handleReject = {props.handleReject}  pelerin={props.pelerin}/> 
                            :props.affichage === 'Agenceform'  
                            ? <Agenceform setAffichage={props.setAffichage} addAgence= {props.addAgence}/> 
                            :props.affichage === 'Profileagence' 
                            ? <Profileagence  displayingAgence = {props.displayingAgence}  agence={props.selectedAgence} setAffichage= {props.setAffichage}  handleAgenceDelete = {props.handleAgenceDelete} /> 
                            : <Pagevide/>

                        }
                
    </>
}