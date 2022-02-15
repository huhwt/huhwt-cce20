function showgensPrep() {
    $('#showgensSubA').click(function () {
        showgensMinus('generationsA','.cce_genA');
    });
    $('#showgensAddA').click(function () {
        showgensPlus('generationsA', '.cce_genA');
    });
    $('#showgensSubD').click(function () {
        showgensMinus('generationsD','.cce_genD');
    });
    $('#showgensAddD').click(function () {
        showgensPlus('generationsD', '.cce_genD');
    });
}
function showgensMinus(forID, forClass) {
    var esgV = document.getElementById(forID);
    let vsgV = parseInt(esgV.value);
    let esgVmin = parseInt(esgV.getAttribute("min"));
    let esgVmax = parseInt(esgV.getAttribute("max"));
    vsgV -= 1;
    if (esgVmin > 0 && vsgV < esgVmin ) { vsgV = esgVmin; }
    if (esgVmax > 0 && vsgV > esgVmax ) { vsgV = esgVmax; }
    esgV.value = vsgV.toString();
    let elems = document.querySelectorAll(forClass);
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerText = vsgV.toString();
    }
    return false;
}
function showgensPlus(forID, forClass) {
    var esgV = document.getElementById(forID);
    let vsgV = parseInt(esgV.value);
    let esgVmin = parseInt(esgV.getAttribute("min"));
    let esgVmax = parseInt(esgV.getAttribute("max"));
    vsgV += 1;
    if (esgVmin > 0 && vsgV < esgVmin ) { vsgV = esgVmin; }
    if (esgVmax > 0 && vsgV > esgVmax ) { vsgV = esgVmax; }
    esgV.value = vsgV.toString();
    let elems = document.querySelectorAll(forClass);
    for (let i = 0; i < elems.length; i++) {
        elems[i].innerText = vsgV.toString();
    }
    return false;
}

function prepCollapse() {
    let elems = document.getElementsByClassName('CCE_Theader');
    for ( const elem of elems ) {
        elem.addEventListener( 'click', event => {
            let elemev = event.target;
            togglevis(elemev);
        });
    }
}

function togglevis(helem) {
    let he_name = helem.getAttribute("name");
    let henames = document.getElementsByName(he_name);
    for ( const henelem of henames) {
        if ( henelem != helem) {
            let hevis = henelem.getAttribute("style");
            if (hevis == "display: none") {
                henelem.setAttribute("style", "display: visible");
            } else {
                henelem.setAttribute("style", "display: none");
            }
        }
    }
}

function doAJAX(TAMkey, btnID, getID, doneID, TAMpath, textCompleted, nextText) {
    // $('.cce_disabled').click(function(e){
    //     e.preventDefault();
    // });
    $(function() {
        jQuery.fn.extend({
            disable: function(state) {
                return this.each(function() {
                    var $this = $(this);
                    if($this.is('input, button'))
                        this.disabled = state;
                    else
                        $this.toggleClass('cce_disabled', state);
                });
            }
        });
        
        $('a').disable(true);
        
        $('body').on('click', 'a.cce_disabled', function(event) {
            event.preventDefault();
        });
    });    
    var hrefID = document.getElementById(btnID);
    var ajaxElem = document.getElementById(getID);
    var ajaxElemd = ajaxElem.dataset;
    var ajaxGedcom = ajaxElemd.urlGedcom;
    var doneGedcom = document.getElementById(doneID);
    jQuery.ajax({
        url: ajaxGedcom,
        dataType: 'text',
        data: 'q=' + TAMkey,
        success: function (ret) {
            let ged = JSON.parse(ret);
            let ged0 = ged.gedcom;
            let dataset = {
              "thedata":  [{
                "storeID": "gedcom",
                "nodeData": ged0
            }]
            };
            putDB('wtTAM', 'Gedcom', dataset.thedata);
            localStorage.setItem("actGedcom", "gedcom");
            doneGedcom.innerText = textCompleted;
            hrefID.setAttribute("href", TAMpath);
            hrefID.setAttribute("target", "_blank");
            hrefID.innerHTML = nextText;
            // $('.cce_disabled').click = null;
            $('a').disable(false);
            // hrefID.classList.toggle("xyz_disabled");
        },
        complete: function () {
        },
        timeout: function () {
        }
      });
}
