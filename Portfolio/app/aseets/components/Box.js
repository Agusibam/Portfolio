export function Box(){
    const d = document;
    const $box = d.createElement("div");
    $box.setAttribute("id", "box")
    const $Hola = d.createElement("div");
    $Hola.setAttribute("class", "Welcome");
    $Hola.innerHTML = `
                 <h1>Hola!</h1>
                <p>Soy Agustín y soy developer</p>
            `

    return $box; 
     

}

    




