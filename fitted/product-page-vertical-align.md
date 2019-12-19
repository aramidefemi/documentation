Making the product page thumbnail to the left of products main image
---------------------------------------------------------

- To make thumbnail vertical removed `grid__item` class from `<li>`
- moved the thumbnail out and twerked the classes… 
  from large/medium sevens to large/medium fives and gave twos to the thumbnails div i just added … 
  just like in bootstraps col-md-7s and col-md-2s
- increased the thumbnail max height to 120px from the 85px

- **Files Affected**
  - https://fitted-ng.myshopify.com/admin/themes/79602352172?key=sections/product-template-thumbnails.liquid
    - ```
          <div class="grid__item large--two-twelfths medium--two-twelfths small--hide text-center">
        <ul class="product-single__thumbnails small--hide grid-uniform" id="ProductThumbs">
          
              {% for image in product.images %}
                {% if product.images.size > 1 %}
                  <li class=" medium--one-third large--one-quarter product-single__photo-wrapper" style="width: 100%;"> <a data-image-id="{{ image.id }}" href="{{ image.src | img_url: 'grande' }}" class="product-single__thumbnail {% if image contains featured_image %} active-thumb{% endif %}">
                     ` <img class="product-single__thumb" src="{{ image.src | img_url: '150x' }}" alt="{{ image.alt | escape }}">`
                    </a>
                  </li>
                {% endif %}
              {% endfor %}
            </ul>
      </div>
      ```
  - https://fitted-ng.myshopify.com/admin/themes/79602352172?key=assets/timber.scss.liquid
    - ``` .product-single__thumbnails {
      img {
            max-height: 120px;
            width: auto;
            overflow: hidden;
          }
        } ```
