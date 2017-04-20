(function (shoppingList) {
    shoppingList.controller("mainController", ["$scope", "$anchorScroll", "$location", function ($scope, $anchorScroll, $location) {
        $scope.Items = ["Milk", "Rice"];
         $scope.ErrorMessage=false;
        $scope.addItem = function () {

            if (!$scope.itemValue) { return }

            if ($scope.Items.indexOf($scope.itemValue) < 0) {
                $scope.Items.push($scope.itemValue);
                $scope.itemValue = "";
                $scope.lastIndex = $scope.Items.length;
                $location.hash("item-" + $scope.lastIndex - 1);
                $anchorScroll();
                $scope.ErrorMessage=false;
                $scope.searchValue="";
            }
            else {
                $scope.ErrorMessage=true
            }

        };
        $scope.removeItem = function (index) {
            $scope.ErrorMessage=false;
            $scope.Items.splice(index, 1);
        }

    }]);
} (shoppingList))