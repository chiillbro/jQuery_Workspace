// const jq = $.noConflict();
$(document).ready(() => {
  // Add multiple event handlers to an element using on
  // jq(".box").on({
  // hiding whole document using this and hide function when clicked
  // click: function () {
  //   $(this).hide("fast", () => alert("Hide box"));
  // },
  // mouseenter: () => jq(".box-header").css("background-color", "red"),
  // mouseleave: () => jq(".box-header").css("background-color", "white"),
  // });
  // $("button").click(() => {
  // Get href of an element
  // alert("HREF: " + $("#link").attr("href"));
  // Set text of an element
  // $(".para").text("Hello World!");
  // Set html of an element
  // $(".para").html("<b>Hello World!</b>");
  // Set value of an input
  // $(".input").val("Hello World!");
  // set text with callback function
  // $(".para").text((i, origText) => {
  //   return "Original text: " + origText + "\n\n" + "New text: Hello World!";
  // });
  // Set attribute
  // $("a").attr({
  //   href: "https://www.google.com",
  //   title: "Google",
  //   target: "_blank",
  // });
  // Set attribute with a callback function
  // $("a").attr("href", (i, origText) => {
  //   return origText + "/new";
  // });
  // Animate an element
  // $("p").animate({
  //   opacity: 0.5,
  //   left: "+=100px",
  //   top: "+=100px",
  //   width: "+=100px",
  //   height: "+=100px",
  // });
  // Remove class or id from an element
  // $("p").remove(".para");
  // Remove and toggle class
  // $("p").toggleClass(" red text big ").removeClass("para");
  // Get css property
  // alert("Text-Alignment: " + $("p").css("text-align"));
  // Set css property
  // $("p").css("text-decoration", "underline");
  // Get Width and Height of an element
  // var text = "";
  // text += "width: " + $(".empty").width() + "\n";
  // text += "height: " + $(".empty").height() + "\n";
  // text += "Document Width: " + $(document).width() + "\n";
  // text += "Window Width: " + $(window).width() + "\n";
  // text += "Document Height: " + $(document).height() + "\n";
  // text += "Window Height: " + $(window).height();
  // alert(text);
  // Set Width and Height of an element
  // $(".empty").width(300).height(300);
  // alert(
  //   "Width: " + $(".empty").width() + "\nHeight: " + $(".empty").height()
  // );
  // $("b").parentsUntil("div").css("color", "red");
  // Load external content
  // $(".div").load("text.txt #hello", (responseTxt, statusTxt, xhr) => {
  //   if (statusTxt === "success")
  //     alert("External content loaded successfully");
  //   if (statusTxt === "error")
  //     alert("Error: " + xhr.status + ": " + xhr.statusTxt);
  // });
  // GET Request
  // $.get(" https://jsonplaceholder.typicode.com/posts/1", (data, status) => {
  //   alert("data: " + data.title + "\nstatus: " + status);
  // });
  // POST Request
  // $.post(
  //   "demo.asp",
  //   { name: "John", city: "New York" },
  //   function (data, status) {
  //     alert("data: " + data + "\nstatus: " + status);
  //   }
  // );
  // });

  $("#input").on("keyup", function () {
    const value = $(this).val().toLowerCase();
    $(".list *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
});
