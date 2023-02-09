//Quick View

$(document).ready(function () {
  $.getScript("//cdnjs.cloudflare.com/ajax/libs/fancybox/2.1.5/jquery.fancybox.min.js").done(function() {
    quickView();
  });
});

function quickView() {
  $(document).on('click','.quick-view',function () {
    $('.quick-view.active').removeClass('active');
    $(this).addClass('active');
    var json_p =  JSON.parse($(this).attr('data-json')); 
    if ($('#quick-view').length == 0){$("body").append('<div id="quick-view"></div>');}
    var product_handle = $(this).data('handle');
    $('#quick-view').addClass(product_handle);
    var whislist_html = $(this).closest('li.grid__item').find('.custom_wishid_sec').html();
    
    jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
      var title = product.title;
      var type = product.type;
      var price = 0;
      var original_price = 0;
      var desc = product.description;
      var images = product.images;
      var variants = product.variants;
      var options = product.options; 
      var url = '/products/' + product_handle;
      $('.qv-product-title').text(title);
      $('.quick_view_title_section .whislist_icon').html(whislist_html);
      //$('.qv-product-description').html(desc);     
      $('.view-product').attr('href', url);
      var imageCount = $(images).length;
      $(images).each(function (i, image) {
        if (i == imageCount - 1) {
          var image_embed = '<div><img src="' + image + '"></div>';
          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
          $('.qv-product-images').append(image_embed);

          $('.qv-product-images').slick({
            'dots': false,
            'arrows': true,
            'respondTo': 'min',
            'useTransform': false
          }).css('opacity', '1');

        } else {
          image_embed = '<div><img src="' + image + '"></div>';
          image_embed = image_embed.replace('.jpg', '_800x.jpg').replace('.png', '_800x.png');
          $('.qv-product-images').append(image_embed);
        }
      });
      $(options).each(function (i, option) {
        var opt = option.name;
        var selectClass = '.option.' + opt.toLowerCase();
        $('.qv-product-options').append('<div class="option-selection-' + opt.toLowerCase() + '"><span class="option">' + opt + '</span><select class="option-' + i + ' option ' + opt.toLowerCase() + '"></select></div>');
        $(option.values).each(function (i, value) {
          $('.option.' + opt.toLowerCase()).append('<option value="' + value + '">' + value + '</option>');
        });
      });
      $(product.variants).each(function (i, v) {
        var quan = 0;
        for (var p = 0; p < json_p.length; p++){
          if(json_p[p].id == v.id){
            quan = json_p[p].stock;
          }
        }
        if (quan < 1 && v.inventory_management == 'shopify' && v.available != true) {
          $('.qv-add-button').prop('disabled', true).val('Sold Out');
          price = parseFloat(v.price / 100).toFixed(2);
          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
          if (original_price > 0) {
            $('.qv-product-price').html('<span>$' + price+'</span>');
            $('.qv-product-original-price').html('<span>$' + original_price+'</span>').show();
          } else {
             $('.qv-product-price').html('$' + price);
            $('.qv-product-original-price').hide();
          }
          $('select.option-0').val(v.option1);
          $('select.option-1').val(v.option2);
          $('select.option-2').val(v.option3);
          $('.preorder_discout_bar').hide();
          return false
        }else if (quan < 1 && v.inventory_management == 'shopify' && v.available == true) {
          $('.qv-add-button').prop('disabled', false).val('Pre Order');
          price = parseFloat(v.price / 100).toFixed(2);
          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
          if (original_price > 0) {
            $('.qv-product-price').html('<span>$' + price+'</span>');
            $('.qv-product-original-price').html('<span>$' + original_price+'</span>').show();
            if(original_price > price){
              var discount = (parseFloat(original_price) - parseFloat(price)).toFixed(2);
              var discount_bar = '<p class="pre_order_discount_text">Pre-Order now available! Wait &amp; Save extra $'+discount+'</p>';
              $('.preorder_discout_bar').html(discount_bar);
              $('.preorder_discout_bar').show();
            }
          } else {
            $('.qv-product-price').html('$' + price);
            $('.qv-product-original-price').hide();
          }
          $('select.option-0').val(v.option1);
          $('select.option-1').val(v.option2);
          $('select.option-2').val(v.option3);
          return false
        } else if(v.available == true) { 
          price = parseFloat(v.price / 100).toFixed(2);
          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
          if (original_price > 0) {
            $('.qv-product-price').html('<span>$' + price+'</span>');
            $('.qv-product-original-price').html('<span>$' + original_price+'</span>').show();
          } else {
             $('.qv-product-price').html('$' + price);
            $('.qv-product-original-price').hide();
          }
          $('select.option-0').val(v.option1);
          $('select.option-1').val(v.option2);
          $('select.option-2').val(v.option3);
          $('.preorder_discout_bar').hide();
          return false
        }else{
          $('.qv-add-button').prop('disabled', true).val('Sold Out');
          price = parseFloat(v.price / 100).toFixed(2);
          original_price = parseFloat(v.compare_at_price / 100).toFixed(2);
          if (original_price > 0) {
            $('.qv-product-price').html('<span>$' + price+'</span>');
            $('.qv-product-original-price').html('<span>$' + original_price+'</span>').show();
          } else {
             $('.qv-product-price').html('$' + price);
            $('.qv-product-original-price').hide();
          }
          $('select.option-0').val(v.option1);
          $('select.option-1').val(v.option2);
          $('select.option-2').val(v.option3);
          $('.preorder_discout_bar').hide();
          return false
        }
      });
    });

    $(document).on("change", "#quick-view select", function () {
      var selectedOptions = '';
      $('#quick-view select').each(function (i) {
        if (selectedOptions == '') {
          selectedOptions = $(this).val();
        } else {
          selectedOptions = selectedOptions + ' / ' + $(this).val();
        }
      });
      var json_p =  JSON.parse($('.quick-view.active').attr('data-json')); 
      var product_handle = $('.quick-view.active').data('handle');
      jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
        $(product.variants).each(function (i, v) {
          if (v.title == selectedOptions) {
            console.log(v);
            var quan = 0;
            for (var p = 0; p < json_p.length; p++){
              if(json_p[p].id == v.id){
                quan = json_p[p].stock;
              }
            }
            
            var price = parseFloat(v.price / 100).toFixed(2);
            var original_price = parseFloat(v.compare_at_price / 100).toFixed(2);            
            var v_inv = v.inventory_management;           
            if (original_price > 0) {
              $('.qv-product-price').html('<span>$' + price+'</span>');
              $('.qv-product-original-price').html('<span>$' + original_price+'</span>').show();
            } else {
               $('.qv-product-price').html('$' + price);
              $('.qv-product-original-price').hide();
            }            
            if (v_inv == null) {
              $('.qv-add-button').prop('disabled', false).val('Add to Cart');
              $('.preorder_discout_bar').hide();
            }else if (quan < 1 && v.inventory_management == 'shopify' && v.available != true) {
                $('.qv-add-button').prop('disabled', true).val('Sold Out');
                $('.preorder_discout_bar').hide();
            }else if (quan < 1 && v.inventory_management == 'shopify' && v.available == true) {
                 $('.qv-add-button').prop('disabled', false).val('Pre Order');
                  if(original_price > price){
                  var discount = (parseFloat(original_price) - parseFloat(price)).toFixed(2);
                  var discount_bar = '<p class="pre_order_discount_text">Pre-Order now available! Wait &amp; Save extra $'+discount+'</p>';
                  $('.preorder_discout_bar').html(discount_bar);
                  $('.preorder_discout_bar').show();
                }
            } else if(v.available == true) { 
                $('.qv-add-button').prop('disabled', false).val('Add to Cart');
            }else{
               $('.qv-add-button').prop('disabled', true).val('Sold Out');
            }            
          }
        });
      });
    });
    $.fancybox({
      href: '#quick-view',
      maxWidth: 1040,
      maxHeight: 600,
      fitToView: true,
      width: '75%',
      height: '70%',
      autoSize: false,
      closeClick: false,
      openEffect: 'none',
      closeEffect: 'none',
      'beforeLoad': function () {
        var product_handle = $('#quick-view').attr('class');
        $(document).on("click", ".qv-add-button", function () {
          var qty = $('.qv-quantity').val();
          var selectedOptions = '';
          var var_id = '';
          $('#quick-view').closest('.fancybox-skin').append('<div class="quickview-loading"><span>Adding to cart...</span></div>');
          $('.quickview-loading').show();
          $('#quick-view select').each(function (i) {
            if (selectedOptions == '') {
              selectedOptions = $(this).val();
            } else {
              selectedOptions = selectedOptions + ' / ' + $(this).val();
            }
          });          
          jQuery.getJSON('/products/' + product_handle + '.js', function (product) {
            $(product.variants).each(function (i, v) {
              if (v.title == selectedOptions) {
                var_id = v.id;
                processCart();
              }
            });
          });
          function processCart() {
            jQuery.post('/cart/add.js', {
              quantity: qty,
              id: var_id
            },
                        null,
                        "json"
                       ).done(function () {
              fetchCart();
              $('.qv-add-to-cart-response').addClass('success').html('<span>' + $('.qv-product-title').text() + ' has been added to your cart. <a href="/cart">Click here to view your cart.</a>');
              $('.quickview-loading').addClass('added');
              setTimeout(function(){
                 $('.qv-add-to-cart-response').removeClass('success');
                 $('.quickview-loading').remove();
              },4000);
            })
            .fail(function ($xhr) {
              var data = $xhr.responseJSON;
              $('.qv-add-to-cart-response').addClass('error').html('<span><b>ERROR: </b>' + data.description);
              $('.quickview-loading').addClass('error');
              $('.quickview-loading span').html('Sorry, something went wrong. Please try again');
              setTimeout(function(){
                 $('.qv-add-to-cart-response').removeClass('error');
                 $('.quickview-loading').remove();
              },4000);
            });
          }
        });
        $('.fancybox-wrap').css('overflow', 'hidden !important');
      },
      'afterShow': function () {
        $('#quick-view').hide().html(content).css('opacity', '1').fadeIn(function () {
          $('.qv-product-images').addClass('loaded');
        });
      },
      'afterClose': function () {
        $('#quick-view').removeClass().empty();
        $('.quick-view.active').removeClass('active');
      }
    });

    $('.quick_view_quantity button').on('click',function(e){
        e.preventDefault();
        var val = $('.quick_view_quantity input').val();
        if(val == null || val == 'undefiend'){
          val = 0;
        }
        if(val > 1 && $(this).hasClass('quick-qty-minus')){
           val = parseInt(val) - parseInt(1);
        }else if($(this).hasClass('qty-plus')){
          val = parseInt(val) + parseInt(1);
        }
        $('.quick_view_quantity input').val(val);
    });

    
  });
};

$(window).resize(function () {
  if ($('#quick-view').is(':visible')) {
    $('.qv-product-images').slick('setPosition');
  }
});