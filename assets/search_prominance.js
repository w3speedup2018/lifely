function defer(method, selector) {
    if (window.jQuery) {
        if (jQuery(selector).length > 0) {
            method();
            return false;
        }
    }
    setTimeout(function () { defer(method, selector); }, 50);
}
function loadopt() {
    var testid = '006';
    var vari = 1;
    var search_icon = '<svg class="icon icon-search opt-search" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.9252 6.75604C10.9252 9.01716 9.09217 10.8502 6.83105 10.8502C4.56994 10.8502 2.73694 9.01716 2.73694 6.75604C2.73694 4.49492 4.56994 2.66193 6.83105 2.66193C9.09217 2.66193 10.9252 4.49492 10.9252 6.75604ZM10.287 11.7762C9.3049 12.4535 8.11429 12.8502 6.83105 12.8502C3.46537 12.8502 0.736938 10.1217 0.736938 6.75604C0.736938 3.39036 3.46537 0.661926 6.83105 0.661926C10.1967 0.661926 12.9252 3.39036 12.9252 6.75604C12.9252 8.11644 12.4794 9.37272 11.726 10.3868L16.9702 15.631C17.3607 16.0215 17.3607 16.6547 16.9702 17.0452C16.5797 17.4357 15.9465 17.4357 15.556 17.0452L10.287 11.7762Z" fill="#6E6E6E"></path></svg>';
    jQuery('body').addClass('opt' + testid + ' opt' + testid + '-v' + vari);
    defer(function() {
        jQuery('.header__icons a').wrapAll('<div class="opt-icons"></div>');
        jQuery('header .search .field .search__button.field__button').html(search_icon);
    },'.header__icons');
}
defer(loadopt, 'body');
