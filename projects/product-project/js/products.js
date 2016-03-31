/*global _*/
(function() {
    var products;

    $.ajax('data/product.json')
        .done(function(result, status, request) {
            products = result;
            console.log(products);
            init();
        })
        .fail(function(request, status, error) {
            console.log(status + ': ' + error);
        });


    function filterProducts(searchTerm) {
        var filtered = _.filter(products, function(p) {
            return searchObject(searchTerm, p);

        });
        createProductList(filtered);
    }

    function searchObject(searchTerm, obj) {
        return _.reduce(obj, function(memo, val) {
            if (memo === true) return true;

            if (Array.isArray(val) || typeof val === 'object')
                return searchObject(searchTerm, val);
            if (typeof val !== 'string') return memo;

            return (val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }, false);
    }




    function createProductList(products) {


        var $products = $('#products');
        $products.empty();
        var $lis = _.map(products, function(p) {
            var $li = $('<li>').addClass('products');
            $li.data("product", p);
            var $phonedescription = $('<p>').addClass('title').text(p.desc);
            var $phonePrice = $('<p>').text('$' + p.price);
            if (p.stock < 10) {
                var $stock = $('<h3>').text('Hurry-Only ' + p.stock + ' left!');
            }
            if (p.stock >= 10 && p.stock < 30) {
                $stock = $('<h4>').text(p.stock + ' in stock.');
            }
            

            var $phonePic = $('<img>').addClass('phone-pic').attr('src', 'img/product/thumbs/' + p.image);

            $li.append([$phonePic, $phonedescription, $phonePrice, $stock]);
            $li.on('click', showProductDetails);
            return $li;
        });
        $products.append($lis);

    }

    function showProductDetails(e) {
        var $li = $(e.currentTarget);
        var $popup = $('#product-details');
        $popup.fadeIn(400);

        var productData = $li.data("product");

        $('.image-container > img', $popup).attr("src", "img/product/" + productData.image);

        var $specs = _.map(productData.specs, function(s, i) {
            var $sli = $('<li>').text(productData.specs[i]);
            return $sli;
        });
        $('.specs').append($specs);
        $('.desc').text(productData.desc);

    }




    function init() {

        createProductList(products);

        $('#search').on('keyup', function(e) {
            var term = $(e.target).val();
            filterProducts(term);
        });

        $('.close', '#product-details').on('click', function(e) {
            $('#product-details').fadeOut(400);
        });

        $('li', '#products').on('click', function(e) {
            var $li = $(e.currentTarget);
            var $popup = $('#product-details');
            $popup.fadeIn(400);

            var productData = $li.data("product");

            $('.image-container > img', $popup).attr("src", "img/product/" + productData.image);

            var $specs = _.map(productData.specs, function(s, i) {
                var $sli = $('<li>').text(productData.specs[i]);
                return $sli;
            });
            $('.specs').append($specs);
            $('.desc').text(productData.desc);

        });

    }



})();