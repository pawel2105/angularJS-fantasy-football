window.angular.module('ngff.controllers.header', [])
  .controller('HeaderController', ['$scope', 'Global',
    function($scope, Global) {
      $scope.global = Global;
    }]);