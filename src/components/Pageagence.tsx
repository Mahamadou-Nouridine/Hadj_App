/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react"
import { toLocaleString } from "../../webpack/rules.webpack"
import { Agence } from "./Agence"
import { Agenceform } from "./Agenceform"
import { Infovariable } from "./Infovariable"
// eslint-disable-next-line no-unused-vars
import { Listpelerins } from "./Listpelerins"
import { Pelerinattente } from "./Pelerinattente"
// eslint-disable-next-line no-unused-vars
import { Pelerinform } from "./Pelerinform"
// eslint-disable-next-line no-unused-vars
import { Profilepelerin } from "./Profilepelerin"
import { v4 } from 'uuid'
// import { charger } from "./dataFetching"
import { info } from "sass"
import { Profilepelerinagence } from "./Profilepelerinagence"
import { Pelerinagence } from "./Pelerinagence"
import { Infovariableagence } from "./Infovariableagence"
// import { charger } from "./dataFetching

import {agence, pelerin} from './types'

// eslint-disable-next-line no-undef
export const Pageagence = (props:{agence:agence, exit: ()=>void}): JSX.Element => {
    const agenceExtraite = localStorage.getItem('agences') as string;
    let agenceExtraiteParse :agence[] ;
    
    if (typeof localStorage.getItem('agences') === 'string'){
        agenceExtraiteParse = JSON.parse(agenceExtraite) as agence[]
    }
  
    const [agence , setAgence] = useState<agence>(props.agence)
    const [selectedPelerin, setSelectedPelerin] = useState<pelerin>(agence.pelerins[0])
    const [infoVariable, setInfoVariable] = useState<'Pelerinformadd'|'Profilepelerinagence'|'Pelerinformedit'|null>(null)
    const [pelerinAfficher, setPelerinAfficher] = useState<pelerin[]>(agence.pelerins)
    const [sorting, setSorting] = useState<'accepted'|'rejected'|'attente'|'defaut'>('defaut')

const handlePelerinSelect = (pelerin:pelerin)=>{
    setSelectedPelerin(pelerin)
    setInfoVariable('Profilepelerinagence')
}




useEffect(() => {
  const newArr = [...agenceExtraiteParse];
  newArr.forEach(item =>{
    if(item.id === agence.id){
        item = agence;
    }
  })
  localStorage.setItem('agences', JSON.stringify(newArr))
  console.log("agences mis à jour");
//   console.log(newArr);
  
}, [agence])

const handleAdd =  (prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuPovenance:string, dateNaissance:string, passport:string|number)=>{
    const newArr = [{ nom, accepted: false, agence: agence.nom, dateEnregistrement: new Date().toISOString().slice(0, 10), dateNaissance, id: v4(), lieuNaissance, lieuPovenance, passport, photo, prenom, rejected: false, tel }, ...agence.pelerins]

    const newArr2 = { ...agence, pelerins: newArr };

    const agenceExtrait = localStorage.getItem('agences') as string;
    let agenceExtraitParse :agence[] ;
    
    if (typeof localStorage.getItem('agences') === 'string'){
        agenceExtraitParse = JSON.parse(agenceExtrait) as agence[]
        agenceExtraitParse.forEach(item=>{
            if(item.id === agence.id){
                item.pelerins = newArr;
            }
        })

        localStorage.setItem('agences', JSON.stringify(agenceExtraitParse))
    }
    
    setAgence(newArr2)
}

const handleUpdate = async (id:string,prenom: string, nom: string, tel:string|number, photo:string|ArrayBuffer, lieuNaissance: string, lieuProvenance:string, dateNaissance:string, passport:string|number)=>{
    const newArr = [...agence.pelerins]
    newArr.forEach(pelerin=>{
        if(pelerin.id === id){
            pelerin.rejected = false;
            pelerin.nom = nom;
            pelerin.prenom = prenom;
            pelerin.tel = tel;
            // eslint-disable-next-line no-self-assign
            photo?pelerin.photo = photo:pelerin.photo = pelerin.photo;
            pelerin.lieuNaissance = lieuNaissance;
            pelerin.lieuPovenance = lieuProvenance;
            pelerin.dateNaissance = dateNaissance;
            pelerin.passport = passport;
        }
    })


    const agenceExtrait = localStorage.getItem('agences') as string;
    let agenceExtraitParse :agence[] ;
    
    if (typeof localStorage.getItem('agences') === 'string'){
        agenceExtraitParse = JSON.parse(agenceExtrait) as agence[]
        agenceExtraitParse.forEach(item=>{
            if(item.id === agence.id){
                item.pelerins = newArr;
            }
        })

        localStorage.setItem('agences', JSON.stringify(agenceExtraitParse))
    }

    setAgence({...agence, pelerins:newArr})
    setInfoVariable('Profilepelerinagence')
}


const handleDelete = (id:string)=>{
    const newArr = [...agence.pelerins].filter(pelerin => pelerin.id !== id)
    setAgence({...agence, pelerins:newArr});
    setInfoVariable(null)
    
    const agenceExtrait = localStorage.getItem('agences') as string;
    let agenceExtraitParse :agence[] ;
    
    if (typeof localStorage.getItem('agences') === 'string'){
        agenceExtraitParse = JSON.parse(agenceExtrait) as agence[]
        agenceExtraitParse.forEach(item=>{
            if(item.id === agence.id){
                item.pelerins = newArr;
            }
        })

        localStorage.setItem('agences', JSON.stringify(agenceExtraitParse))
    }


    

}

const handleCancel = ()=>{
    setInfoVariable('Profilepelerinagence')
}

const handleEditClick = ()=>{
    setInfoVariable('Pelerinformedit')
}

useEffect(()=>{
    let newArr;
    if(sorting === 'accepted'){
        newArr = [...agence.pelerins].filter(pelerin=>pelerin.accepted&&!pelerin.rejected);
        setPelerinAfficher(newArr)
    }else if(sorting === 'attente'){
        newArr = [...agence.pelerins].filter(pelerin=>!pelerin.accepted&&!pelerin.rejected);
        setPelerinAfficher(newArr)
    }else if(sorting === 'rejected'){
        newArr = [...agence.pelerins].filter(pelerin=>pelerin.rejected);
        setPelerinAfficher(newArr)
    }else{
        newArr = [...agence.pelerins];
        setPelerinAfficher(newArr)
    }
}, [sorting, agence])

    return <>
        <div className="d-flex">
            <div className=' border list-agences' style={{ height: '100vh', width: '20vw', minWidth: 300 }}>
                <nav className="navbar navbar-expand-lg bg-light " style={{ marginBottom: 65 }}>
                    <div className="container-fluid d-flex justify-content-around">
                        <img width={70} src={agence.image} alt="" />
                        <h3>{agence.nom}</h3>
                    </div>
                </nav>

                <div className="agences d-flex flex-column justify-content-end " style={{ height: 'calc(100vh - 170px)', backgroundColor: 'rgba(153, 175, 186, 0.37' }}>
                    <div className="bg- d-flex flex-column align-items-center justify-content-around mb-5" style={{ height: 500, width: '100%' }}>
                        <div className="d-flex align-items-center " style={{ width: '85%' }}>
                            <h1 className="me-5"><i className="bi bi-geo-alt-fill"></i></h1>
                            <h5>Niamey</h5>
                        </div>
                        <div className="d-flex align-items-center " style={{ width: '85%' }}>
                            <h1 className="me-3"><i className="bi bi-check-circle-fill"></i></h1>
                            <h6 className="me-3 bg-light " style={{ borderRadius: 5 }}>Pélérins Accepté</h6>
                            <h6 className="me-3 bg-success d-flex justify-content-center align-items-center  text-white" style={{ borderRadius: '50%', height: 30, width: 30, textAlign: 'center', verticalAlign: 'baseline' }}>{(agence.pelerins.filter(pelerin=>pelerin.accepted&&!pelerin.rejected)).length}</h6>
                        </div>
                        <div className="d-flex align-items-center " style={{ width: '85%' }}>
                            <h1 className="me-3"><i className="bi bi-x-circle-fill"></i></h1>
                            <h6 className="me-3 bg-light " style={{ borderRadius: 5 }}>Pélérins Rejetés</h6>
                            <h6 className="me-3 bg-danger d-flex justify-content-center align-items-center text-white" style={{ borderRadius: '50%', height: 30, width: 30, textAlign: 'center', verticalAlign: 'baseline' }}>{(agence.pelerins.filter(pelerin=>pelerin.rejected)).length}</h6>
                        </div>
                        <div className="d-flex align-items-center " style={{ width: '85%' }}>
                            <h1 className="me-3"><i className="bi bi-hourglass-split"></i></h1>
                            <h6 className="me-3 bg-light " style={{ borderRadius: 5 }}>Pélérins en attente</h6>
                            <h6 className="me-3 bg-warning d-flex justify-content-center align-items-center  text-white" style={{ borderRadius: '50%', height: 30, width: 30, textAlign: 'center', verticalAlign: 'baseline' }}>{(agence.pelerins.filter(pelerin=>!pelerin.accepted&&!pelerin.rejected)).length}</h6>
                        </div>
                    </div>
                    <div className=" mt-5 d-flex flex-column justify-content-around align-items-center" style={{ height: 250, width: '100%', backgroundColor: 'rgba(153, 175, 186, 0.37' }}>
                        <div className='d-flex justify-content-between' style={{ width: '50%' }}>
                            <img width={50} src="https://as1.ftcdn.net/v2/jpg/04/88/85/60/1000_F_488856019_Ld4i4cSYnR3mLjM7Zww2FkxnrJkDlzH0.jpg" alt="" />
                            <h3>HajApp</h3>

                        </div>
                        <h6 className='text-dark'>© 2022 copyright HajApp INC.
                            All rights reserved
                        </h6>
                    </div>
                </div>
            </div>
            <div className='bg-warning border admin' style={{ height: '100vh', width: '80vw', minWidth: 700 }}>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid d-flex justify-content-around">
                        <a className="navbar-brand" href="#"></a>
                        <div className="collapse navbar-collapse">

                        </div>
                        <img width={50} src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660147624~hmac=488e26b14b32936d4f284aeaecab535c" alt="" />
                        <button onClick={props.exit} className="btn btn-danger">quitter</button>
                    </div>
                </nav>
                <div className="d-flex justify-content-around align-items-center" style={{ height: 'calc(100vh - 70px)' }}>


                    <div className="info-pelerins" style={{ height: 'calc(100vh - 140px)', width: '57%' }}>
                        <div className="bg-light d-flex justify-content-between align-items-center px-3 " style={{ width: '100%', height: 60 }}>
                            <h3>pelerins</h3>
                            <h4 className="bg-info d-flex justify-content-center align-items-center text-white" style={{ borderRadius: '50%', height: 50, width: 50 }}>{agence.pelerins.length}</h4>

                        </div>
                        <div className="d-flex justify-content-around  ps-2 align-items-center" style={{ width: '100%', height: 60 }}>
                            <form role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: '150%' }} />
                            </form>
                            <div className="dropdown">
                                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-funnel"></i>
                                </a>

                                <ul className="dropdown-menu">
                                    <li onClick={()=>setSorting('defaut')}><a className="dropdown-item" href="#">defaut</a></li>
                                    <li onClick={()=>setSorting('accepted')}><a className="dropdown-item" href="#">Acceptés(es)</a></li>
                                    <li onClick={()=>setSorting('attente')}><a className="dropdown-item" href="#">En Attentes</a></li>
                                    <li onClick={()=>setSorting('rejected')}><a className="dropdown-item" href="#">Refusés(es)</a></li>
                                </ul>
                            </div>


                            <div className="dropdown">
                                <button onClick={()=> setInfoVariable('Pelerinformadd')} className ='btn btn-primary'> Ajouter Pelerin</button>
                            </div>


                        </div>
                        <div className="bg-light d-flex justify-content-around align-items-center" style={{ width: '100%', height: 60 }}>
                            <h5 className="">Profile</h5>
                            <h5 className="">Nom</h5>
                            <h5 className="">Status</h5>
                        </div>
                        <div className="pelerins px-3" style={{ height: 'calc(100vh - 330px', overflow: 'scroll' }}>
                        
                        {
                            pelerinAfficher.map((pelerin, index)=> <Pelerinagence  handlePelerinSelect={handlePelerinSelect} key={index}  pelerin={pelerin}/>)  
                        }
                        </div>
                    </div>






                    <div className=" info-agences" style={{ height: 'calc(100vh - 140px)', width: '40%', backgroundColor: 'white' }}>
                        <Infovariableagence agence={agence} handleUpdate={handleUpdate} handleAdd = {handleAdd} handleCancel ={handleCancel} handleDelete = {handleDelete} handleEditClick={handleEditClick} pelerin={selectedPelerin} affichage={infoVariable}/>
                    </div>
                </div>
            </div>
        </div>
    </>
}

// seState<'Pelerinformadd'|'Profilepelerinagence'|'Pelerinformedit'|null>()