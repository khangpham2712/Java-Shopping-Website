$(window).scroll(function(){
    var sticky = $('.sticky'), rightScroll = $('.right-scroll'),
            logo = $('.logo'), topNav = $('.top-nav'), sbr = $('.sbr'),
            rightSearchDot = $('.right-search > .right-dot'), rsi = $('.right-search-icon'), rightSearch = $('#right-search'),
        scroll = $(window).scrollTop();

    if (scroll > 80) {
      sticky.css("margin-top", "-95px");
      sticky.css("transition", ".25s");
      rightScroll.css("margin-right", "0");
      logo.css("top", "89px");
      logo.css("width", "100px");
      // topNav.css("padding-left", "487px");
  }
    else {
      sticky.css("margin-top", "0");
      sticky.removeClass('fixed');
      rightScroll.css("margin-right", "-80px");
      logo.css("top", "0");
      logo.css("width", "150px");
      sbr.css("width", "0");
      sbr.css("visibility", "hidden");
      sbr.css("opacity", "0");
      topNav.css("padding-left", "0");
      rightSearchDot.css("background", "#fff");
      rightSearchDot.css("border", "rgb(188, 188, 188) 1px solid");
      rightSearch.css("border", "rgb(188, 188, 188) 1px solid");
      rsi.css("color", "rgb(41, 41, 41)");
  }
  });