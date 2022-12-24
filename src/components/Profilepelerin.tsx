
import { pelerin } from "./types";
// import { charger } from "./dataFetching";
// eslint-disable-next-line no-undef
export const Profilepelerin = (props: { pelerin: pelerin | undefined, handleValidate: (id: string) => void, handleReject: (id: string) => void, setAffichage: (affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform') => void }): JSX.Element => {
    return <>
        <div className=" info-pelerins" style={{ height: 'calc(100vh - 140px)', width: '67%' }}>
            <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>


            </div>
            <div className="profile-pelerin d-flex flex-column align-items-center  justify-content-center " style={{ height: 'calc(100vh - 200px', overflow: 'scroll' }}>
                <div className='bg-light mb-2 card d-flex flex-row align-items-center justify-content-evenly' style={{ width: 500, height: 150 }}>
                    <div>
                        <img width={140} src={props.pelerin ? props.pelerin.photo : undefined} alt="" style={{ borderRadius: '50%' }} />
                    </div>
                    <div>
                        <h6 className="text-dark">Nom: {props.pelerin ? props.pelerin.nom : undefined}</h6>
                        <h6 className="text-dark">Tel: {props.pelerin ? props.pelerin.tel : undefined}</h6>
                        <h6 className="text-dark">Passport: {props.pelerin ? props.pelerin.passport : undefined}</h6>
                    </div>
                </div>
                <div className='bg-light card d-flex flex-column  justify-content-evenly ps-3' style={{ width: 500, height: 450 }}>
                    <h6 className="text-dark">Lieu de naisance: {props.pelerin ? props.pelerin.lieuNaissance : undefined}</h6>
                    <h6 className="text-dark">Date de naissance: {props.pelerin ? props.pelerin.dateNaissance : undefined}</h6>
                    <h6 className="text-dark">Lieu de provenance: {props.pelerin ? props.pelerin.lieuPovenance : undefined}</h6>
                    <h6 className="text-dark">Date d'enregistrement: {props.pelerin ? props.pelerin.dateEnregistrement : undefined}</h6>
                    <h6 className="text-dark">Agence : {props.pelerin ? props.pelerin.agence : undefined}</h6>
                </div>
                {props.pelerin ? (props.pelerin.accepted ?
                    <div className="valid-reject d-flex justify-content-around align-items-center  mt-2" style={{ height: 60, width: 500 }}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button onClick={() => { props.handleReject(props.pelerin ? props.pelerin?.id : ''); props.setAffichage('Listpelerins') }} className="d-flex btn btn-danger">Rejeter</button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button onClick={() => { props.setAffichage('Listpelerins') }} className="d-flex btn btn-secondary">Annuler</button>
                        </div>
                    </div> :
                    <div className="valid-reject d-flex justify-content-around   align-items-center  mt-2" style={{ height: 60, width: 500 }}>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button onClick={() => props.pelerin ? props.handleValidate(props.pelerin?.id) : ''} className="d-flex btn btn-success">Valider</button>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <button onClick={() => { props.setAffichage('Listpelerins') }} className="d-flex btn btn-secondary">Annuler</button>
                        </div>
                    </div>) : undefined}
            </div>
        </div>
    </>
}
