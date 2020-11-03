//Create any Jquery listeners in this file which is need  our service page


//A listener is created to each image to make bigger the img
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

// window.onload = function () {
//     if (window.jQuery) {
//       console.log("jQuery is loaded");
//       $(document).on("click", '[data-toggle="lightbox"]', function (event) {
//         event.preventDefault();
//         console.log("wwwwwwwww", $("#luberAlex"));
//         $(this).ekkoLightbox();
//       });
//     } else {
//       console.log("jQuery is not loaded");
//     }
//   };