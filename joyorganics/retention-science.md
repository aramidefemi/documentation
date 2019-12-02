## Retention Science

The task was to set up retention-science by following the steps in the article. These were the focus:

    - Regular Page View JavaScript Event
    - Item Page View JavaScript Event
    - Shopping Cart View JavaScript Event
    - Checkout Success Javascript Event
    - Email Capture Event

Solution:
In theme.liquid, just before the closing head tag, we add this snippet

- Regular Page: 
    It should be on every page on your website, as this also enables us to track every click the user performs and what pages they are most interested in (and browser/device information). There are no event specific code required for page views.

    A way to see if it works is:
        - Go to the network tab in devtools
        - Type in wave in the search bar
        - If wave works, anytime a new page is refreshed, it should come up in the search results

- Item Page:
    Nearly the same as "Regular Page View" in terms of the code, but just adding one more line in to track the ID of the item the person is looking at.

    This event should fire on any page that is a singular item view.

    The item_id should correspond to the item’s unique record ID within your database.

    Event Specific Code:
    ```
        /*** EVENT SPECIFIC CODE ***/
        _rsq.push(['_addItem', {'id': 'item_id'}]); // replace item_id with your dynamic item_id variable
        /*** END EVENT SPECIFIC CODE ***/
    ```

- Add to Cart JS Event:
    Nearly the same as "Item Page View" event, but just adding one more line of code for setting of the action. This event should fire on any "Add to Cart" button on the site

    The add to cart event is used for tracking each item that is added to the shopping cart. The add to cart will be very similar to the item page view, but with one additional call to ‘_setAction’. The item_id should correspond to the item’s unique record ID within your database.

    Event Specific Code:
    ```
        /*** EVENT SPECIFIC CODE ***/
        _rsq.push(['_addItem', {
            'id':'item_id', // replace item_id with your dynamic item_id variable 
            'name':'item_title', // replace item_title with your dynamic item_title variable 
            'price':'item_price'// replace item_price with your dynamic item_price variable 
        }]); 
        _rsq.push(['_setAction', 'shopping_cart']);
        /*** END EVENT SPECIFIC CODE ***/ 
    ```

- Email Capture:
    The email capture snippet was commented out because it kept giving an error about the form to connect to. It's still a bit unclear about what to do on here.


Code Snippet:
```
    <!-- RetentionScience start -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/blueimp-md5/2.10.0/js/md5.js"></script>
    
    <script type="text/javascript">
    window._rsq = window._rsq || [];
    window._rsq.push(['_setSiteId', 744]); // replace site_id with your static Site ID
    window._rsq.push(['_enableOnsite']);

    {% if customer %}
    window._rsq.push(['_setUserId', '{{ customer.id }}']);
    window._rsq.push(['_setUserEmail', '{{ customer.email }}']);
    {% endif %}

    /*** Item View Event ***/
    {% if template.name == 'product' and product %}
    {% if product.first_available_variant.id %}
        window._rsq.push(['_addItem', {'id': '{{product.first_available_variant.id}}'}]);
    {% endif %}

    {% if product.first_available_variant.id == '' %}
    window._rsq.push(['_addItem', {'id': '{{product.id}}'}]);
    {% endif %}
    {% endif %}

    /*** Cart View Event ***/
    {% if template.name == 'cart' %}
    {% for item in cart.items %}
    window._rsq.push(['_addItem', { 'id':'{{ item.id }}', 'name':'{{ item.title }}', 'price':'{{ item.price | money_without_currency }}' }]);
    {% endfor %}
    window._rsq.push(['_setAction', 'shopping_cart']);
    {% endif %}

    /*** Search View Event ***/
    {% if template.name == 'search' and search.performed %}  window._rsq.push(['_setAction', 'search']) ;
    window._rsq.push(['_setParams', { 'term': '{{ search.terms }}'}]);
    {% endif %}

    window._rsq.push(['_track']);

    /*** Email Capture Event ***/
    // document.getElementById("email_signup").addEventListener("submit", function(){
    //     // update the param within getELementById to the ID name of the email capture form
    //     var uEmail = document.getElementById('k_id_email').value;
    //     // update the param getELementById to the ID name of the email input
    //     window._rsq.push(['_setUserEmail', uEmail]);
    //     window._rsq.push(['_setUserProperties', { 'record_id': md5(uEmail.toLowerCase()),'email':uEmail, 'registration_source':'footer'}]); // (Optional) You can pass any ReSci standard user data point
    //     window._rsq.push(['_setAction', 'email_entered']);
    //     window._rsq.push(['_track']);
    // });

    /*** ReSci Script ***/
    (function() {
    var rScix = document.createElement('script');
        rScix.type = 'text/javascript';
        rScix.async = true;
    rScix.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'd1stxfv94hrhia.cloudfront.net/waves/v3/w.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(rScix);
    })();
    </script>
    <!-- RetentionScience end -->
```