/* eslint-disable no-undef */

import { useState } from "react"

export const Logpage = (props:{login: (name:string, user:'1'|'2', password:number|string)=>void, erreur:boolean}): JSX.Element => {
  const [user, setUser]= useState<'1'|'2'>('1')
  const [name, setname]= useState<string>('')
  const [pass, setPass]= useState<string>('')

  const  onUser =(e:any)=>{
    setUser(e.target.value)
  }
  const  onName =(e:any)=>{
    setname(e.target.value)
  }
  const  onPass =(e:any)=>{
    setPass(e.target.value)
  }


  const log =(e:any)=>{
    e.preventDefault();
    props.login(name, user, pass)
  }


    return <>
        <div className="d-flex align-item-center logpage" style={{ height: '100vh' }}>
      <div className="container text-center  d-flex justify-content-around  align-items-center p-5" style={{
        height: "", maxWidth: 1000,
      }}>
        <div className="composant1  card" style={{ width: 500, minWidth: 300, minHeight: '80vh'}}>

        </div>
        <div className="composant2 bg-success card mb-1" style={{ width: 350, maxWidth: 1000, height: '50vh' }}>
          <div className="text-black card-body d-flex flex-column justify-content-around">
            <h3>Se Connecter</h3>
            
            <form onSubmit={log}  className="align-middle " action="" style={{marginBottom: '100px'}}>
              <div className="form-goup " >
                <select onChange={onUser} value={user}  className="form-select"  >
                  <option value="1" >Agence</option>
                  <option value="2">Administrateur</option>
                </select>
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-person input-group-text" id="basic-addon1"></span>
                <input onChange={onName} value={name} type="text" className="border-dark form-control" placeholder="Username/Email" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-shield-lock-fill input-group-text" id="basic-addon1"></span>
                <input onChange={onPass} value={pass} type="password" className="border-dark form-control" placeholder="Password" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mt-3">
                <button className="btn btn-primary" type="submit">entrez</button>
              </div>
              {props.erreur?<span className="text-danger">Veuillez saisir des informations valides</span>:null}
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
}