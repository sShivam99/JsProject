const randomColor=function()
{
  const hex='0123456789ABCDEF'
  let color='#'

  for(let i=0;i<6;i++)
  {
    color+=hex[Math.floor((Math.random()*16))];
  }
  return color;
};

let intervalID;
const startColorChange=function()
{
  if(!intervalID){
    intervalID=setInterval(colorChange,1000);
  }

  function colorChange(){
    document.body.style.backgroundColor=randomColor();
  }
};

const stopColorChange=function()
{
  clearInterval(intervalID);
  intervalID=null;
};

document.querySelector('#start').addEventListener('click',startColorChange);
document.querySelector('#stop').addEventListener('click',
stopColorChange);