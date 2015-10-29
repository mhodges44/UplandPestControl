﻿var app = angular.module("uplandPestControl", ["ngRoute"]);

/* Used for routing purposes. This is already done by Razor engine
in .Net, but in case we want to make a full-blown SPA, this code is here */
//app.config(function ($routeProvider, $locationProvider) {
//    $routeProvider

//        // route for the home page
//        .when('/', {
//            templateUrl: 'index.cshtml',
//            controller: 'mainController'
//        })

//        // route for the about page
//        .when('/about', {
//            templateUrl: 'about.cshtml',
//            controller: 'aboutController'
//        })

//        // route for the contact page
//        .when('/contact', {
//            templateUrl: 'contact.cshtml',
//            controller: 'contactController'
//        });
//    $locationProvider.html5Mode(true);
//});

app.controller("appCtrl", function ($scope) {
    var imgNum = Math.floor(((Math.random() * 100) % 4) + 1);
    $scope.backgroundImage = "bg-img-" + imgNum;

    /* Code to programmatically change the background. Not useful at the moment,
    but may be useful down the road. */
    //$scope.changeBackgroundImage = function (imgNumber) {
    //    $scope.backgroundImage = "bg-img-" + imgNumber;
    //}
});

app.controller("homeCtrl", function ($scope) {
    $scope.message = "Hello Home";
});

app.controller("aboutCtrl", function ($scope) {
    $scope.message = "Hello About";
});

app.controller("contactCtrl", function ($scope) {
    $scope.message = "Hello Contact";
});