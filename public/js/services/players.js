window.angular.module('ngff.services.players', [])
  .factory('Players', ['$resource',
    function($resource) {
      return $resource('players/:playerId', { playerId: '@_id' });
    }]);