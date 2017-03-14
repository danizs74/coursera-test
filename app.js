(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Monito";
  $scope.stateOfBeing = "besito";

  $scope.sayMessage = function () {
    return "Yaakov likes to eat healthy snacks at night!";
  };

  $scope.besarmonita = function () {
    $scope.stateOfBeing = "besada";
  };
}

})();
