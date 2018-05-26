    $(function () {

        //http://jsbin.com/kedizeraze/1/

        var brandImage = "http://cdn.cyberpuerta.mx/out/pictures/emthumbnailer/160/20/bd2/c7e/5dd/aoclogo-ea4c0ba4.jpg";
        var productImage = "http://cdn.cyberpuerta.mx/out/pictures/emthumbnailer/200/150/bb3/6a7/ebe/21994713-762-ebdf0b62.jpg";
        var products = [];


        for (var i = 1; i < 20; i++) {
            products.push({
                brandImage: brandImage,
                productImage: productImage,
                description: i + "- AOC Monitor E1670SWU LED 15.6'', Widescreen, Black",
                price: 1186.00,
                stock: 100,
                descriptions: [
                    "Screen size: 15.6\"",
                    "Screen resolution: 1920 x 1080",
                    "Ratio: 16:9"]
            });
        }


        var viewModel = kendo.observable({
            products: products
        });

        kendo.bind($("#productsView"), viewModel);


        $("#btnList,#btnGrid").on("click", function () {

            var templateName = $(this).data("template");
            var kendoTemplate = kendo.template($("#" + templateName).html());


            var listView = $("#products").data("kendoListView");

            listView.template = kendoTemplate;
            listView.altTemplate = kendoTemplate;
            listView.refresh();
        });
    });