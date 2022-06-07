import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

title = 'sidebar7';



  ngOnInit(): void {
    this.ControlSideBar();
   
  }
  
  ControlSideBar(){
    const body=document.getElementsByTagName("body")[0];
    const sidebar=document.getElementById("sidebar"); 
    const visuales=document.getElementById("visuales");
    const content=document.getElementById("content");
    
    const li=document.getElementsByTagName("li");

    const btnMenu=document.getElementById("btnMenu");
    const btnOpenVisuales=document.getElementById("btnOpenVisuales");
    const btnCloseVisuales=document.getElementById("btnCloseVisuales");
    const btnModo=document.getElementById("btnModo");
  
    btnMenu?.addEventListener("click",()=>{
       sidebar?.classList.toggle("active");
    });
    btnOpenVisuales?.addEventListener("click",()=>{
       visuales?.classList.add("active");
    });
    btnCloseVisuales?.addEventListener("click",()=>{
       visuales?.classList.remove("active");
    });
    btnModo?.addEventListener("change",()=>{
      const sun=document.getElementById("sun");
      const moon=document.getElementById("moon");
      const navBar=document.getElementById("navbar");
      
      content?.classList.toggle("dark");
      sidebar?.classList.toggle("darkmode");
      navBar?.classList.toggle("darkmode");
      visuales?.classList.toggle("darkmode");
      sun?.classList.toggle("active");
      moon?.classList.toggle("active");
      
    });
    for(let i=0;i<li.length;i++){    
      li[i].childNodes[0].addEventListener("click",()=>{
        if(!li[i].classList.contains("conteiner-submenu")){
          for(let i=0;i<li.length;i++){
            li[i].children[0].classList.remove("active");
          }
          li[i].children[0].classList.add("active");
        }else{
          for(let i=0;i<li.length;i++){
             li[i].children[0].classList.remove("active");
          }
          li[i].children[0].children[2].classList.toggle("open");
          li[i].children[1].classList.toggle("expanded");
        }
        
      });
    }
  }
  SetColorLabel(color:string){
    const lg=document.getElementById("sidebar");
   
    const li=document.getElementsByTagName("li");
    for(let i=0;i<li.length;i++){
      li[i].children[0].classList.remove("CL1","CL2","CL3","CL4","CL5","CL6","CL7","CL8","CL9","CL10");
      switch(color){
        case "":
          li[i].children[0].classList.add("CL1");
          break;
        case "#d32f2f":
          li[i].children[0].classList.add("CL2");
          break;
        case "#c2185b":
          li[i].children[0].classList.add("CL3");
          break;
        case "#7b1fa2":
          li[i].children[0].classList.add("CL4");
          break;
        case "#5e35b1":
          li[i].children[0].classList.add("CL5");
          break;
        case "#1e88e5":
          li[i].children[0].classList.add("CL6");
          break;
        case "#039be5":
          li[i].children[0].classList.add("CL7");
          break;
        case "#388e3c":
          li[i].children[0].classList.add("CL8");
          break;
        case "#ffa000":
          li[i].children[0].classList.add("CL9");
          break;
        case "#FFFFFF":
          li[i].children[0].classList.add("CL10");
         
          break;         
      
      }
    }
  }
  
  SetSideBar(color:string){   
    const sidebar=document.getElementById("sidebar");    
    switch(color){
      case "#ffa000":
        sidebar?.setAttribute("style","background-color:#ffa000;color:#FFFFFF");
        this.setColorText("#FFFFFF")
        break;
      case "#d32f2f":
        sidebar?.setAttribute("style","background-color:#d32f2f;color:#FFFFFF");
        this.setColorText("#FFFFFF")
        break;  
      case "#388e3c":
        sidebar?.setAttribute("style","background-color:#388e3c;color:#FFFFFF");
        this.setColorText("#FFFFFF")
        break;
      case "#7b1fa2":
        sidebar?.setAttribute("style","background-color:#7b1fa2;color:#FFFFFF");
        this.setColorText("#FFFFFF")
        break;
      case "#FFFFFF":     
        sidebar?.setAttribute("style","background-color:#FFFFF;color:#757575");
        this.setColorText("#757575");
        break;    
    }
  }
  setColorText(textColor:string){
    const itemMenuLabel=document.querySelectorAll(".item-menu");
    for(let i=0;i<itemMenuLabel.length;i++){
        itemMenuLabel[i].children[0].setAttribute("style","color:"+textColor);
    }
  }
  setNavColor(color:string){
    const navbar=document.getElementById("navbar");   
    navbar?.classList.remove("darkmode","lighten-5");
    switch(color){
    case"#ffa000":
      navbar?.setAttribute("style","background-color:#ffa000;");
      this.setNavColorText("#FFFFFF");
      break;
    case"#d32f2f":
      navbar?.setAttribute("style","background-color:#d32f2f;");
      this.setNavColorText("#FFFFFF");
      break;
    case"#388e3c":
      navbar?.setAttribute("style","background-color:#388e3c;");
      this.setNavColorText("#FFFFFF");
      break;
    case"#7b1fa2":
      navbar?.setAttribute("style","background-color:#7b1fa2;");
      this.setNavColorText("#FFFFFF");
      break;
    case"#FFFFFF":
      navbar?.setAttribute("style","background-color:#FFFFFF;");
      this.setNavColorText("#283046");
      break;     
    }
  }
setNavColorText(color:string){
    const li=document.querySelectorAll(".item-menubar");
    
    
    for(let i=0;i<li.length;i++){
        li[i].children[0].setAttribute("style","color:"+color+"!important;");
    }
}
  
  
  
}
