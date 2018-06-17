window.addEventListener('load', function () {

let box;
  
  const getCoords = (elem) => {
   
    box = elem.getBoundingClientRect();

    const body = document.body;
    var docEl = document.documentElement;

    const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
    const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

    const clientTop = docEl.clientTop || body.clientTop || 0;
    const clientLeft = docEl.clientLeft || body.clientLeft || 0;

    const top = box.top + scrollTop - clientTop;
    const left = box.left + scrollLeft - clientLeft;

    return {
      top:Math.round(top),
      left:Math.round(left)
    };
  };
 
  const fxClick = (e) => {

    if (e.target !== e.currentTarget) {

      const section = document.getElementById(e.target.id.slice(0, 5) + '_link');

      const toY = getCoords(section).top;

        TweenLite.to(window, 1.02, {
          scrollTo : {
            y : toY
          }
        });

      }
    };

  const imgClick = (e) => {

    if (e.target == e.currentTarget) {

     const section = document.getElementById(e.target.id.slice(0, 4) + '_link');
     
      const toY = getCoords(section).top;

      TweenLite.to(window, 1.02, {
        scrollTo : {
          y : toY
        }
      });
    }
  };
  
  const menuLi = document.querySelector('.menu-list');
  const menuImg = document.getElementById('mimg');

  menuLi.addEventListener('click', fxClick, false);
  menuImg.addEventListener('click', imgClick, false);

  const buttonClick = (e) => {

    if (e.target == e.currentTarget) {

      const section = document.getElementById(e.target.id.slice(0, 8) + "nk");

        const toY = getCoords(section).top;

          TweenLite.to(window, 1.02, {
            scrollTo : {
              y : toY
            }
          });
      }
  };
  
  const aboutButton = document.getElementById("about_li");
  aboutButton.addEventListener("click", buttonClick, false);

  const scrollEffect = (e) => {

   let docScrollTop = document.documentElement.scrollTop || document.body.scrollTop,
        windHeight = window.innerHeight,
        sections = document.querySelectorAll("body article"),
        buttons = document.querySelectorAll(".menu-list li");

    for (let j = 0, sectionTop; j < buttons.length; j++) {

      sectionTop = sections[j].getBoundingClientRect().top;

      buttons[j].style.color = (
      sectionTop >=  - (1 / 2 * windHeight) &&  sectionTop < 1 / 4 * windHeight) ? "rgba(157, 212, 58, 1)" : null;
    }
  };
  
 window.addEventListener("scroll", scrollEffect, false);
  
  
}, false);
