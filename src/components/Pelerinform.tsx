
import { useState } from "react"



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
export const Pelerinform = (props: { pelerin: pelerin, handleUpdate: (id:string,prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuProvenance:string, dateNaissance:string, passport:string|number)=>void,  handleAdd: (prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuProvenance:string, dateNaissance:string, passport:string|number, agence:agence) => void, handleCancel: () => void, edit: boolean, agence:agence, handleEditClick:()=>void}): JSX.Element => {






    const [name, setName] = useState(props.edit?props.pelerin.nom:'');
    const [prenom, setPrenom] = useState(props.edit?props.pelerin.prenom:'');
    const [number, setNumber] = useState(props.edit?props.pelerin.tel:'');
    const [passport, setPassport] = useState(props.edit?props.pelerin.passport:'');
    const [image, setImage] = useState<string|ArrayBuffer>(props.edit?props.pelerin.photo:'');
    const [lieunai, setLieunai] = useState(props.edit?props.pelerin.lieuNaissance:'');
    const [lieuprov, setLieuprov] = useState(props.edit?props.pelerin.lieuPovenance:'');
    const [datenai, setDatenai] = useState(props.edit?props.pelerin.dateNaissance:'');

    const onName = (e:any)=>{
        setName(e.target.value); 
    }

    const onPrenom = (e:any)=>{
        setPrenom(e.target.value); 
    }

    const onNumber = (e:any)=>{
        setNumber(e.target.value);
    }
    
    const onPassport = (e:any)=>{
        setPassport(e.target.value);
    }
    
    const onImage = (e:any)=>{

        const file = new FileReader()
        file.onload = ()=>{
            if (file.readyState === 2 && file.result){
                setImage(file.result)
            }
        }
        file.readAsDataURL(e.target.files[0])
        
    }

    const onLieunai = (e:any)=>{
        setLieunai(e.target.value); 
    }
    
    const onProv = (e:any)=>{
        setLieuprov(e.target.value); 
    }

    const onDatenai = (e:any)=>{
        setDatenai(e.target.value); 
    }


    const handleSubmit = (e:any) =>{
        e.preventDefault();
        props.handleAdd(prenom, name, number, image, lieunai, lieuprov, datenai, passport, props.agence);  
        setName('')
        setNumber('')
        setPrenom('')
        setImage('')
        setLieunai('')
        setLieuprov('')
        setDatenai('')
        setPassport('')
    }

    const handleSubmit2 = (e:any) =>{
        e.preventDefault();
        props.handleUpdate(props.pelerin.id,prenom, name, number, image, lieunai, lieuprov, datenai, passport);  
        setName('')
        setNumber('')
        setPrenom('')
        setImage('')
        setLieunai('')
        setLieuprov('')
        setDatenai('')
        setPassport('')
    }

    const cancel = ()=>{
        props.handleCancel();
        setName('')
        setNumber('')
        setPrenom('')
        setImage('')
        setLieunai('')
        setLieuprov('')
        setDatenai('')
        setPassport('')

    }









    return <>



        {
            props.edit
                ? <div className="bg-light card d-flex flex-row align-items-center justify-content-evenly" style={{ width: '100%', height: 150 }}>

                    <div>
                        <img width={140} src={props.pelerin.photo} alt="" style={{ borderRadius: '50%' }} />
                    </div>
                    <div>
                        <h6 className="text-dark">Nom: {props.pelerin.nom} {props.pelerin.prenom}</h6>
                        <h6 className="text-dark">Tel: {props.pelerin.tel}</h6>
                        <h6 className="text-dark">Passport: {props.pelerin.passport}</h6>
                    </div>
                </div>
                : null
        }





        <div className="d-flex justify-content-center align-items-center" style={{ height: 'calc(100vh - 260px', width: '100%' }}>

            <form onSubmit={props.edit?handleSubmit2:handleSubmit} className='form card d-flex flex-column py-3 px-3' action="" style={{ width: '80%', backgroundColor: 'rgba(153, 175, 186, 0.17'}} >
                <div className="group1" >
                    <div className="input-group w-100 mb-3">
                        <span className="bi bi-person-fill input-group-text ms-1" id="basic-addon1"></span>
                        <input value={prenom} onChange={onPrenom}   type="text" className="form-control" placeholder="Prenom" aria-describedby="basic-addon1" />
                        <input value={name} onChange={onName} type="text" className="form-control ms-2" placeholder="Nom" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group w-100 mb-3">
                        <span className="input-group-text ms-1 bi bi-telephone-fill" id="basic-addon1"></span>
                        {typeof number === 'string'
                        ?<input onChange={onNumber} value={number} type="text" className="form-control" placeholder="Téléphoe" aria-label="Username" aria-describedby="basic-addon1" />
                        :<input onChange={onNumber} value={number} type="number" className="form-control" placeholder="Téléphoe" aria-label="Username" aria-describedby="basic-addon1" />}

                    </div>


                    <div className="input-group w-100 mb-3">
                        <span className="input-group-text ms-1 bi bi-telephone-fill" id="basic-addon1"></span>
                        <input value={passport} onChange={onPassport} type="number" className="form-control" placeholder="Passport" />

                    </div>
                    <div className=" w-100 mb-3">
                        <input onChange={onImage} accept="image/*" name="profile" type="file" className="form-control " aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                </div>
                <div className="group1 mt-5">
                    <div className="input-group w-100 mb-3">

                        <input onChange={onLieunai} value={lieunai} type="text" className="form-control ms-1" placeholder="Lieu de Naissance" aria-describedby="basic-addon1" />
                        <input value = {datenai}  onChange={onDatenai} type="date" className="form-control ms-2" aria-label="Username" aria-describedby="basic-addon1" />
                    </div>
                    <div className="input-group w-100 mb-3">
                        <span className="input-group-text ms-1 bi bi-telephone-fill" id="basic-addon1"></span>
                        <input value={lieuprov} onChange={onProv} type="text" className="form-control" placeholder="Lieu de provenance" />

                    </div>
                </div>
                <div className="buttons w-100  d-flex justify-content-around align-self-center">
                    {props.edit
                    ?<div><button type="submit" className="btn btn-success">mettre a jour</button></div>
                    :<div><button type="submit" className="btn btn-success">Ajouter</button></div>}
                    <div><button onClick={cancel} type="button" className="btn btn-secondary">Annuler</button></div>
                </div>
            </form>
        </div>


    </>
}