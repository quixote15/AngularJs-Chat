'use strict';

/**
 * @ngdoc function
 * @name chatDevApp.controller:JoinCtrl
 * @description
 * # JoinCtrl
 * Controller of the chatDevApp
 */
angular.module('chatDevApp')
  .controller('JoinCtrl', ['$scope',
      '$rootScope','$location','Pubnub',function ($scope,$rootScope,$location,Pubnub) {
    $scope.data = {
      username: 'User_ ' + Math.floor(Math.random() * 1000 )
    };

    $scope.join = function(){
      console.log('Joining...');
      var _ref, _ref2;
      $rootScope.data || ($rootScope.data = {});
      $rootScope.data.username = (_ref = $scope.data) != null ? _ref.username: void 0;
      $rootScope.data.city = (_ref1 = $scope.data) != null ? _ref1.city: void 0;
      $rootScope.data.uuid = Math.floor(Math.random() * 1000000) + '__' + $scope.data.username;

      Pubnub.init({
        subscribe_key:'sub-c-db27506c-390e-11e8-a385-722195e66eb1',
        publish_key: 'pub-c-3e2fe81f-2cd7-463f-b9a2-4071abb127f4',
        uuid: $rootScope.data.uuid
      })

      return $location.path('/main');
    }
  }]);
