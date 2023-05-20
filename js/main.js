$(document).ready(function() {
  $(document).on("change", ".hs-fieldtype-checkbox .inputs-list li input[type=checkbox]", function () {
    $(this).parent()[this.checked ? "addClass" : "removeClass"]("checked");
  });
});

(function () {
  // Polyfill for NodeList.prototype.forEach() in IE
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;
      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  // Variables
  var nav = document.querySelector('.header__navigation');
  var langSwitcher = document.querySelector('.header__language-switcher');
  var search = document.querySelector('.header__search');
  var allToggles = document.querySelectorAll('.header--toggle');
  var navToggle = document.querySelector('.header__navigation--toggle');
  var burgerBar = document.querySelector('.burger-bar')
  var langToggle = document.querySelector('.header__language-switcher--toggle');
  var searchToggle = document.querySelector('.header__search--toggle');
  var closeToggle = document.querySelector('.header__close--toggle');
  var headerLogoMain = document.querySelector(".header__logo--main");
  var headerLogoSecondary = document.querySelector(".header__logo--secondary");
  var burgerItems = document.querySelector('.header__navigation--toggle').children
  var allElements = document.querySelectorAll(
    '.header--element, .header--toggle'
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  
  var logo = document.querySelector("#hs-link-site_logo_hs_logo_widget")
  // var hatMenuWrapper = document.querySelector(".header-hat-wrapper");
  // var secondaryMenu = document.querySelector(".secondary-menu");

  // let currentPage = window.location.href;

  // Functions

  // Function for executing code on document ready
  function domReady(callback) {
    if (['interactive', 'complete'].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener('DOMContentLoaded', callback);
    }
  }


  // Function for toggling mobile navigation
  function toggleNav() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });
    console.log(headerLogoMain, headerLogoSecondary)
    headerLogoMain.classList.toggle('flex')
    headerLogoMain.classList.toggle('hidden')
    headerLogoSecondary.classList.toggle('flex')
    headerLogoSecondary.classList.toggle('hidden')
    if(burgerItems[0].classList.contains('bg-grey')){
      for(item of burgerItems){
        item.classList.remove('bg-grey')
        item.classList.add('bg-white')
      }
    } else {
      for(item of burgerItems){
        item.classList.add('bg-grey')
        item.classList.remove('bg-white')
      }
    }
    nav.classList.toggle('open');
    navToggle.classList.toggle('open');
    burgerBar.classList.toggle('open')
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    langSwitcher.classList.toggle('open');
    langToggle.classList.toggle('open');

    // closeToggle.classList.toggle('show');
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle('hide');
    });

    search.classList.toggle('open');
    searchToggle.classList.toggle('open');

    // closeToggle.classList.toggle('show');
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove('hide', 'open');
    });

    // closeToggle.classList.remove('show');
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll('#email-prefs-form .item');

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector('input');

      if (emailGlobalUnsub.checked) {
        item.classList.add('disabled');
        emailSubItemInput.setAttribute('disabled', 'disabled');
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove('disabled');
        emailSubItemInput.removeAttribute('disabled');
      }
    });
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }



  function checkCookie() {
    let showSplashScreen = getCookie("showSplashScreen");
    if (showSplashScreen != "false") {
      const splashScreen = document.querySelector(".splash-screen")
      splashScreen.classList.toggle('hidden')
      splashScreen.classList.toggle('flex')
      setTimeout(function() {
        splashScreen.children[0].pause();
        splashScreen.classList.toggle('hidden')
        splashScreen.classList.toggle('block')
      }, 3000);
      setCookie("showSplashScreen", 'false', 1);
    }
  }

  

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Function dependent on language switcher
      // if (langSwitcher) {
      //   langToggle.addEventListener('click', toggleLang);
      // }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener('click', toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener('click', toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener('click', closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener('change', toggleDisabled);
      }

      // checkCookie();
    }
  });


})();
