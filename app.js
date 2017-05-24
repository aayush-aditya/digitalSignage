(function() {
  var app = angular.module('myApp', ['ui.router' , 'ui']);

  app.run(function($rootScope, $location, $state,$stateParams,$window, LoginService) {
    $rootScope.$on('$stateChangeStart',
      function(event, toState, toParams, fromState, fromParams){
          console.log('Changed state to: ' + toState);
      });

     $rootScope.$state = $state;
     $rootScope.$stateParams = $stateParams;

     angular.element(document).on("click", function(e) {
     		$rootScope.$broadcast("documentClicked", angular.element(e.target));
     	});

     $rootScope.goBack = function(){
       $window.history.back();
     }

      if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }
  });

  app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');

    $stateProvider

      .state('login', {
        url : '/login',
        views: {
          'main' : {
            templateUrl : '/components/login/loginView.html',
            controller : 'LoginController'
          }
        }
      })
      .state('home', {
        url : '/home',
        views: {
          'main' : {
            templateUrl : '/components/home/homeView.html',
            controller : 'HomeController'
          }
        }
      })
      .state('home.station', {
        url : '/station',
        views: {
          'home' : {
            templateUrl : '/components/stationView/stationView.html',
            controller : 'StationController'
          }
        }
      })
      .state('home.player', {
        url : '/player',
        views: {
          'home' : {
            templateUrl : '/components/playerView/playerView.html',
            controller : 'PlayerController'
          }
        }

      })
      .state('home.scenes', {
        url : '/scene',
        views: {
          'home' : {
            templateUrl : '/components/scenesView/scenesView.html',
            controller : 'ScenesController'
          }
        }
      })
      .state('home.scenes.templates', {
        url : '/templates',
        views: {
          'temp' : {
            templateUrl : '/components/templatesView/templatesView.html',
            controller : 'TemplatesController',
            controllerAs: 'vm'
          }
        }
      })
      .state('sidebar', {
        url : '/sidebar',
        views: {
          'home' : {
            templateUrl : '/shared/sidebar/sidebar.html',
            controller : 'SidebarController'
          }
        }

      });
  }]);

  app
     .controller('SidebarController' , function($scope, $rootScope, $stateParams, $state, LoginService) {

  $scope.flagToggle = 0;
        function menuToggle(){

          $scope.container  = $scope.getElementById("#menu-toggle");
          container.addEventListener('click' , function(e){
                e.preventDefault();
                if($scope.flagToggle == 0){
                $scope.getElementById("wrapper").remove('show');
                $scope.getElementById("wrapper").add('hide');

                $scope.flagToggle = 1;
              }else{
                $scope.getElementById("wrapper").remove('hide');
                $scope.getElementById("wrapper").add('show');
                $scope.flagToggle = 0;
              }
  //           $scope.container.addEventListener('c', function(){
  //         $scope.getElementById("wrapper").remove('first');
  //         $scope.getElementById("wrapper").add('second');
  // })
  // $scope.container.addEventListener('mouseleave', function(){
  //         $scope.getElementById("wrapper").add('first');
  //         $scope.getElementById("wrapper").remove('second');
  // })

            // $("#wrapper").toggleClass("active");
          })
            //  $("#menu-toggle").click(function(e) {
             //
            //  });
        }
  $scope.menuToggle = menuToggle();
     });

  app.factory('LoginService', function() {
    var admin = 'a';
    var pass = 'a';
    var isAuthenticated = false;

    return {
      login : function(username, password) {
        isAuthenticated = username === admin && password === pass;
        return isAuthenticated;
      },
      isAuthenticated : function() {
        return isAuthenticated;
      }
    };

  });




      app.directive("dropdown", function($rootScope) {
      	return {
      		restrict: "E",
      		template: '<div class="dropdown-container" ng-class="{ show: listVisible }">	<div class="dropdown-display" ng-click="show();" ng-class="{ clicked: listVisible }">		<span ng-if="!isPlaceholder">{{display}}</span>		<span class="placeholder" ng-if="isPlaceholder">{{placeholder}}</span>		<i class="fa fa-angle-down"></i>	</div>	<div class="dropdown-list">		<div>			<div ng-repeat="item in list" ng-click="select(item)" ng-class="{ selected: isSelected(item) }">				<span>{{property !== undefined? item[property] : item}}</span>				<i class="fa fa-check"></i>			</div>		</div>	</div></div>',
      		scope: {
      			placeholder: "@",
      			list: "=",
      			selected: "=",
      			property: "@"
      		},
      		link: function(scope) {
      			scope.listVisible = false;
      			scope.isPlaceholder = true;

      			scope.select = function(item) {
      				scope.isPlaceholder = false;
      				scope.selected = item;
      			};

      			scope.isSelected = function(item) {
      				return item[scope.property] === scope.selected[scope.property];
      			};

      			scope.show = function() {
      				scope.listVisible = true;
      			};

      			$rootScope.$on("documentClicked", function(inner, target) {
      				console.log($(target[0]).is(".dropdown-display.clicked") || $(target[0]).parents(".dropdown-display.clicked").length > 0);
      				if (!$(target[0]).is(".dropdown-display.clicked") && !$(target[0]).parents(".dropdown-display.clicked").length > 0)
      					scope.$apply(function() {
      						scope.listVisible = false;
      					});
      			});

      			scope.$watch("selected", function(value) {
      				scope.isPlaceholder = scope.selected[scope.property] === undefined;
      				scope.display = scope.selected[scope.property];
      			});
      		}
      	}
      });

})();
