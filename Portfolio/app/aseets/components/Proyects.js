export function Proyects(){

    const d = document;
    const $Proyects = d.createElement("div");
    
    
    
    
    const $Hola = d.createElement("div");
    $Hola.setAttribute("class", "ProyectsText");
    $Hola.innerHTML = `
                 
                <p>Lo siento, no tengo proyectos grandes para colocar en esta sección. Pero tu compañía o proyecto se vería realmente bien acá </p>
            `
    
    if(localStorage.getItem("language")==="ingles"){ $Hola.innerHTML = `
                 
    <p>Sorry, I don't have any large projects to place in this section. But your company or project would look really good here. </p>
`}

    
    $Proyects.appendChild($Hola)

   

    return $Proyects;
}