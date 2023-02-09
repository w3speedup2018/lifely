jQuery(document).ready(function($){
  if(jQuery('#countdownEliving').length > 0){
     var date = jQuery('#countdownEliving').attr('data-date').replace("-", "/");
     date = date.replace("-","/");
  	 if(date != '' && date != null && date != 'undefiend'){
        jQuery('#countdownEliving').countdowneliving({
            date: date+' 23:59:59', 
            offset: +11.01610, 
            hideOnComplete: true
          }, function (container) {
            //  jQuery('#covid-topbar').hide();
       });
 	 }
  } 
  if(jQuery('#countdownClearance_bar').length > 0){
     var date = jQuery('#countdownClearance_bar').attr('data-date').replace("-", "/");
     date = date.replace("-","/");
  	 if(date != '' && date != null && date != 'undefiend'){
        jQuery('#countdownClearance_bar').countdowneliving({
            date: date+' 23:59:59', 
            offset: +11.01610, 
            hideOnComplete: true
          }, function (container) {
            //  jQuery('#covid-topbar').hide();
       });
 	 }
  } 
  
  if(jQuery('#countdownCart').length > 0){
     var date_p = jQuery('#countdownCart').attr('data-date').replace("-", "/");   
     date_p = date_p.replace("-","/");
  	 if(date_p != '' && date_p != null && date_p != 'undefiend'){
         date_p = (date_p+' 23:59:59');
        jQuery('#countdownCart').countdowneliving({
            date: date_p, 
            offset: +11.01610, 
            hideOnComplete: true
          }, function (container) {
            //  jQuery('#covid-topbar').hide();
       });
 	 }
  }
  
});