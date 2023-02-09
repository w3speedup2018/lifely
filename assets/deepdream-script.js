jQuery(document).ready(function($) {
    /*var showChar = 100;
    var ellipsestext = "...";
    var moretext = "Read more";
    var lesstext = "Read less";
    $('.mattress_product_con .prooduct_short_desc p.short_description').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });*/
 
    $(".mattress_product_con .morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
			$(this).parent().prev().toggle();
			$(this).prev().css('display','none');
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
			$(this).parent().prev().toggle();
			$(this).prev().css('display','inline');
        }
        return false;
    });
  
    $('.read_more_description').click(function(e){
        e.preventDefault();
      	if($(this).text() == "Read More") $(this).html("Read Less");
   		else $(this).html("Read More");
		$('.mobile_section_faq .more_content').toggle();
    });
  
 	 $('.banner_more_content').click(function(e){
        e.preventDefault();
      	if($(this).text() == "Read More") $(this).html("Read Less");
   		else $(this).html("Read More");
		$('.banner_mobile_more_content').toggle();
    });
 
});