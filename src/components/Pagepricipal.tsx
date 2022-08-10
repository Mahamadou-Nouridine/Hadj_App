/* eslint-disable no-unused-vars */
import { useState } from "react"
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
import { agence, pelerin } from "./types"
import {v4} from 'uuid'
// import { charger } from "./dataFetching"
import { info } from "sass"
// import { charger } from "./dataFetching"

// class AgenceType {
//     constructor(nom: string,Description: string,image: string,id: string,pelerins: pelerin[]){
//         // eslint-disable-next-line no-unused-expressions
//         this.nom= nom,
//         this.Description = Description

//     }
// }



// eslint-disable-next-line no-unused-vars
// let agences: agence[];

// eslint-disable-next-line no-undef
export const Pageprincipal = (): JSX.Element => {
    const agenceExtraite = localStorage.getItem('agences') as string;
    let agenceExtraiteParse ;
    
    if (typeof localStorage.getItem('agences')=== 'string'){
        agenceExtraiteParse = JSON.parse(agenceExtraite)
    }
    const [agences , setAgences] = useState<agence[]>(agenceExtraiteParse)
    const [selectedPilgrim,setSelectedPilgrim] = useState<pelerin>()
    const [infoVariable, setInfovVariable] = useState<"Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform'| 'Profileagence'|null>()
    const [selectedAgence, setSelectedAgence] = useState<agence>()
    const [displayingAgence, setDisplayingAgence] = useState<agence>()
    const selectAgence = (id : string) => {
        [...agences].forEach( agence => {
            if (agence.id === id){
                setSelectedAgence(agence)
            }
        })
        setInfovVariable('Listpelerins')
    }

    const addAgence = (nom: string, number: string, Description: string, image: string|ArrayBuffer, pass:string|number) =>{
        const newArr: agence[] = [...agences, {nom, Description, image, id: v4(), pelerins:[], number, pass}];
        setAgences(newArr)
    }
    // const addPelerin = (nom: string, number: string, Description: string, image: string|ArrayBuffer) =>{
    //     const newArr: agence[] = [...agences, {nom, Description, image, id: v4(), pelerins:[]}];
    //     setAgences(newArr)
    // }

    const handleValidate = (id: string) => {
        const newArr = [...agences].map(agence =>{
            agence.pelerins.forEach(pelerin=>{
                if(pelerin.id === id){
                     pelerin.accepted = true
                }
            })
            return agence
        }) 
        // charger()
        console.log('pélérin validé');
        
        setAgences(newArr)
    }
    const handleReject = (id: string) => {
        const newArr = [...agences].map(agence =>{
            agence.pelerins.forEach(pelerin=>{
                if(pelerin.id === id){
                     pelerin.rejected = true
                }
            })
            return agence
        }) 
        console.log('pélérin rejeté');
        
        setAgences(newArr)
    }

    const handleDisplayAgence = (agence: agence)=>{
        setDisplayingAgence(agence);
        setInfovVariable('Profileagence')
    }
    

    const handlePilgrimSelect=  (id: string) => {
        selectedAgence?.pelerins.forEach((pelerin) => {
            if (pelerin.id === id){
                setSelectedPilgrim(pelerin)
            }
        })
        console.log('pelerin choisi');
        
        setInfovVariable('Profilepelerin')
    }

    const handleAgenceDelete = (id:string)=>{
        const newArr = [...agences].filter(agence=> agence.id !== id)
        setAgences(newArr)
    }

    
    let totalPelerin:number= 0;
    let totalRejete:number= 0;;
    let totalAccept:number= 0;;

    agences.forEach(agence =>{
        totalPelerin+=agence.pelerins.length;
        totalRejete+= agence.pelerins.filter(pelerin=>pelerin.rejected&&!pelerin.accepted).length
        totalAccept+= agence.pelerins.filter(pelerin=>pelerin.accepted&&!pelerin.rejected).length
    })
    
    
    return <>
        <div className="d-flex">
            <div className='bg-danger border' style={{ height: '100vh', width: '20vw', minWidth: 300 }}>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid d-flex justify-content-around">
                        <img width={50} src="https://as1.ftcdn.net/v2/jpg/04/88/85/60/1000_F_488856019_Ld4i4cSYnR3mLjM7Zww2FkxnrJkDlzH0.jpg" alt="" />
                    </div>
                </nav>

                <div className='d-flex justify-content-between'>
                    <h3 className="m-3">Agences</h3>
                    <button onClick={() => setInfovVariable('Agenceform')}  className="btn m-3 btn-primary">Ajouter</button>
                </div>
                <div className="agences " style={{ height: 'calc(100vh - 170px)', overflow: 'scroll' }}>
                    {agences.map((agence : agence, index: number )=> <Agence handleAgenceDelete={handleAgenceDelete}  displayingAgence={displayingAgence} setDisplayingAgence = {handleDisplayAgence} setAgenceProfile={() => setInfovVariable('Profileagence')} selectedAgence = {selectedAgence} agenceChange = {() => selectAgence(agence.id)} agence={agence} key= {index} />)}
                </div>
            </div>
            <div className='bg-warning border admin' style={{ height: '100vh', width: '80vw', minWidth: 700 }}>
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container-fluid d-flex justify-content-around">
                        <a className="navbar-brand" href="#"><i className="bi bi-bell-fill"></i></a>
                        <div className="collapse navbar-collapse">
                            <form role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            </form>
                        </div>
                        <img width={50} src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660147624~hmac=488e26b14b32936d4f284aeaecab535c" alt="" />
                    </div>
                </nav>
                <div className="d-flex justify-content-around align-items-center" style={{ height: 'calc(100vh - 70px)' }}>
                    <Infovariable handleAgenceDelete={handleAgenceDelete} displayingAgence={displayingAgence}  selectedAgence={selectedAgence} addAgence = {addAgence} setAffichage= {setInfovVariable} handleValidate= {handleValidate} handleReject= {handleReject} pilgrimSelect= {handlePilgrimSelect}  pelerins={selectedAgence?.pelerins} pelerin = {selectedPilgrim} affichage= {infoVariable}/>
                    <div className="bg-secondary info-agences" style={{ height: 'calc(100vh - 140px)', width: '30%' }}>
                        <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>
                            <div className="d-flex flex-column align-items-center " >
                                <p className="mt-2">Agence(s)</p>
                                <h5 style={{ marginTop: -15 }} >{agences.length}</h5>
                            </div>
                            <div className="d-flex flex-column align-items-center " >
                                <p className="mt-2">Pélérin(s)</p>
                                <h5 style={{ marginTop: -15 }} >{totalPelerin}</h5>
                            </div>
                            <div className="d-flex flex-column align-items-center " >
                                <p className="mt-2">Accepté(es)</p>
                                <h5 style={{ marginTop: -15 }} >{totalAccept}</h5>
                            </div>
                            <div className="d-flex flex-column align-items-center " >
                                <p className="mt-2">Rejeté(es)</p>
                                <h5 style={{ marginTop: -15 }} >{totalRejete}</h5>
                            </div>
                        </div>
                        <h5 className="m-2">Pélérins en attente</h5>
                        <div className="bg-light d-flex justify-content-around align-items-center" style={{ width: '100%', height: 60 }}>
                            <h5 className="">Profile</h5>
                            <h5 className="">Nom</h5>
                            <h5 className="">Agence</h5>
                            <h5 className="">Edit</h5>
                        </div>
                        <div className="pelerins-attente" style={{ height: 'calc(100vh - 300px', overflow: 'scroll' }}>
                            {agences.map((agence) => {
                                return agence.pelerins.map((pelerin, index) => !pelerin.accepted && !pelerin.rejected ? <Pelerinattente handleReject={handleReject} handleValidate= {handleValidate} key={index} pelerin={pelerin} /> : null)
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </>
}