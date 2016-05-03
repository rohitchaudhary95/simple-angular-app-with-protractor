exchangeApp.controller("ExchangeAppController", ["$scope", function ($scope) {
    $scope.exchanges = [
        {
            currency: "USD/JPY",
            bid: 0,
            ask: 0
        },
        {
            currency: "AUD/JPY",
            bid: 0,
            ask: 0
        },
        {
            currency: "EUR/CAD",
            bid: 0,
            ask: 0
        },
        {
            currency: "USD/CNY",
            bid: 0,
            ask: 0
        },
        {
            currency: "CAD/CNY",
            bid: 0,
            ask: 0
        },
        {
            currency: "GBP/USD",
            bid: 0,
            ask: 0
        }
    ];
    function updatePrices() {
        return angular.forEach($scope.exchanges, function (value, key) {
            $scope.exchanges[key]["ask"] = Math.round((Math.random() + 1) * 100) / 100;
            $scope.exchanges[key]["bid"] = getMaxRandomValue(1, $scope.exchanges[key]["ask"]);
            return $scope.$apply(function () {
                return $scope.exchanges;
            });
        });

    }

    setInterval(updatePrices, 500);

    function getMaxRandomValue(min, max) {
        return Math.round(Math.random() * (max - min) + min * 100) / 100
    }

    $scope.transaction_history_final = [];
    $scope.actionBidOrAsk = function (exhange, type) {
        var price;
        if (type == "Buy") {
            price = exhange["bid"];
        } else if (type == "Sell") {
            price = exhange["ask"];
        }
        var data = {
            currency: exhange["currency"],
            type: type,
            price: price,
            amount: $scope.amount
        };
        return $scope.transaction_history_final.unshift(data);
    };
}]);
    