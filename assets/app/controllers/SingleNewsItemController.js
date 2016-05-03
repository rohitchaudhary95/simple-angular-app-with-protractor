exchangeApp.controller('SingleNewsItemController', ["$scope", "$uibModalInstance", "item", function ($scope, $uibModalInstance, item) {
    $scope.news_item = item;
    $scope.closeModal = function () {
        $uibModalInstance.dismiss();
    };
}]);
