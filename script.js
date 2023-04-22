const menu = document.querySelector('#menu-whole');
const cancel = document.querySelector('#cancel');
const menulist = document.querySelectorAll('.h-menu');
const main = document.querySelector('main');
const hamburger = document.querySelector('#hamburger');
const mobileheader = document.querySelector('.mobile-header');
const overlay = document.querySelector('#overlay');
function display() {
  if (menu.style.display === 'none') {
    menu.style.display = 'block';
    main.style.display = 'none';
    hamburger.style.display = 'none';
    mobileheader.style.display = 'none';
  } else {
    menu.style.display = 'none';
    main.style.display = 'block';
    hamburger.style.display = 'block';
  }
}

function hide() {
  menu.style.display = 'none';
  mobileheader.style.display = 'flex';
  hamburger.style.display = 'block';
  main.style.display = 'block';
}
hamburger.addEventListener('click', display);
cancel.addEventListener('click', hide);

for (let i = 0; i < menulist.length; i += 1) {
  menulist[i].addEventListener('click', hide);
}

// MOBILE-POPUP-MENU
// DESKTOP-POPUP-MENU
const projectsMobile = document.querySelector('#portfolio-mobile');
function JSprojectDesktop() {
  const projectsDesktop = document.querySelector('.grid');
  projectsDesktop.innerHTML = `<div class="grid-1">    
  <div class="project-grid"></div>
  <div class="dots"></div>
  </div>
  <div class="grid-2">
      <div class="grid-2-grid-1"><img src="images.svg/Rectangle 21 (19).svg" alt="project-image-desktop"></div>
      <div class="grid-2-grid-2">
          <div class="languages-desktop">
              <h2>Project name goes here</h2>
              <ul class="H-R-J-desktop">
                  <li class="Html-css">HTML/CSS</li>
                  <li class="Ruby">RUBY ON RAILS</li>
                  <li class="Javascript">JAVASCRIPT</li>
              </ul>
              <button class="see-this-project">
                  See this project
                  <img src="images.svg/Union (8).svg" alt="arrow">
              </button>
          </div>
      </div>
  </div>
  <div class="grid-3"><img src="images.svg/Rectangle 46.svg" alt="project-image-desktop-1"></div>
  <div class="grid-4"></div>
  <div class="grid-5">
  <div class="grid-5-image"><img src="images.svg/Rectangle 25.svg" alt="project-image-desktop-2"></div>
  <div class="banner">
      <div class="language-desktop">
          <h2>Project name goes ...</h2>
          <ul class="H-R-J-desktop">
              <li class="Html-css">HTML/CSS</li>
              <li class="Ruby">RUBY ON RAILS</li>
              <li class="plus-one">+1</li>
          </ul>
          <button class="see-this-project">
              See this project
              <img src="images.svg/Union (8).svg" alt="arrow">
          </button>
      </div>
  </div>
  <div class="grid-5-image-2"><img src="images.svg/Rectangle 26.svg" alt="project-image-desktop-3"></div>  
  </div>
  <div class="grid-6"><img src="images.svg/Rectangle 27 (2).svg" alt="project-image-desktop-4"></div>
  <div class="grid-7"></div>
  <div class="grid-8"></div>
  <div class="grid-9"></div>
  <div class="grid-10"><img src="images.svg/Rectangle 47.svg" alt="project-image-desktop-5"></div>
  <div class="popup-window-desktop-container" id="popup-window-desktop-container"></div>`;
  const popupwindowDesktop = document.querySelector('.popup-window-desktop-container');
  const seeprojectDesktop = document.querySelectorAll('.see-this-project');
  function popupwindowDesktopFunc() {
    overlay.classList.add('active');
    popupwindowDesktop.innerHTML = `<div class="blue-background">
      <div class="pop-up-window-desktop">
          <div id="carousel-cancel-desk"><img src="images.svg/ic_cross.svg" alt=""></div>
          <h3>Project Name goes here</h3>
            <ul class="pop-up-languages-desk">
                <li>HTML/CSS</li>
                <li>Ruby on Rails</li>
                <li>JavaScript</li>
            </ul>
          <div class="carousel-desk">
              
                  
              
              <ul class="carousel-track-desk">
              <img src="images.svg/Vector 4.svg" id="slide-left-desk" alt="">
                  <li class="carousel-slide-desk"><img src="images.svg/Rectangle 34 (1).svg" class="carousel-images-desk" alt=""></li>
                  <li class="carousel-slide-desk"><img src="images.svg/Rectangle 34 (1).svg" class="carousel-images-desk" alt=""></li>
                  <li class="carousel-slide-desk"><img src="images.svg/Rectangle 34 (1).svg" class="carousel-images-desk" alt=""></li>
                  <li class="carousel-slide-desk"><img src="images.svg/Rectangle 34 (1).svg" class="carousel-images-desk" alt=""></li>
              <img src="images.svg/Vector 5.svg" id="slide-right-desk" alt="">    
              </ul>
              
                  
              
          </div>
          <div class="carousel-nav-desk">
              <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images-desk  carousel-indicator" alt="">
              <img src="images.svg/Rectangle 27 (2).svg" class="carousel-nav-images-desk" alt="">
              <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images-desk" alt="">
              <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images-desk" alt="">
          </div>
          <div class="rest-of-the-page-desk">
              <P id="paragraph-1-desk">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</P>
  
          <p id="paragraph-2-desk"> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</P>
          <div class="pop-up-buttons-desk">
              <button id="first-button-desk"><a href="">See live</a>  <img src="images.svg/Union (10).svg" alt=""></button>
              <button><a href="">See source</a>   <img src="images.svg/Vector (31).svg" alt=""></button>
          </div>
          <div class="direction-desk">
              <div class="direction-left-desk">
                  <img src="images.svg/Union (11).svg" alt="">
                  Previous project
              </div>
              <div class="direction-right-desk">
                  Next project
                  <img src="images.svg/Union (12).svg" alt="">
              </div>
          </div>
          </div>
      </div> 
  </div>`;
    popupwindowDesktop.style.zIndex = '99';
    popupwindowDesktop.scrollIntoView({ behavior: 'smooth' });
    const cancelpopup = document.querySelector('#carousel-cancel-desk');
    function hidepopup() {
      popupwindowDesktop.innerHTML = '';
      overlay.classList.remove('active');
      popupwindowDesktop.style.zIndex = '-5';
    }
    cancelpopup.addEventListener('click', hidepopup);
  }

  seeprojectDesktop.forEach((btn) => btn.addEventListener('click', popupwindowDesktopFunc));
  function JsprojectMobile() {
    projectsMobile.innerHTML = `<div class="projects"><h2 >Projects</h2></div>
    <div class="project project-items-1">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-1">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
                <a href=# data-id="">
                See this project
                <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
                </a>
            </button>
        </div>
    </div>
    <div class="project project-items-2">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-2">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
            <a href=# data-id="">
            See this project
            <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
            </a>
            </button>
        </div>
    </div>
    <div class="project project-items-3">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-3">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
            <a href=# data-id="">
            See this project
            <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
            </a>
            </button>
        </div>
    </div>
    <div class="project project-items-4">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-4">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
                <a href=# data-id="">
                See this project
                <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
                </a>
            </button>
        </div>
    </div>
    <div class="project project-items-5">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-5">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
            <a  href=# data-id="">
            See this project
            <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
            </a>
            </button>
        </div>
    </div>
    <div class="project project-items-6">
        <img src="images.svg/Rectangle 21 (19).svg" class="project-image" alt="project-image-6">
        <div class="languages">
            <h2>Project name goes here</h2>
            <ul class="H-R-J">
                <li class="Html-css">HTML/CSS</li>
                <li class="Ruby">RUBY ON RAILS</li>
                <li class="Javascript">JAVASCRIPT</li>
            </ul>
            <button class="see-this-project-mobile">
            <a  href=# data-id="">
            See this project
            <img src="images.svg/Union (7).svg" alt="arrow" class="arrow">
            </a>
            </button>
        </div>
    </div>
    <div id="popup-window-mobile-container"></div>`;
    const seeprojectMobile = document.querySelectorAll('.see-this-project-mobile');
    const popupwindowMobile = document.querySelector('#popup-window-mobile-container');
    function popupwindowMobileFunc() {
      overlay.classList.add('active');
      popupwindowMobile.innerHTML = `<div class="pop-up-window">
        <div class="carousel-cancel"><img src="images.svg/ic_cross.svg" alt=""></div>
        <h3>Project Name goes here</h3>
        <ul class="pop-up-languages">
            <li>HTML/CSS</li>
            <li>Ruby on Rails</li>
            <li>JavaScript</li>
        </ul>
        <div class="carousel">
            <button id="slide-left">
                <img src="images.svg/Vector 4.svg" alt="">
            </button>
            <ul class="carousel-track">
                <li class="carousel-slide current-slide"><img src="images.svg/Rectangle 34.svg" class="carousel-images" alt=""></li>
                <li class="carousel-slide"><img src="images.svg/Rectangle 34.svg" class="carousel-images" alt=""></li>
                <li class="carousel-slide"><img src="images.svg/Rectangle 34.svg" class="carousel-images" alt=""></li>
                <li class="carousel-slide"><img src="images.svg/Rectangle 34.svg" class="carousel-images" alt=""></li>
            </ul>
            <button id="slide-right">
                <img src="images.svg/Vector 5.svg" alt="">
            </button>
            
        </div>
        <div class="carousel-nav">
            <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images  carousel-indicator" alt="">
            <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images" alt="">
            <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images" alt="">
            <img src="images.svg/Rectangle 41 (2).svg" class="carousel-nav-images" alt="">
        </div>
    <div class="rest-of-the-page">
        <P id="paragraph-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</P>

        <p id="paragraph-2"> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</P>
        <div class="pop-up-buttons">
            <button><a href="">See live</a>  <img src="images.svg/Union (10).svg" alt=""></button>
            <button><a href="">See source</a>   <img src="images.svg/Vector (31).svg" alt=""></button>
        </div>
    </div>
</div>`;
      popupwindowMobile.scrollIntoView({ behavior: 'smooth' });
      const previouspadding = document.body.style.paddingBottom;
      popupwindowMobile.style.height = '190vh';
      popupwindowMobile.style.paddingBottom = '39%';
      // Store the previous value of overflow-y
      const previousOverflowY = document.body.style.overflowY;
      // Set overflow-y to hidden
      document.body.style.overflowY = 'hidden';
      // Restore the previous value of overflow-y
      const cancelpopupMobile = document.querySelectorAll('.carousel-cancel');
      function hidepopupMobile() {
        popupwindowMobile.innerHTML = '';
        overlay.classList.remove('active');
        popupwindowMobile.style.position = 'relative';
        popupwindowMobile.style.height = '100%';
        document.body.style.overflowY = previousOverflowY;
        document.body.style.padding = previouspadding;
      }
      cancelpopupMobile.forEach((button) => button.addEventListener('click', hidepopupMobile));
    }
    seeprojectMobile.forEach((button) => button.addEventListener('click', popupwindowMobileFunc));
    seeprojectMobile.forEach((button) => button.addEventListener('click', () => { popupwindowMobile.scrollIntoView({ behavior: 'smooth' }); }));
  }
  JsprojectMobile();
}
window.onload = JSprojectDesktop;