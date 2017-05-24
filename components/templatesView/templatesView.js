(function(angular) {
    'use strict';
var app = angular.module('myApp');

      app.controller('TemplatesController', function($scope, $rootScope, $stateParams, $state, LoginService,ModalService) {
          $scope.$state = $state;
          $scope.game = 'Template header is displayed here';
          $scope.scrollText = 'Text here will scroll';

//dummy list of images coming from backend , user has the capability to upload files in later part of application , so he enters a name for the image which he enters , the sname represents that , url is automatically creeated taking the file ame.
          $scope.imageList = [{"name": "Favourites" , "url": "/Assets/img/startBlank.png"} , {"name": "twitter" , "url": "/Assets/img/twitterTemplate.png"} , {"name": "Brush it" , "url": "/Assets/img/fromTemplate.png"}]

          $scope.generateImageFilesList = function(imageL) {
            $scope.files = [];
              for(var i = 0 ; i < imageL.length ; i++){
                $scope.temp = {};
                $scope.temp.name = imageL[i].name;
                $scope.temp.fileUrl = imageL[i].url;
                $scope.files.push($scope.temp);
            }
            return($scope.files);
          }
          $scope.filesLeft = $scope.generateImageFilesList($scope.imageList);
          $scope.filesRight = $scope.generateImageFilesList($scope.imageList);

          $scope.fileSelectedLeft = "";
          $scope.fileSelectedRight = "";



          $scope.resetTemplate1= function(){
            $scope.fileSelectedLeft = "";
            $scope.fileSelectedRight = "";
            $scope.game = "Template header is displayed here !! ";
            $scope.scrollText = "Text here will scroll !! ";
          }


          // 2nd Modal template

          $scope.head2 = "La Carte";
          $scope.scrollText2 = "Restaurant timings are : 9:00 AM to 11:00 PM ";

          $scope.menuItem = [];

          $scope.itemVal = "";
          $scope.priceVal = "";

          $scope.IsVisible = false;
          $scope.showNhide = function () {
              $scope.IsVisible = $scope.IsVisible ? false : true;
          }
          $scope.menuUpdate = function() {
            $scope.temp = {};
            $scope.temp.Item = $scope.itemVal;
            $scope.temp.Price = $scope.priceVal;
            $scope.menuItem.push($scope.temp);
            $scope.menuCancel();
          }

          $scope.menuCancel = function() {
            $scope.itemVal = "";
            $scope.priceVal = "";
            $scope.showNhide();
          }

          var vm = this;

                  vm.openModal = openModal;
                  vm.closeModal = closeModal;
                  initController();

                  function initController() {
                      vm.bodyText = 'This text can be updated in modal 1';
                  }

                  function openModal(id){
                      ModalService.Open(id);
                  }

                  function closeModal(id){
                      ModalService.Close(id);
                  }

      // $rootScope.title = "Digital Signage Home Page";
    });
})(angular);






























// '<div class="dropdown-container" ng-class="{ show: listVisible }">	<div class="dropdown-display" ng-click="show();" ng-class="{ clicked: listVisible }">		<span ng-if="!isPlaceholder">{{display}}</span>		<span class="placeholder" ng-if="isPlaceholder">{{placeholder}}lt;/span>		<i class="fa fa-angle-down"></i>	</div>	<div class="dropdown-list">		<div>			<div ng-repeat="item in list" ng-click="select(item)" ng-class="{ selected: isSelected(item) }">				<span>{{property !== undefined? item[property] : item}}</span>				<i class="fa fa-check"></i>			</div>		</div>	</div></div>'
