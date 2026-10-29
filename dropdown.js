let D = 1;

function dropdownMenu(){
    D *= -1;
    if(D < 0){
        document.getElementById("content-holder").style.display = "block";
        document.getElementById("lines").style.display = "none";
        document.getElementById("pointer").style.display = "block";
        document.getElementById("icon").style.borderBottomLeftRadius = "0px"
        document.getElementById("icon").style.borderBottomRightRadius = "0px"
    }else{
        document.getElementById("content-holder").style.display = "none";
        document.getElementById("lines").style.display = "block";
        document.getElementById("pointer").style.display = "none";
        document.getElementById("icon").style.borderBottomLeftRadius = "10px"
        document.getElementById("icon").style.borderBottomRightRadius = "10px"
    }
}