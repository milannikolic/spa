(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.itemsString = "";
  $scope.messageText = "";

  $scope.checkIt = function () {

    if ( $scope.itemsString == ""){
      $scope.messageText = "Please enter data first";
      return;
    }

    var items = $scope.itemsString.split(',');

    $scope.messageText = (items.length>3?"Too much":"Enjoy!");
  };
}

})();
