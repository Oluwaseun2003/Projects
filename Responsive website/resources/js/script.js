$(document).ready(function () {
  $(".js-sec-1").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    }
  );

  /* var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window')
}, {
  offset: '25%'
})  */

  /* ANIMATIONS ON SCROLL*/

  /* MOBILE-NAV*/
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js-nav-icon i");

    nav.slideToggle(400);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
    } else {
      icon.addClass("ion-navicon-round");
      icon.removeClass("ion-close-round");
    }
  });
});

const button = document.querySelector(".btn-ready");
const div = document.querySelector(".black-wrapper");
const blackWrapper = document.querySelector(".black-wrapper");
const close = document.querySelector(".close");

button.addEventListener("click", () => {
  setTimeout(() => (blackWrapper.style.display = "block"), 150);
  blackWrapper.style.visibility = "visible";
  blackWrapper.style.opacity = "1";
});

close.addEventListener("click", () => {
  blackWrapper.style.display = "none";
});

// div.addEventListener("click", () => {
//   blackWrapper.style.visibility = "hidden";
//   blackWrapper.style.opacity = "0";
// });
