var menu_state = false;
var menu1_1 = document.getElementById("menu1-1");
var menu2_1 = document.getElementById("menu2-1");
var menu3_1 = document.getElementById("menu3-1");
var menu1_2 = document.getElementById("menu1-2");
var menu2_2 = document.getElementById("menu2-2");
var menu3_2 = document.getElementById("menu3-2");

var offcanvasElement = document.getElementById("offcanvas");
var offcanvas = new bootstrap.Offcanvas(offcanvasElement);

var translate_amount = "10";

function menu() {
    if (window.innerWidth < 600) {
        translate_amount = "9";
    } else {translate_amount = "10"}
    if (menu_state === false) {
        menu1_1.style.rotate = "45deg";
        menu1_1.style.translate = `0px ${translate_amount}px`;

        menu2_1.style.opacity = "0";
        menu2_1.style.rotate = "90deg";
        menu2_1.style.translate = "-20px 0px";

        menu3_1.style.rotate = "-45deg";
        menu3_1.style.translate = `0px -${translate_amount}px`;
        
        menu1_2.style.rotate = "45deg";
        menu1_2.style.translate = `0px ${translate_amount}px`;

        menu2_2.style.opacity = "0";
        menu2_2.style.rotate = "90deg";
        menu2_2.style.translate = "-20px 0px";

        menu3_2.style.rotate = "-45deg";
        menu3_2.style.translate = `0px -${translate_amount}px`;

        setTimeout(offcanvas_show, 250);

        menu_state = true;
    }
    else if (menu_state === true) {
        menu1_2.style.rotate = "0deg";
        menu1_2.style.translate = "0px 0px";

        menu2_2.style.opacity = "1";
        menu2_2.style.rotate = "0deg";
        menu2_2.style.translate = "0px 0px";

        menu3_2.style.rotate = "0deg";
        menu3_2.style.translate = "0px 0px";

        menu1_1.style.rotate = "0deg";
        menu1_1.style.translate = "0px 0px";

        menu2_1.style.opacity = "1";
        menu2_1.style.rotate = "0deg";
        menu2_1.style.translate = "0px 0px";

        menu3_1.style.rotate = "0deg";
        menu3_1.style.translate = "0px 0px";

        setTimeout(offcanvas_hide, 250);

        menu_state = false;
    }
}

function offcanvas_show() { offcanvas.show(); }
function offcanvas_hide() { offcanvas.hide(); }




// class Header extends HTMLElement {
//     connectedCallback() {
//         this.innerHTML =
//             `
//             <div class="offcanvas offcanvas-start" data-bs-scroll="true" id="offcanvas">
//             <div style="padding-top: 5%; padding-bottom: 5%; margin-bottom: 5%; background-color: var(--black);">
//                 <div class="row">
//                 <div class="col-9">
//                     <h1>menu</h1>
//                 </div>
//                 <div class="col-2" style="padding-top: 1.25%;">
//                     <a id="trigger" onclick="menu()">
//                     <div id="menu-div">  
//                         <div id="menu1-2" class="menu"></div>
//                         <div id="menu2-2" class="menu"></div>
//                         <div id="menu3-2" class="menu"></div>
//                     </div>
//                     </a>
//                 </div>
//                 <div class="col-1"></div>
//                 </div>
//             </div>
//             <div class="row">
//                 <div class="col-1"></div>
//                 <div class="col-11">
//                 <ul>
//                     <li><a href="stuff/programming/programming.html">Programování</a></li>
//                     <li><a href="stuff/electrical_engineering/electical_engineering.html">Elektrotechnika</a></li>
//                     <li><a href="stuff/video_editing/video_editing.html">Video Editing</a></li>
//                     <li><a href="stuff/art/art.html">3D/2D Art</a></li>
//                     <li><a href="stuff/piano/piano.html">Piano</a></li>
//                     <li><a href="stuff/karate/karate.html">Karate</a></li>
//                     <li><a href="stuff/japanese/japanese.html">Japonština</a></li>
//                 </ul>
//                 </div>
//             </div>
//         </div>
        
        
//         <header>
//         <div class="row">
//             <div class="col-1">
//             <a onclick="menu()">
//                 <div id="menu-div" style="padding-left: 15%;">
                
//                 <div id="menu1-1" class="menu"></div>
//                 <div id="menu2-1" class="menu"></div>
//                 <div id="menu3-1" class="menu"></div>
                
//                 </div>
//             </a>
//             </div>
//             <div class="col-10"><h1><a id="main-h1" href="index.html">Oliver Cingl</a></h1></div>
//             <div class="col-1">
        
//             </div>
//         </div>
        
//         </header>
//         `
//     }
// }

// customElements.define("header-bar", Header)