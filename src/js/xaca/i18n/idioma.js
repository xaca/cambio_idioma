import Polyglot from "node-polyglot";
// import your language objects
import english from "./locale/en/en.js";
import espanol from "./locale/es/es.js";

//https://codesandbox.io/s/q8jj39jmp4?file=/src/index.js:1754-1779

let polyglot;
let btn_es, btn_en;

window.onload = function() {
  btn_en = document.getElementById("btn_en");
  btn_es = document.getElementById("btn_es");
  control_idioma();
  btn_en.addEventListener("click",actualizarIdioma);
  btn_es.addEventListener("click",actualizarIdioma);
}
function actualizarIdioma(event){
  //console.log(event.target.attributes[1].nodeValue);
  cambiarIdioma(event.target.attributes[1].nodeValue);
}
function control_idioma(){
    polyglot = new Polyglot();
    polyglot.extend(getLocale());
    cargarTextos();
}

function cambiarIdioma(locale){
    if(locale == "en")
    {
        polyglot.locale("en");
        polyglot.extend(english);
    }  
    if(locale == "es")
    {
        polyglot.locale("es");
        polyglot.extend(espanol);
    }  
    cargarTextos();
}

function isSpanish(){
    // Define the users location with the object the browser provides for you
    const userLanguage = navigator.language;
    // Stores the other language you support
    const spanish = "es";

    return userLanguage.includes(spanish);
}

// Locale function - gets the users language preferences
function getLocale() {
    
    // Define the language object you'll be returning
    let languageObj;

    if (isSpanish()) {
      languageObj = espanol;
    } else {
      languageObj = english;
    }

    return languageObj;
  }

  function cargarTextos(){
    
    try{
      document.getElementById("xaca_menu_1").innerHTML = polyglot.t("xaca_menu_1");
      document.getElementById("xaca_menu_2").innerHTML = polyglot.t("xaca_menu_2");
      document.getElementById("xaca_menu_3").innerHTML = polyglot.t("xaca_menu_3");
      document.getElementById("xaca_menu_4").innerHTML = polyglot.t("xaca_menu_4");
      document.getElementById("xaca_titulo").innerHTML = polyglot.t("xaca_titulo");
      document.getElementById("xaca_texto").innerHTML = polyglot.t("xaca_texto");
    }catch(e){
      console.warn("Polyglot",e);
    }
    

    
  }

  export {control_idioma,cambiarIdioma,isSpanish};