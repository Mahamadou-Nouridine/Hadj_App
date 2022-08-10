/* eslint-disable no-undef */

export const Logpage = (): JSX.Element => {
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
            
            <form className="align-middle " action="" style={{marginBottom: '100px'}}>
              <div className="form-goup " >
                <select className="form-select"  >
                  <option selected>Agence</option>
                  <option value="1">Administrateur</option>
                </select>
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-person input-group-text" id="basic-addon1"></span>
                <input type="text" className="border-dark form-control" placeholder="Username/Email" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <div className="input-group mt-3">
                <span className="bi bi-shield-lock-fill input-group-text" id="basic-addon1"></span>
                <input type="password" className="border-dark form-control" placeholder="Password" aria-describedby="basic-addon1" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
}