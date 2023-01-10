$(document).ready(function(){
  $("hiden").hide();
  $("secondary_title").hide();
  $("third_title").hide();
  $("fourth_title").hide();
  $("name_r").hide();
  $("music").hide();
  $("music-warn").hide();
  $("music-find").hide();

  $("name").click(function(){
    $("name").hide(1000);
    $("name_r").show(1);
  });

  $("main_title").click(function(){
    $("main_title").hide(1000);
    $("secondary_title").show(1000)
  });

  $("secondary_title").click(function(){
    $("secondary_title").hide(1000);
    $("third_title").show(1000)
  });

  $("third_title").click(function(){
    $("third_title").hide(1000);
    $("fourth_title").show(1000);
  });

  $("fourth_title").click(function(){
    $("fourth_title").hide(1000);
    $("main_title").show(1000)
  });

  $("hide").click(function(){
    $("blue").hide(1000);
    $("red").hide(1000);
    $("yellow").hide(1000);
    $("hiden").show(1000);
  });

   $("yes").click(function(){
    $("blue").show(1000);
    $("red").show(1000);
    $("yellow").show(1000);
    $("hiden").hide(1000);
  });

  $("pro-beat").click(function(){
    $("music-warn").show(1000);
    $("pro-beat").hide(1000);
  });

  $("music-warn").click(function(){
    $("music-warn").hide(1000);
    $("music").show(1000);
    $("music-find").show(1000)
    $("pro-beats").show(1000)
  })

});

