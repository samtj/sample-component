'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:SampleCtrl
 * @description
 * # AddedCtrl
 * Controller of the mytodoApp
 */
angular.module('sampleModule',['btford.dragon-drop']).
    controller('SampleCtrl', function ($scope) {
        $scope.things = ['one', 'two'];
        $scope.otherThings = ['three'];
    });
/*
    angular.module('mytodoApp')
    .controller('AboutCtrl', function ($scope) {
#    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });*/
