
// import { charger } from "./dataFetching";
// eslint-disable-next-line no-undef
export const Pagevide = (): JSX.Element => {
    return <>
        <div className=" bg-primary profile-pelerin d-flex flex-column align-items-center " style={{ height: 'calc(100vh - 140px', overflow: 'scroll', width: '67%'  }}>
        <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Pélérin(s)</p>
                    <h5 style={{ marginTop: -15 }} >0</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Accepté(es)</p>
                    <h5 style={{ marginTop: -15 }} >0</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Rejeté(es)</p>
                    <h5 style={{ marginTop: -15 }} >0</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">En Attente(s)</p>
                    <h5 style={{ marginTop: -15 }} >0</h5>
                </div>

            </div>
            <h1 className="justify-self-center">veuillez choisir une agence</h1>
        </div>
    </>
}
