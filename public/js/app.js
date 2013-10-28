window.app = angular.module('ngFantasyFootball', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ngRoute', 'ngff.controllers', 'ngff.directives', 'ngff.services']);

// bundling dependencies
window.angular.module('ngff.controllers', ['ngff.controllers.header','ngff.controllers.index','ngff.controllers.nfl','ngff.controllers.leagues','ngff.controllers.fantasyTeams']);
window.angular.module('ngff.services', ['ngff.services.global','ngff.services.nfl','ngff.services.leagues','ngff.services.fantasyTeams']);