/* eslint-disable no-unused-vars */
import { useState } from "react"

// eslint-disable-next-line no-undef
export const Agenceform = (props: {addAgence: (nom: string, number: string, Description: string, image: string|ArrayBuffer, pass:number|string) => void, setAffichage:(affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform' | 'Profileagence' | undefined | null) => void}): JSX.Element => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState<string|ArrayBuffer>('');
    const [number, setNumber] = useState('');
    const pass=12345678;

    const onName = (e:any)=>{
        setName(e.target.value); 
    }
    const onDescription = (e:any)=>{
        setDescription(e.target.value); 
    }
    const onImage = (e:any)=>{

        const file = new FileReader()
        file.onload = ()=>{
            if (file.readyState === 2 && file.result){
                setImage(file.result)
            }
        }
        file.readAsDataURL(e.target.files[0])
        console.log(image); 
    }
    const onNumber = (e:any)=>{
        setNumber(e.target.value);
        console.log(number); 
    }

    const handleSubmit = (e:any) =>{
        e.preventDefault();
        props.addAgence(name, number, description,image,pass);
        setName('')
        setNumber('')
        setDescription('')
        setImage('')
    }
    const handleSubmit1 = (e:any) =>{
        e.preventDefault();
    }

    // let im =

    return <>
    <div className="bg-primary info-pelerins" style={{ height: 'calc(100vh - 140px)', width: '67%' }}>
            <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>
               

            </div>
        <h5 className='m-3'>Ajouter Agence</h5>
        <img width={100} src={typeof image=== 'string'?(image):''} alt="" />

        <form onSubmit={name&&description&&image&&number?handleSubmit:handleSubmit1} className='form mt-4 d-flex flex-column ' action="" >
            <div className="group1">
                <div className="input-group w-75 mb-3">
                    <span className=" input-group-text ms-1" id="basic-addon1">Nom</span>
                    <input onChange={onName} type="text" className="form-control" value= {name} aria-describedby="basic-addon1" />
                </div>
                <div className="input-group w-75 mb-3">
                    <span className="input-group-text ms-1 bi bi-telephone-fill" id="basic-addon1"></span>
                    <input value={number} onChange={onNumber} type="number" className="form-control" aria-describedby="basic-addon1" />
                </div>
                <div className=" w-75 mb-3">
                    <label  className='ms-1 text-white' htmlFor="profile">Image de profile</label>
                    <input onChange={onImage} accept="image/*" name="profile" type="file" className="form-control ms-1" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className=" w-75 mb-3">
                    <label className='ms-1 text-white' htmlFor="passport">Description</label>
                    <textarea onChange={onDescription} value ={description} name="passport" className="form-control ms-1" placeholder="Description" aria-describedby="basic-addon1" />
                </div>
            </div>
            <div className="buttons ms-n5 w-25 d-flex justify-content-around">
                <button type="submit" className="btn btn-success">Ajouter</button>
                <button  type="button" className="btn btn-secondary">Annuler</button>
            </div>
        </form>
        </div>
    </>
}