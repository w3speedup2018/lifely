jQuery(document).ready(function($){
   $('#custom_FacetFiltersForm_Item select,#custom_FacetFiltersForm_Item input').on('change',function(e){
  	 var filter_string = '';
     var url = $('#custom_FacetFiltersForm_Item').attr('data-action');
     $('#custom_FacetFiltersForm_Item details').each(function(){
      var i = 1;   
      var query_string = ''; 
      $(this).find('input').each(function(){
        if($(this).is(':checked')){
          if(i == 1){
          	query_string = $(this).val();
          }else{
          	query_string = query_string+'+'+$(this).val();
          }
          i++;
        }
      });
       
      if(query_string != '' && query_string != null && query_string != 'undefiend'){
        if(filter_string != '' && filter_string != null && filter_string != 'undefiend'){
        	filter_string = filter_string+','+query_string;
        }else{
        	filter_string = query_string;
        }
      }	
    });
    
     
     
     var price_range_start = $('#custom_FacetFiltersForm_Item #Filter-Price-GTE').val();
     var price_range_last = $('#custom_FacetFiltersForm_Item #Filter-Price-LTE').val();  
     
     var sort_by = $('#custom_FacetFiltersForm_Item #SortBy').val();
     if(sort_by != null && sort_by != ''){
        if(filter_string != '' && filter_string != null && filter_string != 'undefiend'){
              url = url+filter_string+'/?sort_by='+sort_by;   	
        }else{
          url = url+'?sort_by='+sort_by;  
        }
     }else{
     	url = url+filter_string
     }	                                            
     get_filter_products(url);
     
      var html = '';
     $('#custom_FacetFiltersForm_Item input').each(function(){      
       if($(this).is(':checked')){   
       	 var curent_id =  $(this).attr('id');
         var label = $(this).parent().text();
		 html = html+'<facet-remove><a href="'+curent_id+'" class="active-facets__button active-facets__button--light"><span class="active-facets__button-inner button button--tertiary">'+label+'<svg aria-hidden="true" focusable="false" role="presentation" width="12" height="13" class="icon icon-close-small" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.48627 9.32917L2.82849 3.67098" stroke="#333030" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.88539 9.38504L8.42932 3.61524" stroke="#333030" stroke-linecap="round" stroke-linejoin="round"></path></svg><span class="visually-hidden">Clear filter</span></span></a></facet-remove>';       
       }
     });
     $('#slected_fiters').html(html);
   }); 
  
   function get_filter_products(newUrl) {
     $('.collection .loading-overlay').show(); 
     $.get({
          url: newUrl,
          success: function (data) {
              var newProductsWrapper = $(data).find("#ProductGridContainer");
              var newProductsHtml = newProductsWrapper.html();
              $("#ProductGridContainer").html(newProductsHtml);            
              var badges = $("#ProductGridContainer").attr('data-badges');
              $("#ProductGridContainer").html(newProductsHtml);
              if(badges != '' && badges != null && badges != 'undefiend'){
                $("#ProductGridContainer #product-grid .grid__item").each(function(){
                  $(this).find('.best_seller_discount_bar').remove();
                  $(this).find('.card__content').before('<div class="best_seller_discount_bar clearance_product_bar"><span>'+badges+'</span></div>');

                });
              }
              var newItemCount = newProductsWrapper.attr('data-products-count');
              var count = $(data).find("#ProductCountDesktop").html(); 
              $("#ProductCountDesktop").html(count);
              $('.collection .loading-overlay').hide(); 
            }
      })
  	}
            
  	
  	$(document).on('click','#ProductGridContainer ul.pagination__list a.pagination__item.link',function(e){
    	e.preventDefault();      	
      	var page = $(this).text();
        if($(this).hasClass('pagination__item--prev')){
			var page = $('#ProductGridContainer ul.pagination__list .pagination__item.pagination__item--current').closest('li').next().find('a').text();
        }else if($(this).hasClass('.pagination__item--next')){
        	var page = $('#ProductGridContainer ul.pagination__list .pagination__item.pagination__item--current').closest('li').prev().find('a').text();
        }
      
         var filter_string = '';
         var url = $('#custom_FacetFiltersForm_Item').attr('data-action');
         $('#custom_FacetFiltersForm_Item details').each(function(){
          var i = 1;   
          var query_string = ''; 
          $(this).find('input').each(function(){
            if($(this).is(':checked')){
              if(i == 1){
                query_string = $(this).val();
              }else{
                query_string = query_string+'+'+$(this).val();
              }
              i++;
            }
          });

          if(query_string != '' && query_string != null && query_string != 'undefiend'){
            if(filter_string != '' && filter_string != null && filter_string != 'undefiend'){
                filter_string = filter_string+','+query_string;
            }else{
                filter_string = query_string;
            }
          }	
        });


         var sort_by = $('#custom_FacetFiltersForm_Item #SortBy').val();
         if(sort_by != null && sort_by != ''){
            if(filter_string != '' && filter_string != null && filter_string != 'undefiend'){
                  url = url+filter_string+'/?sort_by='+sort_by+'&page='+page;   	
            }else{
              url = url+'?sort_by='+sort_by+'&page='+page;  
            }
         }else{
           if(filter_string != '' && filter_string != null && filter_string != 'undefiend'){
            	url = url+filter_string+'/?page='+page;
           }else{
           		url = url+'/?page='+page;
           }
         }	                                            
         get_filter_products(url);
       
    });
  
    $('#custom_FacetFiltersForm_Item .facets__reset').click(function(e){
		e.preventDefault();
        $(this).closest('.facets__display').find('input').each(function(){
          if($(this).is(':checked')){
          	$(this).prop('checked',false);
          }
        });
      	
       $(this).closest('.facets__display').find('input:first-child').trigger('change');
    });
  
  $(document).on('click','div#slected_fiters facet-remove a',function(e){
    e.preventDefault();                                                                   
  	var input_id = $(this).attr('href');
    $('#'+input_id).prop('checked',false);
    $('#'+input_id).trigger('change');
    $(this).closest('facet-remove').remove();
  });
  
});