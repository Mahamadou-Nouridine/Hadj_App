
import { agence } from "./types";

// eslint-disable-next-line no-undef, no-unused-vars
export const Agence = (props: { agence: agence, agenceChange  : () => void , selectedAgence: agence|undefined, setAgenceProfile:()=>void, setDisplayingAgence: Function, displayingAgence: agence|undefined, handleAgenceDelete:(id:string)=>void }): JSX.Element => {
    const color = props.agence === props.selectedAgence? 'grey': 'white'
    return <>
        <div   className="agence m-2 d-flex justify-content-around align-items-center " style={{height: 100, backgroundColor: color}}>
            <img onClick={props.agenceChange} width={props.agence.nom==='Al-Barka' ?70:90} src={props.agence.image} alt="" style={{cursor: 'pointer'}}/>
            <h5 style={{width : '30%', fontSize: 15}}>
                {props.agence.nom}
            </h5>
            <div className="dropdown">
                <button className="btn  " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <h2><span className="bi bi-three-dots-vertical"></span></h2>
                </button>
                <ul className="dropdown-menu">
                    <li onClick={()=>props.setDisplayingAgence(props.agence)}><a className="dropdown-item" href="#">Voir Agence</a></li>
                    <li><a onClick={()=> props.handleAgenceDelete(props.agence.id)} className="dropdown-item" href="#">Supprimer agence</a></li>
                </ul>
            </div>
        </div>
    </>
}