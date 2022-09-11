export function Techs(){

    const d = document;
    const $Tech = d.createElement("div");
    $Tech.setAttribute("id", "techsss");
    $Tech.setAttribute("class", "techsss");

    const $PrincipalTech = d.createElement("div");
    $PrincipalTech.setAttribute("class", "principal-tech");

    const $TechImg = d.createElement("div");
    $TechImg.setAttribute("class", "tech-img");

    const $PrincipalImg = d.createElement("img");
    $PrincipalImg.setAttribute("src", "./app/aseets/img/Unofficial_JavaScript_logo_2.svg");
    
    
    const $TechInfo = d.createElement("div");
    $TechInfo.setAttribute("class", "tech-info");

    const $TechTitle = d.createElement("h1");
    $TechTitle.setAttribute("class", "text-title");
    $TechTitle.setAttribute("id", "text-title");
    $TechTitle.textContent=`Skills`
    
    const $TechDescript = d.createElement("p");
    $TechTitle.setAttribute("class", "text-descrip");
    $TechTitle.setAttribute("id", "text-descrip");
    $TechDescript.textContent=`Actualmente estás son las tecnologías en las cuales me desempeño`
    if(localStorage.getItem("language")==="ingles"){$TechDescript.textContent=`Currently, these are the technologies in which I operate`} 
    

    $TechImg.appendChild($PrincipalImg);
    
    $TechInfo.appendChild($TechTitle);
    $TechInfo.appendChild($TechDescript);

    $PrincipalTech.appendChild($TechImg);
    $PrincipalTech.appendChild($TechInfo);
    
    const $AllTechs = d.createElement("div");
    $AllTechs.setAttribute("class", "all-techs");

    
    const $FrontEndTechs = d.createElement("div");
    $FrontEndTechs.setAttribute("class", "FrontEndTechs");
    const $BackEndTechs = d.createElement("div");
    $BackEndTechs.setAttribute("class", "BackEndTechs");
    const $DesignTechs = d.createElement("div");
    $DesignTechs.setAttribute("class", "DesignTechs");
    const $VariablesTechs = d.createElement("div");
    $VariablesTechs.setAttribute("class", "VariablesTechs");
    
    
    $AllTechs.appendChild($FrontEndTechs) 
    $AllTechs.appendChild($DesignTechs)  
    $AllTechs.appendChild($BackEndTechs)
    $AllTechs.appendChild($VariablesTechs)


    let technologias =[
        {
        img:"../img/HTML5_logo_resized.svg ", 
        alt: "HTML",
        type: "Variables",
        p: " HTML5, Estructuras WEB básicas, etiquetas de búsqueda, SEO.",
        pi: " HTML5, basic WEB structures, search tags, SEO.",
        },
        {    
        img: "../img/CSS3_logo_and_wordmark.svg",
        alt: "CSS",
        type: "Designe",
        p: "CSS artesanal, animaciones, filtros, media querys.",
        pi: "Handcrafted CSS, animations, filters, media querys.",
        },  
        {
        img:"../img/Bootstrap_logo.svg",
        alt: "Boostrap y Sass",
        type: "Designe",
        p: "Boostrap 5.1 y versiones anteriores. Sass y  Sass React Styling.",
        pi: "Boostrap 5.1 and earlier versions. Sass and Sass React Styling.",
        },    
        {
        img: "/app/aseets/img/Unofficial_JavaScript_logo_2.svg", 
        alt:"JavasScript",
        type: "Front End",
        pi: "With specialization in SPAs and reactive component assembly. Understanding prototype based inheritance, prototype chain, prototype delegation/dynamic despache. Ajax and Fetch requests, Progressive Web Apps.",
        p: "Con especialización en SPAs y el armado de componentes reactivos. Entender la herencia basada en prototipos, la cadena de prototipos, la delegación de prototipos/despache dinámico. Peticiones Ajax y Fetch, Progressive Web Apps",
        },
        {
        img: "../img/React-icon.svg" ,
        alt: "React",
        type: "Front End",
        p: "REAC ipsum dolor sit amet consectetur adipisicing elit. Animi, minima recusandae quo ex cum quam nesciunt quibusdam sequi! Porro, incidunt deserunt ipsam corrupti eum dicta natus rem necessitatibus repellat eni.",
        pi: "",
        }, 
        {
        img: "./app/aseets/img/jest-2.svg",
        alt: "Jest",
        type: "BackEnd",
        p: "",
        pi: "",
        },
        {
        img: "../aseets/img/nodejs-1-logo-svgrepo-com.svg" ,
        alt: "Node",
        type: "BackEnd",
        p: " Manejo de NPM, bases de Datos de Tipo NoSQ, módulos globales, Debuggers, promesas, Websockets, Socket.IO, VPS, despliegue en Producción.",
        pi: " NPM management, NoSQ databases, global modules, Debuggers, promises, Websockets, Socket.IO, VPS, Production deployment.",
        },
        {
        img : ".././express-109.svg", 
        alt: "Express",
        type: "BackEnd",
        p: " Middlewares, Templates Engines, Pug, Ghost, API Rest, API Crud.",
        pi: " Middlewares, Templates Engines, Pug, Ghost, API Rest, API Crud,",
        },
        {
        img : "../git-icon.svg" ,
        alt: "Git y GitHub",
        type: "Variables",
        p: "Controlador de versiones, revisión de repositorios, conocimientos de la red social.",
        pi: "Version controller, repository review, social network knowledge",
        },
        {
        img:"/app/aseets/img/figma.svg",
        alt: "Figma",
        type: "Designe",
        p: "Manejo de plugins como Contrat, Content Reel, Find and Replace, Instance Finder, Rename It.",
        pi: "Plugin management like Contrat, Content Reel, Find and Replace, Instance Finder, Rename It",
        },
        {
        img:"/app/aseets/img/webpack-icon.svg",
        alt: "Webpack",
        type: "BackEnd",
        p: " ",
        pi: " ",
        },
        {
        img:"/app/aseets/img/svelte-svgrepo-com.svg",
        alt: "Svelte",
        type: "Front End",
        p: " Variables reactivas, enlaces bidireccionales, declaraciones, actualización de matrices, eventos personalizados, verificación vinculante, validación de formularios, Http de Svelt.",
        pi: "Reactive variables, bidirectional bindings, declarations, array update, custom events, binding verification, form validation, Svelt's Http.",
        },
        {
        img:"/app/aseets/img/mongodb.svg",
        alt: "MongoDB",
        type: "BackEnd",
        p: " Línea de Comandos, API REST.",
        pi: " Command Line, REST API",
        },
        {
        img:"/app/aseets/img/typescript.svg",
        alt: "TypeScript",
        type: "Front End",
        p: " Conocimientos básicos de qué trata el tipado en TypeScript.",
        pi: " Basic knowledge of what TypeScript typing is all about",
        },
        {
        img:"/app/aseets/img/Adobe_Illustrator_CC_icon.svg",
        alt: "Illustrator",
        type: "Designe",
        p: "Four years of experience using the tool.",
        pi: " Experiesadasdasdasdncia de cuatro años utilizando la herramienta",
        },
    ];


    technologias.forEach(tecnologia =>{
        const $techMiniim = d.createElement("img");
        $techMiniim.setAttribute("src", tecnologia.img);
        $techMiniim.classList.add("pulse")
        

        if(tecnologia.type === "Normal"){$NormalTechs.appendChild($techMiniim)};
        if(tecnologia.type === "Front End"){$FrontEndTechs.appendChild($techMiniim)};
        if(tecnologia.type === "BackEnd"){$BackEndTechs.appendChild($techMiniim)};
        if(tecnologia.type === "Designe"){$DesignTechs.appendChild($techMiniim)};
        if(tecnologia.type === "Variables"){$VariablesTechs.appendChild($techMiniim)};


        $techMiniim.addEventListener("mouseover", ()=>{
        $TechTitle.textContent= tecnologia.alt;
        $PrincipalImg.setAttribute(`src`, tecnologia.img);
        if(localStorage.getItem("language")==="español"){
            $TechDescript.textContent = tecnologia.p}
        if(localStorage.getItem("language")==="ingles"){
        $TechDescript.textContent = tecnologia.pi}

            $PrincipalImg.animate([
            { opacity: '0' },
            { opacity: '1' }],
            { duration: 1000});
            })
    });
    
    $Tech.appendChild($PrincipalTech);



    const $AllTechsFragment = d.createDocumentFragment()
    $AllTechsFragment.appendChild($AllTechs)
    $Tech.appendChild($AllTechsFragment);



    return $Tech;
}



