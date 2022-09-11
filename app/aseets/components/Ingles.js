export function InglesBtn(){

    const d = document;
    const ls = localStorage;
    
    const $InglesBtn = d.createElement("div");
    $InglesBtn.setAttribute("class", "BotonIngles");
    
    
    const $Argentina = d.createElement("img");
    $Argentina.setAttribute("src", "/app/aseets/img/Flag_of_Argentina.svg");
    $Argentina.setAttribute("class", "Argentina");
    
    const $Ingles = d.createElement("img");
    $Ingles.setAttribute("src", "/app/aseets/img/Flag_of_the_United_States.svg");
    $Ingles.setAttribute("class", "Ingles");
    
    const $SwitchBtn = d.createElement("div");
    $SwitchBtn.setAttribute("class", "switch");
    if(ls.getItem("language")=== null){$SwitchBtn.classList.add("arg")}
    if(ls.getItem("language")=== "español"){$SwitchBtn.classList.add("arg")}
    if(ls.getItem("language")=== "ingles"){$SwitchBtn.classList.add("ing")}
    
    const $CircleBtn = d.createElement("div");
    $CircleBtn.setAttribute("class", "left-right");

    $SwitchBtn.appendChild($CircleBtn)
    if(ls.getItem('language')===null){}
    $InglesBtn.appendChild($Argentina)
    $InglesBtn.appendChild($SwitchBtn)
    $InglesBtn.appendChild($Ingles)
    if(ls.getItem("language")=== null){
        ls.setItem("language", "español")
        console.log(ls.getItem("language"))
    }
    //localStorage.clear()
   
    function apear(){
    
        
    
    if(ls.getItem("language")=== "ingles"){
         console.log("nsadfldskfl")
         ls.removeItem('language')
         //ls.setItem("language", "español")
         //console.log(ls.getItem("language"))
         
         location. reload()
     }
     
    if(ls.getItem("language")=== "español"){
        ls.removeItem('language')
        ls.setItem('language', 'ingles')
        $SwitchBtn.classList.replace("arg", "ing")
    //     console.log(ls.getItem("language"))
        location. reload()
     }


    }
    //div.classList.replace("foo", "bar");
    $CircleBtn.addEventListener("click", apear)

    




    
    
    

    
    
    return $InglesBtn;
}