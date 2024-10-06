 // Open and Close Modal
 const modalBtns = document.querySelectorAll('.js-btn-buy')
 const modal = document.querySelector('.js-modal')
 const modalClose = document.querySelector('.js-close-modal')
 const modalContent = document.querySelector('.js-modal-content')

 function showBuyTickets(){
     modal.classList.add('open')
 }

 function HideBuyTickets(){
     modal.classList.remove('open')
 }
 for (const modalBtn of modalBtns){
     modalBtn.addEventListener('click', showBuyTickets)
 }
     modalClose.addEventListener('click', HideBuyTickets)
     modal.addEventListener('click', HideBuyTickets)
     modalContent.addEventListener('click', function(event){
     event.stopPropagation()
 })

 // Mobile Menu
 const header = document.getElementById('header')
 const mobileMenu = document.getElementById('js-button-menu')
 const headerHight = header.clientHeight
// Open Mobile Menu
mobileMenu.onclick = function(){
    const isClose = header.clientHeight == headerHight
    if (isClose){
        header.style.height = 'auto'
    } else{
        header.style.height = null
    }
}
// Close Mobile Menu
var menuItems = document.querySelectorAll('.nav-bar li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++){
    var menuItem = menuItems[i]
    menuItem.onclick = function(event){
        var isParent = this.nextElementSibling && this.nextElementSibling.classList.contains('nav-more')
        console.log(isParent)
        if (!isParent){
            header.style.height = null
        } else {
            event.preventDefault()
        }
    }
}
