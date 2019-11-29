## Product Item Silders

The task was to work on a new landing page based on some specifications. I encountered problems trying to work on the different sliders. I wanted to reuse the solution from the testimonial-slider. But I had to customize it so that it worked for the different sliders.

The simple but inefficient solution was to target each slide through conditionals.

Code Sample
```
let slideOneIndex = 1;
  let slideTwoIndex = 1;
  let slideThreeIndex = 1;
  let slideFourIndex = 1;
  let slideFiveIndex = 1;
  let slideSixIndex = 1;
  let slideSevenIndex = 1;
  let slideEightIndex = 1;
  
  const slidesOne = document.querySelectorAll('.first .slider-items');
  const slidesTwo = document.querySelectorAll('.second .slider-items');
  const slidesThree = document.querySelectorAll('.third .slider-items');
  const slidesFour = document.querySelectorAll('.fourth .slider-items');
  const slidesFive = document.querySelectorAll('.fifth .slider-items');
  const slidesSix = document.querySelectorAll('.sixth .slider-items');
  const slidesSeven = document.querySelectorAll('.seventh .slider-items');
  const slidesEight = document.querySelectorAll('.eight .slider-items');
  
  
  function moveRight(n, id) {   
    if(id === 'first') {
      for (let i = 0; i < slidesOne.length; i++) {
        slidesOne[i].style.display = "none";  
        slidesOne[i].classList.remove('slide-in-right');
        slidesOne[i].classList.add('slide-in-left');
      }
      
	  slideOneIndex += n;
      
      if (slideOneIndex > slidesOne.length) {slideOneIndex = 1}    
      if (slideOneIndex< 1) {slideOneIndex = slidesOne.length}
      slidesOne[slideOneIndex-1].style.display = "block";  
      
    }
    if(id === 'second') { 
      for (let i = 0; i < slidesTwo.length; i++) {
        slidesTwo[i].style.display = "none";  
        slidesTwo[i].classList.remove('slide-in-right');
        slidesTwo[i].classList.add('slide-in-left');
      }
      
	  slideTwoIndex += n;
      
      if (slideTwoIndex > slidesTwo.length) {slideTwoIndex = 1}    
      if (slideTwoIndex< 1) {slideTwoIndex = slidesTwo.length}
      slidesTwo[slideTwoIndex-1].style.display = "block";
    } 
    if(id === 'third') { 
      for (let i = 0; i < slidesThree.length; i++) {
        slidesThree[i].style.display = "none";  
        slidesThree[i].classList.remove('slide-in-right');
        slidesThree[i].classList.add('slide-in-left');
      }
      
	  slideThreeIndex += n;
      
      if (slideThreeIndex > slidesThree.length) {slideThreeIndex = 1}    
      if (slideThreeIndex< 1) {slideThreeIndex = slidesThree.length}
      slidesThree[slideThreeIndex-1].style.display = "block";
    }
    if(id === 'fourth') { 
      for (let i = 0; i < slidesFour.length; i++) {
        slidesFour[i].style.display = "none";  
        slidesFour[i].classList.remove('slide-in-right');
        slidesFour[i].classList.add('slide-in-left');
      }
      
	  slideFourIndex += n;
      
      if (slideFourIndex > slidesFour.length) {slideFourIndex = 1}    
      if (slideFourIndex< 1) {slideFourIndex = slidesFour.length}
      slidesFour[slideFourIndex-1].style.display = "block";
    } 
    if(id === 'fifth') { 
      for (let i = 0; i < slidesFive.length; i++) {
        slidesFive[i].style.display = "none";  
        slidesFive[i].classList.remove('slide-in-right');
        slidesFive[i].classList.add('slide-in-left');
      }
      
	  slideFiveIndex += n;
      
      if (slideFiveIndex > slidesFive.length) {slideFiveIndex = 1}    
      if (slideFiveIndex< 1) {slideFiveIndex = slidesFive.length}
      slidesFive[slideFiveIndex-1].style.display = "block";
    } 
    if(id === 'sixth') { 
      for (let i = 0; i < slidesSix.length; i++) {
        slidesSix[i].style.display = "none";  
        slidesSix[i].classList.remove('slide-in-right');
        slidesSix[i].classList.add('slide-in-left');
      }
      
	  slideSixIndex += n;
      
      if (slideSixIndex > slidesSix.length) {slideSixIndex = 1}    
      if (slideSixIndex< 1) {slideSixIndex = slidesSix.length}
      slidesSix[slideSixIndex-1].style.display = "block";
    } 
    if(id === 'seventh') { 
      for (let i = 0; i < slidesSeven.length; i++) {
        slidesSeven[i].style.display = "none";  
        slidesSeven[i].classList.remove('slide-in-right');
        slidesSeven[i].classList.add('slide-in-left');
      }
      
	  slideSevenIndex += n;
      
      if (slideSevenIndex > slidesSeven.length) {slideSevenIndex = 1}    
      if (slideSevenIndex< 1) {slideSevenIndex = slidesSeven.length}
      slidesSeven[slideSevenIndex-1].style.display = "block";
    }
    if(id === 'eight') { 
      for (let i = 0; i < slidesEight.length; i++) {
        slidesEight[i].style.display = "none";  
        slidesEight[i].classList.remove('slide-in-right');
        slidesEight[i].classList.add('slide-in-left');
      }
      
	  slideEightIndex += n;
      
      if (slideEightIndex > slidesEight.length) {slideEightIndex = 1}    
      if (slideEightIndex< 1) {slideEightIndex = slidesEight.length}
      slidesEight[slideEightIndex-1].style.display = "block";
    }
  }
  
  
  function moveLeft(n, id) {      
    if(id === 'first') {
      for (let i = 0; i < slidesOne.length; i++) {
        slidesOne[i].style.display = "none";  
        slidesOne[i].classList.remove('slide-in-left');
        slidesOne[i].classList.add('slide-in-right');
      }
      
	  slideOneIndex += n;
      
      if (slideOneIndex > slidesOne.length) {slideOneIndex = 1}    
      if (slideOneIndex< 1) {slideOneIndex = slidesOne.length}
      slidesOne[slideOneIndex-1].style.display = "block";  
      
    }
    if(id === 'second') { 
      for (let i = 0; i < slidesTwo.length; i++) {
        slidesTwo[i].style.display = "none";  
        slidesTwo[i].classList.remove('slide-in-left');
        slidesTwo[i].classList.add('slide-in-right');
      }
      
	  slideTwoIndex += n;
      
      if (slideTwoIndex > slidesTwo.length) {slideTwoIndex = 1}    
      if (slideTwoIndex< 1) {slideTwoIndex = slidesTwo.length}
      slidesTwo[slideTwoIndex-1].style.display = "block";
    } 
    if(id === 'third') { 
      for (let i = 0; i < slidesThree.length; i++) {
        slidesThree[i].style.display = "none";  
        slidesThree[i].classList.remove('slide-in-left');
        slidesThree[i].classList.add('slide-in-right');
      }
      
	  slideThreeIndex += n;
      
      if (slideThreeIndex > slidesThree.length) {slideThreeIndex = 1}    
      if (slideThreeIndex< 1) {slideThreeIndex = slidesThree.length}
      slidesThree[slideThreeIndex-1].style.display = "block";
    }
    if(id === 'fourth') { 
      for (let i = 0; i < slidesFour.length; i++) {
        slidesFour[i].style.display = "none";  
        slidesFour[i].classList.remove('slide-in-left');
        slidesFour[i].classList.add('slide-in-right');
      }
      
	  slideFourIndex += n;
      
      if (slideFourIndex > slidesFour.length) {slideFourIndex = 1}    
      if (slideFourIndex< 1) {slideFourIndex = slidesFour.length}
      slidesFour[slideFourIndex-1].style.display = "block";
    } 
    if(id === 'fifth') { 
      for (let i = 0; i < slidesFive.length; i++) {
        slidesFive[i].style.display = "none";  
        slidesFive[i].classList.remove('slide-in-left');
        slidesFive[i].classList.add('slide-in-right');
      }
      
	  slideFiveIndex += n;
      
      if (slideFiveIndex > slidesFive.length) {slideFiveIndex = 1}    
      if (slideFiveIndex< 1) {slideFiveIndex = slidesFive.length}
      slidesFive[slideFiveIndex-1].style.display = "block";
    } 
    if(id === 'sixth') { 
      for (let i = 0; i < slidesSix.length; i++) {
        slidesSix[i].style.display = "none";  
        slidesSix[i].classList.remove('slide-in-left');
        slidesSix[i].classList.add('slide-in-right');
      }
      
	  slideSixIndex += n;
      
      if (slideSixIndex > slidesSix.length) {slideSixIndex = 1}    
      if (slideSixIndex< 1) {slideSixIndex = slidesSix.length}
      slidesSix[slideSixIndex-1].style.display = "block";
    } 
    if(id === 'seventh') { 
      for (let i = 0; i < slidesSeven.length; i++) {
        slidesSeven[i].style.display = "none";  
        slidesSeven[i].classList.remove('slide-in-left');
        slidesSeven[i].classList.add('slide-in-right');
      }
      
	  slideSevenIndex += n;
      
      if (slideSevenIndex > slidesSeven.length) {slideSevenIndex = 1}    
      if (slideSevenIndex< 1) {slideSevenIndex = slidesSeven.length}
      slidesSeven[slideSevenIndex-1].style.display = "block";
    }
    if(id === 'eight') { 
      for (let i = 0; i < slidesEight.length; i++) {
        slidesEight[i].style.display = "none";  
        slidesEight[i].classList.remove('slide-in-left');
        slidesEight[i].classList.add('slide-in-right');
      }
      
	  slideEightIndex += n;
      
      if (slideEightIndex > slidesEight.length) {slideEightIndex = 1}    
      if (slideEightIndex< 1) {slideEightIndex = slidesEight.length}
      slidesEight[slideEightIndex-1].style.display = "block";
    }
  }
```
