import { pelerin } from "./types"

// eslint-disable-next-line no-undef
export const Listpelerins = (props: { pelerins: pelerin[] | undefined, selectPilgrim: any, handleValidate: (id: string) => void, handleReject: (id: string) => void }): JSX.Element => {

    return <>
        <div className="bg-primary info-pelerins" style={{ height: 'calc(100vh - 140px)', width: '67%' }}>
            <div className="bg-light d-flex justify-content-around" style={{ width: '100%', height: 60 }}>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Pélérin(s)</p>
                    <h5 style={{ marginTop: -15 }} >{props.pelerins?.length || 0}</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Accepté(es)</p>
                    <h5 style={{ marginTop: -15 }} >{(props.pelerins?.filter(pelerin=>pelerin.accepted).length)}</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">Rejeté(es)</p>
                    <h5 style={{ marginTop: -15 }} >{(props.pelerins?.filter(pelerin=>pelerin.rejected).length)}</h5>
                </div>
                <div className="d-flex flex-column align-items-center " >
                    <p className="mt-2">En Attente(s)</p>
                    <h5 style={{ marginTop: -15 }} >{(props.pelerins?.filter(pelerin=>!pelerin.accepted&&!pelerin.rejected).length)}</h5>
                </div>

            </div>
            <div className="d-flex justify-content-between">
            <h5 className="m-2">Liste de pélérins</h5>
            <h5 className="m-2">{props.pelerins?props.pelerins[0].agence:0}</h5>
            </div>
            <div className="bg-light d-flex justify-content-around align-items-center" style={{ width: '100%', height: 60 }}>
                <h5 className="">Profile</h5>
                <h5 className="">Nom</h5>
                <h5 className="">Status</h5>
                <h5 className="">Edit</h5>
            </div>
            <div className="pelerins" style={{ height: 'calc(100vh - 300px', overflow: 'scroll' }}>
                {
                    props.pelerins ? (props.pelerins.map((pelerin, index) => !pelerin.rejected ? <div key={index} className="pelerin bg-light d-flex justify-content-around align-items-center  mt-2" style={{ height: 80, borderRadius: '20px', width: '100%' }}>
                        <img onClick={() => props.selectPilgrim(pelerin.id)} className='image-rounded' style={{ borderRadius: '50%', cursor: "pointer" }} width={70} src={pelerin.photo} alt="" />
                        <h6 className="nom " style={{ width: 100 }}>{pelerin.nom}</h6>
                        {pelerin.accepted ? <h1 className="status"><i className="bi bi-person-check-fill"></i></h1>
                            : <h1 className="status"><i className="bi bi-person-x-fill"></i></h1>}
                        {pelerin.accepted ? <button onClick={() => props.handleReject(pelerin.id)} className="edit btn"><h1><i className="bi bi-x-circle-fill text-danger"></i></h1></button> : <button onClick={() => props.handleValidate(pelerin.id)} className="edit btn"><h1><i className="bi bi-check-circle-fill text-success"></i></h1></button>}
                    </div> : undefined)) : undefined
                }

            </div>
        </div>
    </>
}