import { pelerin } from "./types";

// eslint-disable-next-line no-undef
export const Pelerinattente = (props: { pelerin: pelerin, handleValidate: (id:string) => void, handleReject: (id:string) => void , pilgrimSelect: (id: string) => void
// eslint-disable-next-line no-undef
}): JSX.Element => {
    return <>
        {!props.pelerin.rejected&&!props.pelerin.accepted? <div className="pelerin d-flex justify-content-around align-items-center text-white  mt-2" style={{ height: 60, borderRadius: '20px', width: '100%', backgroundColor:'#4A5459' }}>
            <img  className='image-rounded' style={{ borderRadius: '50%'}} width={50} src={props.pelerin.photo} alt="" />
            <h6 className="nom " style={{ width: 100 }}>{props.pelerin.nom}</h6>
            <h6 className="nom-agence " style={{ width: 100 }}>{props.pelerin.agence}</h6>
            <div className="d-flex">

                <h4 onClick={()=> props.handleValidate(props.pelerin.id)} style={{ cursor: 'pointer' }}><i className="bi bi-check-circle-fill text-success"></i></h4>
                <h4 onClick={()=> props.handleReject(props.pelerin.id)} style={{ cursor: 'pointer' }}><i className="bi bi-x-circle-fill text-danger"></i></h4>
            </div>
        </div>: null}
    </>
}