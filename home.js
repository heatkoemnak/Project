function menu(){
    const menu =document.getElementById("Menu-Items");
    const close =document.getElementById("Menu-Items");
    menu.style.display="Block" ;
    menu.style.transition="all 0.5s ease-in-out";
    menu.style.position="absolute";
    menu.style.top="55px";
    menu.style.left="0px";
    menu.style.right="10px";
    menu.style.backgroundColor="#32681b" ;
    menu.style.width="100%";
    menu.style.padding="20px";
    menu.style.textAlign="left";
    menu.style.margin="10px";

}
function back() {
    window.open("index.html")
    
}
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
        $('html','container','product-container','Service').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
 









