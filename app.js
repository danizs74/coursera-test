(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Monito";
  $scope.stateOfBeing = "besito";

  $scope.sayMessage = function () {
    return "Y espera con mucha ansia jeje";
  };

  $scope.besarmonita = function () {
    $scope.stateOfBeing = "besada";
  };
}

})();
