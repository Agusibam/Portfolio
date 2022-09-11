export function Home(){

    const d = document;
    const $box= d.querySelector(`#box`);      
    const $Home = d.createElement("div");
    $Home.setAttribute("class", "Home");

    const $Divisor = d.createElement("div");
    $Divisor.setAttribute("class", "Divisor");

    const $Hi = d.createElement("div");
    $Hi.setAttribute("class", "Welcome");
    const $WelcomeText = d.createElement("div");
    $WelcomeText.setAttribute("class", "WelcomeText");

    $Hi.innerHTML = `
            <h1 class="WelcomeH1">Hola!</h1>
            <p class="WelcomeP">Soy Agustín y soy Developer</p>`;

    $WelcomeText.innerHTML = 
            `<p>Bienvenidos a mi Portfolio SPA. Acá encontrarás mis Skills, proyectos y formas de solicitar una entrevista.</p>`
    
    

    if(localStorage.getItem("language")==="ingles"){
        $Hi.innerHTML = `
                <h1 class="WelcomeH1">Hi!</h1>
                <p class="WelcomeP">I´m Agustín and i´m Developer</p>`;
        $WelcomeText.innerHTML =`
                <p>Welcome to my SPA Portfolio. Here you will find my Skills, projects and methods to request an interview.</p>`;

    }
    

    $Home.appendChild($Hi)
    $Home.appendChild($Divisor)
    $Home.appendChild($WelcomeText)
    return $Home;
}
