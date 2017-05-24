
(function(angular){
  'use strict';
var app = angular.module('myApp');

app
   .controller('SidebarController' , function($scope, $rootScope, $stateParams, $state, LoginService) {

$scope.flagToggle = 0;
      function menuToggle(){


        addEventListener('load', load, false);

               function load(){
                   var el = document.getElementById("foo");
                   alert(el);
                   console.log('hello');
               }

        // $scope.container  = $scope.getElementById("#menu-toggle");
        // console.log("I was called" , $scope.container);
        // container.addEventListener('click' , function(e){
        //       e.preventDefault();
        //       if($scope.flagToggle == 0){
        //       $scope.getElementById("wrapper").remove('show');
        //       $scope.getElementById("wrapper").add('hide');
        //
        //       $scope.flagToggle = 1;
        //     }else{
        //       $scope.getElementById("wrapper").remove('hide');
        //       $scope.getElementById("wrapper").add('show');
        //       $scope.flagToggle = 0;
        //     }
//           $scope.container.addEventListener('c', function(){
//         $scope.getElementById("wrapper").remove('first');
//         $scope.getElementById("wrapper").add('second');
// })
// $scope.container.addEventListener('mouseleave', function(){
//         $scope.getElementById("wrapper").add('first');
//         $scope.getElementById("wrapper").remove('second');
// })

          // $("#wrapper").toggleClass("active");
    // -------------------------------------    })
          //  $("#menu-toggle").click(function(e) {
           //
          //  });
      }
$scope.menuToggle = menuToggle();
   });
})(angular)
