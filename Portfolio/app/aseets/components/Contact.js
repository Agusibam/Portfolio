export function Contact(){

    const d = document;

    const $Contact = d.createElement("div");
    $Contact.setAttribute("class", "principal-Contact");
    $Contact.setAttribute("id", "Contact");

    const $form = d.createElement("form");
    $form.setAttribute("action", "https://formsubmit.co/agustinibam@gmail.com");
    $form.setAttribute("target", "_blank");
    $form.setAttribute("method", "POST");

    const $Input1 = d.createElement("input");
    $Input1.setAttribute("name", "name");
    $Input1.setAttribute("type", "text");
    $Input1.setAttribute("placeholder", "Nombre")
    $Input1.setAttribute("required", "")

    const $Input2 = d.createElement("input");
    $Input2.setAttribute("name", "email");
    $Input2.setAttribute("type", "email");
    $Input2.setAttribute("placeholder", "Mail")
    $Input2.setAttribute("required", "")
    
    const $TextArea = d.createElement("textarea");
    $TextArea.setAttribute("class", "textarea");
    $TextArea.setAttribute("id", "message");
    $TextArea.setAttribute("type", "text");
    $TextArea.setAttribute("placeholder", "Detalles")
    $TextArea.setAttribute("required", "")

    const $Input3 = d.createElement("input");
    $Input3.setAttribute("id", "submit");
    $Input3.setAttribute("type", "submit");
    $Input3.setAttribute("value", "Contactame")
    

    const $RedLinks = d.createElement("div");
    $RedLinks.setAttribute("class", "RedLinks");
    
    const $Github = d.createElement("a");
    $Github.setAttribute("class", "Contact");
    $Github.setAttribute("href", "https://github.com/Agusibam");
    $Github.setAttribute("target", "_blank");


    const $GithubImg = d.createElement("img");
    $GithubImg.setAttribute("src", "/app/aseets/img/github-icon-1.svg");

    const $LinkedIn = d.createElement("a");
    $LinkedIn.setAttribute("class", "Contact");
    $LinkedIn.setAttribute("href", "https://www.linkedin.com/in/agust%C3%ADniba%C3%B1ezmesa/");
    $LinkedIn.setAttribute("target", "_blank");


    const $LinkedInImg = d.createElement("img");
    $LinkedInImg.setAttribute("src", "/app/aseets/img/linkedin-svgrepo-com (1).svg");

    const $StackOver = d.createElement("a");
    $StackOver.setAttribute("class", "Contact");
    $StackOver.setAttribute("href", "https://github.com/Agusibam");
    $StackOver.setAttribute("target", "_blank");


    const $StackOverImg = d.createElement("img");
    $StackOverImg.setAttribute("src", "/app/aseets/img/stack-overflow.svg");
    

    $form.appendChild($Input1)
    $form.appendChild($Input2)
    $form.appendChild($TextArea)
    $form.appendChild($Input3)

    const $FormFragment = d.createDocumentFragment()
    
    $FormFragment.appendChild($form)

    $Contact.appendChild($FormFragment)
    
    $Github.appendChild($GithubImg)
    $LinkedIn.appendChild($LinkedInImg)
    $StackOver.appendChild($StackOverImg)


    $RedLinks.appendChild($Github)
    $RedLinks.appendChild($LinkedIn)
    $RedLinks.appendChild($StackOver)

    
    const $RedLinksFragment = d.createDocumentFragment()
    $RedLinksFragment.appendChild($RedLinks)

    if(localStorage.getItem("language")==="ingles"){
        $TextArea.setAttribute("placeholder", "information")
        $Input1.setAttribute("placeholder", "Name")
        $Input3.setAttribute("value", "Contact me")
    }
    $Contact.appendChild($RedLinksFragment)
   
    return $Contact;
}