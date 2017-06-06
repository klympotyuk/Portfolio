window.onload=function(){
    
    var minMenulink=document.getElementsByClassName("min-menu-btn__link");
    var click=document.getElementById("mob-menu");
    
    for(var i=0;i<minMenulink.length;i++){
        minMenulink[i].addEventListener("click",function(){
            click.checked="";
        })
    }
    
    var canvas = document.getElementsByClassName("canvas")[0];
    var context = canvas.getContext("2d");
    var myColor= "black";
       
    document.getElementById("color").oninput = function(){
        myColor=this.value;
    }
    canvas.onmousedown = function(event){
        canvas.onmousemove = function(event){
            var x = event.offsetX;
            var y = event.offsetY;
            context.fillRect(x-5,y-5,5,5);
            context.fillStyle = myColor;
         }
        canvas.onmouseup = function(){
            canvas.onmousemove = null;
        }
    }    
}