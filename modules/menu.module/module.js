// Website header variables

var menuDesktopParentItems = document.querySelectorAll('.menu--desktop .menu__item--has-submenu');
var menuMobileParentItems = document.querySelectorAll('.menu--mobile .menu__item--has-submenu');

// Desktop menu

if (menuDesktopParentItems) {
  Array.prototype.forEach.call(menuDesktopParentItems, function(el){

    // Handles hover over

    el.addEventListener('mouseover', function(){
      this.classList.add('menu__item--open');
    });

    // Handles hover out

    el.addEventListener('mouseout', function(){
      document.querySelector('.menu__item--open').classList.remove('menu__item--open');
    });
  });
}

// Mobile menu

// Handles toggle of submenus

if (menuMobileParentItems) {
  Array.prototype.forEach.call(menuMobileParentItems, function(el){

      el.addEventListener('click', function(){
      if (this.classList.contains('menu__item--open')) {
        this.classList.remove('menu__item--open');
      }
      else {
        this.classList.add('menu__item--open');
      }
    });
  });
}

