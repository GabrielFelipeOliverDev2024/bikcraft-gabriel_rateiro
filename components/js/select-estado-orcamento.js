function category(c) {

    let item = document.getElementById("item-" + c).innerHTML;

    document.getElementById("estado").value = item;

}

function dropdown(p) {

    let e = document.getElementsByClassName("dropdown")[0];
    let d = ["block","none"]
    
    e.style.display = d[p];

    var t = ["0px", "0px, -10px"]
    setTimeout(function (params) {
        
        e.style.transform = "translate("+t[p]+")";
        
    }, 0)

}
