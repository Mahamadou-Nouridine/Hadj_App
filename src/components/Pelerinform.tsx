// eslint-disable-next-line no-undef
export const Pelerinform = ():JSX.Element =>{
    return <>
                            <h5 className='m-3'>Ajouter Pélérin</h5>

<form className='form mt-4 d-flex flex-column ' action="" >
    <div className="group1">
        <div className="input-group w-75 mb-3">
            <span className="bi bi-person-fill input-group-text ms-1" id="basic-addon1"></span>
            <input type="text" className="form-control" placeholder="Prenom" aria-describedby="basic-addon1" />
            <input type="text" className="form-control ms-2" placeholder="Nom" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group w-75 mb-3">
            <span className="input-group-text ms-1 bi bi-telephone-fill" id="basic-addon1"></span>
            <input type="text" className="form-control" placeholder="Téléphoe" aria-label="Username" aria-describedby="basic-addon1" />

        </div>
        <div className=" w-75 mb-3">
            <label className='ms-1 text-white' htmlFor="profile">Image de profile</label>
            <input accept="image/*" name="profile" type="file" className="form-control ms-1" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className=" w-75 mb-3">
            <label className='ms-1 text-white' htmlFor="passport">Image de profile</label>
            <input name="passport" type="number" className="form-control ms-1" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    </div>
    <div className="group1 mt-5">
        <div className="input-group w-75 mb-3">

            <input type="text" className="form-control ms-1" placeholder="Lieu de Naissance" aria-describedby="basic-addon1" />
            <input type="date" className="form-control ms-2" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="input-group w-75 mb-3">
            <select className="form-select ms-1" aria-label="Default select example">
                <option selected>Lieu de provenance</option>
                <option value="1">Niamey</option>
                <option value="2">Tillabéri</option>
                <option value="3">Dosso</option>
                <option value="4">Maradi</option>
                <option value="5">Zinder</option>
                <option value="6">Tahoua</option>
                <option value="7">Diffa</option>
                <option value="8">Agadez</option>
            </select>
        </div>
    </div>
    <div className="buttons ms-n5 w-25 d-flex justify-content-around">
        <button type="submit" className="btn btn-success">Ajouter</button>
        <button type="button" className="btn btn-secondary">Annuler</button>
    </div>
</form>
    </>
}