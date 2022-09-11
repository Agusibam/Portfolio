import { Box } from "./aseets/components/Box.js";
import { Nav } from "./aseets/components/Nav.js";
import { InglesBtn } from "./aseets/components/Ingles.js";
import { Router } from "/app/aseets/components/Routes.js";


export function App(){
   const d = document; 
   const $root = document.getElementById(`root`);
  
   
   $root.innerHTML=null;
   $root.appendChild(Nav());
   $root.appendChild(Box());
   $root.appendChild(InglesBtn());
   

  Router()

}