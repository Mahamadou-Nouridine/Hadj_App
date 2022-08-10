// // /* eslint-disable prefer-const */
// // /* eslint-disable no-unused-vars */

// import { agence, pelerin } from "./types";

// import {v4} from 'uuid';
// let agences: agence[];
// agences = [
//     {
//         nom: 'Al-Izza',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/kaaba-makkah-with-crowd-muslim-people-all-world-praying-together_21730-9782.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584890
//     },
//     {
//         nom: 'Al-Hujaj',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/journey-hajj-holy-mecca-high-quality-photo-high-quality-photo_21730-14407.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584891
//     },
//     {
//         nom: 'Al-Barka',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/makkah-kaaba-door-with-verses-from-qoran-holy-book-gold_21730-933.jpg?w=1480',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584892
//     },
//     {
//         nom: 'Al-Haramaine',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/islamic-new-year-concept-with-copy-space_23-2148611776.jpg?w=1800&t=st=1659536440~exp=1659537040~hmac=1af0b00cc87608fba0be430a780f31c80c2d00245d429ceceb01d87b98009d25',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584893
//     },
//     {
//         nom: 'Al-Khairia',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/islamic-new-year-concept-with-copy-space_23-2148611776.jpg?w=1800&t=st=1659536440~exp=1659537040~hmac=1af0b00cc87608fba0be430a780f31c80c2d00245d429ceceb01d87b98009d25',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584894
//     },
//     {
//         nom: 'Anpo',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/beautiful-white-mosque-blue-sky-khasab-oman_181624-39804.jpg?w=1800&t=st=1659536499~exp=1659537099~hmac=07096c68f11ad1e27906dbe10352cded0f483574f0dd663768e571f2468da3ff',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584895
//     },
//     {
//         nom: 'Bab-Macca',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/beautiful-white-mosque-blue-sky-khasab-oman_181624-39804.jpg?w=1800&t=st=1659536499~exp=1659537099~hmac=07096c68f11ad1e27906dbe10352cded0f483574f0dd663768e571f2468da3ff',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584896
//     },
//     {
//         nom: 'Beitoul-Islam',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/mesmerizing-shot-famous-historic-taj-mahal-agra-india_181624-16028.jpg?w=1800&t=st=1659536557~exp=1659537157~hmac=1b49bf5858fc612648305e3dc7c860603f7391285ff231d905f2894830ee34f4',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584897
//     },
//     {
//         nom: 'Bikouli-salam',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/makkah-kaaba-minarets_21730-5776.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584898
//     },
//     {
//         nom: 'Dar-Esalam',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/close-up-islamic-new-year-concept_23-2148611670.jpg?w=1800&t=st=1659536633~exp=1659537233~hmac=9f09ece893d642788df965aa25c997466605d8cd238f221627635c4e23ff39f0',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584899
//     },
//     {
//         nom: 'Jinkai',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/look-from-afar-awesome-buildings-shekh-zayed-grand-mosque_1304-3215.jpg?w=1800&t=st=1659536648~exp=1659537248~hmac=97a17d228ead6aa60761add71d467a7835930ff21308e778af6142c424ed7150',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584840
//     },
//     {
//         nom: 'Makka-Madina',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/3d-render-illustration-mosque-design-with-space-your-text-eid-mv4()arak-celebration_460848-11443.jpg?w=1800&t=st=1659536682~exp=1659537282~hmac=3ca54e555a516a6eecef7e1a9fa5b8d2c0307f337b6deda38663c482329794c0',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584841
//     },
//     {
//         nom: 'Noor Al -Huda',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/muslim-praying-mekkah-with-hands-up_21730-1400.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584842
//     },
//     {
//         nom: 'Oumma-Islam',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/makkah-kaaba-hajj-muslims_21730-6507.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584843
//     },
//     {
//         nom: 'Sabka-Lahia',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/premium-photo/new-images-kaaba-mecca-after-restoration_21730-2621.jpg?w=1800',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584844
//     },
//     {
//         nom: 'Yarda',
//         Description: 'voyagez tranquillement',
//         image: 'https://img.freepik.com/free-photo/top-view-islamic-new-year-concept-with-copy-space_23-2148611768.jpg?w=1800&t=st=1659536893~exp=1659537493~hmac=f003741617b33e2e527eff74368109d77b1e05216204a4b5f4e55bb0300a48ac',
//         id: v4(),
//         pelerins: [],
//         pass: 12345678,
//         number: 99584845
//     }

// ]
//  const charger = async () => {

//     agences.map(async (agence, index) => {
//         let newPelerins: pelerin[];
//         // eslint-disable-next-line prefer-const
//         newPelerins = []
//         let dataFeched= await fetch('https://randomuser.me/api/?results=50');
//         if (dataFeched.status === 200){
//             dataFeched = await dataFeched.json()
//             if (dataFeched.results){
//                 dataFeched.results.map((element: {
//                     registered: {date: string}
//                     location: any; name: { first: string; last: string; }; phone: any; picture: { large: any; }; state: any; dob: { date: string; };
//                 }, index: number) => {
//                     // eslint-disable-next-line prefer-const
//                     let newpelerin: pelerin = {
//                             nom: element.name.first,
//                             prenom: element.name.last,
//                             tel: element.phone,
//                             photo: element.picture.large,
//                             lieuNaissance: element.location.state,
//                             dateNaissance: element.dob.date.slice(0, 10),
//                             accepted : Math.floor(Math.random() * 6) < 3,
//                             passport: (Math.floor(Math.random() * (999999999 - 100000000 + 1) + 100000000)).toString(),
//                             agence : agence.nom,
//                             lieuPovenance : element.location.state,
//                             dateEnregistrement: element.registered.date.slice(0, 10),
//                             id: v4(),
//                             rejected: false,  
//                         }
//                         newPelerins[index]=(newpelerin)
//                         // return {...agence, pelerins : newPelerins }
                    
//                 });
//             }
            
//         }

//             // .then(res => res.json())
//             // .then(data => {
//             // })
//             // // eslint-disable-next-line no-unused-expressions
//              agence.pelerins = newPelerins;
//             console.log(agence.pelerins );
//             localStorage.setItem('agences',JSON.stringify(agences) )
//            console.log('données chargées');
           
//     })
// }


// export {charger};


