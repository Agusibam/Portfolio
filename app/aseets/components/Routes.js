import { Home } from "./Home.js";
import { Techs } from "./Techs.js";
import { Proyects } from "./Proyects.js";
import { Contact } from "./Contact.js";
import { AboutMe } from "./AboutMe.js";



const Router = (route) =>{
    const d= document
    const $box= d.querySelector(`#box`); 
    let{hash}= location;
    $box.innerHTML=null;
    if(!hash|| hash ==="#/") {
        $box.appendChild(Home())}
    else if(hash.includes("#/Proyects")){
    $box.appendChild(Proyects())}
    else if(hash.includes("#/Tech")){
    $box.appendChild(Techs())}
    else if(hash.includes("#/Contact")){
        $box.appendChild(Contact())}
    else if(hash.includes("#/AboutMe")){
    
        $box.appendChild(AboutMe())}
}


export {Router}






