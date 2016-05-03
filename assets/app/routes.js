exchangeApp.config(["$routeProvider",
    function ($routeProvider) {
        $routeProvider
            .when("/", {
                controller: "ExchangeAppController",
                templateUrl: "assets/app/partials/exchange.html"
            })
            .when("/news", {
                controller: "ExchangeNewsController",
                templateUrl: "assets/app/partials/news.html"
            })
            .otherwise({
                redirectTo: '/'
            });
    }
]);