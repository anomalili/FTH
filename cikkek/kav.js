

function ID(elem) {
    return document.getElementById(elem);
}
function $(elem) {
    return document.querySelectorAll(elem);
}

function CLASS(elem) {
    return document.getElementsByClassName(elem);
}

window.addEventListener("load", init);

var txt = "";
function init() {

    var tomb = [];
    fetch('kav.json')
        .then(res => res.json())
        .then((out) => {
            console.log('Output: ', out);

            tomb = out;
            /* console.log(tomb);
        
 */            megjelenit(tomb);

        }).catch(err => console.error(err));



}

function megjelenit(tomb) {

    tomb.forEach(element => {
        for (const key in element) {
            if (key.includes("szerzo")) {

                txt += `<section class = "szerzo"><span>${element[key]}</span></section>`
                document.querySelectorAll('article p')[0].innerHTML = txt;
            }

            if (key.includes("cimek")) {
                txt += `<section class = "cim"><span><b>${element[key]}</b></span></section>`
                /* txt += key  */
                /*  document.querySelectorAll('article h1')[0].innerHTML = txt */

            }


            if (key.includes("tema")) {
                console.log(element[key])

                for (const key2 in element[key]) {


                    if (key2.includes("bekezdes")) {
                        txt += `<section class="alcim"><span>${element[key][key2]}</span></section>`
                        document.querySelectorAll('bevezeto p')[0].innerHTML = txt

                    }

                }
            }
        }
    }
    )

};