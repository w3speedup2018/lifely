jQuery(document).ready(function ($) {
			$("#3dviewer").height(500); 
			var moving_image_id = '3FO4E7YTGVG9';
			var window_width = $(window).width();
			$("#_3dviewer_container").css("min-width:", "600px !important");
			if ($(".single-product-content-area .container1").width() > 1000) {
				$("#_3dviewer_container").width(600);
				$("#3dviewer").width(600); 
				console.log('mishi1');
			}else if ($(".single-product-content-area .container1").width() < 680 && ($(".single-product-content-area .container1").width()) > 545) {
				$("#_3dviewer_container").width(500);
				$("#3dviewer").width(500);
				console.log('mishi2');
				$("#_3dviewer_container").css("min-width:", "500px !important");
			}else if ($(".single-product-content-area .container1").width() < 545 && ($(".single-product-content-area .container1").width()) > 425) {
				$("#_3dviewer_container").width(window_width);
				$("#3dviewer").width(window_width);
				$("#_3dviewer_container").css("min-width:", "500px !important");
				console.log('mishi3');
			}else if ($(".single-product-content-area .container1").width() < 425) {
				$("#_3dviewer_container").width(window_width);
				$("#3dviewer").width(window_width);
				$("#_3dviewer_container").css("min-width:", "500px !important");
				console.log('mishi4');
			}
			
			// 3d viewer
			var coohomModelId = moving_image_id;
			if (coohomModelId == null || coohomModelId == '') {
				alert('coohom model id is not filled');
			} else {
				var _3dviewer = new koolViewer.ViewerSDK({
					mount: document.getElementById('3dviewer'),
					modelId: coohomModelId,
					defaultZoomScale: 1.5,
					useCoohomAPI: false, 
					useCoohomCDN: true,
					lengthUnit: 'ft'
				});
				
				var showRuler = false;
				var showAr = false;
				
				_3dviewer.start()
					.then(function () {
						$('#_3dviewertoolbar').removeClass('hidden');

						var components = _3dviewer.getComponents();
						buildComponentList(components);

						$('#view3').click(function () {
							if ($(this).hasClass("_closed")) {
								$("#autospin").removeClass("hidden");
								$("#topview").removeClass("hidden");
								$("#frontview").removeClass("hidden");
								$("#view45").removeClass("hidden");
								$("#lateralview").removeClass("hidden");
								$(this).removeClass("_closed");
							} else {
								$("#autospin").addClass("hidden");
								$("#topview").addClass("hidden");
								$("#frontview").addClass("hidden");
								$("#view45").addClass("hidden");
								$("#lateralview").addClass("hidden");
								$(this).addClass("_closed");
							}

							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#autospin').click(function () {
							_3dviewer.setAutoRotate(true);
							$("li.extend-item._subview").removeClass("active");
							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#topview').click(function () {
							_3dviewer.setCameraView('top');
							$("li.extend-item._subview").removeClass("active");
							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#frontview').click(function () {
							_3dviewer.setCameraView('front');
							$("li.extend-item._subview").removeClass("active");
							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#view45').click(function () {
							_3dviewer.setCameraView('product');
							$("li.extend-item._subview").removeClass("active");
							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#lateralview').click(function () {
							_3dviewer.setCameraView('left');
							$("li.extend-item._subview").removeClass("active");
							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});

						$('#dimension').click(function () {
							showRuler = !showRuler;
							_3dviewer.showRuler(showRuler);

							$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
						});
						
						
						$('#ar').click(function () {
							if (jQuery(window).width() < 768) {
								//console.log(_3dviewer);
								//qrcode.makeCode(_3dviewer.arUrl);
								qrcode.makeCode('https://www.coohom.com/pub/render/model-viewer/festatic/3dviewer?obsbgid='+moving_image_id+'&fromar=1');
								var link = $('#qrcode').attr('title');
								window.open(link);
								$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active"); 

							}else{
								$(".qr_mask").show();
								$('#qrcode').removeClass('hidden');
								//qrcode.makeCode(_3dviewer.arUrl);
								qrcode.makeCode('https://www.coohom.com/pub/render/model-viewer/festatic/3dviewer?obsbgid='+moving_image_id+'&fromar=1');
								$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
							}	
							
						}); 	
				
						$('#fullscreen').click(function () {

							if ($(this).hasClass("normal")) {
								_3dviewer.setScreen(true);
								$(this).removeClass("normal")
								$(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active");
							} else {
								_3dviewer.setScreen(false);
								$(this).addClass("normal")
							}
						});

					})
					.catch(function (err) {
						//alert(err);
						console.log(err);
					})
				;
			}
			
			function buildComponentList(components) {
				var root = $('.components-list');
				if (components.length == 0) {
					root.hide();
					$('.components_title').hide();
					return;
				}

				for (var i = 0; i < components.length; i++) {
					var _h = i < 4 ? "" : "hidden";
					var component = components[i];
					root.append('<div class="component-name ' + _h + '"  _com_id="' + component.id + '" _com_name="' + component.name + '">' + component.name +
						':<span id="selected_' + component.id + '" class="material-name"></span></div>');
					root.append('<ul id="' + component.id + '" class="material-list ' + _h + '"></ul>');

					var ul = $('#' + component.id);
					var displayedCount = 0;
					var defaultNum = 0;
					for (var j = 0; j < component.materials.length; j++) {
						var hidden = displayedCount < 3 ? "" : "hidden";
						var mat = component.materials[j];
						if (mat.name == '默认') {
							defaultNum = 1;
							continue;
						}
						displayedCount++;
						ul.append('<li id="' + mat.id + '" _mat_img="' + mat.thumbnail + '" _mat_name="' + mat.name + '" _com_id="' + component.id + '" ' +
							' class="material-item ' + hidden + '">' +
							'<div class="img-box"><img src="' + mat.thumbnail + '?x-oss-process=image/resize,m_fill,w_200"></div></li>');
					}
					if (component.materials.length - defaultNum > 3) {
						ul.append('<li id="" class="_arrow_li down" _com_id="' + component.id + '" ><img class="arrow_img" src="//img.shopfriant.com/appfront/custom/icon_arrow_down.png" alt=""></li>');
					}

				}
				if (components.length > 4) {
					root.append('<div class="more_options more">MORE OPTIONS</div>');
				}

				setTimeout(function () {
					$(".material-list").each(function () {
						$(this).find("li.material-item:first").trigger('click');
					})
				}, 10)
			}

		});