export function photographerFactory(data) {
    const { name, portrait, id, city, country, tagline, price} = data;

    const picture = `assets/photographers/${portrait}`;
    function getProfileHeader(){
        
        const article = document.createElement( 'article' );
        article.className="photograph-header"
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}` ;
        
        const slogan = document.createElement( 'p' )
        slogan.textContent = tagline;
        
        const pForPrice = document.createElement( 'p' )
        pForPrice.textContent = `${price}€/jour`

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(slogan);
        article.appendChild(pForPrice);

        return (article);

    }

    function getUserCardDOM() {
        const a = document.createElement ('a');
        a.setAttribute("href",`./photographer.html?user=${id}`);

        const article = document.createElement( 'article' );

        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)


        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const h3 = document.createElement( 'h3' );
        h3.textContent = `${city}, ${country}` ;
        
        const slogan = document.createElement( 'p' )
        slogan.textContent = tagline;

        const pForPrice = document.createElement( 'p' )
        pForPrice.textContent = `${price}€/jour`

        a.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(h3);
        article.appendChild(slogan);
        article.appendChild(pForPrice);

        return (a);
    }
    
    return { getUserCardDOM, getProfileHeader }
}
export default photographerFactory

