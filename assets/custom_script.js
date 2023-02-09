function add_bus_days(date, busDays) { // add business days to a date
  var wkdy = date.getDay(); // get weekday number
  var addDays = wkdy >= 3 ? (busDays + 2) : busDays; // if it's wednesday or later set add days to 5 instead of 3 to account for the weekend
  date.setDate(date.getDate() + addDays); // add days to current date
  return date
}

var load = document.getElementById("website-preloader");
function loadContent(){
  load.style.display = 'none';
}

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }else if (/android/i.test(userAgent)) {
        return "Android";
    }else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }else{
      return "unknown";
    }
}  


$(document).ready(function($) {
    var device;
    device = getMobileOperatingSystem();
    if(device != 'iOS'){
      $('.product-description .additional-desc-con .pro_-video').prop('loop', true);
      $('.product-description .additional-desc-con .pro_-video').prop('muted', true);
      $('.product-description .additional-desc-con .pro_-video').prop('autoplay', true);
    }else{
      $('.product-description .additional-desc-con .pro_-video').removeAttr('loop');
      $('.product-description .additional-desc-con .pro_-video').removeAttr('muted');
      $('.product-description .additional-desc-con .pro_-video').prop('autoplay', false);
    } 

  
    $(".search-modal__form .search__input").on('keydown, keyup, keypress', function(e){
      if (e.key === 'Enter' || e.keyCode === 13) {
         var search_text = $(this).val();  
         if(search_text != ''){
            var url = window.location.origin+'/collections/shop/?q='+search_text;
            if(url != '' || url != 'undefined'){
              window.location.href = url;
            }
         } 
         e.preventDefault();
    	 return false;
      }
    }); 

    $('.search-modal__form button.search__button.field__button').on('click', function(e){
      var search_text = $(this).closest('form.search.search-modal__form').find('input[type="search"]').val();  
      if(search_text != ''){
        var url = window.location.origin+'/collections/shop/?q='+search_text;
        if(url != '' || url != 'undefined'){
          window.location.href = url;
        }
      } 
      e.preventDefault();
      return false;
    })
  

    $('.product-sec-main .product__info-wrapper.grid__item variant-radios input[name="Denominations"]').on('change', function(){
      setTimeout(function(){
        var current_variant_id = $('.product__info-wrapper.grid__item').find('product-form.product-form input[name="id"]').val();
        var discounted_price = $('.gift-card-variation-list li[data-id="'+current_variant_id+'"]').text();
        $('.price__regular span.price-item.price-item--regular').text(discounted_price+' AUD');
      }, 1000); 
      
    })

    $('.gift_card_tabs .gift_card_tab_nav li').click(function(){
		if(!$(this).hasClass('active')){
			$('.gift_card_tabs .gift_card_tab_nav li.active').toggleClass('active');
			$('.gift_card_tabs .gift_tab_content.show').addClass('hide');
			$('.gift_card_tabs .gift_tab_content.show').removeClass('show');
			$(this).toggleClass('active');
			var active_id = $(this).attr('data-id');
			$(active_id).removeClass('hide');
			$(active_id).addClass('show');
		}
	});

    if($('body').hasClass('page_master-campaign')){
       var stickyscrollclearanceNavTop = $('.clearance_banner_bar').offset().top;
        var stickyscrollclearanceTopNav = function(){
            var scrollTop = $(window).scrollTop();
            if (scrollTop > stickyscrollclearanceNavTop) { 
                $('.clearance_banner_bar').addClass('sticky');
            } else {
                $('.clearance_banner_bar').removeClass('sticky'); 
            }
        };
        stickyscrollclearanceTopNav();
        $(window).scroll(function() {
            stickyscrollclearanceTopNav();
        });
    }
   
    

    
    var recent_products = $('body.index .recent_view_product_sec .recent_view_product_inner .recently-viewed li').length;
    if(recent_products > 0){
      $('.recent_view_show_button_grid').show();
      $('.recent_view_product_sec').addClass('active');
      $('.recent_view_product_sec').show();      
      if($(window).width() <= 767){
           $('body.index .recent-rw-overlay').show();
       }
    }else{
      $('.recent_view_show_button_grid').hide();
    }

    $('.recent_view_product_sec .recent_view_product_inner .product_rating_main .product_rating_recent span.total-rating-no').each(function(){
      var rating_count = $(this).text();
      if(rating_count > 0 && rating_count != undefined && rating_count != ''){
        $(this).addClass('hascount');
      }else{
        $(this).removeClass('hascount');
      }
    });
    $('.recent_view_hide_button_grid').on('click', function(e){
      e.preventDefault();
      if($(this).closest('.recent_view_product_sec').hasClass('active')){
        $('.recent_view_product_sec.active').addClass('hide_sec');
        setTimeout(function(){
          $('.recent_view_product_sec.hide_sec').removeClass('active');
          $('.recent_view_product_sec.hide_sec').removeClass('hide_sec');
          $('.recent_view_show_button_grid').show();
          $(this).hide();
        },500); 
         $('.recent-rw-overlay').hide();
      }else{ 
         $('.recent_view_product_sec').addClass('active');
         if($(window).width() <= 767){
             $('.recent-rw-overlay').show();
         }
      }
           
    });
  
    $('.menu-list-custom').addClass('menu-visible');
    $(document).on('click', '#Details-menu-drawer-container', function(e){
        $(this).addClass('menu-opening');
        $('body').toggleClass('body-no-scroll');
    })
  
    setTimeout(function(){
      $("#website-preloader").hide();
    },2000);
    $('.check-area-form-grid #postcode_check').on('click', function(e){
      	e.preventDefault();
		var postcode = $('#postal_code').val();
      	var postcode_arr = ["4508","4505","4503","4502","4501","4500","4304","4303","4301","4179","4300","4178","4174",
        "4173","4172","4171","4170","4169","4164","4163","4161","4158","4159","4160","4157","4156","4509","4155","4154",
        "4153","4152","4151","4133","4132","4131","4130","4129","4128","4127","4123","4122","4121","4120","4119","4118",
        "4117","4116","4115","4114","4113","4112","4111","4110","4109","4108","4107","4106","4105","4104","4103","4102",
        "4101","4078","4077","4076","4075","4074","4073","4072","4068","4067","4066","4065","4064","4061","4060","4059",
        "4054","4000","4005","4001","4006","4007","4008","4009","4010","4011","4012","4013","4014","4017","4018","4020",
        "4019","4021","4022","4025","4030","4031","4032","4034","4035","4037","4053","4051","5087","5086","5084","5085",
        "5062","5061","5052","5051","5048","5049","5047","5035","5037","5038","5039","5040","5041","5042","5043","5044",
        "5045","5046","5083","5082","5081","5075","5074","5073","5072","5070","5069","5067","5068","5065","5066","5063",
        "5064","5158","5132","5127","5126","5125","5113","5112","5109","5108","5107","5106","5098","5097","5096","5095",
        "5094","5093","5092","5091","5090","5089","5088","5010","5011","5012","5013","5014","5015","5016","5017","5018",
        "5019","5020","5021","5022","5023","5024","5025","5031","5032","5033","5034","5009","5008","5007","5006","5005",
        "5000","5111","5160","5161","5162","5164","5165","5166","5950","5169","5167","5131","5174","5173","5121","5120",
        "5118","5117","5050","5116","2641", "2600","2601","2602","2603","2604","2605","2606","2607","2608","2609","2612",
        "2614","2615","2617","2619","2900","2902","2903","2904","2905","2906","2911","2912","2913","2914","2530","2529",
        "2528","2527","2526","2525","2519","2518","2517","2516","2515","2508","2506","2505","2502","2500","2762","2753",
        "2568","2082","2080","2079","3977","3976","3975","3910","3805","3804","3803","3802","3207","3206","3205","3204",
        "3202","3201","3200","3199","3198","3197","3196","3195","3194","3193","3192","3191","3190","3189","3188","3187",
        "3186","3185","3184","3183","3182","3181","3180","3179","3178","3177","3175","3174","3173","3172","3171","3170",
        "3169","3168","3167","3166","3165","3163","3162","3161","3155","3154","3153","3152","3151","3150","3149","3148",
        "3147","3146","3145","3144","3143","3142","3141","3140","3138","3137","3135","3133","3132","3131","3130","3129",
        "3128","3127","3126","3125","3124","3123","3122","3121","3116","3111","3109","3108","3107","3106","3105","3104",
        "3103","3102","3101","3094","3093","3088","3087","3086","3085","3084","3083","3082","3081","3079","3078","3076",
        "3075","3074","3073","3072","3071","3070","3068","3067","3066","3065","3062","3061","3060","3058","3057","3056",
        "3055","3054","3053","3052","3051","3050","3047","3046","3045","3044","3042","3041","3040","3039","3038","3036",
        "3034","3033","3032","3031","3029","3028","3027","3026","3025","3023","3022","3021","3020","3019","3018","3016",
        "3015","3013","3012","3011","3008","3006","3005","3004","3003","3002","3000","3356","3355","3354","3350","3220",
        "3219","3218","3217","3216","3215","3214","3212","3629","3630","3631","3978","3944","3943","3941","3940","3939",
        "3938","3937","3936","3934","3933","3931","3930","3929","3928","3927","3926","3920","3919","3918","3916","3915",
        "3913","3912","3810","3809","3808","3807","3806","3799","3797","3796","3795","3793","3792","3791","3789","3788",
        "3787","3786","3785","3783","3782","3781","3778","3777","3775","3770","3767","3766","3765","3763","3762","3761",
        "3760","3759","3758","3757","3756","3755","3754","3753","3752","3751","3750","3711","3660","3658","3555","3458",
        "3442","3441","3440","3438","3437","3435","3434","3433","3432","3431","3430","3429","3428","3427","3358","3342",
        "3341","3340","3338","3337","3336","3335","3329","3328","3250","3230","3228","3227","3226","3225","3223","3222",
        "3160","3159","3158","3139","3115","3114","3113","3099","3097","3096","3091","3090","3089","3064","3063","3059",
        "3049","3048","3942","3921","3779","3745","3738","3737","3735","3726","3722","3720","3719","3718","3717","3715",
        "3714","3713","3712","3690","3678","3677","3675","3673","3672","3670","3665","3664","3663","3659","3649","3647",
        "3646","3644","3641","3640","3639","3638","3637","3636","3635","3634","3633","3624","3623","3622","3621","3620",
        "3618","3617","3616","3614","3612","3610","3608","3607","3597","3596","3595","3594","3590","3589","3588","3586",
        "3585","3578","3575","3565","3564","3562","3537","3494","3447","3446","3422","3412","3374","3334","3332","3330",
        "3325","3324","3323","3322","3310","3309","3305","3304","3303","3301","3300","3289","3287","3286","3285","3284",
        "3283","3282","3281","3280","3279","3278","3277","3273","3272","3271","3270","3269","3268","3267","3266","3265",
        "3264","3260","3254","3251","3243","3239","3232","3987","3900","3854","3852","3842","3840","3832","3820","3816",
        "3815","3814","3813","3812","3764","3744","3723","3599","3591","3584","3583","3581","3580","3579","3568","3567",
        "3566","3549","3546","3544","3542","3540","3533","3531","3530","3529","3505","3501","3500","3498","3496","3487",
        "3485","3483","3482","3480","3478","3477","3475","3472","3469","3468","3467","3464","3424","3423","3420","3419",
        "3418","3415","3414","3413","3408","3407","3401","3400","3396","3395","3393","3392","3391","3390","3388","3387",
        "3385","3384","3381","3379","3378","3371","3370","3363","3361","3360","3319","3318","3317","3315","3314","3312",
        "3311","3302","3294","3293","3292","3276","3275","3274","3233","2770","2769","2768","2767","2766","2763","2761",
        "2760","2759","2750","2749","2748","2747","2745","2567","2566","2565","2564","2559","2558","2557","2556","2234",
        "2231","2228","2227","2226","2225","2224","2223","2222","2221","2220","2219","2218","2217","2216","2214","2213",
        "2212","2211","2210","2209","2208","2207","2206","2205","2204","2203","2200","2199","2198","2197","2196","2195",
        "2194","2193","2192","2191","2190","2177","2176","2174","2173","2171","2170","2168","2167","2166","2165","2164",
        "2163","2162","2161","2160","2158","2157","2156","2155","2154","2153","2152","2151","2150","2148","2147","2146",
        "2145","2144","2143","2142","2141","2140","2138","2137","2136","2135","2134","2133","2132","2131","2130","2128",
        "2127","2126","2125","2122","2121","2120","2119","2118","2117","2116","2115","2114","2113","2112","2111","2110",
        "2108","2107","2106","2105","2104","2103","2102","2101","2100","2099","2097","2096","2095","2094","2093","2092",
        "2090","2089","2088","2087","2086","2085","2084","2077","2076","2075","2073","2072","2071","2070","2069","2068",
        "2067","2066","2065","2064","2063","2062","2061","2060","2050","2049","2048","2047","2046","2045","2044","2043",
        "2042","2041","2040","2039","2038","2037","2036","2035","2034","2033","2032","2031","2030","2029","2028","2027",
        "2026","2025","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2011","2010","2009","2008",
        "2007","2006","2000","2229","2233","5163","5159","5110","5168","5114","5115","5231","3024","3030","3156","3037",
        "3043","3095","3134","3136","3911","3213","3211","3321","3221","3224","3231","3240","3331","3333","3351","3835",
        "3694","3377","3375","3409","3687","3693","3380","3847","3981","3984"];
      	
        if($.inArray(postcode, postcode_arr) !== -1){
        	$('.check-area-form-grid .success-message').show();
            $('.check-area-form-grid .error-message').hide();
        }else{
        	$('.check-area-form-grid .success-message').hide();
            $('.check-area-form-grid .error-message').show();
        }
    })
    
    $('.free_shipping_form_same #postcode_check').on('click', function(e){
      	e.preventDefault();
		var postcode = $('.free_shipping_form_same #postal_code').val();
      	var postcode_arr = ["4508","4505","4503","4502","4501","4500","4304","4303","4301","4179","4300","4178","4174",
        "4173","4172","4171","4170","4169","4164","4163","4161","4158","4159","4160","4157","4156","4509","4155","4154",
        "4153","4152","4151","4133","4132","4131","4130","4129","4128","4127","4123","4122","4121","4120","4119","4118",
        "4117","4116","4115","4114","4113","4112","4111","4110","4109","4108","4107","4106","4105","4104","4103","4102",
        "4101","4078","4077","4076","4075","4074","4073","4072","4068","4067","4066","4065","4064","4061","4060","4059",
        "4054","4000","4005","4001","4006","4007","4008","4009","4010","4011","4012","4013","4014","4017","4018","4020",
        "4019","4021","4022","4025","4030","4031","4032","4034","4035","4037","4053","4051","5087","5086","5084","5085",
        "5062","5061","5052","5051","5048","5049","5047","5035","5037","5038","5039","5040","5041","5042","5043","5044",
        "5045","5046","5083","5082","5081","5075","5074","5073","5072","5070","5069","5067","5068","5065","5066","5063",
        "5064","5158","5132","5127","5126","5125","5113","5112","5109","5108","5107","5106","5098","5097","5096","5095",
        "5094","5093","5092","5091","5090","5089","5088","5010","5011","5012","5013","5014","5015","5016","5017","5018",
        "5019","5020","5021","5022","5023","5024","5025","5031","5032","5033","5034","5009","5008","5007","5006","5005",
        "5000","5111","5160","5161","5162","5164","5165","5166","5950","5169","5167","5131","5174","5173","5121","5120",
        "5118","5117","5050","5116","2641", "2600","2601","2602","2603","2604","2605","2606","2607","2608","2609","2612",
        "2614","2615","2617","2619","2900","2902","2903","2904","2905","2906","2911","2912","2913","2914","2530","2529",
        "2528","2527","2526","2525","2519","2518","2517","2516","2515","2508","2506","2505","2502","2500","2762","2753",
        "2568","2082","2080","2079","3977","3976","3975","3910","3805","3804","3803","3802","3207","3206","3205","3204",
        "3202","3201","3200","3199","3198","3197","3196","3195","3194","3193","3192","3191","3190","3189","3188","3187",
        "3186","3185","3184","3183","3182","3181","3180","3179","3178","3177","3175","3174","3173","3172","3171","3170",
        "3169","3168","3167","3166","3165","3163","3162","3161","3155","3154","3153","3152","3151","3150","3149","3148",
        "3147","3146","3145","3144","3143","3142","3141","3140","3138","3137","3135","3133","3132","3131","3130","3129",
        "3128","3127","3126","3125","3124","3123","3122","3121","3116","3111","3109","3108","3107","3106","3105","3104",
        "3103","3102","3101","3094","3093","3088","3087","3086","3085","3084","3083","3082","3081","3079","3078","3076",
        "3075","3074","3073","3072","3071","3070","3068","3067","3066","3065","3062","3061","3060","3058","3057","3056",
        "3055","3054","3053","3052","3051","3050","3047","3046","3045","3044","3042","3041","3040","3039","3038","3036",
        "3034","3033","3032","3031","3029","3028","3027","3026","3025","3023","3022","3021","3020","3019","3018","3016",
        "3015","3013","3012","3011","3008","3006","3005","3004","3003","3002","3000","3356","3355","3354","3350","3220",
        "3219","3218","3217","3216","3215","3214","3212","3629","3630","3631","3978","3944","3943","3941","3940","3939",
        "3938","3937","3936","3934","3933","3931","3930","3929","3928","3927","3926","3920","3919","3918","3916","3915",
        "3913","3912","3810","3809","3808","3807","3806","3799","3797","3796","3795","3793","3792","3791","3789","3788",
        "3787","3786","3785","3783","3782","3781","3778","3777","3775","3770","3767","3766","3765","3763","3762","3761",
        "3760","3759","3758","3757","3756","3755","3754","3753","3752","3751","3750","3711","3660","3658","3555","3458",
        "3442","3441","3440","3438","3437","3435","3434","3433","3432","3431","3430","3429","3428","3427","3358","3342",
        "3341","3340","3338","3337","3336","3335","3329","3328","3250","3230","3228","3227","3226","3225","3223","3222",
        "3160","3159","3158","3139","3115","3114","3113","3099","3097","3096","3091","3090","3089","3064","3063","3059",
        "3049","3048","3942","3921","3779","3745","3738","3737","3735","3726","3722","3720","3719","3718","3717","3715",
        "3714","3713","3712","3690","3678","3677","3675","3673","3672","3670","3665","3664","3663","3659","3649","3647",
        "3646","3644","3641","3640","3639","3638","3637","3636","3635","3634","3633","3624","3623","3622","3621","3620",
        "3618","3617","3616","3614","3612","3610","3608","3607","3597","3596","3595","3594","3590","3589","3588","3586",
        "3585","3578","3575","3565","3564","3562","3537","3494","3447","3446","3422","3412","3374","3334","3332","3330",
        "3325","3324","3323","3322","3310","3309","3305","3304","3303","3301","3300","3289","3287","3286","3285","3284",
        "3283","3282","3281","3280","3279","3278","3277","3273","3272","3271","3270","3269","3268","3267","3266","3265",
        "3264","3260","3254","3251","3243","3239","3232","3987","3900","3854","3852","3842","3840","3832","3820","3816",
        "3815","3814","3813","3812","3764","3744","3723","3599","3591","3584","3583","3581","3580","3579","3568","3567",
        "3566","3549","3546","3544","3542","3540","3533","3531","3530","3529","3505","3501","3500","3498","3496","3487",
        "3485","3483","3482","3480","3478","3477","3475","3472","3469","3468","3467","3464","3424","3423","3420","3419",
        "3418","3415","3414","3413","3408","3407","3401","3400","3396","3395","3393","3392","3391","3390","3388","3387",
        "3385","3384","3381","3379","3378","3371","3370","3363","3361","3360","3319","3318","3317","3315","3314","3312",
        "3311","3302","3294","3293","3292","3276","3275","3274","3233","2770","2769","2768","2767","2766","2763","2761",
        "2760","2759","2750","2749","2748","2747","2745","2567","2566","2565","2564","2559","2558","2557","2556","2234",
        "2231","2228","2227","2226","2225","2224","2223","2222","2221","2220","2219","2218","2217","2216","2214","2213",
        "2212","2211","2210","2209","2208","2207","2206","2205","2204","2203","2200","2199","2198","2197","2196","2195",
        "2194","2193","2192","2191","2190","2177","2176","2174","2173","2171","2170","2168","2167","2166","2165","2164",
        "2163","2162","2161","2160","2158","2157","2156","2155","2154","2153","2152","2151","2150","2148","2147","2146",
        "2145","2144","2143","2142","2141","2140","2138","2137","2136","2135","2134","2133","2132","2131","2130","2128",
        "2127","2126","2125","2122","2121","2120","2119","2118","2117","2116","2115","2114","2113","2112","2111","2110",
        "2108","2107","2106","2105","2104","2103","2102","2101","2100","2099","2097","2096","2095","2094","2093","2092",
        "2090","2089","2088","2087","2086","2085","2084","2077","2076","2075","2073","2072","2071","2070","2069","2068",
        "2067","2066","2065","2064","2063","2062","2061","2060","2050","2049","2048","2047","2046","2045","2044","2043",
        "2042","2041","2040","2039","2038","2037","2036","2035","2034","2033","2032","2031","2030","2029","2028","2027",
        "2026","2025","2024","2023","2022","2021","2020","2019","2018","2017","2016","2015","2011","2010","2009","2008",
        "2007","2006","2000","2229","2233","5163","5159","5110","5168","5114","5115","5231","3024","3030","3156","3037",
        "3043","3095","3134","3136","3911","3213","3211","3321","3221","3224","3231","3240","3331","3333","3351","3835",
        "3694","3377","3375","3409","3687","3693","3380","3847","3981","3984"];
      	
        if($.inArray(postcode, postcode_arr) !== -1){
        	$('.free_shipping_form_same .success-message').show();
            $('.free_shipping_form_same .error-message').hide();
        }else{
        	$('.free_shipping_form_same .success-message').hide();
            $('.free_shipping_form_same .error-message').show();
        }
    })
  
    
  
  	/*var $slider = $('.slide-swec');
	if ($slider.length) {
		var currentSlide;
		var slidesCount;
		var sliderCounter = document.createElement('.slide');
		sliderCounter.classList.add('slider__counter');
		var updateSliderCounter = function(slick, currentIndex) {
			currentSlide = slick.slickCurrentSlide() + 1;
			slidesCount = slick.slideCount;
			$(sliderCounter).text(currentSlide + '/' +slidesCount)
		};

		$slider.on('init', function(event, slick) {
			$slider.append(sliderCounter);
			updateSliderCounter(slick);
		});

		$slider.on('afterChange', function(event, slick, currentSlide) {
			updateSliderCounter(slick, currentSlide);
		});

		$slider.slick({
          centerMode: true,
		centerPadding: '0px',
		dots: false,
		infinite: true,
		autoplay: false,
		speed: 1500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true
        });
	} */
	$('.slide-swec').slick({
		centerMode: true,
		centerPadding: '0px',
		dots: false,
		infinite: true,
		autoplay: false,
		speed: 1500,
		arrows: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: true,
      	responsive: [
          {
            breakpoint: 575,
            settings: {
              dots: true,
            }
          }
        ]
	});
  
  
  /*************** Article Slider **************/
  $('.article-top-slider').slick({
    infinite: true,
	dots: true,
	arrows: false,
	autoplay: true,
	autoplaySpeed: 3000,
    slidesToShow: 1,
  });
  
  
  
  /*********************************************/

  if($('.recently-viewed.grid').length){
     $('.recently-viewed.grid').slick({
        infinite: false,
    	dots: true,
    	arrows: true,
    	autoplay: false,
    	autoplaySpeed: 3000,
        slidesToShow: 2,
    });
  }
  
			//slider//
		
  var $carousel = $('.shop-cagy');

  var settings = {
    dots: false,
    arrows: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '80px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: '40px',
          slidesToShow: 3,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 767,
        settings: {
          centerPadding: '0',
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: '0',
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  function setSlideVisibility() {
    //Find the visible slides i.e. where aria-hidden="false"
    var visibleSlides = $carousel.find('.slick-slideshow__slide[aria-hidden="false"]');
    //Make sure all of the visible slides have an opacity of 1
    $(visibleSlides).each(function() {
      $(this).css('opacity', 1);
    });

    //Set the opacity of the first and last partial slides.
    $(visibleSlides).first().prev().css('opacity', 0);
  }

  $carousel.slick(settings);
  $carousel.slick('slickGoTo', 1);
  setSlideVisibility();

  $carousel.on('afterChange', function() {
    setSlideVisibility();
  });

  
  
  /************** Cart Slider ******************/
  
  
   	var $carousel2 = $('#Slider-cart-collection');

    var settings2 = {
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,

          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        }
      ]
    };

    function setSlideVisibility2() {
      //Find the visible slides i.e. where aria-hidden="false"
      var visibleSlides = $carousel2.find('.slick-slideshow__slide[aria-hidden="false"]');
      //Make sure all of the visible slides have an opacity of 1
      $(visibleSlides).each(function() {
        $(this).css('opacity', 1);
      });

      //Set the opacity of the first and last partial slides.
      $(visibleSlides).first().prev().css('opacity', 0);
    }

    $carousel2.slick(settings2);
    $carousel2.slick('slickGoTo', 1);
    setSlideVisibility2();

    $carousel2.on('afterChange', function() {
      setSlideVisibility2();
    });
  
  
  /*********************************************/
  
	
 $('.bestseller_slider').slick({
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 
   
  
$('.desktop_collection_grid').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: false,
    adaptiveHeight:true,
    autoplay:true
});   
  
$('.lookbook_prod_slider').slick({
  dots: false,
  infinite: true,
  speed: 1500,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
  ]
}); 
     
  
  
  
$('.related_slider,.also_like_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 
 
$('.blog_also_like_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 
  
  
  var $aboutslider = $('.about-page-slider');
  
  var $mslider = $('.mobile-product-description-slider');
  var $mprogressBar = $('.mobile-product-description-section .progress');
  var $mprogressBarLabel = $( '.mobile-product-description-section .slider__label' );
  
  if($('.mobile-product-description-section .progress').length){
  		var total_slide = $('.mobile-product-description-section .progress').attr('data-total');
        var calc = ( (1) / (total_slide) ) * 100;
    	 $mprogressBar
          .css('background-size', calc + '% 100%')
          .attr('aria-valuenow', calc );

        $mprogressBarLabel.text( calc + '% completed' );
  }
  
  
   $mslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
    $('.mobile-product-description-section .curent_slide_active_p').html(nextSlide+1);
    $mprogressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $mprogressBarLabel.text( calc + '% completed' );
  });
  
  $mslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    adaptiveHeight:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }
    ]
  });  

  
  $aboutslider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
    $('.mobile-product-description-section .curent_slide_active_p').html(nextSlide+1);
    $mprogressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $mprogressBarLabel.text( calc + '% completed' );
  });
  $aboutslider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight:true,
    autoplay:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
        }
      }
    ]
  }); 
  
 $('.collection_mobile_slider_main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
     dots: true,

   adaptiveHeight:true,
  asNavFor: '.collection_mobile_slider_thmb'
});
  
$('.collection_mobile_slider_thmb').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.collection_mobile_slider_main',
  arrows: false,
  dots: true,
  centerMode: false,
  focusOnSelect: true
});
  
$('.mattresses_scale_slider_sec .scale_slider ').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
   adaptiveHeight:true
});
  
  
  var $m_slider = $('.mcloser_like_slider');
  var $m_progressBar = $('.mobile_closer_section .progress');
  var $m_progressBarLabel = $( '.mobile_closer_section .slider__label' );

  if($('.mobile_closer_section .progress').length){
    var mtotal_slide = $('.mobile_closer_section .progress').attr('data-total');
    var mcalc = ( (1) / (mtotal_slide) ) * 100;
    $mprogressBar
    .css('background-size', mcalc + '% 100%')
    .attr('aria-valuenow', mcalc );

    $m_progressBarLabel.text( mcalc + '% completed' );
  }


  $m_slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var mcalc = ( (nextSlide+1) / (slick.slideCount) ) * 100;
    $('.mobile_closer_section .curent_slide_active_p').html(nextSlide+1);
    $m_progressBar
    .css('background-size', mcalc + '% 100%')
    .attr('aria-valuenow', mcalc );

    $m_progressBarLabel.text( mcalc + '% completed' );
  });

  $m_slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight:true,
    autoplay: true,
    autoplaySpeed: 1000,
  });  
  
  
$('.closer_like_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight:true,
  autoplay: true,
  autoplaySpeed: 1000,
}); 

 
  if($('.shop_by_style_slider_desktop').length){
    $('.shop_by_style_slider_desktop').each(function(){
    	
      	var id = $(this).attr('data-id');
      	var $shopstatus = $('#pagingInfo_slider_'+id);
        var $slickElementStyle = $('#shop_by_style_slider_desktop_'+id);

        $slickElementStyle.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
          //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
          var i = (currentSlide ? currentSlide : 0) + 1;
          $shopstatus.text(i + ' of ' + slick.slideCount);
        });

        $slickElementStyle.slick({
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
              fade: false,
              adaptiveHeight:true,
              autoplay: false,
              autoplaySpeed: 1000,
              responsive: [               
                  {
                    breakpoint: 767,
                    settings: {
                      dots: true,
                      arrows: false,
                    }
                  }
             ]
        });  
    });
  } 
  
  if($('.mobile_slider_shop_by_style').length){
    $('.shop_by_style_slider_mobile').each(function(){
      var id = $(this).attr('data-id');
      var main_slider = '#shop_by_style_slider_mobile_'+id;
      var thum_slider = '#shop_by_style_slider_mobile_thumb_'+id;
      $(main_slider).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        asNavFor: thum_slider
      });
      $(thum_slider).slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: main_slider,
        arrows: false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        centerPadding: '40px',
      });
    });
  }                                       

$('.mattress_compare_image_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
   adaptiveHeight:true,
  asNavFor: '.mattress_compare_content_slider'
});
  
$('.mattress_compare_content_slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.mattress_compare_image_slider',
  arrows: true,
  dots: false,
  centerMode: false,
  focusOnSelect: true
});
  
  
  
  
  
  
  if($(window).width() < 768){
  	
     $('section.featured_section.home_resources_section .col-12 .row').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
     $('.featured_logo_grid').slick({
        dots: true,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 3,
        adaptiveHeight: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            }
          }
        ]
      });  
    
  }else{
  	
    $('.landing_cat_slider').slick({
      dots: false,
      infinite: true,
      loop:true,
      speed: 800,
      slidesToShow: 5,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
         {
          breakpoint: 767,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
          }
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });  
  } 


  $window = $(window);
  $slick_slider_p = $('.shop_cat_slider');
  settings = {
      dots: false,
      infinite: true,
      loop:true,
      speed: 800,
      slidesToShow: 8,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
		{
          breakpoint: 768,
          settings: "unslick"
        }
      ]
  };
  $slick_slider_p.slick(settings);  
  /* $window.on('resize', function() {
    if ($window.width() < 768) {
      if ($slick_slider_p.hasClass('slick-initialized')){
         return $slick_slider_p.slick('unslick');
      }                   
    }else if (!$slick_slider_p.hasClass('slick-initialized') && $window.width() > 767){
      return $slick_slider_p.slick(settings);
    }
      
  }); */



  

    /*
    if($(window).width() < 768){
   	
     $('.popular-cat-slider-mobile').slick({
       arrows:false,
       dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        centerMode: true,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });
    
  } 
  
 
  $("body").children().each(function() {
      document.body.innerHTML = document.body.innerHTML.replace(/\u2028/g, ' ');
  });*/ 	
  
  

   
    $slick_slider_q = $('.icon_box_section .row');
    settingsq = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        mobileFirst: true,
        arrows: false,
        slidesToScroll: 1       
    };
    if ($window.width() < 768) {
      $slick_slider_q.slick(settingsq);
    }
      
    $window.on('resize', function() {
      if ($window.width() > 767) {
        if ($slick_slider_q.hasClass('slick-initialized')){
           return $slick_slider_q.slick('unslick');
        }                   
      }else if (!$slick_slider_q.hasClass('slick-initialized') && $window.width() < 768){
        return $slick_slider_q.slick(settingsq);
      }        
    });
    $('.landing_collection_small_box_col a').click(function(e){
      e.preventDefault();
    });
    /*
  	if (window.matchMedia("(max-width: 768px)").matches) {
      	$('.icon_box_section .row').slick({
          dots: true,
          infinite: true,
          slidesToShow: 1,
            mobileFirst: true,
            arrows: false,
          slidesToScroll: 1,
        }); 
      	$('.related_product_tab_nav a.entire_collection').html('Shop Collection');
		$('.related_product_tab_nav a.also_like_produts').html('You might like');
	} */
  	$('.homeImage_slider').slick({
		centerMode: true,
		centerPadding: '0px',
		dots: false,
       	rows: 0,
		infinite: true,
		autoplay: true,
		speed: 1500,
		arrows: false,
		slidesToShow: 5,
		slidesToScroll: 1,
       responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
      }
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
         centerPadding: '20%',
        dots: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: '20%',
        dots: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
	});


  $(document).on('change','variant-radios.no-js-hidden input',function(){
       $('.product_payement_logo_new.active').removeClass('active');
    
    $('.product__info-container ').addClass('remove__price');
    
       var variation_id = $('product-form.product-form input[name="id"]').val();
       $('.product_payement_logo_new.product_payement_logo_'+variation_id).addClass('active');
        if($('ul.hidden_sale_discount').length){
          var p_discount_price = $('ul.hidden_sale_discount li[data-id="'+variation_id+'"]').html();
          $('.mid-sale-discount-batches li.sale_discont_quick').html(p_discount_price);
        }
   }); 
  
  /**************** Footer Nav *******************/
  
  $(document).on('click', '.footer.footer-mobile .grid .grid__item h2 .open-foo-nav', function(e){
  	e.preventDefault();
    $(this).closest('.footer-block').find('.footer-block__details-content ul.list-unstyled').slideDown();
    $(this).html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19" stroke="#758068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>');
    $(this).addClass('close-foo-nav');
    $(this).removeClass('open-foo-nav');
  });
  
  
   $(document).on('click', '.footer.footer-mobile .grid .grid__item h2 .close-foo-nav', function(e){
  	e.preventDefault();
    $(this).closest('.footer-block').find('.footer-block__details-content ul.list-unstyled').slideUp();
    $(this).html('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5V19" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 5V19" stroke="#758068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 12H19" stroke="#758068" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>');
    $(this).addClass('open-foo-nav');
    $(this).removeClass('close-foo-nav');
  });
  
$('#productSliderGallery').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#productSliderThumbs',
    dots: false,
    arrows: true,
    loop: true,
    infinite: true,
    adaptiveHeight: true,
  	prevArrow: "<button class='slide-arrow prev-arrow'><img src='https://cdn.shopify.com/s/files/1/0562/7569/7706/files/button-prev.png?v=1646305300'></button>",
    nextArrow: "<button class='slide-arrow next-arrow'><img src='https://cdn.shopify.com/s/files/1/0562/7569/7706/files/button-next.png?v=1646305300'></button>"

});
  
$('#productSliderThumbs').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '#productSliderGallery',
    dots: false,
    arrows: false,
    infinite: true,
  	loop: true,
  	focusOnSelect: true,
  	responsive: [
      {
        breakpoint: 1025,
        settings: {
          speed: 2000,
          autoplay: false,
          autoplaySpeed: 0,
          cssEase: 'linear',
          arrows: false,
          dots: true,
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  $('.article_banner_gallery_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
  	loop: true,
  	focusOnSelect: true,
  	responsive: [
      {
        breakpoint: 767,
        settings: {
          speed: 1000,
          autoplay: false,
          cssEase: 'linear',
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.related_product_tab_nav ul li a').click(function(e){
  		e.preventDefault();
    	var target = $(this).attr('href');
        if(!$(this).hasClass('active_tab') && target == 'also_like_produts'){
			$('.related_product_tab_nav ul li a.active_tab').removeClass('active_tab');
          	$(this).addClass('active_tab');
          	$('.related_slider').removeClass('active');
            $('.also_like_slider').addClass('active');
        }else if(!$(this).hasClass('active_tab') && target == 'related_products'){
        	$('.related_product_tab_nav ul li a.active_tab').removeClass('active_tab');
          	$(this).addClass('active_tab');
          	$('.also_like_slider').removeClass('active');
          	$('.related_slider').addClass('active');
        }	
  });
   
  
  $('#post_check_form').on('submit', function(e){
  	e.preventDefault(); 
    if($("button#product_detail_custom_add_to_cart").is(":disabled")){
      $("button#product_detail_custom_add_to_cart").removeAttr("disabled");
    }
    var postcode = $('#post_check_form #post_check').val();
    var shipping_rate_p = 'not found';
    
    if(postcode !== ''){        
        $('.postcode_check_grid').append('<div class="shipping_zip_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
      	var variation_id = $('product-form.product-form input[name="id"]').val();
        $('.shiping_with_deliverd .shipping_rate').html('');
        if(variation_id != '' && variation_id != null && variation_id != 'undefined'){
			var stock_label = $('.InventoryManagment_sec_'+variation_id+' span').attr('data-stock-type');
          	var instock_label = $('.InventoryManagment_sec_'+variation_id+' span').html();
            if(stock_label == 'In Stock'){
                $('.quantity-avl').text(instock_label);
                $('.quantity-avl').removeClass('quantity-out');
                $('.quantity-avl').show();
                $('.dispatch_deatil .disp-main').show();
            }else if(stock_label == 'Out of Stock'){
                 $('.quantity-avl').text(instock_label);
                 $('.quantity-avl').addClass('quantity-out');
                 $('.quantity-avl').show();
                 $('.dispatch_deatil .disp-main').hide();
            }else{
                $('.quantity-avl').hide();
				$('.dispatch_deatil .disp-main').show();
            }
            var weight = $('.variation_product_weight span[data-id="'+variation_id+'"]').html();
            var p_id = $('.post_check_main_grid').attr('data-id');
          
            if(weight != null && weight != 'undefined'){              
              $.ajax({
                type: 'POST',
                url: 'https://shiprates.logiceverest.com/calculate-rates',
                data: {product_id:p_id,zip:postcode,grams:weight,currency:"AUD"},
                crossDomain: true,
                dataType: 'json',
                success: function(data) {                  
                  if(data.rates[0].total_price > 0){       
                    var price = format_weight_price(data.rates[0].total_price); 
                  	$('.shiping_with_deliverd .shipping_rate').html(data.rates[0].service_name+' $'+price);
                    $('.csv_result_show p.shipping_deatil .shipping_fee').html('<span class="price_">'+'$'+price+'</span> shipping fee');
        			shipping_rate_p = 'found';
                  }else if(data.rates[0].total_price == 0){
                    $('.shiping_with_deliverd .shipping_rate').html(data.rates[0].service_name);
                    $('.csv_result_show p.shipping_deatil .shipping_fee').html('<span class="price_">Free</span> shipping fee');
                    shipping_rate_p = 'found';
                
                  } 
                }, 
         	 }); 
            }
        }  
        
      setTimeout(function(){
      	const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        if($('.postcode_form_grid span.pre_order_item').length){
            var curent_variation_id = $('product-form.product-form form input[name="id"]').val();
            if($('.postcode_form_grid .form-note').attr('data-dispatch') != '' && $('.postcode_form_grid .form-note').attr('data-dispatch') != null && $('.postcode_form_grid .form-note').attr('data-dispatch') != 'undefined'){
                var dispatch_date = $.trim($('.postcode_form_grid .form-note').attr('data-dispatch'));
            }else{
                var dispatch_date = '';
            }

            if(curent_variation_id != '' && curent_variation_id != null && curent_variation_id != 'undefined'){
              var found_pre_order = '';
              $('.postcode_form_grid span.pre_order_item').each(function(){          	
                if($(this).text() == curent_variation_id){
                    found_pre_order = 'true';
                    if($(this).attr('data-dispatch-date') != '' && $(this).attr('data-dispatch-date') != null && $(this).attr('data-dispatch-date') != 'undefined'){
                         dispatch_date = $.trim($(this).attr('data-dispatch-date'));
                    }
                }
              });

              if(found_pre_order == 'true' && dispatch_date != '' && dispatch_date != null && dispatch_date != 'undefined'){                
                     const today = new Date(dispatch_date);
                     const CurrentDate = new Date();       
                     if(CurrentDate < today){                   
                        const str = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();	
                        $('.postcode_form_grid .form-note .span_dispatch_note').text('Available On : '+str);
                        $('.csv_result_show .dispatch_deatil .dispatch_label').html('Available On: ');
                        $('.csv_result_show .dispatch_deatil .dispatch_date').html(str);
                     }else{                   
                        $('.postcode_form_grid .form-note .span_dispatch_note').text('Dispatch in 24 hours');
                        $('.csv_result_show .dispatch_deatil .dispatch_label').html('Dispatch in ');
                        $('.csv_result_show .dispatch_deatil .dispatch_date').html('24 hours');
                     }

              }else{      
                $('.csv_result_show .dispatch_deatil .dispatch_label').html('Dispatch in ');
                $('.csv_result_show .dispatch_deatil .dispatch_date').html('24 hours');
              }
            }
        }
      
      	$.ajax({
         url:"https://cdn.shopify.com/s/files/1/0562/7569/7706/files/delivery_days_1_7ca6de77-6dda-4e63-8439-aae0af68f9ae.csv?v=1661768326",
         dataType:"text",
         beforeSend: function(){
			$('#csv-display').fadeOut();
         },
         success:function(data)
         {
           var file_data = data.split(/\r?\n|\r/);
           var table_data = '';
           for(var count = 0; count< file_data.length; count++)
            {
              var cell_data = file_data[count].split(",");
              var table_postcode = cell_data[2];
              var state = cell_data[1];
              var delivery_days = '';
              var del_state = cell_data[1];
              const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
				
              if(postcode == table_postcode){
                  delivery_days = cell_data[3];
                  if(delivery_days != '' || delivery_days != 'undefined'){
                      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      var delivery_days_arr = delivery_days.split('-');
                      var fdate = delivery_days_arr[0];
                      var ldate_arr = delivery_days_arr[1].split(' ');					  
                      var ldate = ldate_arr[0];

                      var f_date = new Date().toISOString();
                      var fd = new Date(f_date);
                      
                      var pp = new Date().toISOString();
                      var startDate = new Date(pp);
                      var startDate_pp = new Date(pp);
                      var firstDate = "", noOfDaysToAdd = fdate, count_pp = 0;
                      while(count_pp < noOfDaysToAdd){
                          firstDate = new Date(startDate.setDate(startDate.getDate() + 1));
                          if(firstDate.getDay() != 0 && firstDate.getDay() != 6){
                             count_pp++;
                          }
                      }                    


                      var lastDate = "", noOfDaysToAdd = ldate, count_pp = 0;
                      while(count_pp < noOfDaysToAdd){
                          lastDate = new Date(startDate_pp.setDate(startDate_pp.getDate() + 1));
						  console.log(lastDate);
                          if(lastDate.getDay() != 0 && lastDate.getDay() != 6){
                             count_pp++;
                          }
                      }

                      var first_day = firstDate.getDate();
                      var first_day_name = monthNames[firstDate.getMonth()];          
                      var las_date = lastDate.getDate();
                      var last_day_name = monthNames[lastDate.getMonth()];           
                       if($(window).width() > 600){
                          var full_last_date = last_day_name+' '+las_date;
                          var full_first_date = first_day_name+' '+first_day;
                        }else{
                          var full_last_date = last_day_name.substr(0, 3)+' '+las_date;
                          var full_first_date = first_day_name.substr(0, 3)+' '+first_day;
                        }

                  }

                table_data += full_first_date+" - "+full_last_date+"";
                if(state != '' && state != null && state != 'undefined'){
                   var address = state+','+postcode;
                }else{
                	var address = postcode;
                }
                

              }
             
              if(table_data == ''){
           		$('.post_code_error').css('display','flex');
                $('.postcode_check_grid .posthead').html('Delivery');
                 $('.csv_result_show').hide();
              }else{                
                
                $('.post_code_error').css('display','none');	
              	$('.postcode_form_grid .post_form_head').hide();
              	//$('.postcode_form_grid .form-inner-wrap').hide();
             	//$('#csv-display').fadeIn();
            	if(found_pre_order == 'true'){
                      $('.csv_result_show p.delivery_detail span.delivery_date').html('Not Eligible');
                }else{
                  	$('#csv-display .exect_date').html(table_data);
                	$('.csv_result_show p.delivery_detail span.delivery_date').html(table_data);
                }              
                $('div#csv-display h3.diliverd_to span:first-child').html(address);
                $('.postcode_check_grid .posthead').html('Delivery to: <span>'+address+'</span>');
                $('.csv_result_show').show();
                
              }
              
           }
           if(table_data == ''){             		
                if(shipping_rate_p == 'found'){
                  	 $('.post_code_error').css('display','none');	
              	     $('.postcode_form_grid .post_form_head').hide();
					 $('.csv_result_show p.delivery_detail span.delivery_date').html('Not Eligible');
                  	 $('div#csv-display h3.diliverd_to span:first-child').html(postcode);
             		 $('.postcode_check_grid .posthead').html('Delivery to: <span>'+postcode+'</span>');
                     $('.csv_result_show').show();
                }else{ 
                	$('.post_code_error').css('display','flex');    
             		$('.postcode_check_grid .posthead').html('Delivery');
                	$('.csv_result_show').hide();
                }         		
             
           }
           $('.shipping_zip_loader').remove();
         }
        });
      
      },2000);  
    }
  })
  
  
  $( window ).resize(function() {
    if($(window).width() < 768){
    	$('.related_product_tab_nav a.entire_collection').html('Shop Collection');
		$('.related_product_tab_nav a.also_like_produts').html('You might like');
    }
  });

  
  if(!$('body').hasClass('product_gift_card')){
    setTimeout(function(){
       $('#post_check_form input').val('3000');
       $('#post_check_form input').submit();
       $('#post_check_form_cart').submit();      
    },50); 
  }   
  
 function format_weight_price(ammount) {
    var ammount = parseFloat(ammount/100).toFixed(2);
    return ammount;
  }
  
  function toggleIcon(e) {
      $(e.target)
          .prev('.card-header')
          .find("i")
          .toggleClass('fa-plus fa-minus');
  }
  $('.faq_section_accordian').on('hidden.bs.collapse', toggleIcon);
  $('.faq_section_accordian').on('shown.bs.collapse', toggleIcon);
  
  
  jQuery('.product-form__input input[name="Color"]').change(function() {
    if($(this).is(':checked')){
   		var val = $(this).val();
      $(this).closest('.product-form__input').find('legend.form__label').html('Color: <span class="color_slected">'+val+'</span>');
    }else{
    	$(this).closest('.product-form__input').find('legend.form__label').html('Color');
    }
    
  });
  
  jQuery('body').on('variants:changed', function(evt, variantObj){
     console.log('theme event for '+ variantObj.sku); // limited view of variant.
     console.log(variantObj);
  });
  
 $('product-form.product-form').on('DOMSubtreeModified',function(){
	if($(this).find('#preorder-label').length){
      //$(this).find('.product-form__submit span').text('Pre-order');
    }else if($(this).find('.product-form__submit span').text() == 'pre-order'){
    	//$(this).find('.product-form__submit span').text('Add to cart');
    }    
  }); 
  
  $('div#csv-display span.edit_shipping_postcode').click(function(e){
  		e.preventDefault();
    	$('#csv-display').hide();	
    	$('.postcode_form_grid .post_form_head').show();
    	$('.postcode_form_grid .form-inner-wrap').show();
  })
  
  
  $(document).on('mouseover','.collection_product_color_swatches li',function(){
  	 if($(this).attr('data-img') != '' && $(this).attr('data-img') != null && $(this).attr('data-img') != 'undefined'){
     	var img = $(this).attr('data-img');
        $(this).closest('li.grid__item').find('.card__media img').attr('srcset',img);
        $(this).closest('.bestseller_product_image img').find('.product').attr('srcset',img);
     }
    
  });
  
 $(document).on('mouseleave','.collection_product_color_swatches li',function() {
   if($(this).attr('data-img') != '' && $(this).attr('data-img') != null && $(this).attr('data-img') != 'undefined'){
  	 var img = $(this).closest('li.grid__item').find('.card__media img').attr('src');
     $(this).closest('li.grid__item').find('.card__media img').attr('srcset',img);
     $(this).closest('.bestseller_product_image img').find('.product').attr('srcset',img);
   }
 });


  $(document).on('mouseover','.master_product_grid .collection_product_color_swatches li',function(){
     if($(this).attr('data-img') != '' && $(this).attr('data-img') != null && $(this).attr('data-img') != 'undefined'){
        var img = $(this).attr('data-img');
        $(this).closest('.bestseller-main-grid').find('.bestseller_product_image img').attr('srcset',img);
     }
  });
  
  $(document).on('mouseleave','.master_product_grid .collection_product_color_swatches li',function() {
    if($(this).attr('data-img') != '' && $(this).attr('data-img') != null && $(this).attr('data-img') != 'undefined'){
       var img = $(this).closest('.bestseller_product_image').find('img').attr('src');
       $(this).closest('.bestseller_product_image img').find('.product').attr('srcset',img);
    }
  });
  
  
  $('.view_at_home_product_slider .custom_slider_button button').click(function(e){
  	 	e.preventDefault();
    	var clicked_item = $(this).attr('aria-label');
      if(clicked_item == 'Previous'){
			$('.view_at_home_product_slider button.slick-prev.slick-arrow').trigger('click');
      }else{
      	$('.view_at_home_product_slider button.slick-next.slick-arrow').trigger('click');
      }
  });
 
  var curent_request = null;
  var curent_date_request = null;
  //$('product-form.product-form').on('DOMSubtreeModified',function(){
	$(document).on('change','variant-radios.no-js-hidden input',function(){
    var postcode = $('#post_check_form #post_check').val();
    var variation_id = $('product-form.product-form input[name="id"]').val(); 

    $('.preorder_discout_bar p').hide();  
    if(variation_id != '' && variation_id != null && variation_id != 'undefined'){
		var stock_label = $('.InventoryManagment_sec_'+variation_id+' span').attr('data-stock-type');
		var instock_label = $('.InventoryManagment_sec_'+variation_id+' span').html();
		var preorder_batch_c = $('.product_main_thumb_grid_sec .product_thumb_batches .preorder_label').length;    
		console.log(preorder_batch_c);
		
		
		if(stock_label == 'In Stock'){
			console.log('in stock');
		}else if(stock_label == 'Out of Stock'){
			console.log('out of stock');
		}else{
			console.log('pre-order');
		}
			
		if(stock_label == 'In Stock'){
			$('.quantity-avl').text(instock_label);
			$('.quantity-avl').removeClass('quantity-out');
			$('.quantity-avl').show();
			$('.dispatch_deatil .disp-main').show();
		}else if(stock_label == 'Out of Stock'){
			$('.quantity-avl').text(instock_label);
			$('.quantity-avl').addClass('quantity-out');
			$('.quantity-avl').show();
			$('.dispatch_deatil .disp-main').hide();
		}else{ 
			$('.quantity-avl').hide();
			$('.dispatch_deatil .disp-main').show();
		}
		var found_pres_order = '';
		$('.postcode_form_grid span.pre_order_item').each(function(){          	
			if($(this).text() == variation_id){
				found_pres_order = 'true';
			}
		});
       
       if(found_pres_order == 'true'){
			$('.prder_order_listing').show();
			$('.quantity-avl').hide();
			/* setTimeout(function(){
			$('#product_detail_custom_add_to_cart').html('<span>Pre-order</span><div class="loading-overlay__spinner hidden"><svg aria-hidden="true" focusable="false" role="presentation" class="spinner" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg"><circle class="path" fill="none" stroke-width="6" cx="33" cy="33" r="30"></circle></svg></div>');
			},700); */ 
            setTimeout(function(){
    			$('button#product_detail_custom_add_to_cart > span').html('Pre-order');
  			},1500);  
			$('.preorder_discout_bar p[data-id="'+variation_id+'"]').show();
			if($('.product_main_thumb_grid_sec .product_thumb_batches .preorder_label').length == 0){
			  $('.product_main_thumb_grid_sec .product_thumb_batches').append('<span class="preorder_label">Pre-order</span>');
			}
		}else{
			$('.quantity-avl').show();
			$('.prder_order_listing').hide();
			// $('.product_detail_custom_add_to_cart').html('Add to cart');
			$('.preorder_discout_bar p').hide();
			$('.product_main_thumb_grid_sec .product_thumb_batches .preorder_label').remove();
		} 
    }  
    if(postcode !== ''){  
       var shipping_rate_p = 'not found';
       //$('.postcode_check_grid').append('<div class="shipping_zip_loader"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></div>');
      	var variation_id = $('product-form.product-form input[name="id"]').val();
        $('.shiping_with_deliverd .shipping_rate').html('');
        if(variation_id != '' && variation_id != null && variation_id != 'undefined'){
			var stock_label = $('.InventoryManagment_sec_'+variation_id+' span').attr('data-stock-type');
          	var instock_label = $('.InventoryManagment_sec_'+variation_id+' span').html();
            if(stock_label == 'In Stock'){
                $('.quantity-avl').text(instock_label);
                $('.quantity-avl').removeClass('quantity-out');
                $('.quantity-avl').show();
                $('.dispatch_deatil .disp-main').show();
            }else if(stock_label == 'Out of Stock'){
                 $('.quantity-avl').text(instock_label);
                 $('.quantity-avl').addClass('quantity-out');
                 $('.quantity-avl').show();
                 $('.dispatch_deatil .disp-main').hide();
            }else{
                $('.quantity-avl').hide();
				$('.dispatch_deatil .disp-main').show();
            }
            var weight = $('.variation_product_weight span[data-id="'+variation_id+'"]').html();
            var p_id = $('.post_check_main_grid').attr('data-id');
            if(weight != null && weight != 'undefined'){              
              $.ajax({
                type: 'POST',
                url: 'https://shiprates.logiceverest.com/calculate-rates',
                data: {product_id:p_id,zip:postcode,grams:weight,currency:"AUD"},
                crossDomain: true,
                dataType: 'json',
                success: function(data) {                  
                  if(data.rates[0].total_price > 0){       
                    var price = format_weight_price(data.rates[0].total_price); 
                  	$('.shiping_with_deliverd .shipping_rate').html(data.rates[0].service_name+' $'+price);
                    $('.csv_result_show p.shipping_deatil .shipping_fee').html('<span class="price_">'+'$'+price+'</span> shipping fee');
        			shipping_rate_p = 'found';
                  }else if(data.rates[0].total_price == 0){
                    $('.shiping_with_deliverd .shipping_rate').html(data.rates[0].service_name);
                    $('.csv_result_show p.shipping_deatil .shipping_fee').html('<span class="price_">Free</span> shipping fee');
                    shipping_rate_p = 'found';
                
                  } 
                }, 
         	 }); 
            }
        } 
    }
    var found_pre_order = '';
    setTimeout(function(){
    	const month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
        if($('.postcode_form_grid span.pre_order_item').length){
            var curent_variation_id = $('product-form.product-form form input[name="id"]').val();
            if($('.postcode_form_grid .form-note').attr('data-dispatch') != '' && $('.postcode_form_grid .form-note').attr('data-dispatch') != null && $('.postcode_form_grid .form-note').attr('data-dispatch') != 'undefined'){
                var dispatch_date = $.trim($('.postcode_form_grid .form-note').attr('data-dispatch'));
            }else{
                var dispatch_date = '';
            }

            if(curent_variation_id != '' && curent_variation_id != null && curent_variation_id != 'undefined'){
              var found_pre_order = '';
              $('.postcode_form_grid span.pre_order_item').each(function(){          	
                if($(this).text() == curent_variation_id){
                    found_pre_order = 'true';
                    if($(this).attr('data-dispatch-date') != '' && $(this).attr('data-dispatch-date') != null && $(this).attr('data-dispatch-date') != 'undefined'){
                         dispatch_date = $.trim($(this).attr('data-dispatch-date'));
                    }
                }
              });

              if(found_pre_order == 'true' && dispatch_date != '' && dispatch_date != null && dispatch_date != 'undefined'){                
                     const today = new Date(dispatch_date);
                     const CurrentDate = new Date();       
                     if(CurrentDate < today){                   
                        const str = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();	
                        $('.postcode_form_grid .form-note .span_dispatch_note').text('Available On : '+str);
                        $('.csv_result_show .dispatch_deatil .dispatch_label').html('Available On: ');
                        $('.csv_result_show .dispatch_deatil .dispatch_date').html(str);
                     }else{                   
                        $('.postcode_form_grid .form-note .span_dispatch_note').text('Dispatch in 24 hours');
                        $('.csv_result_show .dispatch_deatil .dispatch_label').html('Dispatch in ');
                        $('.csv_result_show .dispatch_deatil .dispatch_date').html('24 hours');                       
                     }
                  
                   
              }else{      
                $('.csv_result_show .dispatch_deatil .dispatch_label').html('Dispatch in ');
                $('.csv_result_show .dispatch_deatil .dispatch_date').html('24 hours');
                
              }
            }
        }
    	
      	 if(found_pre_order == 'true'){
              $('.csv_result_show p.delivery_detail span.delivery_date').html('Not Eligible');   
         }else if(postcode !== ''){ 
             curent_date_request = $.ajax({
               url:"https://cdn.shopify.com/s/files/1/0562/7569/7706/files/delivery_days_1_7ca6de77-6dda-4e63-8439-aae0af68f9ae.csv?v=1661768326",
               dataType:"text",
               beforeSend: function(){
                  $('#csv-display').fadeOut();
                  if(curent_date_request != null){
                    curent_date_request.abort(); 
                  }
               },
               success:function(data)
               {
                 var file_data = data.split(/\r?\n|\r/);
                 var table_data = '';
                 for(var count = 0; count< file_data.length; count++)
                  {
                    var cell_data = file_data[count].split(",");
                    var table_postcode = cell_data[2];
                    var state = cell_data[1];
                    var delivery_days = '';
                    var del_state = cell_data[1];
                    const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                    ];

                    if(postcode == table_postcode){
                        delivery_days = cell_data[3];
                        if(delivery_days != '' || delivery_days != 'undefined'){
                            var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                            var delivery_days_arr = delivery_days.split('-');
                            var fdate = delivery_days_arr[0];
                            var ldate_arr = delivery_days_arr[1].split(' ');
                            var ldate = ldate_arr[0];

                            var f_date = new Date().toISOString();
                            var fd = new Date(f_date);

                            var pp = new Date().toISOString();
                            var startDate = new Date(pp);
                            var startDate_pp = new Date(pp);
                            var firstDate = "", noOfDaysToAdd = fdate, count_pp = 0;
                            while(count_pp < noOfDaysToAdd){
                                firstDate = new Date(startDate.setDate(startDate.getDate() + 1));
                                if(firstDate.getDay() != 0 && firstDate.getDay() != 6){
                                   count_pp++;
                                }
                            }                    


                            var lastDate = "", noOfDaysToAdd = ldate, count_pp = 0;
                            while(count_pp < noOfDaysToAdd){
                                lastDate = new Date(startDate_pp.setDate(startDate_pp.getDate() + 1));
                                if(lastDate.getDay() != 0 && lastDate.getDay() != 6){
                                   count_pp++;
                                }
                            }

                            var first_day = firstDate.getDate();
                            var first_day_name = monthNames[firstDate.getMonth()];                           

                            var las_date = lastDate.getDate();
                            var last_day_name = monthNames[lastDate.getMonth()];           
                            if($(window).width() > 600){
                              var full_last_date = last_day_name+' '+las_date;
                              var full_first_date = first_day_name+' '+first_day;
                            }else{
                              var full_last_date = last_day_name.substr(0, 3)+' '+las_date;
                              var full_first_date = first_day_name.substr(0, 3)+' '+first_day;
                            }
                            

                        }

                      table_data += full_first_date+" - "+full_last_date+"";
                      if(state != '' && state != null && state != 'undefined'){
                         var address = state+','+postcode;
                      }else{
                          var address = postcode;
                      }


                    }

                    if(table_data == ''){
                      $('.post_code_error').css('display','flex');
                      $('.postcode_check_grid .posthead').html('Delivery');
                       $('.csv_result_show').hide();
                    }else{
                      $('.post_code_error').css('display','none');	
                      $('.postcode_form_grid .post_form_head').hide();
                      //$('.postcode_form_grid .form-inner-wrap').hide();
                      //$('#csv-display').fadeIn();
                      $('#csv-display .exect_date').html(table_data);
                      $('.csv_result_show p.delivery_detail span.delivery_date').html(table_data);
                      $('div#csv-display h3.diliverd_to span:first-child').html(address);
                      $('.postcode_check_grid .posthead').html('Delivery to: <span>'+address+'</span>');
                       $('.csv_result_show').show();

                    }

                 }
                 if(table_data == ''){ 
                    if(shipping_rate_p == 'found'){
                         $('.post_code_error').css('display','none');	
                         $('.postcode_form_grid .post_form_head').hide();
                         $('.csv_result_show p.delivery_detail span.delivery_date').html('Not Eligible');
                         $('div#csv-display h3.diliverd_to span:first-child').html(postcode);
                         $('.postcode_check_grid .posthead').html('Delivery to: <span>'+postcode+'</span>');
                         $('.csv_result_show').show();
                    }else{ 
                        $('.post_code_error').css('display','flex');    
                        $('.postcode_check_grid .posthead').html('Delivery');
                        $('.csv_result_show').hide();
                    }  
                 }
                      $('.shipping_zip_loader').remove();
               }
              });
          }
    },2000);
    
  });

                   
  if($('body').hasClass('cart') && $('body.cart table.cart-items').length){
    var month = ["January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"];
    $('body.cart table.cart-items .cart-item-dispatch').each(function(){
      if($(this).attr('data-pre') == 'true' && $(this).attr('data-dispatch') != '' && $(this).attr('data-dispatch') != null && $(this).attr('data-dispatch') != 'undefined'){
      	var pdate = $.trim($(this).attr('data-dispatch'));
        var today = new Date(pdate);
        var CurrentDate = new Date();
        if(CurrentDate < today){          
         	const str = today.getDate() + ' ' + month[today.getMonth()] + ' ' + today.getFullYear();	
          	$(this).find('span.span_dispatch_note').html('Available On : '+str);
        }
      }
    });
  }
  
  $(document).on('click', '.postcode-check-wrapper .postcode-inner-grid .edit-postcd', function(e){
  	e.preventDefault();
    $('.shiping_with_deliverd_cart').hide();	
    $('.postcode-check-wrapper .postcode-inner-grid').hide();
    $('.postcode-check-wrapper .postcode-ck-form').show();
  })
  
  
  
   $('#post_check_form_cart').on('submit', function(e){
  	e.preventDefault();
    var postcode = $('#post_check_form_cart #post_check_cart').val();
    if(postcode !== ''){
      	$.ajax({
         url:"https://cdn.shopify.com/s/files/1/0562/7569/7706/files/delivery_days_1_7ca6de77-6dda-4e63-8439-aae0af68f9ae.csv?v=1661768326",
         dataType:"text",
         beforeSend: function(){
			$('.shiping_with_deliverd_cart').fadeOut();
         },
         success:function(data)
         {
           var file_data = data.split(/\r?\n|\r/);
           var table_data = '';
           for(var count = 0; count< file_data.length; count++)
            {
              var cell_data = file_data[count].split(",");
              var table_postcode = cell_data[2];
              var state = cell_data[1];
              var delivery_days = '';
              var del_state = cell_data[1];
              const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
              ];
				
              if(postcode == table_postcode){
                  delivery_days = cell_data[3];
                  if(delivery_days != '' || delivery_days != 'undefined'){
                      var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                      var delivery_days_arr = delivery_days.split('-');
                      var fdate = delivery_days_arr[0];
                      var ldate_arr = delivery_days_arr[1].split(' ');
                      var ldate = ldate_arr[0];

                      var f_date = new Date().toISOString();
                      var fd = new Date(f_date);
                      
                      var pp = new Date().toISOString();
                      var startDate = new Date(pp);
                      var startDate_pp = new Date(pp);
                      var firstDate = "", noOfDaysToAdd = fdate, count_pp = 0;
                      while(count_pp < noOfDaysToAdd){
                          firstDate = new Date(startDate.setDate(startDate.getDate() + 1));
                          if(firstDate.getDay() != 0 && firstDate.getDay() != 6){
                             count_pp++;
                          }
                      }                    


                      var lastDate = "", noOfDaysToAdd = ldate, count_pp = 0;
                      while(count_pp < noOfDaysToAdd){
                          lastDate = new Date(startDate_pp.setDate(startDate_pp.getDate() + 1));
                          if(lastDate.getDay() != 0 && lastDate.getDay() != 6){
                             count_pp++;
                          }
                      }

                      var first_day = firstDate.getDate();
                      var first_day_name = monthNames[firstDate.getMonth()];
                      var las_date = lastDate.getDate();
                      var last_day_name = monthNames[lastDate.getMonth()];           
                       if($(window).width() > 600){
                          var full_last_date = last_day_name+' '+las_date;
                          var full_first_date = first_day_name+' '+first_day;
                        }else{
                          var full_last_date = last_day_name.substr(0, 3)+' '+las_date;
                          var full_first_date = first_day_name.substr(0, 3)+' '+first_day;
                       }

                  }
                
                
                table_data += full_first_date+" - "+full_last_date+"";

                if(state != '' && state != null && state != 'undefined'){
                   var address = state+','+postcode;
                }else{
                	var address = postcode;
                }
                
                if(state == 'VIC' || state == 'VICTORIA' || state == 'VIC METRO' ){
                  	$('#address_province').val('Victoria');                     
                }else if(state == 'NSW'){
                	$('#address_province').val('New South Wales');
                }else if(state == 'QLD'){
                    $('#address_province').val('Queensland');
                }else if(state == 'WA'){
                    $('#address_province').val('Western Australia');
                }else if(state == 'SA'){
                    $('#address_province').val('South Australia');
                }else if (state == 'TAS'){
                    $('#address_province').val('Tasmania');
                }else if(state == 'NT'){
                	 $('#address_province').val('Northern Territory');
                }else if(state == 'ACT'){
                    $('#address_province').val('Australian Capital Territory');
                }
                $('div#shipping-calculator input#address_zip').val(postcode);
                $('div#shipping-calculator input.get-rates.btn.button').trigger('click');
                
              }
              
              if(table_data == ''){
           		$('.post_code_error_cart').css('display','flex');	
                 $('#cart-errors').hide();
              }else{
               $('.post_code_error_cart').css('display','none');	
              	$('.postcode-ck-form').hide();
                $('div#csv-display-cart .postcode-inner-grid').show();
             	$('.shiping_with_deliverd_cart').fadeIn();
            	$('.shiping_with_deliverd_cart .exect_date').html(table_data);
				$('.cart-items .cart-item[data-check-preorder="false"] .cart-item-dispatch .disptach-date-info .del-date-bw').html(table_data);
          		$('.cart-items .cart-item[data-check-preorder="true"] .cart-item-dispatch .disptach-date-info .del-date-bw').html("Not Eligible");
 
                $('.cart-item-dispatch .disptach-date-info').show();
                $('#csv-display-cart .postcode-inner-grid h3 span.text-underlined').html(address);
                $('#cart-errors').hide();
              }
              
           }
           
           
           if(table_data == ''){
           		$('.post_code_error_cart').css('display','flex');	
              	$('#cart-errors').hide();
           }
         }
        });
    }

  })
   
 if($('.collection_subcategory_bottom_description_sec .collection-hero__subdescription p').length > 1){
        var pj = 1;
        $('.collection_subcategory_bottom_description_sec .collection-hero__subdescription p').each(function(){
            if(pj > 1){
              $(this).addClass('hide_sub_desc_p');
            }
           pj++;
        });
       $('.collection_subcategory_bottom_description_sec .collection-hero__subdescription').append('<a href="#" class="subcat_anchore_readmore">Read More</a>');
        $('.collection_subcategory_bottom_description_sec .collection_subcategory_description_inner').addClass('remove_after_img');
  }
  
  $(document).on('click','.subcat_anchore_readmore',function(e){
    e.preventDefault();
    if($(this).text() == 'Read More'){
      $('.collection_subcategory_bottom_description_sec .collection-hero__subdescription p.hide_sub_desc_p').show();
      $(this).text('Read Less');
    }else{
       $('.collection_subcategory_bottom_description_sec .collection-hero__subdescription p.hide_sub_desc_p').hide();
       $(this).text('Read More');
    }
  });
  
  
  $('.blog-banner-icons.blog_banner_tags_tab a').click(function(e){
   	   e.preventDefault();
    	if(!$(this).hasClass('active')){
    	var new_url = $(this).attr('href');
           $('body #MainContent').addClass('blog_ajax_request');
           $('body #MainContent').append('<div class="blog_article_overlay"></div>');
           $('.blog-banner-icons.blog_banner_tags_tab a').removeClass('active');
           $(this).addClass('active');	
           $.get({
              url: new_url,
              success: function (data) {
                  var blog_half_banner = $(data).find("section.total-sec.total-sec-without_slider.blog-half-banner").html();
                  var blog_list = $(data).find('.main-blog').html();	
                  $("section.total-sec.total-sec-without_slider.blog-half-banner").html(blog_half_banner);
                  $('.main-blog').html(blog_list);
                  $('body .blog_article_overlay').remove();
                  $('body #MainContent .blog_article_overlay').remove();
                  $('body #MainContent').removeClass('blog_ajax_request');
              }
          })
        }
  });
  
	$(document).on('click','.blog_page_main_section ul.pagination__list a',function(e){
		e.preventDefault();
		var new_url = $(this).attr('href');
		$('body #MainContent').addClass('blog_ajax_request');
		$('body #MainContent').append('<div class="blog_article_overlay"></div>');
		$('.blog-banner-icons.blog_banner_tags_tab a').removeClass('active');
		$(this).addClass('active');	
		$.get({
			url: new_url,
			success: function (data){
				var blog_half_banner = $(data).find("section.total-sec.total-sec-without_slider.blog-half-banner").html();
				var blog_list = $(data).find('.main-blog').html();	
				$("section.total-sec.total-sec-without_slider.blog-half-banner").html(blog_half_banner);
				$('.main-blog').html(blog_list);
				$('body .blog_article_overlay').remove();
				$('body #MainContent .blog_article_overlay').remove();
				$('body #MainContent').removeClass('blog_ajax_request');
			}
		})
	});

  $('.product__info-container a.viewmore-details').click(function(e){
      e.preventDefault();
      if($(window).width() > 767){        
        $("html, body").animate({
          scrollTop: $(".product-additional-info").offset().top-200
        }, 800)
      }else{
        $("html, body").animate({
          scrollTop: $(".produt_mobile_detail_section").offset().top-200
        }, 800)
      }
    
  });

   if($('#main-collection-filters').length){
      var stickyTop = $('#main-collection-filters').offset().top;    
      $(window).scroll(function() {
        var windowTop = $(window).scrollTop();        
        if (stickyTop < windowTop) {
           $('#main-collection-filters').addClass('sticky_filter');
          $('body').addClass('collection_sticky_filter');
        } else {
          $('#main-collection-filters').removeClass('sticky_filter');
          $('body').removeClass('collection_sticky_filter');
        }
      });
   }
   if($('.product_price_default').length > 0){
     if($('.product__info-container .price').hasClass('price--on-sale')){
        $('.product__info-container .price__container').html('<div class="price__sale">'+$('.product_price_default').html()+'</div>');
     }else{
       $('.product__info-container .price__container').html('<div class="price__regular">'+$('.product_price_default').html()+'</div>');
     }     
    //$('.product_detail_custom_add_to_cart').prop('disabled',true);
   }

   if($('.prder_order_listing.simple_product_pre_order').length){
      if($('.product_main_thumb_grid_sec .product_thumb_batches .preorder_label').length == 0){
          $('.product_main_thumb_grid_sec .product_thumb_batches').append('<span class="preorder_label">Pre-order</span>');
      }
   }
   setTimeout(function(){
     $('.article_banner_gallery').addClass('active');
   },1000);

 /*  if($('.collection_top_description .top_content_item.for__mobile').length){
      var descheigth = $('.collection_top_description .top_content_item.for__mobile').height();
      if(descheigth > 82){
        $('.collection_top_description .top_content_item.for__mobile').addClass('mobile_sort_description_content');
        $('.collection_top_description .top_content_item.for__mobile').append('<a href="#" class="read_more_less">Read More</a>');
      }      
  }
  if($('.collection_subcategory_description .top_content_item.for__mobile').length){
      var descheigth = $('.collection_subcategory_description .top_content_item.for__mobile').height();
      if(descheigth > 82){
        $('.collection_subcategory_description .top_content_item.for__mobile').addClass('mobile_sort_description_content');
        $('.collection_subcategory_description .top_content_item.for__mobile').append('<a href="#" class="read_more_less">Read More</a>');
      }      
  } */
  

  $('.top_content_item.for__mobile.mobile_sort_description_content a.read_more_less').on('click',function(e){
      e.preventDefault();
      $(this).hide();  
      $('.top_content_item.for__mobile.mobile_sort_description_content .desc-full.collection_description').css('max-height','100%');
      $('.top_content_item.for__mobile.mobile_sort_description_content .desc-full.collection_description:after').css('display','none !important');
      $('.top_content_item.for__mobile.mobile_sort_description_content').addClass('hide_after_content');
      
  });

  
});

jQuery(window).on('load',function(){
  $('button#product_detail_custom_add_to_cart').addClass('loaded');
  if(jQuery('variant-radios .product-form__input input[name="Color"]:checked').length){
    var val = jQuery('variant-radios .product-form__input input[name="Color"]:checked').val();
    if(val != '' && val != 'undefined' && val != null){
    	$('variant-radios .product-form__input input[name="Color"]:checked').closest('.product-form__input').find('legend.form__label').html('Color: <span class="color_slected">'+val+'</span>');
    }
  }

  $('.gorg-custom-chatbox').show();

  $('<script async src="https://t.cfjump.com/tag/69280"></script>').insertBefore('#mixed-modal');

});