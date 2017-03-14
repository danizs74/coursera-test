(function () {
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.name = "Monito";
  $scope.stateOfBeing = "besito";

  $scope.besarmonita = function () {
    $scope.stateOfBeing = "besada";
  };
}

})();
