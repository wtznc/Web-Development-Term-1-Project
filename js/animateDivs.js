/* My own javascript sorting function */

var showAll = ["div1", "div2", "div3", "div4", "div5", "div6", "div7", "div8", "div9", "div10", "div11", "div12"];
var web = ["div2", "div3", "div4"];
var adv = ["div1", "div5", "div6", "div7"];
var mobile = ["div4", "div6", "div12", "div5", "div9", "div10"];
var photo = ["div1", "div8", "div7", "div3", "div9", "div12"];

function showHide(array) {
    if(document.getElementById) {
        var divs = document.getElementsByClassName("hideable");
        for(var i = 0; i < divs.length; i = i + 1) {
            $(divs[i]).fadeOut("slow");
        }
        for(var j = 0; j < array.length; j = j + 1) {
            var divid = document.getElementById(array[j]);
            if(array.length % 3 == 0) {
                document.getElementById(array[j]).className = "col-md-4 col-sm-6 hideable animated slideInUp";
            } else if(array.length % 4 == 0) {
                document.getElementById(array[j]).className = "col-md-3 col-sm-12 hideable animated slideInUp";
            }
            var divid = document.getElementById(array[j]);
            $(divid).fadeIn("slow");
        }
    }
    return false;
}

