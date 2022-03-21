console.log('your js file is working ');

// menu button 
let menuBtn = document.getElementById('menuBtn');
// add a event listener on that btn
menuBtn.addEventListener('click', showNav);
function showNav() {
    let navList = document.getElementById('navlist');
    // navList.style.display = 'block';
    // navList.style.top = '0px'

    // navList.classList.toggle('active');
    if (navList.classList.contains('non-active')) {
        navList.classList.toggle('active');
        navList.classList.remove('non-active');
    }
    else {
        navList.classList.remove('active');
        navList.classList.toggle('non-active');
    }

    if (navList.classList.contains('active')) {
        navList.style.display = 'block';
        navList.style.top = '0px';

        menuBtn.style.border ='1px solid #fff'
        

        //  convert menu icon into cros icon
        let top = document.getElementById('top');
        let mid = document.getElementById('mid');
        let bot = document.getElementById('bot');
        // animation to top 
        top.style.animation = 'ease-in 0.2s topRotate forwards';

        // animation in mid
        mid.style.animation = 'ease-in .1s mid forwards';

        // animation to bottom
        bot.style.animation = 'ease-in 0.2s botRotate forwards';
    }
    else {
        navList.style.display = 'none';
        navList.style.top = '-120px';
        let top = document.getElementById('top');
        let mid = document.getElementById('mid');
        let bot = document.getElementById('bot');
         
        menuBtn.style.border ='none'

           // animation to top 
           top.style.animation = 'ease-in 0.2s topRotate2 forwards';

           // animation in mid
           mid.style.animation = 'ease-in .1s mid2 forwards';
   
           // animation to bottom
           bot.style.animation = 'ease-in 0.2s botRotate2 forwards';

    }
}

 navItem = Array.from(document.querySelectorAll('.navItem')).forEach((item)=>{
     item.addEventListener('click', removeNavbar);
 });

function removeNavbar() {
    let navList = document.getElementById('navlist');
    if(innerWidth <= 800){
       console.log('i am less than 800px')
        navList.style.display = 'none';
        navList.style.top = '-120px';
        navList.classList.remove('active');
        showNav();
        // loding line animation
        // lodingLine.style.width ="100%"
    }
    else{
        navList.style.display = 'block';
        navList.style.top = '0px';

    }
}

window.onload = removeLoader;
 function removeLoader(){
setTimeout(fadeout,2000);

}
function fadeout() {
  let preloader= document.getElementById('preloader');
  preloader.style.display ="none";
console.log('done')
}