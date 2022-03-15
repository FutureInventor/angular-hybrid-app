import * as angular from 'angular'

export default angular.module('angularJsApp')
  .controller('MainCtrl', ['$scope', function($scope) {
    $scope.message = 'Hello world';
  }]);
