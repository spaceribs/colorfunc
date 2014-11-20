'use strict';

/**
 * @ngdoc function
 * @name colorfuncApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the colorfuncApp
 */
angular.module('colorfuncApp')
  .controller('MainCtrl', function ($scope) {
    $scope.color = {
      from: '#FED09E',
      to: '#FFD'
    };

    function calcDiff(from, to) {
      console.log('called');
      if (from.isValid() && to.isValid()) {
        var fromHSL = from.toHsl();
        var toHSL = to.toHsl();

        $scope.diff = {
          '$hue': Math.round(fromHSL.h - toHSL.h)+'deg',
          '$saturation': Math.round((toHSL.s * 100) - (fromHSL.s * 100))+'%',
          '$lightness': Math.round((toHSL.l * 100) - (fromHSL.l * 100))+'%'
        };
      } else {
        $scope.diff = false;
      }
    }

    $scope.sassFunc = function () {
      if ($scope.diff) {
        var output = '$colorTo: adjust-color($colorFrom';
        angular.forEach($scope.diff, function(val, key){
          if (parseInt(val)) {
            output += ', '+key+': '+val;
          }
        });
        output += ');';
        return output;
      } else {
        return '';
      }
    };

    $scope.$watch('color', function(val){
      $scope.tinyFrom = tinycolor(val.from);
      $scope.tinyTo = tinycolor(val.to);
      console.log($scope.tinyFrom);
      if ($scope.tinyFrom && $scope.tinyTo) {
        calcDiff($scope.tinyFrom, $scope.tinyTo);
      }
    }, true);

  });
