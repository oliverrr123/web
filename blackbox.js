if (screen.width <= 450) {
    var container_xs = document.getElementsByClassName("container-xs");
    var blackbox_xs = document.getElementsByClassName("blackbox-xs");
    var txt_xs = document.getElementsByClassName("container-xs-txt");

    var container_sm = document.getElementsByClassName("container-sm");
    var blackbox_sm = document.getElementsByClassName("blackbox-sm");
    var txt_sm = document.getElementsByClassName("container-sm-txt");

    var container_md = document.getElementsByClassName("container-md");
    var blackbox_md = document.getElementsByClassName("blackbox-md");
    var txt_md = document.getElementsByClassName("container-md-txt");

    var container_xl = document.getElementsByClassName("container-xl");
    var blackbox_xl = document.getElementsByClassName("blackbox-xl");
    var txt_xl = document.getElementsByClassName("container-xl-txt");


    for (var x=0; x < container_xs.length; x++) {
        container_xs[x].innerHTML = `
        <div class="container-txt container-xs-txt">
            ${txt_xs[x].innerHTML}
        </div>
        <div class="blackbox" id="blackbox-phone">
            ${blackbox_xs[0].innerHTML}
        </div>
        `;
    }

    for (var x=0; x < container_sm.length; x++) {
        container_sm[x].innerHTML = `
        <div class="container-txt container-sm-txt">
            ${txt_sm[x].innerHTML}
        </div>
        <div class="blackbox" id="blackbox-phone">
            ${blackbox_sm[0].innerHTML}
        </div>
        `;
    }

    for (var x=0; x < container_md.length; x++) {
        // console.log(x);
        // console.log(blackbox_md[x]);
        // console.log(blackbox_md[0]);
        // console.log(container_md[x]);
        // console.log(txt_md[x]);
        console.log(txt_md);
        console.log("-");
        container_md[x].innerHTML = `
        <div class="container-txt container-md-txt">
            ${txt_md[x].innerHTML}
        </div>
        <div class="blackbox" id="blackbox-phone">
            ${blackbox_md[0].innerHTML}
        </div>
        `;
    }

    for (var x=0; x < container_xl.length; x++) {
        container_xl[x].innerHTML = `
        <div class="container-txt container-xl-txt">
            ${txt_xl[x].innerHTML}
        </div>
        <div class="blackbox" id="blackbox-phone">
            ${blackbox_xl[0].innerHTML}
        </div>
        `;
    }
}