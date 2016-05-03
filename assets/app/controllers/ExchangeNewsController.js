exchangeApp.controller("ExchangeNewsController", ["$scope", "$uibModal", function ($scope, $uibModal) {
    $scope.newsData = newsData || [];
    $scope.open = function (data) {
        var modalInstance = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'assets/app/partials/singleNewsItem.html',
            controller: 'SingleNewsItemController',
            resolve: {
                item: function () {
                    return data;
                }
            }
        });
    };
}]);
