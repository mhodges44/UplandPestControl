var app = angular.module("uplandPestControl", ["ngRoute"]);

app.controller("appCtrl", function ($scope, $http) {
    var imgNum = Math.floor(((Math.random() * 100) % 4) + 1);
    $scope.backgroundImage = "bg-img-" + imgNum;
    $scope.customerName = "";
    $scope.customerEmail = "";
    $scope.customerPhone = "";
    $scope.additionalNotes = "";
    /* Code to programmatically change the background. Not useful at the moment,
    but may be useful down the road. */
    //$scope.changeBackgroundImage = function (imgNumber) {
    //    $scope.backgroundImage = "bg-img-" + imgNumber;
    //}
    $scope.sendEmail = function () {
        $http.post("/Home/EmailCustomerInfo",
            {
                customerName: $scope.customerName,
                customerEmail: $scope.customerEmail,
                customerPhone: $scope.customerPhone,
                additionalNotes: $scope.additionalNotes
            }).then(function successCallback(response) {
                console.log(response.data);
            }, function failureCallback(response) {
                console.log(response.data);
            }
        );
    }
});
