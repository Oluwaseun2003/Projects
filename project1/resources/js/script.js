function signUp() {
  var logIn = prompt("Do you have an Eisoft account...?");
  if ((logIn = no)) {
    open = "link";
  } else {
    close = "link";
  }
}

$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-I").waypoint(
    function (direction) {
      if (direction === "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;",
    }
  );

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated FadeInDown");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated BounceInLeft");
    },
    { offset: "50%" }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated BounceInLeft");
    },
    { offset: "50%" }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated FadeInUp");
    },
    { offset: "50%" }
  );

  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animated FadeInUp");
    },
    { offset: "50%" }
  );

  /* var waypoints = $('#handler-first').waypoint(function(direction) {
    notify(this.element.id + ' hit 25% from top of window') 
  }, {
    offset: '25%'
  })*/
});
