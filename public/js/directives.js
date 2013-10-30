window.angular.module('ngff.directives', [])
  .directive('positions', function() {
    return {
      restrict: "E",
      templateUrl: "views/players/positionselect.html"
    };
  })