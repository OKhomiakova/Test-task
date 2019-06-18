'use strict';

angular.
  module('appNavbar').
  component('appNavbar', {
    templateUrl: 'app-navbar/app-navbar.template.html',
    controller: function Ctrl($scope){
        $scope.date = new Date();
    }
  });