## Testimonial Slider

The task was to build a simple slider that could move on it's own, and also move when the arrows were clicked. The thinking behind this was that every slide was displayed 'none'. Everytime an arrow was clicked, the number passed down into showSlides, sets the slide who's array index coincides with this passed down number's display to block. There's a CSS animation on each 'slide' div to give it the slide motion.
  
Code Sample:
```
    var slideIndex = 1;
    // Set slide to 1

    window.onload = () => {
        showSlides(slideIndex);  
    }
    // When window loads, then show first slide
  
    setInterval(() => {
        showSlides(slideIndex += 1);       
    }, 7000);
    // When JS loads, then start showing slides change every seven seconds
    // There's a bit of redundancy here, if setInterval exist, then no need for the 'window.onload' snippet

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    // When the right arrow is clicked, increase the slide index, and thereby, change slide

    function showSlides(n) {
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        if (n > slides.length) {slideIndex = 1}    
        if (n < 1) {slideIndex = slides.length}

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }

        slides[slideIndex-1].style.display = "block";  



        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        dots[slideIndex-1].className += " active";
    }
```