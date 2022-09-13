export function AboutMe(){

    const d = document;
    const $box= d.querySelector(`#box`);
    
    const $div = d.createElement("div");
    $div.setAttribute("class", "principal-about");
    $div.setAttribute("id", "principal-about");
    const $divNod = d.querySelector("#div")
   
    const $Polaroid = d.createElement("div");
    $Polaroid.setAttribute("class", "polaroid");
    $Polaroid.setAttribute("id", "polaroid");
    const $PolaroidNod = d.querySelector("#polaroid")
    
    $div.appendChild($Polaroid)

    const $FotoCv = d.createElement("img");
    $FotoCv.setAttribute("src", "./app/aseets/img/cvph.jpeg");
    $FotoCv.setAttribute("id", "FotoCV");
    const $FotoCvNod = d.querySelector("#FotoCV")
   
    $Polaroid.appendChild($FotoCv)
    
    const $AboutDescript = d.createElement("p");
    $AboutDescript.setAttribute("class", "about-info");
    $AboutDescript.setAttribute("id", "text-descrip");
    $AboutDescript.innerHTML= 
    `Soy un desarrollador web Full Stack listo para el presente y el futuro mundo IT.
    <br><br>Soy fiel creyente de nunca limitar mi curva de aprendizaje, del código limpio y minimalista y siempre estar en la búsqueda de aplicar las mejores prácticas. 
    <br><br> Cursé dos años la carrera de Ingeniería en sistemas y tengo certificado B2 del British Council. Mi fuerte es JavaScript Vainilla y la metodología SCRUM. 
    <br><br>Hoy estoy mirando ofertas laborales para sumarme a un equipo de trabajo donde pueda aportar ideas para seguir desarrollando y optimizando dentro del área. `
    
    const $AboutDescriptNod = d.querySelector("#text-descrip")

    const $AboutDescript2 = d.createElement("p");
    $AboutDescript2.setAttribute("class", "displayNone");
    $AboutDescript2.setAttribute("id", "text-descrip2");
    $AboutDescript2.innerHTML= 
    `Soy aficionado a la tecnología desde que soy chico. Diseño desde los diescisiete años y aprendí JavaScript por hobby en 2020.
    <br><br>Trabajé durante seis meses como asistente traductor para la empresa alemana SSI Schaefer realizando tareas de de traducción de campo y documentación
    <br><br> Realizo trabajos de diseño gráfico y actualmente trabajo como Data entry para un concesionario de la marca Volkswagen
    <br><br> Actualmente estoy realizando un curso de Swift en Udemy`
    const $AboutDescript2Nod = d.querySelector("#text-descrip2")

    const $left = d.createElement("i");
    $left.setAttribute("class", " fa-solid fa-chevron-left fa-3x");
    $left.classList.add("leftarrow")
    const $right = d.createElement("i");
    $right.setAttribute("class", "fa-solid fa-chevron-right fa-3x");
    $right.classList.add("rightarrow")
   
    if(localStorage.getItem("language")==="ingles"){
        $AboutDescript.innerHTML= 
        `I am a Full Stack web developer ready for the present and future IT world.
        <br><br> I am a true believer in never limiting my learning curve, clean and minimalist code and always looking to apply best practices. 
        <br><br> I studied two years of Systems Engineering and I have a B2 certificate from the British Council. My forte is Vanilla JavaScript and SCRUM methodology. 
        Today I am looking for job offers to join a team where I can contribute ideas to further develop and optimize within the area.
         ` 
        $AboutDescript2.innerHTML= 
        `I've been a technology buff since I was a kid. I've been designing since I was seventeen and learned JavaScript as a hobby in 2020.
        <br><br> I worked for six months as an assistant translator for the German company SSI Schaefer, performing field translation and documentation tasks.
        <br><br> I do graphic design work and currently work as a data entry for a Volkswagen dealership.
        <br><br>I'm currently taking a Swift course on Udemy.`
    }

    $div.appendChild($left)
    $div.appendChild($AboutDescript)
    $div.appendChild($AboutDescript2)
    $div.appendChild($right)

    function slideright(){
        if($AboutDescript.classList.contains("about-info")){
            console.log("ksnlksdaf")
            
            $AboutDescript.classList.add("fadeOutLeft")
            
        setTimeout(function(){
            $AboutDescript.classList.replace("about-info", "displayNone");
            $AboutDescript.classList.remove("fadeOutLeft");
        }, 1000);
        setTimeout(function(){
            $AboutDescript2.classList.add("about-info")
            $AboutDescript2.classList.replace("displayNone", "fadeInRight"); 
        }, 1000);
        setTimeout(function(){
            $AboutDescript2.classList.remove("fadeInRight");    
        }, 2000);


        }
        if($AboutDescript2.classList.contains("about-info")){
            
            $AboutDescript2.classList.add("fadeOutLeft")
            
        setTimeout(function(){
            $AboutDescript2.classList.replace("about-info", "displayNone");
            $AboutDescript2.classList.remove("fadeOutLeft");
            $AboutDescript2.classList.remove("fadeInLeft")

        }, 1000);
        setTimeout(function(){
            $AboutDescript.classList.add("about-info")
            $AboutDescript.classList.replace("displayNone", "fadeInRight");
        }, 1000);
        setTimeout(function(){
            $AboutDescript.classList.remove("fadeInRight"); 
            $AboutDescript2.classList.remove("fadeInLeft")   
        }, 2000);

        }
        }

        function sliderleft(){
            if($AboutDescript.classList.contains("about-info")){
                console.log("ksnlksdaf")
                
                $AboutDescript.classList.add("fadeOutRight")
                
            setTimeout(function(){
                $AboutDescript.classList.replace("about-info", "displayNone");
                $AboutDescript.classList.remove("fadeOutRight");
            }, 1000);
            setTimeout(function(){
                $AboutDescript2.classList.add("about-info")
                $AboutDescript2.classList.replace("displayNone", "fadeInLeft"); 
            }, 1000);
            setTimeout(function(){
                $AboutDescript2.classList.remove("fadeInLeft");    
            }, 2000);
    
    
            }
            if($AboutDescript2.classList.contains("about-info")){
                
                $AboutDescript2.classList.add("fadeOutRight")
                
            setTimeout(function(){
                $AboutDescript2.classList.replace("about-info", "displayNone");
                $AboutDescript2.classList.remove("fadeOutRight");
                $AboutDescript2.classList.remove("fadeInRight")
    
            }, 1000);
            setTimeout(function(){
                $AboutDescript.classList.add("about-info")
                $AboutDescript.classList.replace("displayNone", "fadeInLeft");
            }, 1000);
            setTimeout(function(){
                $AboutDescript.classList.remove("fadeInLeft"); 
                $AboutDescript2.classList.remove("fadeInRight")   
            }, 2000);
    
            }
            }
        
    $right.addEventListener("click", sliderleft)
    $left.addEventListener("click", slideright)

   
    return $div;
}
