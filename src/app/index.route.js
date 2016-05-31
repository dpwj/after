(function() {
  'use strict';

  angular
    .module('after')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('about-us', {
        url: '/about-us',
        templateUrl: 'app/pages/about-us/about-us.html',
        controller: 'AboutUsController',
        controllerAs: 'ctrl'
      })
      .state('events', {
        url: '/events',
        templateUrl: 'app/pages/events/events.html',
        controller: 'EventsController',
        controllerAs: 'ctrl'
      })
      .state('event', {
        url: '/event',
        templateUrl: 'app/pages/event/event.html',
        controller: 'EventController',
        controllerAs: 'ctrl'
      })
      .state('home', {
        url:          '/',
        templateUrl:  'app/pages/home/home.html',
        controller:   'HomeController',
        controllerAs: 'ctrl'
      })
      .state('login', {
        url:          '/login',
        templateUrl:  'app/pages/login/login.html',
        controller:   'LoginController',
        controllerAs: 'ctrl'
      })
      .state('signup', {
        url:          '/signup',
        templateUrl:  'app/pages/signup/signup.html',
        controller:   'SignupController',
        controllerAs: 'ctrl'
      })
      .state('org', {
        url: '/org',
        templateUrl: 'app/pages/org/org.html',
        controller: 'OrgController',
        controllerAs: 'ctrl'
      });
      

    $urlRouterProvider.otherwise('/');
  }

})();
