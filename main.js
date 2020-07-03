// smooth scroll to href div

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Store hash
        var hash = this.hash;
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
        scrollTop: $(hash).offset().top
        }, 200, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        //   window.location.hash = hash;
        });
    } // End if
    });
});




// make image previews into links

const  musicHappiness = document.querySelector("#music-happiness-index");
const  liveChat = document.querySelector("#live-chat-app");
const  dug = document.querySelector("#dug");
const  boxes = document.querySelector("#boxes");
const  musicPortfolio = document.querySelector("#music-portfolio");


musicHappiness.addEventListener("click", (e) => {
    // doesnt work
    // e.target.setAttribute("target", "_blank"); 
    location.href = "music-happiness-index/index.html";  
});
liveChat.addEventListener("click", (e) => {
    location.href = "https://github.com/jamessoole/live-chat-app";  
});
dug.addEventListener("click", (e) => {
    location.href = "https://github.com/jamessoole/Dug";  
});
boxes.addEventListener("click", (e) => {
    location.href = "boxes/boxes.html";  
});
musicPortfolio.addEventListener("click", (e) => {
    location.href = "music-portfolio/music-portfolio.html";  
});