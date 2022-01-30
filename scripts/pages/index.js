import {photographerFactory} from '/scripts/factories/photographer.js'
import headerProfile from './photographer'

    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        const photographers = await fetch('/data/photographers.json')
        .then(response => response.json())
        .then(data => data)
        // et bien retourner le tableau photographers seulement une fois
        return photographers
    }

    async function displayData(photographers) {
        const photographersSection = document.querySelector(".photographer_section");
        if (photographersSection){
            photographers.forEach((photographer) => {
                const photographerModel = photographerFactory(photographer);
                const userCardDOM = photographerModel.getUserCardDOM();
                photographersSection.appendChild(userCardDOM);
            });
    
        }
    };

    async function index() {
        // Récupère les datas des photographer_section
        const photographersSection = document.querySelector(".photographer_section");

        if (photographersSection){
        const { photographers } = await getPhotographers();
        displayData(photographers);
        }
    };
    
    index();
    headerProfile()
    