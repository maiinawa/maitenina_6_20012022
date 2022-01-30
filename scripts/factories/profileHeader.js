// export function profilePhotographer(data) {
//     const {name, city, country, portrait, tagline} = data;
//     const picture = `assets/photographers/${portrait}`;

//     function getProfileHeader(){
        
//         const article = document.createElement( 'article' );
//         article.className="photograph-header"
//         const img = document.createElement( 'img' );
//         img.setAttribute("src", picture)

//         const h2 = document.createElement( 'h2' );
//         h2.textContent = name;

//         const h3 = document.createElement( 'h3' );
//         h3.textContent = `${city}, ${country}` ;
        
//         const slogan = document.createElement( 'p' )
//         slogan.textContent = tagline;

//         article.appendChild(img);
//         article.appendChild(h2);
//         article.appendChild(h3);
//         article.appendChild(slogan);
//         article.appendChild(pForPrice);

//         return (article);

//     }
//     return{ getProfileHeader }

// }
// export default profilePhotographer