const footerMenuParentItems = document.querySelectorAll('.footer_menu__item--has-submenu');

if(footerMenuParentItems) {
  footerMenuParentItems.forEach((item)=> {
    item.addEventListener('click', ()=> {
      const submenu = item.querySelector('.footer_menu__submenu');
      submenu.classList.toggle('hidden')
      submenu.classList.toggle('flex')
    })
  })
}