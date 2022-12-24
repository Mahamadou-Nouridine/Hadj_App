/* eslint-disable no-unused-vars */
import {useEffect, useState} from 'react'
import { charger } from './components/dataFetching';
import { Logpage } from "./components/Logpage";
import { Pageadmin } from "./components/Pageadmin";
import {Pageagence} from './components/Pageagence'
import {agence } from './components/types'



export const agencesi = {
  nom: 'Afuwa',
  Description: 'Voyagez tranquillement',
  image: 'https://as1.ftcdn.net/v2/jpg/04/88/85/60/1000_F_488856019_Ld4i4cSYnR3mLjM7Zww2FkxnrJkDlzH0.jpg',
  id: 'trois',
  number: 2345678,
  pass: 34567890,
  pelerins: [
      {
          nom: 'Mahamadou',
          prenom: 'Nouridine',
          tel: 23456789,
          photo: 'https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1660147624~hmac=488e26b14b32936d4f284aeaecab535c',
          lieuNaissance: 'Maradi',
          lieuPovenance: 'Niamey',
          dateNaissance: '2000-12-12',
          passport: 234567,
          dateEnregistrement: '2000-12-12',
          accepted: false,
          agence: 'Afuwa',
          id: 'trois',
          rejected: false
      }
  ]

}





export function App() {
  
  
  
  
  const agenceExtraite = localStorage.getItem('agences') as string;
  let agenceExtraiteParse ;
  
  if (typeof localStorage.getItem('agences') === 'string'){
    agenceExtraiteParse = JSON.parse(agenceExtraite)
  }
  
  const agences = agenceExtraiteParse as agence[];
  
  const [selectedAgence, setSelectedAgence] = useState<agence>(agencesi);
  const [composant, setComposant] = useState<'pageagence'|'pageadmin'|'logpage'>('logpage');
  const [erreur, setErreur] = useState<boolean>(false);
  
  window.onload = function (e) {
    if (!localStorage.getItem("agences")) {
        charger();
    }
  
    if(selectedAgence&&composant!=='logpage'){
      if(composant === 'pageagence'){
        e.preventDefault()
        setSelectedAgence(selectedAgence);
        setComposant('pageagence')
      } else{
        setComposant('pageadmin')
      }
  
    }
  }
  



  const exit = ()=>{
    setComposant('logpage')
  }


  const login = (name:string, user:'1'|'2', password:number|string)=>{
    if(user === '2'){
      if (name==="Nouridine"&& password === '88103073'){
        setComposant('pageadmin')
        console.log('entré');     
      }else{
        setErreur(true)
      }
    }else if(user === '1'){
       agences.forEach(agence =>{
        if(agence.nom === name&&agence.pass === Number(password)){
          setSelectedAgence(agence)
          setComposant('pageagence')
        }else{
          setErreur(true)
        }
       })
    }
  }





  return (<>
  {
    composant === 'logpage'
    ?<Logpage erreur={erreur} login={login}/>
    :composant === 'pageadmin'
    ?<Pageadmin exit={exit}/>
    :composant === 'pageagence'
    ?<Pageagence exit={exit} agence = {selectedAgence}/>
    :null
  } 
  </>)
}