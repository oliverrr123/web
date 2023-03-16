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
