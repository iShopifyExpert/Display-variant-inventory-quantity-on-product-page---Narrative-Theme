//add in theme.js

var selectors$12 = {
  inventoryContainer: '[data-inventory]',
};

_updateProductPrices: function(variant, $container) {
    var vinventory = _VARIANTS[variant.id];
    if (variant.inventory_management !== '') {
      $(selectors$12.inventoryContainer, $container).html(vinventory);
    } else {
      $(selectors$12.inventoryContainer, $container).html('250');
    }
},
