


export declare interface pelerin {
    nom: string;
    prenom: string;
    tel: string|number;
    photo: string|ArrayBuffer;
    lieuNaissance: string;
    lieuPovenance: string;
    dateNaissance: string;
    passport: string|number;
    dateEnregistrement: string;
    accepted: boolean;
    agence: string;
    id: string;
    rejected: boolean
}

export declare interface agence {
    nom: string;
    Description: string;
    image: string|ArrayBuffer;
    id: string;
    number:string| number,
    pass: string|number
    pelerins: pelerin[];
    
}



// eslint-disable-next-line no-undef
export const Pelerinagence = (props:{pelerin:pelerin, handlePelerinSelect:(pelerin:pelerin)=>void}): JSX.Element => {
    return <>
        
            <div className="pelerin bg-light d-flex justify-content-around align-items-center  mt-2" style={{ height: 80, borderRadius: '20px', width: '100%' }}>
                <img onClick={()=>props.handlePelerinSelect(props.pelerin)} className='image-rounded' style={{ borderRadius: '50%', cursor: "pointer", width:70, height:70 }}  src={props.pelerin.photo} alt="" />
                <h6 className="nom " style={{ width: 100 }}>{props.pelerin.nom}  {props.pelerin.prenom}</h6>
                {
                    props.pelerin.accepted&&!props.pelerin.rejected
                    ?<h1 className="status"><i className="bi bi-person-check-fill"></i></h1>
                    :!props.pelerin.accepted&&!props.pelerin.rejected
                    ?<h1 className="status"><i className="bi bi-hourglass-split"></i></h1>
                    :props.pelerin.rejected
                    ?<h1 className="status"><i className="bi bi-person-x-fill"></i></h1>
                    :''
                }
            </div>
   
    </>
} 