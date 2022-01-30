import { apiUrl } from "../utils/urlApi";

//fabrique URL pour naviguer entre les pages (récupère l'id du profile cliqué pour ensuite affiché le profil))
export const getProfile =  async (id) => {
        const url = `${apiUrl}/profile/${id}`;
        const options = {
            method:"GET",
            headers: {
                "Content-type":"application/json",
            },
            body: JSON.stringify({
                property_one: value_one,
                property_two: value_two
            })
        };
        const response = await fetch(url, options)
        .then(response => response.json())
        .then(json => console.log(json));

        let responseOK = response && response.ok;
        if (responseOK) {
            let data = await response.json();
            // do something with data
            console.log(data);
        }
};

