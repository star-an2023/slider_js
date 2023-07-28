const arrowRight=document.querySelector("#right-button");
const arrowLeft=document.querySelector("#left-button"); 
const mainImage=document.querySelector("#main-image"); 
const button1=document.querySelector("#button1"); 
const button2=document.querySelector("#button2"); 
const button3=document.querySelector("#button3"); 

const City=document.querySelector("#City"); 
const ApartmentArea=document.querySelector("#ApartmentArea"); 
const RepairTime=document.querySelector("#RepairTime"); 
const RepairCost=document.querySelector("#RepairCost"); 

const CityArray=["Rostov-on-Don LCD admiral","Sochi Thieves","Rostov-on-Don Patriotic"];
const ApartmentAreaArray=["81 m2","105 m2","93 m2"]; 
const RepairTimeArray=["3.5 months","4 months","3 months"];
const RepairCostArray=["Upon request","Upon request","Upon request"];

const round1=document.querySelector("#point1"); 
const round2=document.querySelector("#point2"); 
const round3=document.querySelector("#point3"); 
let numberPage;

document.addEventListener('DOMContentLoaded', () => {
    localStorage.getItem("numberPage");
    if(isNaN(numberPage) || numberPage==0 || numberPage == undefined) numberPage=1;
    changePage(numberPage);    
});

arrowRight.addEventListener(`click`, async () => {
            localStorage.getItem("numberPage",numberPage);
            if(isNaN(numberPage) || numberPage==0 || numberPage == undefined) numberPage=1
                     else numberPage++;
            if(numberPage>3){numberPage=1};
            changePage(numberPage);
});

arrowLeft.addEventListener(`click`, async () => {
    localStorage.getItem("numberPage",numberPage);
    if(isNaN(numberPage) || numberPage==0 || numberPage == undefined) numberPage=1
             else numberPage--;
    if(numberPage<1){numberPage=3};
    changePage(numberPage);
});

function changePage(numberPage) {
    mainImage.innerHTML=`<img src="./images/${numberPage}.jpg" alt="">`;
    City.textContent=CityArray[numberPage-1];
    ApartmentArea.textContent=ApartmentAreaArray[numberPage-1];
    RepairTime.textContent=RepairTimeArray[numberPage-1];
    RepairCost.innerHTML=RepairCostArray[numberPage-1];
    switch (numberPage) {
        case 1: 
            button1.classList.remove("header-button");
            button2.classList.remove("header-buttonActive");
            button3.classList.remove("header-buttonActive");

            button1.classList.add("header-buttonActive");
            button2.classList.add("header-button");
            button3.classList.add("header-button");

            round1.innerHTML=`<img src="./images/pointWhite.svg" alt="">`;
            round2.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            round3.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            break;
        case 2:
            button1.classList.remove("header-buttonActive");
            button2.classList.remove("header-button");
            button3.classList.remove("header-buttonActive");

            button1.classList.add('header-button');
            button2.classList.add('header-buttonActive');
            button3.classList.add('header-button');

            round1.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            round2.innerHTML=`<img src="./images/pointWhite.svg" alt="">`;
            round3.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            break;
        case 3:
            button1.classList.remove("header-buttonActive");
            button2.classList.remove("header-buttonActive");
            button3.classList.remove("header-button");

            button1.classList.add('header-button');
            button2.classList.add('header-button');
            button3.classList.add('header-buttonActive');

            round1.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            round2.innerHTML=`<img src="./images/pointBlack.svg" alt="">`;
            round3.innerHTML=`<img src="./images/pointWhite.svg" alt="">`;
            break;        
    }
    localStorage.setItem("numberPage",numberPage);

};

button1.addEventListener(`click`, () => {changePage(1)});
button2.addEventListener(`click`, () => {changePage(2)});
button3.addEventListener(`click`, () => {changePage(3)});

round1.addEventListener(`click`, () => {changePage(1)});
round2.addEventListener(`click`, () => {changePage(2)});
round3.addEventListener(`click`, () => {changePage(3)});
