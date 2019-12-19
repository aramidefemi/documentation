Cart page
------

The increment and decrease buttons fix

**Study Links**
  - [Shopify Update cart api](https://help.shopify.com/en/themes/development/getting-started/using-ajax-api#change-cart)
  
  - [Jquery Parent Selector](https://api.jquery.com/parents/)

**Files Edited**

 - > https://joyorganics.myshopify.com/admin/themes/76032278627?key=sections/cart__main.liquid
       - ```
        <div data-line-item=“{{ forloop.index0 }}” data-cart-item=“{{ item.variant.id }}”  data-line-item-key={{ forloop.index }} class=“purchase-details__quantity product-quantity-box”>
         {% include ‘quantity-box’, size: ‘is-medium’, variant: item.variant %}
        </div>
        ```       
 - > https://joyorganics.myshopify.com/admin/themes/76032278627?key=assets/utilities.js  
 
   -   `
    Shopify.theme.quantityBox = {init: function init() {$(‘body’).on(‘click’, ‘[data-update-quantity]:not([disabled])’, 
    function () {Shopify.theme.quantityBox.updateQuantity($(this));});$(‘body’).on(‘keyup keydown change’, ‘.quantity-input’, function () {
    Shopify.theme.quantityBox.updateQuantity($(this));});},updateQuantity: function updateQuantity($el) {
    var $quantityBox = $el.parents(‘.product-quantity-box’);
    var $input = $(‘.quantity-input’, $quantityBox);
    var lineID = $quantityBox.data(‘lineItem’);
    var cartItem = $quantityBox.data(‘cartItem’);
  var val = parseInt($input.val());
  var valMax = 100000000000000000;
  var valMin = $input.attr(‘min’) || 0;
  if ($input.attr(‘max’) != null) {
   valMax = $input.attr(‘max’);
  }
  if (isNaN(val) || val < valMin) {
   $input.val(valMin);
   return false;
  } else if (val > valMax) {
   $input.val(valMax);
   return false;
  }
  if ($el.data(‘update-quantity’) === ‘plus’) {
   // Increase quantity input by one
   if (val < valMax) {
    val++;
    $input.val(val);
   }
  } else if ($el.data(‘update-quantity’) === ‘minus’) {
   // Decrease quantity by one
   if (val > valMin) {
    val--;
    $input.val(val);
   }
  }
  if (val === 1 || val === 0) {
   $(‘.quantity-minus’, $quantityBox).attr(‘disabled’, true);
   $(‘.quantity-plus’, $quantityBox).attr(‘disabled’, false);
  } else if (val >= valMax) {
   $(‘.quantity-plus’, $quantityBox).attr(‘disabled’, true);
   $(‘.quantity-minus’, $quantityBox).attr(‘disabled’, false);
   $input.val(valMax);
  } else {
   $(‘.quantity-minus’, $quantityBox).attr(‘disabled’, false);
   $(‘.quantity-plus’, $quantityBox).attr(‘disabled’, false);
  } // Update quantity if within cart (vs on the product page)
  if ($el.parents(‘[data-line-item]‘).length) { 
   Shopify.theme.quantityBox.updateCart(lineID,cartItem, val);
  }
 },
 updateCart: function updateCart(lineID,cartItem, quantity) {
  $(‘.quantity-warning’).removeClass(‘animated bounceIn’);
  $.ajax({
   type: ‘POST’,
   url: ‘/cart/change.js’,
   data: { id: cartItem, quantity},
   dataType: ‘json’,
   success: function success(cart) {
    var newQuantity = 0;
    var itemsLeftText = ‘’;
    var quantityWarning = $(“[data-line-item=\“”.concat(lineID, “\”]“)).find(‘.quantity-warning’);
    var $quantityBox = $(“[data-line-item=\“”.concat(lineID, “\”]“)).find(‘.product-quantity-box’); //check to see if there are correct amount of products in array
    var cartItemsLineID = lineID;
    if (typeof cart.items[cartItemsLineID] !== “undefined”) {
     newQuantity = cart.items[cartItemsLineID].quantity;
    }
    if (quantity > 0 && quantity != newQuantity) {
     if (newQuantity == 1) {
      itemsLeftText = Shopify.translation.product_count_one;
      quantityWarning.text(“”.concat(newQuantity, ” “).concat(itemsLeftText));
      $(‘.quantity-minus’, $quantityBox).attr(‘disabled’, true);
     } else {
      itemsLeftText = Shopify.translation.product_count_other;
      quantityWarning.text(“”.concat(newQuantity, ” “).concat(itemsLeftText));
     }
    } // Apply quantity warning
    quantityWarning.addClass(‘animated bounceIn’);
    if (typeof Shopify.theme.jsAjaxCart !== ‘undefined’) {
     Shopify.theme.jsAjaxCart.updateView();
    }
    if (Shopify.theme.jsCart) {
     Shopify.theme.jsCart.updateView(cart, cartItem);
    }
   },
   error: function error(XMLHttpRequest, textStatus) {
    var response = eval(‘(’ + XMLHttpRequest.responseText + ‘)’);
    response = response.description;
   }
  });
 },
 unload: function unload($target) {
  $(‘.quantity-input’).off();
  $(‘[data-update-quantity]’).off();
 }
};
`
