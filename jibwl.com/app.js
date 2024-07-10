let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
}
let refreshInterval = setInterval(()=> {next.click()}, 3000);
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
    // 
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(()=> {next.click()}, 3000);

    
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=>{
         active = key;
         reloadSlider();
    })
})
window.onresize = function(event) {
    reloadSlider();
};


document.getElementById('menu-button').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    // menu.classList.add('smallscrndown')
    menu.classList.remove('smallscrn')

   let a = menu.classList.contains('smallscrn');
   if(a){
    menu.classList.add('smallscrn')
   }else{
    menu.classList.remove('smallscrn')
   }
   console.log(a)
    // menu.style.transform="translateX(0%)"
    
  });

//   feather.replace();
document.getElementById('service-dropdown').addEventListener('click', function () {
    var menu = document.getElementById('dropdown-menu');
    
    menu.classList.toggle('hidden');
  });


//   feather.replace();