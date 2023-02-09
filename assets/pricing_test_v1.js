window.dataLayer = window.dataLayer || [];
function pushDataLayer(event, eventCategory, eventAction, eventLabel, eventValue) {
  window.dataLayer.push({
    'event': event, //This is required here
    'eventCategory': eventCategory, //This is required and critical
    'eventAction': eventAction, //This is required and critical, name of the action
    'eventLabel': eventLabel,
    'eventValue': eventValue // user value for country
  });
}
var topProducts = [
  {
    name: "Deep Dream Premium Mattress - Queen",
    productId: "6822546636842",
    variantId: "40164247994410",
    avgPrice: "A$599.00",
  },
  {
    name: "Tate Sideboard - Natural",
    productId: "6822599426090",
    variantId: "40164538220586",
    avgPrice: "A$550.05",
  },
  {
    name: "Tate 6 Seater Dining Table - Black",
    productId: "6822599786538",
    variantId: "40164543070250",
    avgPrice: "A$766.65",
  },
  {
    name: "Tate 6 Seater Dining Table - Natural",
    productId: "6822599786538",
    variantId: "40164543037482",
    avgPrice: "A$759.05",
  },
  {
    name: "Tate TV Unit 160cm - Natural",
    productId: "6822599131178",
    variantId: "40164534157354",
    avgPrice: "A$699.00",
  },
  {
    name: "Deep Dream Green Tea Mattress - Queen",
    productId: "6822550306858",
    variantId: "40164277223466",
    avgPrice: "A$619.00",
  },
  {
    name: "Cali Bed Base - Queen",
    productId: "6822555090986",
    variantId: "40164297736234",
    avgPrice: "A$322.52",
  },
  {
    name: "Tate TV Unit 160cm - Black",
    productId: "6822599131178",
    variantId: "40164534190122",
    avgPrice: "A$663.89",
  },
  {
    name: "Tate Sideboard - Black",
    productId: "6822599426090",
    variantId: "40164538253354",
    avgPrice: "A$543.40",
  },
  {
    name: "Tate 4 Seater Dining Table - Natural",
    productId: "6822600343594",
    variantId: "40164550836266",
    avgPrice: "A$553.44",
  },
  {
    name: "Deep Dream Premium Mattress - King",
    productId: "6822546636842",
    variantId: "40164247961642",
    avgPrice: "A$659.00",
  },
  {
    name: "Deep Dream Green Tea Mattress - King",
    productId: "6822550306858",
    variantId: "40164277256234",
    avgPrice: "A$699.00",
  },
  {
    name: "Cali Bed Base - King Single",
    productId: "6822555090986",
    variantId: "40164297801770",
    avgPrice: "A$279.00",
  },
  {
    name: "Sorrento Sideboard",
    productId: "6822609453098",
    variantId: "40164598218794",
    avgPrice: "A$398.05",
  },
  {
    name: "Cali Bed Frame - Queen",
    productId: "6822562168874",
    variantId: "40164333551658",
    avgPrice: "A$396.15",
  },
  {
    name: "Scali Baby Cot",
    productId: "6822573768746",
    variantId: "40164391223338",
    avgPrice: "A$419.00",
  },
  {
    name: "Deep Dream Premium Mattress - Double",
    productId: "6822546636842",
    variantId: "40164248027178",
    avgPrice: "A$499.00",
  },
  {
    name: "Haris 4 Seater Dining Table - Natural",
    productId: "6859190009898",
    variantId: "40320867565610",
    avgPrice: "A$342.05",
  },
  {
    name: "Cali Bed Base - Double",
    productId: "6822555090986",
    variantId: "40164297769002",
    avgPrice: "A$296.01",
  },
  {
    name: "Deep Dream Super Firm Mattress - Queen",
    productId: "6822561382442",
    variantId: "40164331159594",
    avgPrice: "A$599.00",
  },
  {
    name: "Mia Bed Frame with Drawers - King",
    productId: "6822563971114",
    variantId: "40164341776426",
    avgPrice: "A$550.03",
  },
  {
    name: "First Class Recliner",
    productId: "6822546145322",
    variantId: "40164240490538",
    avgPrice: "A$274.00",
  },
  {
    name: "Deep Dream Basic Mattress - Single",
    productId: "6822551257130",
    variantId: "40164279746602",
    avgPrice: "A$199.00",
  },
  {
    name: "Deep Dream Green Tea Mattress - King Single",
    productId: "6822550306858",
    variantId: "40164277321770",
    avgPrice: "A$379.00",
  },
  {
    name: "Nook Bed Frame - Queen / Dark",
    productId: "6822565904426",
    variantId: "40164352655402",
    avgPrice: "A$502.55",
  },
  {
    name: "Yarra 5 Seater Outdoor Lounge Set",
    productId: "6846788173866",
    variantId: "40279600169002",
    avgPrice: "A$1,499.00",
  },
  {
    name: "Coria Desk",
    productId: "6851809574954",
    variantId: "40296208760874",
    avgPrice: "A$279.00",
  },
  {
    name: "Cuppa 5 Chest of Drawers",
    productId: "6822565249066",
    variantId: "40164348657706",
    avgPrice: "A$279.00",
  },
];
var defer = (method, selector) => {
  if (window.jQuery) {
    if (jQuery(selector).length > 0) {
      method();
    } else {
      setTimeout(() => {
        defer(method, selector);
      }, 50);
    }
  } else {
    setTimeout(() => {
      defer(method, selector);
    }, 50);
  }
};
var getScript = (src, callback) => {
  var s = document.createElement("script");
  s.src = src;
  s.async = true;
  s.onreadystatechange = s.onload = function () {
    if (
      !callback.done &&
      (!s.readyState || /loaded|complete/.test(s.readyState))
    ) {
      callback.done = true;
      callback();
    }
  };
  document.querySelector("head").appendChild(s);
};
var renderPLP = () => {
  $("#main-collection-product-grid .grid__item").each(function () {
    var product = topProducts.find(item => item.productId === $(this).attr("data-id"));
    if (product && $(this).find(".card-information > .price.price--on-sale").length === 0) {
      pushDataLayer('genericEvent', 'Product Display', 'LLY-002', 'LLY-002-AB-Was is Pricing - PLP Display "' + product.name + '"', '');
      console.log($(this).attr("data-id"));
      $(this)
        .find(".card-information > .price")
        .addClass("price--on-sale");
        console.log('product', $(this)
            .find(
              ".card-information > .price .price__sale > span.price-item--sale"
            )
            .text());
      const currentPrice =
        Number(
          $(this)
            .find(
              ".card-information > .price .price__sale > span.price-item--sale"
            )
            .text()
            .replace(/^\D+|,/g, "")
            .replace("AUD", "")
        ) * 1.2;
      console.log(currentPrice);
      const regular = $(this).find(
        ".card-information > .price .price__sale span .price-item--regular"
      );
      regular.text(regular.text().replace("0", currentPrice.toFixed(2)));
    }
    const $salePrice = $(this).find(
      ".card-information > .price .price__sale > span.price-item.price-item--sale"
    );
    const tag = `<s class="opt-price-tag">Was</s>`;
    $(this).find(".card-information > .price.price--on-sale").length > 0 &&
      $(this).find(".card-information .opt-price-tag").length === 0 &&
      ($(tag).insertBefore($(this).find(".card-information > .price.price--on-sale .price-item--regular")),
        // $salePrice.text().includes("From") &&
        // 	$(this).find(".opt-price-tag").text("Was from"),
        $(this).find(".card-information > .price.price--on-sale .price__sale > span > .price-item--regular").text(
          $(this).find(".card-information > .price.price--on-sale .price__sale > span > .price-item--regular").text().trim()
        ));
  });
};
var renderPDP = async () => {
  $(
    ".product .product__info-wrapper .product__info-container > .no-js-hidden > .price"
  ).addClass("opt-price-tag");
  const priceWrapper = `
        <div class="opt-price__wrapper">
            <div class="opt-price__content">
                <div class="opt-price__comapre-price">
                    <span class="opt-price__compare-was">
                        Was
                    </span>
					<span class="opt-price__compare-from">
						from
					</span>
                    <span class="opt-price__compare-number">
                    </span>
                </div>
                <div class="opt-price__current-wrapper">
                    <div class="opt-price__current-price"></div>
                    <div class="opt-price__current-fortnight"></div>
                </div>
            </div>
        </div>
    `;
  const $regularPrice = $(
    ".product__info-wrapper .price--on-sale .price__sale > span > .price-item--regular"
  );
  var product = topProducts.find(item => item.productId === $(".zoomywishidheart .zoomycheck").attr("data-id"));
  if ($regularPrice.length > 0) {
    $(".opt-price__wrapper").length === 0 && $(priceWrapper).prependTo(
      ".product__info-wrapper .price.price--on-sale"
    );
    $(".opt-price__compare-number").text($regularPrice.text().trim());
    $(".opt-price__current-price").text(
      $(".product__info-wrapper .price__sale > .price-item--sale")
        .text()
        .trim()
    );
    $(".opt-price__current-fortnight").text(
      $(".product__info-wrapper .price_per_fortight").text().trim()
    );
    $(
      ".product__info-wrapper .price.price--on-sale > .price__container"
    ).hide();
  } else if (product && $regularPrice.length === 0) {
    pushDataLayer('genericEvent', 'Product Display', 'LLY-002', 'LLY-002-AB-Was is Pricing - PDP Display "' + product.name + '"', '');
    const $regular = $(
      ".product__info-wrapper .no-js-hidden > .price .price-item--regular"
    );
    $(".opt-price__wrapper").length === 0 && $(priceWrapper).prependTo(
      ".product__info-wrapper .no-js-hidden > .price"
    );
    const comparePice = $regular.attr("data-min")
      ? ((Number($regular.attr("data-min")) / 100) * 1.2).toFixed(2)
      : (
        Number(
          $regular.text().replace(/^\D+|,/g, "").replace("AUD", "")
        ) * 1.2
      ).toFixed(2);
    $(".opt-price__compare-number").text(`$${comparePice} AUD`);
    $(".opt-price__current-price").text($regular.text().trim());
    $(".opt-price__current-fortnight").text(
      $(".product__info-wrapper .price_per_fortight:not(.price_per_fortight_with_afterpay)").text().trim()
    );
    $(".product__info-wrapper .price > .price__container").hide();
    $regular.attr("data-min") &&
      $(".opt-price__compare-from").addClass("active");
  } else {
    const api = window.location.href;
    const response = await fetch(api, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "GET",
    });
    var content = await response.json();
    if (
      content?.product?.variants.some(
        (item) => item.compare_at_price !== "0.00"
      )
    ) {
      $(".opt-price__wrapper").length === 0 && $(priceWrapper).prependTo(
        ".product__info-wrapper .price.price--on-sale"
      );
      $(
        ".product__info-wrapper .price.price--on-sale > .price__container"
      ).hide();
      $(".opt-price__compare-from").addClass("active");
      const compareListPrice = content?.product?.variants.map((item) =>
        Number(item.compare_at_price)
      );
      $(".opt-price__current-price").text(
        $(".product__info-wrapper .price__sale > .price-item--regular")
          .text()
          .trim()
      );
      $(".opt-price__compare-number").text(
        `$${Math.max(...compareListPrice)} AUD`
      );
    }
  }
};
var observeNode = () => {
  // Target node
  const targetNode = document.querySelector("#main-collection-product-grid");
  const config = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const observer = new MutationObserver(() => {
    // add opt identifier before running
    $(
      "#main-collection-product-grid .grid__item .card-information > .price.price--on-sale"
    ).length !== $(".opt-price-tag") && renderPLP();
  });
  observer.observe(targetNode, config);
};
var observeNodePDP = () => {
  // Target node
  const targetNode = document.querySelector(".product__info-wrapper");
  const config = {
    childList: true,
    subtree: true,
    attributes: true,
  };
  const observer = new MutationObserver(() => {
    // add opt identifier before running
    $(
      ".product .product__info-wrapper .product__info-container > .no-js-hidden > .price.opt-price-tag"
    ).length === 0 && renderPDP();
  });
  observer.observe(targetNode, config);
};
var init = () => {
  $ = jQuery.noConflict();
  console.clear();
  const testId = "LLY-002";
  const variation = "1";
  $("body").addClass("opt" + testId + " opt" + testId + "-v-" + variation);
  defer(function () {
    renderPLP();
    observeNode();
  }, "#main-collection-product-grid");
  defer(function () {
    renderPDP();
    observeNodePDP();
  }, ".product__info-wrapper .price");
  $('body').on('click', '.grid__item a', function (e) {
    pushDataLayer('genericEvent', 'User Engagement', 'LLY-002', 'LLY-002-AB-Was is Pricing - Click on PLP title', 'AU');
  });
};
setTimeout(() => {
  defer(init, "body");
}, 1500)
