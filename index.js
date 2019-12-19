$('body').on('change', '.bold_option_dropdown select', function(){
    //Everytime there's a change in '.bold_option_dropdown select' element, run this function.
    var pos = $(this).closest('.bold_option_dropdown').attr('data-pos');
    //The closest() is a method that returns the first ancestor of the selected element in the DOM tree.
    // The attr() method sets or returns attributes and values of the selected elements. In this case, it is returning.

    if( pos == undefined ){
        appendAttribute();
        pos = $(this).closest('.bold_option_dropdown').attr('data-pos');
        // if pos is not defined, then set the 'data-pos' attribute and then try to assign 'pos' again.
    }

    var targetEle = $('[data-customizeImage] .pos-image-wrap').eq(pos-1);
    var value = $(this).val().toLowerCase();
    // Set targetEle to the target position where we can to display our picture.
    // Set value to the lowercase value of the option clicked on

    if( pos > 0 ){ 
      $(targetEle).removeClassPrefix('alphabet-');
      $(targetEle).addClass('alphabet-' + value);
    }  
    // if it's one of the customizer dropdowns, then remove the "alphabet-" prefix from any previous selection, and then add a new class with the "alphabet" + option value.
    // There's a bug in their code here.

    if( value.indexOf('-') > -1 ){        
      value = $.trim(value.split('-')[1].toLowerCase());
      // .trim() function removes all newlines, spaces (including non-breaking spaces), and tabs from the beginning and end of the supplied string
      //.split() splits the text with a delimiter
    } 
    
    // Metal Chain Color
    metal_color = findChainColor();
    // set metal_color to predefined values "_rg", "_wg", or "_yg" based on if it contains the metal select dropdown's value is either 'rose', "white" or "yellow".

    if(pos == 0 && product_type == 'bracelet') {
        value = 'bracelet';        
    } else if(pos == 0) {
        value = 'chain';
    }
    
    
    var img_title = 'st_' + value + metal_color;
    var imgSrcSet = $.parseJSON($('[data-imgSrcSet]').html());
    //parseJSON() takes a well-formed JSON string and returns the resulting JavaScript value.
    //The html() method sets or returns the content (innerHTML) of the selected elements.
    //Image Title is 'st' + the option value + metal color.
    
    if( pos == 0){
        $('[data-chainImage]').attr('src',imgSrcSet[img_title]);
        // if select dropdown is pointing to the 'metal dropdown', change the src attribute to the image corresponsding with 'image-title'.
    }else{
      if ( value.length <= 0 ){
          $(targetEle).find('img').attr('src','');   
           //find() gets the descendants of each element in the current set of matched elements, filtered by a selector.
           //if there's no value, set all the src attributes for all the images on the chain to null.      
      }else{
        if( pos == 5 && value == 'j' ){
          if( metal_color == '_rg' ){
            $(targetEle).find('img').attr('src','https://cdn.shopify.com/s/files/1/1726/8437/files/ST_J_RG-New.png?4353503490066696805');
          }else if( metal_color == '_wg'){
            $(targetEle).find('img').attr('src','https://cdn.shopify.com/s/files/1/1726/8437/files/ST_J_WG_-_New.png?4353503490066696805');
          }else if( metal_color == '_yg' ){
            $(targetEle).find('img').attr('src','https://cdn.shopify.com/s/files/1/1726/8437/files/ST_J_YG_-_New.png?4353503490066696805');
          }
        }else{            
          $(targetEle).find('img').attr('src', imgSrcSet[img_title]);     
        //if there's value, change the target position's image  to the image that corresponds    
        }
      }
    }
   
    metal_color = findChainColor();
    if( pos == 0 ){
      metal_color = findChainColor();        
      $('.pos-image-wrap').each(function(index){         
        var src = $(this).find('img').attr('src');  
        if( src.length > 0){
          src = src.replace('_RG', metal_color.toUpperCase());
          src = src.replace('_WG', metal_color.toUpperCase());
          src = src.replace('_YG', metal_color.toUpperCase());
          if( src.indexOf('ST_FEB_RG') > -1 ){
            src.replace('.png','.jpg')
          }else{
            src.replace('.jpg','.png')
          }
          $(this).find('img').attr('src',src);
        }
      })

      //for each 'pos-image-wrap' element, run this function: get the src atribute for it's descendant image, if there's a source, replace the strings noted with the 'metal_color' value.
    } 
    $('[data-customizeimage]').show();
    $('.product-main-image').hide();
})