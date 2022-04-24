$("#success").click(function () {
    $(".notify").toggleClass("active");
    $("#notifyType").toggleClass("success");
    scrollToTop();
    
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("success");
    },2000);
  });
  
  $("#failure").click(function () {
    $(".notify").addClass("active");
    $("#notifyType").addClass("failure");
    
    
    setTimeout(function(){
      $(".notify").removeClass("active");
      $("#notifyType").removeClass("failure");
    },2000);
  });

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
  };
  scrollToTop();