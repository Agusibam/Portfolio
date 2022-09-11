import { Span } from "/app/aseets/components//Span.js";

export function Nav(){

    const d = document;
    const $nav = d.createElement("nav");
    
    const $iconoHome = d.createElement("a");
    $iconoHome.setAttribute("class", "fa-solid fa-house fa-2xl");
    $iconoHome.setAttribute("href", "#/");
    const $iconoTech = d.createElement("a");
    $iconoTech.setAttribute("class", "fa-solid fa-clipboard-check fa-2xl");
    $iconoTech.setAttribute("href", "#/Tech");
    const $iconoProyects = d.createElement("a");
    $iconoProyects.setAttribute("class", "fa-solid fa-briefcase fa-2xl");
    $iconoProyects.setAttribute("href", "#/Proyects");
    const $iconoContact = d.createElement("a");
    $iconoContact.setAttribute("class", "fa-regular fa-paper-plane fa-2xl");
    $iconoContact.setAttribute("href", "#/Contact");
    const $iconoAboutMe = d.createElement("a");
    $iconoAboutMe.setAttribute("class", "fa-solid fa-image-portrait fa-2xl");
    $iconoAboutMe.setAttribute("href", "#/AboutMe");

    $nav.appendChild($iconoHome)
    $nav.appendChild(Span())
    $nav.appendChild($iconoTech)
    $nav.appendChild(Span())
    $nav.appendChild($iconoProyects)
    $nav.appendChild(Span())
    $nav.appendChild($iconoContact)
    $nav.appendChild(Span())
    $nav.appendChild($iconoAboutMe)
    
    
    return $nav;
}
