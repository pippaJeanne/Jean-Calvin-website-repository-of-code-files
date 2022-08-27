
     //code for toggle content from W3School (adapted)-->
   
    /*   
       var sect = document.getElementsByClassName("visualizar3");
    var i;
    
    for (i = 0; i < sect.length; i++) {
      sect[i].addEventListener("click", function() {
       // this.classList.toggle("active");
        var panel1 = document.getElementById("see-changes");
        //var arrow = this.querySelector("i");
        var panel = document.getElementById("transformedFR")
        //takes into account the see-changes button     
        if (panel.style.display === "block" || panel1.style.display === "block") {
          panel.style.display = "none";
          panel1.style.display = "none";
         // arrow.classList.remove("up")
         // arrow.classList.toggle("down");
        } else {
          panel.style.display = "block";
         // arrow.classList.remove("down")
         // arrow.classList.toggle("up");
        
        }
    
      });
    } */
     


//code for button to see changes of modernisation ^^

    function see() {
    var btn = document.getElementById("see-changes");
    var usual = document.getElementById("transformedFR");
    if (btn.style.display === "none" && usual.style.display === "block"){
    btn.style.display = "block";
    usual.style.display = "none";
    }else{
    btn.style.display = "none";
    usual.style.display = "block";
    }
    }

  
     
 /*    function full(){
        var none = document.getElementsByClassName("sec-container");
        var div = document.getElementById("transformedFR").outerHTML;
        document.getElementById("reduire").style.display ="block";
        document.getElementById("agrandir").style.display ="none";
    
        var pdf = document.createElement("div");
        pdf.appendChild(div);
        pdf.classList.toggle("full");
        document.querySelector("body").appendChild(pdf);
        none.previousElementSibling.style.display = "none";
        none.style.display ="none";
      }*/
      
    
  // full page and exit full page buttons to print pdf ^^ 
   
  function full(){
    
      document.getElementById("reduire").style.display ="block";
    document.getElementById("agrandir").style.display ="none";
    document.getElementById("voir").style.display ="none";
    var div = document.getElementById("transformedFR").cloneNode(true);
    div.id = "fullpage";
    div.classList.toggle("full");
    var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="none";
    };
    document.querySelector("#page").appendChild(div);
    }
    // see-changes div 
    function full1(){
    
      document.getElementById("voir1").style.display ="none";
      document.getElementById("reduire1").style.display ="block";
    document.getElementById("agrandir1").style.display ="none";
    var div1 = document.getElementById("see-changes").cloneNode(true);
      div1.id = "ch-fullpage";
      div1.classList.toggle("full");
      var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="none";
    };
    document.querySelector("#page").appendChild(div1);
    }
  
  
  
  function goBackToNormal(){
    var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="block";
    };
    document.getElementById("reduire").style.display ="none";
    document.getElementById("agrandir").style.display ="block";
    document.getElementById("voir").style.display ="block";
    while(document.getElementById("fullpage")){
      document.querySelector("#fullpage").remove();
    }
  }
  //btn back for changes div
  function goBack(){
    var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="block";
    };
    document.getElementById("reduire1").style.display ="none";
    document.getElementById("agrandir1").style.display ="block";
    document.getElementById("voir1").style.display ="block";
    while(document.getElementById("ch-fullpage")){
      document.querySelector("#ch-fullpage").remove();
    }
  }
  // Now ES section
  
  function fullES(){
    document.getElementById("reduireES").style.display ="block";
    document.getElementById("agrandirES").style.display ="none";
    var div = document.getElementById("transformedES").cloneNode(true);
    div.id = "ESfullpage";
    div.classList.toggle("full");
    var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="none";
    };
    document.querySelector("#page").appendChild(div);
  }
  
  function goBackES(){
    var bodychild = document.querySelector("#page").children;
    for (let i=0; i<bodychild.length; i++){
       bodychild[i].style.display="block";
    };
    document.getElementById("reduireES").style.display ="none";
    document.getElementById("agrandirES").style.display ="block";
   
    while(document.getElementById("ESfullpage")){
      document.querySelector("#ESfullpage").remove();
    }
  }
  
    
   
  var panelFR = document.getElementById("transformedFR");
  var panelES= document.getElementById("transformedES");
  
  function synchro(){                          //add onscroll="synchro()" in concerned div, i.e. #transformedFR 
      if(panelES.style.display==="block"){
              var scroll1 = panelFR.scrollTop;
              panelES.scrollTop = scroll1;
          }
  }
  function synchro1(){
      if(panelFR.style.display==="block"){
              var scroll2 = panelES.scrollTop;
              panelFR.scrollTop = scroll2;
          }
  }
    
  /*var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }*/ 

        //Code with MDC open / close sections and move menu (Rodelsi)
        
            /** Initialize MDC Web components. */
            // Instantiation
        window.mdc.autoInit();
      
            var nodes = document.querySelectorAll('.mdc-icon-toggle');
            for (var i = 0, node; node = nodes[i]; i++) {
                mdc.iconToggle.MDCIconToggle.attachTo(node);
            }
      
            const visualizar1BotEl = document.querySelector('.visualizar1');
            const visualizar1Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar1BotEl);
            const visualizar1GrupoEl = document.querySelector('.visualizar1grupo');
            visualizar1BotEl.addEventListener('click', () => {
                if (visualizar1GrupoEl.style.display == 'block') {
                    visualizar1GrupoEl.style.display = 'none';
                }
                else {
                    visualizar1GrupoEl.style.display = 'block';
                }
            });
            const visualizar2BotEl = document.querySelector('.visualizar2');
            const visualizar2Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar2BotEl);
            const visualizar2GrupoEl = document.querySelector('.visualizar2grupo');
            visualizar2BotEl.addEventListener('click', () => {
                if (visualizar2GrupoEl.style.display == 'block') {
                    visualizar2GrupoEl.style.display = 'none';
                }
                else {
                    visualizar2GrupoEl.style.display = 'block';
                }
            });
            const visualizar3BotEl = document.querySelector('.visualizar3');
            const visualizar3Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar3BotEl);
            const visualizar3GrupoEl = document.querySelector('.visualizar3grupo');
            visualizar3BotEl.addEventListener('click', () => {
                if (visualizar3GrupoEl.style.display == 'block') {
                    visualizar3GrupoEl.style.display = 'none';
                }
                else {
                    visualizar3GrupoEl.style.display = 'block';
                }
            });
            const visualizar4BotEl = document.querySelector('.visualizar4');
            const visualizar4Bot = mdc.iconButton.MDCIconButtonToggle.attachTo(visualizar4BotEl);
            const visualizar4GrupoEl = document.querySelector('.visualizar4grupo');
            visualizar4BotEl.addEventListener('click', () => {
                if (visualizar4GrupoEl.style.display == 'block') {
                    visualizar4GrupoEl.style.display = 'none';
                }
                else {
                    visualizar4GrupoEl.style.display = 'block';
                }
            });
            
      
            const menu1El = document.querySelector('.mdc-menu1');
            const menu1 = new mdc.menu.MDCMenu(menu1El);
            const SelectEl1 = document.querySelector('.openMenu1');
            SelectEl1.addEventListener('click', (event) => {
                menu1.open = !menu1.open;
            });
      
            const menu2El = document.querySelector('.mdc-menu2');
            const menu2 = new mdc.menu.MDCMenu(menu2El);
            const SelectEl2 = document.querySelector('.openMenu2');
            SelectEl2.addEventListener('click', (event) => {
                menu2.open = !menu2.open;
            });
      
            const menu3El = document.querySelector('.mdc-menu3');
            const menu3 = new mdc.menu.MDCMenu(menu3El);
            const SelectEl3 = document.querySelector('.openMenu3');
            SelectEl3.addEventListener('click', (event) => {
                menu3.open = !menu3.open;
            });
      
            const menu4El = document.querySelector('.mdc-menu4');
            const menu4 = new mdc.menu.MDCMenu(menu4El);
            const SelectEl4 = document.querySelector('.openMenu4');
            SelectEl4.addEventListener('click', (event) => {
                menu4.open = !menu4.open;
            }); 
      
   // Code for functional moving buttons (Yanet)
  
   // declaring varibles

   var up=document.querySelectorAll(".arriba"),
       down=document.querySelectorAll(".abajo"),
       right=document.querySelectorAll(".derecha"),
       left=document.querySelectorAll(".izquierda"),
       diag=document.querySelectorAll(".diagonal"),
       choix=document.querySelectorAll(".icono-opciones1");

       var manu=document.getElementById("manu"),
       bonnet=document.getElementById("bonnet"),
       mod=document.getElementById("mod"),
       es=document.getElementById("es");
       var all = document.getElementsByClassName("inner-cont");

   //hiding the options that need to be hidden on drop-down menu for move div around
   for(opt of choix){opt.addEventListener('click',check)};
   function check(){
       for(var i=0; i < up.length;i++){
           var st = up[i].closest('.inner-cont').style.order;
               if(st==1||st==2){
                 up[i].style.display="none";
           }else{up[i].style.display="block"}
       }
       for(var i=0; i < down.length;i++){
           var st = down[i].closest('.inner-cont').style.order;
               if(st==3||st==4){
                 down[i].style.display="none";
           }else{down[i].style.display="block"}
       }
       for(var i=0; i < right.length;i++){
           var st = right[i].closest('.inner-cont').style.order;
               if(st==2||st==4){
                 right[i].style.display="none";
           }else{right[i].style.display="block"}
       }
       for(var i=0; i < left.length;i++){
           var st = left[i].closest('.inner-cont').style.order;
               if(st==1||st==3){
                 left[i].style.display="none";
           }else{left[i].style.display="block"}
       }
       
   } 
   //z-index ufff
   for(opt of choix){opt.addEventListener('click',function(){
               console.log(all);
               for (el of all){
                   console.log(el);
                   var z = el.style;
                 
              if(el.style.order==1){z.setProperty("z-index","100");}
              if(el.style.order==2){z.setProperty("z-index","99");}
              if(el.style.order==3){z.setProperty("z-index","98");}
              if(el.style.order==4){z.setProperty("z-index","97");}
             

             console.log(el.style.getPropertyValue("z-index"))
           }});  
                 ;}
   
// algorythm for each one of the options (up, down, right, left, diagonal)                          
    //up    
       for(var i=0; i < up.length;i++){
            
        up[i].addEventListener('click', function(){
               console.log(this);
           /* var innerDiv= this.closest("header").nextElementSibling;*/
     var div = this.closest(".inner-cont");                                
           /*console.log(innerDiv);*/

var order = div.style.order;            
console.log(order);
var thisOrder ="";
var nerOr ="";
for (var e=0,el; el = all[e];e++){
if(order==3){
   if (el.style.order==order){
   thisOrder= el;
   console.log(thisOrder);
  }
   if(el.style.order==1){
  nerOr = el; console.log(nerOr);
}
}
else if(order==4){
   if (el.style.order==order){
   thisOrder= el;
   console.log(thisOrder);
  }
   if(el.style.order==2){
  nerOr = el; console.log(nerOr);
}
}

}
nerOr.style.order=order; 
thisOrder.style.order=order-2;

console.log(nerOr,nerOr.style.order);
console.log(thisOrder,thisOrder.style.order);

})            
}

//down 
for(var i=0; i < down.length;i++){
            
            down[i].addEventListener('click', function(){
                   console.log(this);
               /* var innerDiv= this.closest("header").nextElementSibling;*/
            var div = this.closest(".inner-cont");
               /*console.log(innerDiv);*/
 
var order = div.style.order;            
console.log(order);
var thisOrder ="";
var nerOr ="";
for (var e=0,el; el = all[e];e++){
  if(order==1){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==3){
      nerOr = el; console.log(nerOr);
   }
   }
   else if(order==2){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==4){
      nerOr = el; console.log(nerOr);
   }
   }
  
}
thisOrder.style.order=nerOr.style.order;
nerOr.style.order=order; 
   

   console.log(nerOr,nerOr.style.order);
console.log(thisOrder,thisOrder.style.order);


})             
}      

//right
for(var i=0; i < right.length;i++){
            
            right[i].addEventListener('click', function(){
                   console.log(this);
               /* var innerDiv= this.closest("header").nextElementSibling;*/
               var div = this.closest(".inner-cont");
               /*console.log(innerDiv);*/
 
var order = div.style.order;            
console.log(order);
var thisOrder ="";
var nerOr ="";
for (var e=0,el; el = all[e];e++){
  if(order==1){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==2){
      nerOr = el; console.log(nerOr);
   }
   }
   else if(order==3){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==4){
      nerOr = el; console.log(nerOr);
   }
   }
  
}
thisOrder.style.order=nerOr.style.order;
nerOr.style.order=order; 

   console.log(nerOr,nerOr.style.order);
console.log(thisOrder,thisOrder.style.order);

})            
}  

//left
for(var i=0; i < left.length;i++){
            
            left[i].addEventListener('click', function(){
                   console.log(this);
               /* var innerDiv= this.closest("header").nextElementSibling;*/
               var div = this.closest(".inner-cont");
               /*console.log(innerDiv);*/
 
var order = div.style.order;            
console.log(order);
var thisOrder ="";
var nerOr ="";
for (var e=0,el; el = all[e];e++){
  if(order==2){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==1){
      nerOr = el; console.log(nerOr);
   }
   }
   else if(order==4){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==3){
      nerOr = el; console.log(nerOr);
   }
   }
  
}
nerOr.style.order=order; 
   thisOrder.style.order=order-1;

   console.log(nerOr,nerOr.style.order);
   console.log(thisOrder,thisOrder.style.order);

})            
} 
//diag
for(var i=0; i < diag.length;i++){
            
            diag[i].addEventListener('click', function(){
                   console.log(this);
               /* var innerDiv= this.closest("header").nextElementSibling;*/
               var div = this.closest(".inner-cont");
               /*console.log(innerDiv);*/
 
var order = div.style.order;            
console.log(order);
var thisOrder ="";
var nerOr ="";
for (var e=0,el; el = all[e];e++){
  if(order==1){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==4){
      nerOr = el; console.log(nerOr);
   }
   }
   else if(order==2){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==3){
      nerOr = el; console.log(nerOr);
   }
   }
   if(order==3){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==2){
      nerOr = el; console.log(nerOr);
   }
   }
   if(order==4){
       if (el.style.order==order){
       thisOrder= el;
       console.log(thisOrder);
      }
       if(el.style.order==1){
      nerOr = el; console.log(nerOr);
   }
   }
}
thisOrder.style.order=nerOr.style.order;
nerOr.style.order=order; 

   console.log(nerOr,nerOr.style.order);
   console.log(thisOrder,thisOrder.style.order);

})            
}          

   