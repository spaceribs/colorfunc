"use strict";angular.module("colorfuncApp",[]),angular.module("colorfuncApp").controller("MainCtrl",["$scope",function(a){function b(b,c){if(console.log("called"),b.isValid()&&c.isValid()){var d=b.toHsl(),e=c.toHsl();a.diff={$hue:Math.round(d.h-e.h)+"deg",$saturation:Math.round(100*e.s-100*d.s)+"%",$lightness:Math.round(100*e.l-100*d.l)+"%"}}else a.diff=!1}a.color={from:"#FED",to:"#FFD"},a.sassFunc=function(){if(a.diff){var b="$colorTo: adjust-color($colorFrom";return angular.forEach(a.diff,function(a,c){parseInt(a)&&(b+=", "+c+": "+a)}),b+=");"}return""},a.$watch("color",function(a){var c=tinycolor(a.from),d=tinycolor(a.to);c&&d&&b(c,d)},!0)}]);