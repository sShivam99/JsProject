const button=document.querySelectorAll('.button');
const body=document.querySelector('body');

button.forEach((button)=>{
  button.addEventListener('click',
  (e)=>{
    const color=e.target.id;
    changeColor(color);
    function changeColor(color){
      body.style.backgroundColor=color;
    }
  })
})
