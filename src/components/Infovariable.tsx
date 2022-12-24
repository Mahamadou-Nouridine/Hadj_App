


import { Agenceform } from "./Agenceform"
import { Listpelerins } from "./Listpelerins"
import { Pagevide } from "./Pagevide"
import { Profileagence } from "./Profileagenge"
import { Profilepelerin } from "./Profilepelerin"
import { agence, pelerin } from "./types"

// eslint-disable-next-line no-undef
export const Infovariable = (props: { affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform' | 'Profileagence' | undefined | null, pelerin: pelerin | undefined, pelerins: pelerin[] | undefined, pilgrimSelect: any, handleValidate: (id: string) => void, handleReject: (id: string) => void, setAffichage: (affichage: "Listpelerins" | 'Pelerinform' | 'Profilepelerin' | 'Agenceform' | 'Profileagence' | undefined | null) => void, addAgence: (nom: string, number: string, Description: string, image: string | ArrayBuffer, pass: number | string) => void, selectedAgence: agence | undefined, displayingAgence: agence | undefined, handleAgenceDelete: (id: string) => void }): JSX.Element => {

    return <>
        {
            props.affichage === 'Listpelerins'
                ? <Listpelerins agenceName={props.selectedAgence ? props.selectedAgence?.nom : ''} handleValidate={props.handleValidate} handleReject={props.handleReject} selectPilgrim={props.pilgrimSelect} pelerins={props.pelerins} />
                : props.affichage === 'Profilepelerin'
                    ? <Profilepelerin setAffichage={props.setAffichage} handleValidate={props.handleValidate} handleReject={props.handleReject} pelerin={props.pelerin} />
                    : props.affichage === 'Agenceform'
                        ? <Agenceform setAffichage={props.setAffichage} addAgence={props.addAgence} />
                        : props.affichage === 'Profileagence'
                            ? <Profileagence displayingAgence={props.displayingAgence} agence={props.selectedAgence} setAffichage={props.setAffichage} handleAgenceDelete={props.handleAgenceDelete} />
                            : <Pagevide />

        }

    </>
}