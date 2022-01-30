import  getParamValue from '../utils/params';
import { photographerFactory } from '/scripts/factories/photographer.js'

function getParams() {
    // Récupère les paramètres dans l'url afin d'afficher les données sur un photographes
    const params = getParamValue('user')
    return params
}
async function getPhotographers() {
    // Récupère fichier photographes
    const photographers = await fetch('/data/photographers.json')
    .then(response => response.json())
    .then(data => data)
    // Retourner le tableau photographers seulement une fois
    return photographers
}

async function getInfos() {
    // Récupère les datas des photographer
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const { photographers } = await getPhotographers();
        return  photographers 
    }
};


async function getProfileByParams(){
    //Utilise le paramètre dans l'url et repère l'id identique dans les datas photographes
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        const params = getParams()
        const dataProfiles = await getInfos()
        const profile = dataProfiles.filter(photographer => photographer.id == params)
        return profile
    }
}

 async function displayHeader(oneprofile) {
     //Prépare le modèle de DOM à implémenter dans le header
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
        oneprofile.forEach((oneprofile) => {
            const headerModel = photographerFactory(oneprofile);
            const headerDOM = headerModel.getProfileHeader(oneprofile);
            photographHeader.appendChild(headerDOM);
        });
    }
};

async function headerProfile() {
    // Affiche les données du profil dans le DOM du header
    const photographHeader = document.querySelector(".photograph-header");
    if (photographHeader){
    const profile = await getProfileByParams();
    displayHeader(profile);
    }
};

export default headerProfile