let menuIcon = document.querySelector(".humbarger");
let RightNavList = document.querySelector(".rightlist");

let isVisible = true;

menuIcon.addEventListener("click", () => {
    if (isVisible==true) {
        RightNavList.style.transform = "translateY(0%)"; 
        isVisible=false;       
    }
    else{
        RightNavList.style.transform = "translateY(-300%)"; 
        isVisible=true
    }
})