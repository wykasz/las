angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.dodawanieKD', {
    url: '/page6',
    views: {
      'tab4': {
        templateUrl: 'templates/dodawanieKD.html',
        controller: 'dodawanieKDCtrl'
      }
    }
  })

  .state('tabsController.definiowanieStosW', {
    url: '/page7',
    views: {
      'tab5': {
        templateUrl: 'templates/definiowanieStosW.html',
        controller: 'definiowanieStosWCtrl'
      }
    }
  })

  .state('tabsController.kOdy', {
    url: '/page8',
    views: {
      'tab6': {
        templateUrl: 'templates/kOdy.html',
        controller: 'kOdyCtrl'
      }
    }
  })

  .state('tabsController.stosy', {
    url: '/page9',
    views: {
      'tab7': {
        templateUrl: 'templates/stosy.html',
        controller: 'stosyCtrl'
      }
    }
  })

  .state('tabsController.rozkAd', {
    url: '/page10',
    views: {
      'tab8': {
        templateUrl: 'templates/rozkAd.html',
        controller: 'rozkAdCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/page6')

  

});