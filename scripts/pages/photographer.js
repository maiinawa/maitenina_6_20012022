import  getParamValue from '../utils/params';
import { photographerFactory } from '/scripts/factories/photographer.js'

function getParams() {
    // Récupère les paramètres dans l'url afin d'afficher les données sur un photographes
    const params = getParamValue('user')
    return params
}
async function getPhotographers() {
    // Penser à remplacer par les données récupérées dans le json
    const photographers = await fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => data)
    // et bien retourner le tableau photographers seulement une fois
    return photographers
}

async function getInfos() {
    // Récupère les datas des photographer_section
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const { photographers } = await getPhotographers();
        return  photographers 
    }
};


async function getProfileByParams(){
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const params = getParams()
        const dataProfiles = await getInfos()
        const profile = dataProfiles.filter(photographer => photographer.id == params)
        return profile
    }
}

 async function displayHeader(oneprofile) {
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){

        oneprofile.forEach((oneprofile) => {
            const headerModel = photographerFactory(oneprofile);
            const headerDOM = headerModel.getProfileHeader(oneprofile);
            photographHeader.appendChild(headerDOM);
        });

    ;

    }
};
// async function displayHeader() {
//     const oneProfile = await getProfileByParams()
//     console.log(oneProfile);
//     const photographHeader = document.querySelector(".photograph-header");
//     if (photographHeader){
//             const headerModel = photographerFactory(oneProfile);
//             console.log(headerModel);
//             const headerDOM = headerModel.getProfileHeader(oneProfile);
//             photographHeader.appendChild(headerDOM);
//             console.log(headerDOM);
//     ;

//     }
// };

async function headerProfile() {
    // Récupère les datas des photographer_section
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
    const profile = await getProfileByParams();
    displayHeader(profile);
    console.log(profile);
    }
};


export default headerProfile