function initGrid() {
    var colors = [];
    var range = ["00", "33", "66", "99", "cc", "ff"];

    for (var r = 0; r < range.length; r++) {
        for (var g = 0; g < range.length; g++) {
            for (var b = 0; b < range.length; b++) {
                colors.push("#" + range[r] + range[g] + range[b]);
            }
        }
    }
    console.log(colors);
    var parent = document.getElementById('colors');

    for(i in colors){
        var child = document.createElement('div');
        child.style.width = "20px";
        child.style.height = "20px";
        child.style.cssFloat = "left";
        child.style.border = "1px solid black";
        child.style.margin = "1px";
        // child.style.className="choice";
        child.style.backgroundColor = colors[i];
        parent.appendChild(child);
        child.onclick = color;
    }
}
function color(){
    var toShow = document.getElementById('selected');
    var str = (this.style.backgroundColor).toString();
    toShow.style.backgroundColor = str;
    toShow.innerHTML = str;
    toShow.style.color = "black";
    if(str==="rgb(0, 0, 0)"){
        toShow.style.color = "white";
    }
}
window.onload = function () {
    initGrid();
}
window.onload = function () {
    initGrid();
}
