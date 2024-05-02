$(document).ready(() => {
  $(".box").on({
    // click: function () {
    //   $(this).hide("fast", () => alert("Hide box"));
    // },
    // mouseenter: () => $(".box-header").css("background-color", "red"),
    // mouseleave: () => $(".box-header").css("background-color", "white"),
  });

  $("button").click(() => {
    // alert("HREF: " + $("#link").attr("href"));
    // $(".para").text("Hello World!");
    // $(".para").html("<b>Hello World!</b>");
    // $(".input").val("Hello World!");
    // $(".para").text((i, origText) => {
    //   return "Original text: " + origText + "\n\n" + "New text: Hello World!";
    // });
    // $("a").attr({
    //   href: "https://www.google.com",
    //   title: "Google",
    //   target: "_blank",
    // });
    // $("a").attr("href", (i, origText) => {
    //   return origText + "/new";
    // });
    // $("p").animate({
    //   opacity: 0.5,
    //   left: "+=100px",
    //   top: "+=100px",
    //   width: "+=100px",
    //   height: "+=100px",
    // });
    // $("p").remove(".para");
    // $("p").toggleClass(" red text big ").removeClass("para");
    // alert("Text-Alignment: " + $("p").css("text-align"));
    // $("p").css("text-decoration", "underline");
    // var text = "";
    // text += "width: " + $(".empty").width() + "\n";
    // text += "height: " + $(".empty").height() + "\n";
    // text += "Document Width: " + $(document).width() + "\n";
    // text += "Window Width: " + $(window).width() + "\n";
    // text += "Document Height: " + $(document).height() + "\n";
    // text += "Window Height: " + $(window).height();
    // alert(text);
    // $(".empty").width(300).height(300);
    // alert(
    //   "Width: " + $(".empty").width() + "\nHeight: " + $(".empty").height()
    // );
    // $("b").parentsUntil("div").css("color", "red");

    $(".div").load("text.txt #hello", (responseTxt, statusTxt, xhr) => {
      if (statusTxt === "success")
        alert("External content loaded successfully");
      if (statusTxt === "error")
        alert("Error: " + xhr.status + ": " + xhr.statusTxt);
    });
  });
});
