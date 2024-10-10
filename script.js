var btn = document.getElementById('btn');
var bg = document.querySelector('.box'); 
var body = document.querySelector("body");
var code=document.querySelector('#code');
var copybtn=document.getElementById('copy-btn');
var btn3=document.querySelector("#btn3");
var hidden=document.querySelector("#hidden");
var shade1=document.querySelector("#shade1");
var shade2=document.querySelector("#shade2");
var shade3=document.querySelector("#shade3");
var shade4=document.querySelector("#shade4");
var codeshade1=document.querySelector("#code-shade1");
var codeshade2=document.querySelector("#code-shade2");
var codeshade3=document.querySelector("#code-shade3");
var codeshade4=document.querySelector("#code-shade4");

function generateColor(){
   let hexcode='#';
   for(let i=0;i<6;i++){
      let num=(Math.floor(Math.random()*16));
      let hex=num.toString(16);
      hexcode+=hex;
   }
   return hexcode;

}
var defaultColor=generateColor();
let clickCount=0;
let colorbox=[];
colorbox.push(defaultColor);

window.addEventListener('load', () => {
   bg.style.backgroundColor = defaultColor;
   code.textContent = defaultColor;
   hidden.style.opacity=0;
});

function generateColor(){
   let hexcode='#';
   for(let i=0;i<6;i++){
      let num=(Math.floor(Math.random()*16));
      let hex=num.toString(16);
      hexcode+=hex;
   }
   return hexcode;

}

function showColor(i){
   bg.style.backgroundColor = colorbox[i];
   code.textContent=colorbox[i];
}

btn1.addEventListener('click', () => {
   clickCount+=1;
   colorbox.push(generateColor());
   showColor(clickCount);
   hidden.style.opacity=0;
});

btn2.addEventListener('click', () => {
   if(clickCount>0){
      clickCount-=1;
      showColor(clickCount); 
      hidden.style.opacity=0;
      
   }
});

copybtn.addEventListener('click',()=>{
   navigator.clipboard.writeText(code.textContent);
   alert(`Copied ${code.textContent}`);
})

function generateRGB(num){
   let r=parseInt(num.slice(1,3),16);
   let g=parseInt(num.slice(3,5),16);
   let b=parseInt(num.slice(5,7),16);
   
   return [r,g,b];
}
function generateShade([r,g,b],val){
   
   let rhex=(r-=val).toString(16).padStart(2,'0');
   let ghex=(g-=val).toString(16).padStart(2,'0');
   let bhex=(b-=val).toString(16).padStart(2,'0');
   return `#${rhex}${ghex}${bhex}`

}
function generatePalette(value){
   let [r,g,b]=generateRGB(value);
   let hex=generateShade([r,g,b],-15)
   shade1.style.backgroundColor =hex;
   codeshade1.textContent=hex;

   hex=generateShade([r,g,b],-10)
   shade2.style.backgroundColor =hex;
   codeshade2.textContent=hex;

   hex=generateShade([r,g,b],10)
   shade3.style.backgroundColor =hex;
   codeshade3.textContent=hex;

   hex=generateShade([r,g,b],15)
   shade4.style.backgroundColor =hex;
   codeshade4.textContent=hex;

}


btn3.addEventListener('click',()=>{
   hidden.style.opacity=1;
   hidden.classList.add("visible");
   generatePalette(code.textContent);
})





