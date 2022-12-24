import { agence} from "./types";
// import { charger } from "./dataFetching";
// eslint-disable-next-line no-undef
export const Profileagence = (props: {agence : agence|undefined,setAffichage: (affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform'|null ) => void, displayingAgence: agence|undefined, handleAgenceDelete: (id:string)=>void}): JSX.Element => {
    return <>
            <div className=" info-pelerins" style={{ height: 'calc(100vh - 140px)', width: '67%' }}>
            <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>

            </div>
        <div className="profile-pelerin d-flex flex-column align-items-center  justify-content-center " style={{ height: 'calc(100vh - 200px', overflow: 'scroll' }}>
            <div className='bg-light mb-2 card d-flex flex-row align-items-center justify-content-evenly' style={{ width: 500, height: 150 }}>
                <div>
                    <img  width={140} src={props.displayingAgence ? props.displayingAgence.image: undefined} alt="" style={{borderRadius: '100px'}}/>
                </div>
                <div>
                    <h6 className="text-dark">Nom: {props.displayingAgence ? props.displayingAgence.nom: undefined}</h6>
                    <h6 className="text-dark">Tel: {props.displayingAgence ?props.displayingAgence.number : undefined}</h6>
                </div>
            </div>
            <div className='bg-light card d-flex flex-column  justify-content-evenly ps-3' style={{ width: 500 }}>
                <h6 className="text-dark"><span className='text-dark fs-5'>Total Pélérins : </span >{props.displayingAgence?.pelerins.length}</h6>
                <h6 className="text-dark"><span className='text-dark fs-5'>Total Pélérins acceptés : </span>{(props.displayingAgence?.pelerins.filter(pelerin=>pelerin.accepted).length)}</h6>
                <h6 className="text-dark"><span className='text-dark fs-5'>Total Pélérins rejetés : </span>{(props.displayingAgence?.pelerins.filter(pelerin=>pelerin.rejected).length)}</h6>
                <h6 className="text-dark"><span className='text-dark fs-5'>Total Pélérins en Attente : </span>{(props.displayingAgence?.pelerins.filter(pelerin=>!pelerin.accepted&&!pelerin.rejected).length)}</h6>
                <h6 className="text-dark"><span className='text-dark fs-5'>Description : </span>{props.displayingAgence?.Description}</h6>
       
            </div>

            <div className="valid-reject d-flex flex-column justify-content-center align-items-center  mt-2" style={{ height: 60, width: 500 }}>
                <button onClick={()=> {props.handleAgenceDelete(props.displayingAgence? props.displayingAgence?.id: ''); props.setAffichage(null)} }   className="d-flex btn btn-danger">Supprimer</button>
            </div>  
        </div>
        </div>
    </>
}
