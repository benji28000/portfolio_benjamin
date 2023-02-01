let choix=0;
function salut(){
    alert("salut moi c'est benjamin perez . Je te souhaite une bonne visite sur mon portfolio !")
}
function dark_mode(){
    var element=document.getElementsByClassName('colonne');
    var txt=document.getElementsByClassName("txt_footer");
    if (choix==0){
        document.body.style.backgroundColor='#000000';
        
        document.getElementById("footer").style.backgroundColor="rgb(167, 161, 161)";
        for(var i=0;i<element.length;i++){
            element[i].style.color="#000000";
        }
        for(var j=0;j<txt.length;j++){
            txt[j].style.color="#000000";
        }
        document.getElementById("txt1").style.color='FFFFFF';
        document.getElementById("img_hover").style.color='FFFFFF';
        document.getElementById("txt3").style.color='FFFFFF';
        document.getElementById("txt4").style.color='FFFFFF';
        document.getElementById("txt5").style.color='FFFFFF';
        document.getElementById("activite").style.color='FFFFFF';
        document.getElementById("linkedin").style.color='000000';
        document.getElementById("txt2").style.color='FFFFFF';
        document.getElementById("dark").innerHTML="White";
        choix=1;
    }
    else if(choix==1){
        document.body.style.backgroundColor='#FFFFFF';
        document.getElementById("footer").style.backgroundColor="#000000";
        for(var i=0;i<element.length;i++){
            element[i].style.color="#FFFFFF";
        }
        for(var j=0;j<txt.length;j++){
            txt[j].style.color="#FFFFFF";
        }
        document.getElementById("txt1").style.color='000000';
        document.getElementById("txt3").style.color='000000';
        document.getElementById("img_hover").style.color='000000';
        document.getElementById("txt4").style.color='000000';
        document.getElementById("txt5").style.color='000000';
        document.getElementById("linkedin").style.color='FFFFFF';
        document.getElementById("activite").style.color='000000';
        document.getElementById("txt2").style.color='000000';
        document.getElementById("dark").innerHTML="Dark";
        choix=0;
    }

}
function txt(){
    document.getElementById("img_hover").style.visibility="visible";
}
function txt_fin(){
    document.getElementById("img_hover").style.visibility="hidden";
}