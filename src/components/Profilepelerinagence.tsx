
import { pelerin} from './types'


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


// eslint-disable-next-line no-undef
export const Profilepelerinagence = (props:{handleDelete: (id: string) => void, pelerin:pelerin|undefined, handleEditClick:()=>void}): JSX.Element => {
    return <>
        <div className="bg-light card d-flex flex-row align-items-center justify-content-evenly" style={{ width: '100%', height: 150 }}>

            <div>
                <img src={props.pelerin?props.pelerin.photo:''} alt="" style={{ borderRadius: '50%', width: '140px', height: '140px' }} />
            </div>
            <div>
                <h6 className="text-dark">Nom: {props.pelerin?props.pelerin.nom:''} {props.pelerin?props.pelerin.prenom:''}</h6>
                <h6 className="text-dark">Tel: {props.pelerin?props.pelerin.tel:''}</h6>
                <h6 className="text-dark">Passport: {props.pelerin?props.pelerin.passport:''}</h6>
            </div>
        </div>
        <div className="profile-pelerin d-flex flex-column align-items-center  justify-content-center " style={{ height: 'calc(100vh - 300px', overflow: 'scroll' }}>

            <div className='bg-light card d-flex flex-column  justify-content-evenly ps-3' style={{ width: 500, height: 450 }}>
                <h6 className="text-dark">Lieu de naisance: {props.pelerin?props.pelerin.lieuNaissance:''}</h6>
                <h6 className="text-dark">Date de naissance: {props.pelerin?props.pelerin.dateNaissance:''}</h6>
                <h6 className="text-dark">Lieu de provenance: {props.pelerin?props.pelerin.lieuPovenance:''}</h6>
                <h6 className="text-dark">Date d'enregistrement: {props.pelerin?props.pelerin.dateEnregistrement:''}</h6>
                <h6 className="text-dark">Agence : {props.pelerin?props.pelerin.agence:""}</h6>
                <h6 className="text-dark">Statut : {props.pelerin?(props.pelerin.accepted&&!props.pelerin.rejected?'Accepté(e)':!props.pelerin.accepted&&!props.pelerin.rejected?'En Attente':props.pelerin.rejected?'Rejeté(e)':''):''}</h6>
            </div>

            <div className="valid-reject d-flex justify-content-around align-items-center  mt-2" style={{ height: 60, width: 500 }}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button onClick={()=>props.handleDelete(props.pelerin?props.pelerin.id:'')} className="d-flex btn btn-danger">Supprimer</button>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <button onClick={props.handleEditClick} className="d-flex btn btn-secondary">Modifier</button>
                </div>
            </div>
        </div>
    </>
}