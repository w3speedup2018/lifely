/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within 
aren’t available to the outside world. */

(function () {
    var loadScript = function (url, callback) {
        var script = document.createElement("script");
        script.type = "text/javascript";

        // If the browser is Internet Explorer.
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState == "loaded" || script.readyState == "complete") {
                    script.onreadystatechange = null;
                    callback();
                }
            };
            // For any other browser.
        } else {
            script.onload = function () {
                callback();
            };
        }
        script.src = url;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    /* This is Timesact main function. */
    timesactScript = async function ($) {
        const style = document.createElement("style");
        style.id = "TimesactCSS";
        style.innerHTML = `.timesact-badge-ribbon span::before {
                            content: "";
                            position: absolute; left: 0px; top: 100%;
                            z-index: -1;
                            border-left: 3px solid #888888;
                            border-right: 3px solid transparent;
                            border-bottom: 3px solid transparent;
                            border-top: 3px solid #888888;
                          }
                          .timesact-badge-ribbon span::after {
                            content: "";
                            position: absolute; right: 0px; top: 100%;
                            z-index: -1;
                            border-left: 3px solid transparent;
                            border-right: 3px solid #888888;
                            border-bottom: 3px solid transparent;
                            border-top: 3px solid #888888;
                          }
                          .md-modal {
                            position: fixed;
                            top: 50%;
                            left: 50%;
                            width: 40%;
                            height: auto;
                            z-index: 2000;
                            visibility: hidden;
                            transform: translateX(-50%) translateY(-50%);
                          }
                          .md-content {
                            background: #fff;
                            position: relative;
                            border-radius: 10px;
                            margin: 0 auto;
                          }
                          .md-show {
                            visibility: visible;
                          }
                          .md-show ~ .md-overlay {
                            opacity: 1;
                            visibility: visible;
                            display: block;
                          }
                          .popup-container {
                            min-height: 100%;
                            display: none;
                          }
                          .md-overlay {
                            position: fixed;
                            width: 100%;
                            height: 100%;
                            visibility: hidden;
                            top: 0;
                            left: 0;
                            z-index: 1000;
                            opacity: 0;
                            background: #c9c9c9c2;
                            -webkit-transition: all 0.3s;
                            -moz-transition: all 0.3s;
                            transition: all 0.3s;
                          }
                          .md-body {
                            text-align: center;
                            padding-top: 10%;
                            padding-bottom: 10%;
                            font-family: "Roboto";
                          }
                          p.message {
                              padding: 20px;
                          
                          }
                          .md-close {
                              background: #f70427;
                              border: none;
                              color: white;
                              padding: 10px;
                              border-radius: 4px;
                              cursor: pointer;
                          }
                          @media screen and (max-width: 32em) {
                            .md-modal { width: 80%; }
                          }
                          `
        document.getElementsByTagName("head")[0].appendChild(style);

        const mixedCartModal = '<div class="md-modal" id="mixed-modal"><div class="md-content"><div class="md-body"></div></div></div><div class="popup-container"><div class="column"><button class="md-trigger md-setperspective" data-modal="mixed-modal"></button></div></div><div class="md-overlay"></div>';
        document.getElementsByTagName("body")[0].insertAdjacentHTML('afterbegin', mixedCartModal);

        // <h3>Important Notice</h3><p class="message ">BLA BLA </p><button class="md-close">Testing button</button> 
        /* Models */
        class Badge {
            add(selector, type, value) {
                if (type == "RIBBON") {
                    $(selector).remove(".timesact-badge-common");
                    $(selector).remove(".timesact-badge-ribbon");
                    $(selector).append("<div class='timesact-badge-ribbon'><span class='timesact-badge-ribbon-span'>" + value + "</span></div>")
                    return;
                }

                if (type == "ROUNDED") {
                    $(selector).remove(".timesact-badge-ribbon");
                    $(selector).remove(".timesact-badge-common");
                    $(selector).append("<div class='timesact-badge-common'><span class='timesact-badge-rounded-span'>" + value + "</span></div>");
                }

                if (type == "SQUARE") {
                    $(selector).remove(".timesact-badge-ribbon");
                    $(selector).remove(".timesact-badge-common");
                    $(selector).append("<div class='timesact-badge-common'><span class='timesact-badge-square-span'>" + value + "</span></div>");
                }

                if (type == "CIRCLE") {
                    $(selector).remove(".timesact-badge-ribbon");
                    $(selector).remove(".timesact-badge-common");
                    $(selector).append("<div class='timesact-badge-common'><span class='timesact-badge-circle-span'>" + value + "</span></div>");
                }
            }

            applyStyles(style) {
                $('.timesact-badge').css({
                    "position": "relative"
                });
                $('.timesact-badge-ribbon').css({
                    "position": "absolute",
                    "right": "-5px",
                    "top": "-5px",
                    "z-index": "1",
                    "overflow": "hidden",
                    "width": "75px",
                    "height": "75px",
                    "text-align": "right",
                });
                $('.timesact-badge-ribbon span').css({
                    "font-size": style.fontSize,
                    "font-weight": "bold",
                    "color": style.fontColor,
                    "text-transform": "uppercase",
                    "text-align": "center",
                    "line-height": "20px",
                    "transform": "rotate(45deg)",
                    "-webkit-transform": "rotate(45deg)",
                    "width": "100px",
                    "display": "block",
                    "position": "absolute",
                    "top": "19px",
                    "right": "-21px"
                });
                $('.timesact-badge-ribbon-span').css({
                    "background-color": style.backgroundColor,
                    "box-shadow": "0 3px 10px -5px rgba(0, 0, 0, 1)"
                });
                $(".timesact-badge-rounded-span").css({
                    "border": "1px solid transparent",
                    "border-radius": "4rem",
                    "display": "inline-block",
                    "letter-spacing": ".1rem",
                    "line-height": "1",
                    "padding": "0.6rem 1.3rem",
                    "text-align": "center",
                    "background-color": style.backgroundColor,
                    "border-color": style.backgroundColor,
                    "font-size": style.fontSize,
                    "color": style.fontColor,
                    "font-weight": "bold",
                    "word-break": "break-word",
                })
                $(".timesact-badge-square-span").css({
                    "border": "1px solid transparent",
                    "display": "inline-block",
                    "letter-spacing": ".1rem",
                    "line-height": "1",
                    "text-align": "center",
                    "background-color": style.backgroundColor,
                    "border-color": style.backgroundColor,
                    "font-size": style.fontSize,
                    "color": style.fontColor,
                    "font-weight": "bold",
                    "word-break": "break-word",
                    "height": "60px",
                    "width": "60px",
                    "padding-top": "15px"
                })
                $(".timesact-badge-circle-span").css({
                    "border": "1px solid transparent",
                    "border-radius": "50%",
                    "display": "inline-block",
                    "letter-spacing": ".1rem",
                    "line-height": "1",
                    "text-align": "center",
                    "background-color": style.backgroundColor,
                    "border-color": style.backgroundColor,
                    "font-size": style.fontSize,
                    "color": style.fontColor,
                    "font-weight": "bold",
                    "word-break": "break-word",
                    "height": "60px",
                    "width": "60px",
                    "padding-top": "15px"
                });
                $(".timesact-badge-common").css({
                    "top": "1rem",
                    "display": "flex",
                    "flex-wrap": "wrap",
                    "right": "10px",
                    "position": "absolute",
                    "z-index": "1"
                });
            }
        }

        class Modal {
            display(settings) {
                $(".md-body").append('<h3>' + settings.header + '</h3><p class="message">' + settings.body + '</p><button class="md-close">' + settings.button + '</button><p><input type="checkbox" id="md-stop" name="md-stop"><label for="md-stop">' + settings.stop + '</label></p>');
                $("#mixed-modal").addClass('md-show');
                $(".md-close, .md-overlay").click(function () {
                    window.localStorage.setItem("showCartMixedAlert", !($('#md-stop').is(":checked")));
                    $("#mixed-modal").removeClass('md-show');
                });
            }
        }

        class Product {
            constructor(id, variants) {
                this.id = id;
                this.variants = variants;
            }

            setCurrentVariant(variantId) {
                this.variantId = variantId;
            }

            setPreorderVariants(productConfig) {
                if (!productConfig || !productConfig.variants) {
                    console.log('[ERROR 2002]: Product config is undefined.')
                    return;
                }
                this.preorderVariants = productConfig.variants;
            }

            isPreorderEnabledForVariant() {
                if (!this.preorderVariants[this.variantId] || !this.preorderVariants[this.variantId].config) {
                    return false;
                }
                return this.preorderVariants[this.variantId].config.status === "ACTIVE" || this.preorderVariants[this.variantId].config.status === "NO_STOCK";
            }

            getVariantSettings(globalSettings) {
                if (!this.hasCustomSettings()) {
                    return {
                        buttonName: globalSettings.button.name,
                        cartLabelTextKey: globalSettings.cart.labelText.key,
                        cartLabelTextValue: globalSettings.cart.labelText.value,
                        messageType: globalSettings.message.type,
                        messageValue: globalSettings.message.value,
                        badge: globalSettings.badge
                    }
                }

                const customSettings = this.preorderVariants[this.variantId].settings;
                const settings = {
                    buttonName: customSettings.buttonName || globalSettings.button.name,
                    cartLabelTextKey: customSettings.cartLabelTextKey || globalSettings.cart.labelText.key,
                    cartLabelTextValue: customSettings.cartLabelTextValue || globalSettings.cart.labelText.value,
                    messageType: customSettings.messageType || globalSettings.message.type,
                    messageValue: customSettings.messageValue || globalSettings.message.value,
                    badge: globalSettings.badge
                }
                return settings;
            }

            hasCustomSettings() {
                if (!this.preorderVariants[this.variantId].settings) {
                    return false;
                }
                return this.preorderVariants[this.variantId].settings.type === "CUSTOM";
            }

            isVariantOutOfStock() {
                if (!this.preorderVariants[this.variantId]) {
                    return false;
                }

                const variant = this.preorderVariants[this.variantId]
                if (variant.inventoryManagement === "INDEPENDENT") {
                  return false;
                }
                if (variant.quantity > 0) { return false; }

                if (variant.inventoryPolicy === "DENY") { return true; }
                return false;
            }
        };

        class Shop {
            constructor() { }

            init() {
                if ("undefined" != typeof window.ta) {
                    return;
                }

                window.ta = {};
                window.ta.shop = {};
                window.ta.products = localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : {};
                window.ta.lastProductUpdate = this.computeLastUpdate(window.ta.products);
                window.ta.selectors = {
                    badge: ['.timesact-badge', '.product-item', 'li.grid__item', '.ProductItem']
                };
                window.ta.cart = {};
                window.ta.cart.showMixedCartAlert = localStorage.getItem('showCartMixedAlert') ? JSON.parse(localStorage.getItem('showCartMixedAlert')) : true;

                window.ta.quickView = {}, window.ta.quickView.selectors = {};
                window.ta.quickView.selectors.button = ".productitem--action-qs, .boost-pfs-quickview-btn, .cc-quick-buy-btn, .button--quick-shop, .sca-qv-button, .quick-view-btn, .bc-quickview-btn-wrapper, .sca-qv-cartbtn, .js-quick-shop-link, .searchit-quick-view-button, .quick-view, .js-quickbuy-button, .quick-product__btn, .product-card-interaction-quickshop, .product-modal, .productitem--action button, a.quickview, .overlay, a.quickview, .has-quick-view .btn .v-b, .shop-now-button, .quick-buy, .quick_shop, a[data-action='show-product'], .trigger-quick-view, .quickview-button, .quick_view, .qview-button, button.btn-addToCart:last, .quick-shop, .fancybox.ajax, .quick-add-button-variants, .product-thumbnail__quickshop-button, .js-quickView-button";
                window.ta.quickView.selectors.form = ".product__form:visible, #sca-qv-add-item-form:visible, .shopify-product-form:visible, .bc-modal-wrapper:visible #bc-quickview-cart-form:visible, .product_form:visible, .searchit-quick-view-form-wrapper form:visible, .product-form:visible, .quick-buy__product-form:visible, .product-single__form:visible, form[action='/cart/add']:visible, #AddToCartForm:visible, form.module:visible, #add-to-cart-quickview-form:visible";
                window.ta.quickView.selectors.addToCartButton = ".sca-qv-cartbtn:visible, #addToCart:visible, #bc-quickview-cart-btn:visible, .add_to_cart:visible, #searchit-quick-view-add-to-cart:visible, .product-form__cart-submit:visible, .quickbuy__submit:visible, .add-to-cart:visible, .product-submit:visible, .add:visible, .product-form--atc-button:visible, input.action-button.submit:visible, .addto.cart.sliding-cart:visible, #AddToCart:visible, .product-add:visible, .add-to-cart:visible, .product__submit__add:visible, .product-add-to-cart:visible, #add-to-cart:visible, .product-submit.action-button.product-submit, .product-form__add-button:visible, .add-to-cart-btn:visible, .qview-btn-addtocart:visible, button.btn-addToCart:last, .button--add-to-cart:visible";
                window.ta.quickView.selectors.variant = "#sca-qv-variant-options select.single-option-selector, .bc-quickview-single-option-selector, .searchit-option-selector-wrapper select, .qview-variants select, select:visible, .radio-wrapper fieldset, input[type='radio']";
                window.ta.quickView.selectors.quantity = "[name='quantity']";
                window.ta.quickView.selectors.quickviewModalContainer = ".theme-modal--quickbuy, .quickview-product .product-quickview:visible, .sca-fancybox-wrap:visible, .mfp-container:visible, .bc-modal-wrapper:visible, .quick-shop:visible, .searchit-modal:visible, #colorbox:visible, .modal--quick-shop:visible, .quickshop:visible, .fancybox-wrap:visible, .fancybox-container:visible, .modal-content:visible, .product-quick-view, section.quick-view, #ShopNowContainer, #ProductScreens, .product.preview, .modal__inner__wrapper:visible, .halo-modal-content:visible, #quickView:visible, .quickshop-content:visible, .modal__inner:visible, .quick-view .content:visible, .qview-product:visible";
            }

            computeLastUpdate(products) {
                let timestamp = parseInt(new Date().getTime() / 1000);
                for (let product of Object.values(products)) {
                    if (product.lastUpdate && product.lastUpdate < timestamp) {
                        timestamp = product.lastUpdate;
                        continue;
                    }
                    if (!product.lastUpdate) {
                        timestamp = 1;
                    }
                }
                return timestamp;
            }

            isProductPage(meta) {
                if ("undefined" != typeof meta && "undefined" != typeof meta.product) { return true; }

                return -1 < window.location.href.indexOf("/products/");
            }

            shouldEnable() {
                return this.isCollectionPage() || this.isHomePage() || this.isSearchPage() || this.isPagesPage();
            }

            isCollectionPage() {
                return -1 < window.location.href.indexOf("/collections/");
            }

            isSearchPage() {
                return -1 < window.location.href.indexOf("/search?");
            }

            isPagesPage() {
                return -1 < window.location.href.indexOf("/pages/");
            }

            isHomePage() {
                return document.location.pathname === "/";
            }

            isCartPage() {
                return -1 < window.location.pathname.indexOf("/cart");
            }

            initQuickView() {
                this.createQuickViewButtonListener();
            }

            createQuickViewButtonListener() {
                var thisShop = this;
                $(window.ta.quickView.selectors.button).click(function (target) {
                    const handle = thisShop.getProductHandle(target.currentTarget);
                    const url = thisShop.getProductPageJsURL(handle);
                    var product;
                    $.getJSON(url, function (data) {
                        product = new Product(data.product.id, data.product.variants);
                    }).done(function () {
                        // thisShop.cleanupModal();
                        new ScriptRunner(product).run(/*isQuickView=*/true);
                    }).fail(function () {
                        console.log("[Error 1001]: Product could not be fetched.");
                    });
                });
            }

            getProductHandle(target) {
                var handle = $(target).attr("handle");
                if (handle === undefined) {
                    handle = $(target).data("handle");
                }

                if (handle === undefined) {
                    handle = $(target).data("product-id");
                }

                if (handle === undefined) {
                    var href = $(target).data("href");
                    handle = href.split('_')[0];
                }

                return handle;
            }

            getProductPageJsURL(handle) {
                return "https://" + window.location.hostname + "/products/" + handle;
            }

            sleep(e) {
                return new Promise(function (t) {
                    setTimeout(t, e);
                });
            }

            cleanupModal() {
                $(window.ta.quickView.selectors.quickviewModalContainer).find("#preorder-label").remove();
                $(window.ta.quickView.selectors.quickviewModalContainer).find(".timesact-preorder-description").remove();
            }
        };

        class GlobalSettings {
            constructor(settings) {
                this.button = settings.button;
                this.cart = settings.cart;
                this.message = settings.message;
                this.badge = settings.badge;
            }
        }

        /* Util classes */
        class ProductUtil {
            extractVariantId(variants, formSelector) {
                var productParams = window.location.search.match(/variant=([0-9]+)/);
                if (productParams != null) return productParams[1];
                const variantIdFromForm =
                    "radio" === $(formSelector).find("select[name='id'], input[name='id'], select[name='id[]'], input[name='id[]']").attr("type")
                        ? $(formSelector).find("input[name='id']:checked, input[name='id[]']:checked").val()
                        : $(formSelector).find("select[name='id'], input[name='id'], select[name='id[]'], input[name='id[]']").val();

                if (variants.some(variant => variant.id.toString() == variantIdFromForm)) {
                    return variantIdFromForm;
                }
                // console.log("Variants are different: " + variantIdFromForm + ' ' + variants[0].id);
                return variants[0].id;
            }
        }

        class PreorderButton {
            constructor(buttonSelector, settings) {
                this.buttonSelector = buttonSelector;
                this.addToCartText = settings.addToCartText || $(this.buttonSelector).text();
                this.preorderText = settings.name;
                this.soldOutText = settings.soldOutText;
                this.style = settings.style;
                this.type = settings.type;

                this.buttonTextSelector = '[data-add-to-cart-text], #AddToCartText, .btn__text, #AddToCartText-product-template, #addToCartText-product-template, [data-cart-primary-submit-text], [data-cart-secondary-submit-text], .btn__text, .product-form--text, .txt_pre, .txt_add, span:first';

                if (this.type === "CUSTOM") {
                    this.createTimesactButton();
                }
            }

            createTimesactButton() {
                this.timesactButton = $(this.buttonSelector).first().clone();
                this.hasInsideSpan = false;
                if (this.timesactButton.prop('tagName').toLowerCase() == "span") {
                    // The main button is actually the parent node.  
                    this.timesactButton = $(this.buttonSelector).parent().clone();
                    this.hasInsideSpan = true;
                }
                this.timesactButton.addClass('timesact-button');
                this.timesactButton.prop("disabled", false);
                this.hideTimesactButton();

                if (this.hasInsideSpan) {
                    this.timesactButton.find(this.buttonTextSelector).val(this.preorderText);
                    this.timesactButton.find(this.buttonTextSelector).text(this.preorderText);
                    $(this.buttonSelector).first().parent().after(this.timesactButton);
                } else {
                    this.timesactButton.val(this.preorderText);
                    this.timesactButton.text(this.preorderText);
                    $(this.buttonSelector).first().after(this.timesactButton);
                }
            }

            showPreorderButton() {
                if (this.type == "DEFAULT") {
                    $(this.buttonSelector).val(this.preorderText);
                    $(this.buttonSelector).text(this.preorderText);
                    $(this.buttonSelector).prop("disabled", false);
                    return;
                }
                // Custom button.
                $(this.timesactButton).show();
                this.timesactButton.prop("disabled", false);
                if (this.hasInsideSpan) {
                    $(this.buttonSelector).parent().attr('style', `display: none !important;`);
                } else {
                    $(this.buttonSelector).attr('style', `display: none !important;`);
                }
            }

            showAddToCartButton() {
                $(this.buttonSelector).val(this.addToCartText);
                $(this.buttonSelector).text(this.addToCartText);
                $(this.buttonSelector).prop("disabled", false);
                if (this.type == "DEFAULT") { return; }

                this.hideTimesactButton();
                if (this.hasInsideSpan) {
                    $(this.buttonSelector).parent().show();
                } else {
                    $(this.buttonSelector).show();
                }
            }

            showOutOfStockButton() {
                $(this.buttonSelector).val(this.soldOutText);
                $(this.buttonSelector).text(this.soldOutText);
                $(this.buttonSelector).prop("disabled", true);
                if (this.type == "DEFAULT") { return; }

                this.hideTimesactButton();
                if (this.hasInsideSpan) {
                    $(this.buttonSelector).parent().show();
                } else {
                    $(this.buttonSelector).show();
                }
            }

            confirmButtonExists() {
                return $(this.buttonSelector).closest("body").length > 0;
            }

            identifyButton(selectors) {
                this.buttonSelector = selectors.formSelector.find(selectors.ids.addToCartButton);
            }

            setPreorderText(text) {
                this.preorderText = text;
            }

            hideTimesactButton() {
                this.timesactButton.attr('style', `display: none !important; 
                    width: ${this.style.width};
                    height: ${this.style.height};
                    background-color: ${this.style.backgroundColor};
                    border: ${this.style.borderWidth} ${this.style.borderColor} outset;
                    border-color: ${this.style.borderColor};
                    border-radius: ${this.style.borderRadius};
                    border-width: ${this.style.borderWidth};
                    color: ${this.style.fontColor};
                    font-size: ${this.style.fontSize};`);
            }
        }

        class Message {
            constructor(locale) {
                this.locale = locale;
            }

            addStylePreorderMessage(style) {
                $('.timesact-preorder-description').css({
                    "font-size": style.fontSize,
                    "color": style.fontColor,
                });
            }

            populateDynamicValues(variant, value, isCartLabel) {
                value = value.replace("{{preorderQuantity}}", this.getQuantity(variant, isCartLabel));
                value = value.replace("{{shippingDate}}", this.getShippingDate(variant.config.shippingDate, isCartLabel));
                value = value.replace("{{daysLeftUntilShippingDate}}", this.getDaysLeftUntilShippingDate(variant.config.shippingDate, isCartLabel));
                value = value.replace("{{daysLeftUntilPreorderEndDate}}", this.getDaysLeftUntilEndDate(variant.config, isCartLabel));
                return value;
            }

            getQuantity(variant, isCartLabel) {
                if (variant.config.stock.option == "STOCK3") {
                    // Stock3 uses Shopify stock inventory.
                    return variant.quantity;
                }
                if (variant.config.stock.hasUnlimitedQuantity) {
                    return isCartLabel ? 'VARIABLE_NOT_SET' : '<span style="color:red;">VARIABLE_NOT_SET</span>';
                }

                return variant.config.stock.quantity;
            }

            getShippingDate(shippingDate, isCartLabel) {
                if (!shippingDate || shippingDate.type == "NO_SET") {
                    return isCartLabel ? 'VARIABLE_NOT_SET' : '<span style="color:red;">VARIABLE_NOT_SET</span>';
                }

                if (shippingDate.type == "DATE") {
                    const date = new Date(shippingDate.date * 1000);
                    return date.toLocaleDateString(this.locale, { day: "numeric", month: "long", year: "numeric" });
                }

                if (shippingDate.type == "PERIOD") {
                    var days = 1;
                    switch (shippingDate.periodType) {
                        case "DAY": days = shippingDate.periodValue; break;
                        case "WEEK": days = shippingDate.periodValue * 7; break;
                        case "MONTH": days = shippingDate.periodValue * 30; break;
                    }

                    var date = new Date();
                    date.setDate(date.getDate() + days);
                    return date.toLocaleDateString(this.locale, { day: "numeric", month: "long", year: "numeric" });
                }
            }

            getDaysLeftUntilShippingDate(shippingDate, isCartLabel) {
                if (!shippingDate || shippingDate.type == "NO_SET") {
                    return isCartLabel ? 'VARIABLE_NOT_SET' : '<span style="color:red;">VARIABLE_NOT_SET</span>';
                }

                const today = new Date();
                if (shippingDate.type == "DATE") {
                    const date = new Date(shippingDate.date * 1000);
                    return Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
                }

                if (shippingDate.type == "PERIOD") {
                    switch (shippingDate.periodType) {
                        case "DAY": return shippingDate.periodValue;
                        case "WEEK": return shippingDate.periodValue * 7;
                        case "MONTH": return shippingDate.periodValue * 30;
                        default: return 1;
                    }
                }
            }

            getDaysLeftUntilEndDate(config, isCartLabel) {
                if (!config.hasEndDate) { return isCartLabel ? 'VARIABLE_NOT_SET' : '<span style="color:red;">VARIABLE_NOT_SET</span>'; }
                const today = new Date();
                const date = new Date(config.endDate * 1000);
                return Math.ceil((date.getTime() - today.getTime()) / (1000 * 3600 * 24));
            }
        }

        class Preorder {
            constructor(selectors, product, globalSettings) {
                this.selectors = selectors;
                this.product = product;
                this.globalSettings = globalSettings;
                this.button = new PreorderButton(this.selectors.buttonSelector, this.globalSettings.button);
                this.uuid = Math.floor(100000000 + Math.random() * 900000000)
                $(this.selectors.variantSelector).addClass("timesact-variant-picker-" + this.uuid);
            }

            init() {
                this.createWidget();
                new TimesactEventListener().initVariantEventListener(this);
            }

            createWidget() {
                if (this.product.isPreorderEnabledForVariant()) {
                    const variant = this.product.preorderVariants[this.product.variantId];
                    if (variant.config.status === "NO_STOCK") {
                        this.button.showOutOfStockButton();
                        $(this.selectors.formSelector).find(".shopify-payment-button").hide();
                        return;
                    }

                    const settings = this.product.getVariantSettings(this.globalSettings);
                    this.button.setPreorderText(settings.buttonName);

                    if (!this.button.confirmButtonExists()) {
                        this.button.identifyButton(this.selectors);
                        this.selectors.buttonSelector = $(this.selectors.formSelector).find(this.selectors.ids.addToCartButton);
                    }

                    this.button.showPreorderButton();
                    $(this.selectors.formSelector).find(".shopify-payment-button").hide();

                    const message = new Message(this.globalSettings.message.locale || "en-US");

                    // Set-up preorder message.
                    if (settings.messageValue != "") {
                        const messageValue = message.populateDynamicValues(variant, settings.messageValue, /*isCartLabel=*/false)
                        this.showPreorderMessage(settings.messageType, messageValue);
                        message.addStylePreorderMessage(this.globalSettings.message);
                    }

                    // Set-up cart label.
                    const cartLabelTextKey = message.populateDynamicValues(variant, settings.cartLabelTextKey, /*isCartLabel=*/true);
                    const cartLabelTextValue = message.populateDynamicValues(variant, settings.cartLabelTextValue,  /*isCartLabel=*/true)
                    this.showPreorderLineItemProperty(cartLabelTextKey, cartLabelTextValue);

                    if (!variant.config.stock.hasUnlimitedQuantity) {
                        // If pre-order quantity has been set, we should add quantity limitation.
                        this.addQuantityListener(variant.config.stock.quantity);
                    }

                    if (settings.badge.product) {
                        const badge = new Badge();
                        badge.add(this.selectors.badgeSelector, settings.badge.type, settings.badge.value);
                        badge.applyStyles(settings.badge);
                    }

                    if (this.selectors.hideProductElements) {
                        $(this.selectors.hideProductElements).hide();
                    }
                }
            }

            resetDefault() {
                if (!this.button.confirmButtonExists()) {
                    this.button.identifyButton(this.selectors);
                    this.selectors.buttonSelector = $(this.selectors.formSelector).find(this.selectors.ids.addToCartButton);
                }

                if (this.product.isVariantOutOfStock()) {
                    this.button.showOutOfStockButton();
                    $(this.selectors.formSelector).find(".shopify-payment-button").hide();
                } else {
                    this.button.showAddToCartButton();
                    $(this.selectors.formSelector).find(".shopify-payment-button").show();
                }
                this.removePreorderLineItemProperty();
                this.removePreorderMessage();
                this.removePreorderBadge();
                this.removePreorderQuantity();

                if (this.selectors.hideProductElements) {
                    this.addHiddenElements();
                }
            }

            showPreorderLineItemProperty(key, value) {
                0 === $(this.selectors.formSelector).find("#preorder-label").length
                    ? $(this.selectors.formSelector).append('<input type="hidden" id="preorder-label" name="properties[' + key + ']" value="' + value + '" />')
                    : $(this.selectors.formSelector).find("#preorder-label").val(value);
            }

            removePreorderLineItemProperty() {
                $(this.selectors.formSelector).find("#preorder-label").remove();
            }

            removePreorderBadge() {
                $(".timesact-badge-ribbon").remove();
                $(".timesact-badge-common").remove();
            }

            showPreorderMessage(type, value) {
                if (this.selectors.messageSelector) {
                    0 === $(this.selectors.formSelector).find(".timesact-preorder-description").length
                        ? type === "BELOW"
                            ? $(this.selectors.messageSelector).after("<div class='timesact-preorder-description'>" + value + "</div>")
                            : $(this.selectors.messageSelector).before("<div class='timesact-preorder-description'>" + value + "</div>")
                        : $(this.selectors.formSelector).find(".timesact-preorder-description").val(value);
                    return
                }
                0 === $(this.selectors.formSelector).find(".timesact-preorder-description").length
                    ? type === "BELOW"
                        ? $(this.selectors.buttonSelector).after("<div class='timesact-preorder-description'>" + value + "</div>")
                        : $(this.selectors.buttonSelector).before("<div class='timesact-preorder-description'>" + value + "</div>")
                    : $(this.selectors.formSelector).find(".timesact-preorder-description").val(value);
            }

            removePreorderMessage() {
                $(this.selectors.formSelector).find(".timesact-preorder-description").remove();
            }

            removePreorderQuantity() {
                $(".timesact-quantity-message").remove();
                $(this.selectors.quantitySelector).off('change.quantityChange');
                $(this.selectors.buttonSelector).off('click.quantityButtonClick');
            }

            addHiddenElements() {
                $(this.selectors.hideProductElements).show();
            }

            addQuantityListener(preorderQty) {
                const selectors = this.selectors;
                $(this.selectors.quantitySelector).on('change.quantityChange', function () {
                    if (preorderQty < parseInt($(this).val())) {
                        if (!$(".timesact-quantity-message").length) {
                            if (selectors.messageSelector) {
                                $(selectors.messageSelector).before("<div class='timesact-quantity-message' style='color:red'>" + `You can only pre-order ${preorderQty} items!` + "</div>");
                            } else {
                                $(selectors.buttonSelector).before("<div class='timesact-quantity-message' style='color:red'>" + `You can only pre-order ${preorderQty} items!` + "</div>");
                            }
                        }
                        $(selectors.buttonSelector).prop("disabled", true);
                    } else {
                        $(".timesact-quantity-message").remove();
                        $(selectors.buttonSelector).prop("disabled", false);
                    }
                });

                $(this.selectors.buttonSelector).on('click.quantityButtonClick', function (event) {
                    const qty = $(selectors.quantitySelector).val();
                    if (preorderQty < parseInt(qty)) {
                        event.preventDefault();
                        if (!$(".timesact-quantity-message").length) {
                            if (selectors.messageSelector) {
                                $(selectors.messageSelector).before("<div class='timesact-quantity-message' style='color:red'>" + `You can only pre-order ${preorderQty} items!` + "</div>");
                            } else {
                                $(selectors.buttonSelector).before("<div class='timesact-quantity-message' style='color:red'>" + `You can only pre-order ${preorderQty} items!` + "</div>");
                            }
                        }
                    } else {
                        $(".timesact-quantity-message").remove();
                    }
                });
            }
        }

        class TimesactEventListener {
            initVariantEventListener(preorder) {
                var event = this;
                ($(document).on("change", ".timesact-variant-picker-" + preorder.uuid, function (e) {
                    event.variantChangeHandler(preorder);
                }),
                    event.setup(function () {
                        event.variantChangeHandler(preorder);
                    }));
            }

            sleep(e) {
                return new Promise(function (t) {
                    setTimeout(t, e);
                });
            }

            variantChangeHandler(preorder) {
                var preorderEntry = preorder;
                this.sleep(preorder.selectors.variantChangingTime).then(function () {
                    var selectedVariantId = window.location.search.replace(/.*variant=(\d+).*/, '$1');
                    if (!selectedVariantId) {
                        selectedVariantId =
                            "radio" === $(preorderEntry.selectors.formSelector).find("select[name='id'], input[name='id'], select[name='id[]'], input[name='id[]']").attr("type")
                                ? $(preorderEntry.selectors.formSelector).find("input[name='id']:checked, input[name='id[]']:checked").val()
                                : $(preorderEntry.selectors.formSelector).find("select[name='id'], input[name='id'], select[name='id[]'], input[name='id[]']").val();
                    }
                    preorderEntry.product.setCurrentVariant(selectedVariantId);
                    preorderEntry.resetDefault();
                    preorderEntry.createWidget();
                });
            }


            track(fn, handler, before) {
                return function r() {
                    if (before) return handler.apply(this, arguments), fn.apply(this, arguments);
                    var result = fn.apply(this, arguments);
                    return handler.apply(this, arguments), result;
                };
            }

            setup(handler) {
                history.pushState = this.track(history.pushState, handler);
                history.replaceState = this.track(history.replaceState, handler);
                window.addEventListener("popstate", handler);
            };
        }

        class Api {
            async getProductPreOrderConfig(productId) {
                try {
                    return await $.ajax({
                        url: '/apps/timesact/config?productId=' + productId,
                        type: 'GET',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json"
                    });
                } catch (err) {
                    console.log("Product is not active on pre-order.");
                    return null;
                }
            }

            async getProducts() {
                try {
                    return await $.ajax({
                        url: '/apps/timesact/products',
                        type: 'GET',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json"
                    });
                } catch (err) {
                    console.log("Products config couldn't be fetched.");
                    return null;
                }
            }

            async getShop() {
                try {
                    return await $.ajax({
                        url: '/apps/timesact/shop',
                        type: 'GET',
                        contentType: "application/json; charset=utf-8",
                        dataType: "json"
                    });
                } catch (err) {
                    console.log("Shop data couldn't be fetched.")
                    return null;
                }
            }
        }

        class Selectors {
            constructor(selectors) {
                this.ids = selectors;
            }

            setNormalSelectors() {
                this.formSelector = $(this.ids.form);
                this.buttonSelector = this.formSelector.find(this.ids.addToCartButton);
                if (this.buttonSelector.length == 0) {
                    // In case the Add To Cart button was not identified, we try some generic selectors.
                    this.buttonSelector = this.formSelector.find('[type="submit"]:visible:first, [name="add"], .product-submit, .addtocart-button-active, .product-form--add-to-cart, .button--addToCart, .product-form__submit, .add-to-cart, .btn-addtocart, .single_add_to_cart_button, .product-form__cart-submit, .product-form--atc-button, .ProductForm__AddToCart, [type="button"]:visible:first').first();
                }
                this.variantSelector = this.formSelector.find(this.ids.variant);

                if (this.ids.quantity) {
                    this.quantitySelector = this.formSelector.find(this.ids.quantity);
                } else {
                    this.quantitySelector = this.formSelector.find('[name="quantity"]');
                    if (this.quantitySelector.length == 0) {
                        this.quantitySelector = $('[name="quantity"]');
                    }
                }

                if (this.ids.badge) {
                    this.badgeSelector = $(this.ids.badge);
                } else {
                    this.badgeSelector = $('.timesact-badge');
                }

                if (this.ids.message) {
                    this.messageSelector = this.formSelector.find(this.ids.message);
                }

                if (this.ids.hide && this.ids.hide.product) {
                    this.hideProductElements = this.ids.hide.product;
                }
                this.variantChangingTime = this.ids.variantChangingTime || 250;
            }

            setQuickViewSelectors() {
                this.formSelector = $(window.ta.quickView.selectors.quickviewModalContainer).find(window.ta.quickView.selectors.form);
                this.buttonSelector = $(window.ta.quickView.selectors.quickviewModalContainer).find(window.ta.quickView.selectors.addToCartButton);
                this.variantSelector = $(window.ta.quickView.selectors.quickviewModalContainer).find(window.ta.quickView.selectors.variant);
                this.quantitySelector = $(window.ta.quickView.selectors.quickviewModalContainer).find(window.ta.quickView.selectors.quantity);
                if (this.ids.message) {
                    this.messageSelector = this.formSelector.find(this.ids.message);
                }
                this.variantChangingTime = this.ids.variantChangingTime || 250;

                if (this.ids.badge) {
                    this.badgeSelector = $(this.ids.badge);
                } else {
                    this.badgeSelector = $('.timesact-badge');
                }
            }
        }

        /* Main entry point. */
        class ScriptRunner {
            constructor(product) {
                this.product = product;
                this.productUtil = new ProductUtil();
            }

            async run(isQuickView) {
                const config = await new Api().getProductPreOrderConfig(this.product.id);
                if (!config) {
                    // Product is not set in the app. Store it in the cache.
                    window.ta.products[this.product.id] = {
                        isPreorder: false,
                        lastUpdate: parseInt(new Date().getTime() / 1000)
                    };
                    localStorage.setItem("products", JSON.stringify(window.ta.products));
                    return;
                }

                this.globalSettings = new GlobalSettings(config.settings)
                this.selectors = new Selectors(config.selectors);
                if (!isQuickView) {
                    this.selectors.setNormalSelectors();
                } else {
                    this.selectors.setQuickViewSelectors();
                }

                this.product.setCurrentVariant(this.productUtil.extractVariantId(this.product.variants, this.selectors.formSelector));
                this.product.setPreorderVariants(config.product);

                const preorder = new Preorder(this.selectors, this.product, this.globalSettings);
                preorder.init();

                window.ta.products[this.product.id] = {
                    isPreorder: this.isActiveOnPreorder(config.product.variants),
                    settings: config.settings,
                    variants: config.product.variants,
                    lastUpdate: parseInt(new Date().getTime() / 1000)
                };
                localStorage.setItem("products", JSON.stringify(window.ta.products));
            }

            async runCollection() {
                const shop = await new Api().getShop();
                if (!shop) { return; }

                if (shop.settings.badge.collection) {
                    if (shop.lastProductUpdate && window.ta.lastProductUpdate < shop.lastProductUpdate) {
                        // Invalidate the product cache if there was a change on server-side. 
                        window.ta.products = {};
                    }
                    // Enable badge on collection.
                    let possibleClasses = window.ta.selectors.badge;
                    if (shop.selectors.collection && shop.selectors.collection.badge) {
                        possibleClasses = [shop.selectors.collection.badge];
                    }

                    let items = [];
                    for (let i = 0; i < possibleClasses.length; i++) {
                        if ($(possibleClasses[i]).length > 0) {
                            items = $(possibleClasses[i]);
                            $(possibleClasses[i]).css({ "position": "relative" });
                            break;
                        }
                    }

                    if (items.length == 0) {
                        console.log('No items detected.');
                        return;
                    }

                    Array.from(items).forEach(async function (item, index) {
                        let href = $(item).find('a').attr('href');
                        let handle = href.split("/").pop().split('?')[0];

                        console.log("handle", handle, index)
                        $.getJSON(window.location.origin + href, async function (data) {
                            let badge = new Badge();
                            let productId = String(data.product.id);
                            if (window.ta.products[productId]) {
                                if (window.ta.products[productId].isPreorder) {
                                    badge.add(item, shop.settings.badge.type, shop.settings.badge.value);
                                    badge.applyStyles(shop.settings.badge);
                                    // Hide elements from the collection page.
                                    shop.selectors.hide && shop.selectors.hide.collection && $(item).find(shop.selectors.hide.collection).hide();
                                }
                                return;
                            }
                            // Get product status from the API.
                            const config = await new Api().getProductPreOrderConfig(productId);
                            if (!config) {
                                // Product is not set in the app. Store it in the cache.
                                window.ta.products[productId] = {
                                    isPreorder: false,
                                    lastUpdate: parseInt(new Date().getTime() / 1000)
                                };
                                localStorage.setItem("products", JSON.stringify(window.ta.products));
                                return;
                            }

                            let isPreorder = true;
                            for (let variant in config.product.variants) {
                                if (config.product.variants[variant].config.status != "ACTIVE") {
                                    isPreorder = false;
                                    break;
                                }
                            }
                            if (isPreorder) {
                                badge.add(item, shop.settings.badge.type, shop.settings.badge.value);
                                badge.applyStyles(shop.settings.badge);
                                // Hide elements from the collection page.
                                shop.selectors.hide && shop.selectors.hide.collection && $(item).find(shop.selectors.hide.collection).hide();
                            }
                            window.ta.products[productId] = {
                                isPreorder: isPreorder,
                                settings: config.settings,
                                variants: config.product.variants,
                                lastUpdate: parseInt(new Date().getTime() / 1000)
                            };
                            localStorage.setItem("products", JSON.stringify(window.ta.products));
                        }).fail(function () {
                            console.log("[Error 1002]: Product on collection could not be fetched.");
                        });
                    });
                }
            }

            async runMixedCartAlert(data) {
                if (!window.ta.cart.showMixedCartAlert) {
                    return;
                }

                if (!data.items.length) {
                    return;
                }

                const shop = await new Api().getShop();
                if (!shop) { return; }

                if (!shop.settings.cart.mixed.isEnabled) {
                    return;
                }

                var hasPreorderProduct = false;
                var hasNormalProduct = false;
                var products = {};
                for (var item of data.items) {
                    if (window.ta.products[item.product_id]) {
                        if (window.ta.products[item.product_id].variants && window.ta.products[item.product_id].variants[item.variant_id]) {
                            if (window.ta.products[item.product_id].variants[item.variant_id].config.status == "ACTIVE") {
                                hasPreorderProduct = true;
                                continue;
                            }
                        }
                        hasNormalProduct = true;
                        continue;
                    }
                    // products is not in the cache.
                    products[item.product_id] = products[item.product_id] || [];
                    products[item.product_id].push(item.variant_id);
                }

                const modal = new Modal();
                if (hasPreorderProduct && hasNormalProduct) {
                    modal.display(shop.settings.cart.mixed);
                    return;
                }

                if (!Object.keys(products).length) {
                    return;
                }

                for (var productId of Object.keys(products)) {
                    const config = await new Api().getProductPreOrderConfig(productId);
                    if (!config) {
                        hasNormalProduct = true;
                        // Product is not set in the app. Store it in the cache.
                        window.ta.products[productId] = {
                            isPreorder: false,
                            lastUpdate: parseInt(new Date().getTime() / 1000)
                        };
                        continue;
                    }

                    for (var variantId of products[productId]) {
                        if (config.product.variants[variantId] && config.product.variants[variantId].config.status == "ACTIVE") {
                            hasPreorderProduct = true;
                        } else {
                            hasNormalProduct = true;
                        }
                    }

                    window.ta.products[productId] = {
                        isPreorder: this.isActiveOnPreorder(config.product.variants),
                        settings: config.settings,
                        variants: config.product.variants,
                        lastUpdate: parseInt(new Date().getTime() / 1000)
                    };

                    if (hasNormalProduct && hasPreorderProduct) {
                        modal.display(shop.settings.cart.mixed);
                        break;
                    }
                }
                localStorage.setItem("products", JSON.stringify(window.ta.products));
            }

            /** Checks if all the variants are active on pre-order. */
            isActiveOnPreorder(variants) {
                for (let variant in variants) {
                    if (variants[variant].config.status != "ACTIVE") {
                        return false;
                    }
                }
                return true;
            }
        }

        $(document).ready(function () {
            var shop = new Shop();
            shop.init();
            if (typeof meta !== 'undefined' && shop.isProductPage(meta)) {
                var product;
                $.getJSON(window.location.href, function (data) {
                    product = new Product(data.product.id, data.product.variants);
                }).done(function () {
                    new ScriptRunner(product).run(/*isQuickView=*/false);
                }).fail(function () {
                    console.log("[Error 1001]: Product could not be fetched.");
                });
            }

            if (shop.isCollectionPage() || shop.isHomePage() || shop.isSearchPage() || shop.isPagesPage()) {
                shop.initQuickView();
                new ScriptRunner(shop).runCollection();
            }

            if (shop.isCartPage()) {
                $.getJSON(window.location.href, function (data) {
                    new ScriptRunner(shop).runMixedCartAlert(data);
                }).fail(function () {
                    console.log("[Error 1001]: Product could not be fetched.");
                });
            }
        });
    };

    /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
    we will load jQuery from the Google CDN, and when it's fully loaded, we will run
    our app's JavaScript. */
    if ((typeof jQuery === 'undefined') || (parseFloat(jQuery.fn.jquery) < 2.1)) {
        loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', function () {
            jQuery191 = jQuery.noConflict(true);
            timesactScript(jQuery191);
        });
    } else {
        timesactScript(jQuery);
    }

})();
