var app = angular.module("uplandPestControl", ["ngRoute"]);

app.controller("appCtrl", ['$scope', '$http',  function ($scope, $http) {
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
}]);

$(function () {
    $(".navbar a").on("click", function (event) {
        event.preventDefault();
        var top = $("" + $(this).attr("href")).offset().top - 40;
        $("html, body").animate({ scrollTop: top }, 800);
    });
    var offset = $(".navbar").offset().top;
    function stickyNav() {
        if ($(window).width() > 1205 && $(window).scrollTop() > offset) {
            $(".navbar").addClass("sticky");
        }
        else if ($(window).width() <= 1205) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }
    }
    stickyNav();
    $(window).on("scroll resize", function () {
        stickyNav();
    });
    var inputs = function (element) {
        if (element.val() != "") {
            element.parent().addClass("show-label");
        } else {
            element.parent().removeClass("show-label");
        }
    }
    $.each($(".inline-label-input"), function () {
        inputs($(this));
    });
    $(".inline-label-input").on("input propertychange change", function () {
        inputs($(this));
    });

    /** 
        Accordion Widget - http://codepen.io/chriswrightdesign/pen/cmanI
    **/
    var d = document,
accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
setAria,
setAccordionAria,
switchAccordion,
touchSupported = ('ontouchstart' in window),
pointerSupported = ('pointerdown' in window);

    skipClickDelay = function (e) {
        e.preventDefault();
        e.target.click();
    }

    setAriaAttr = function (el, ariaType, newProperty) {
        el.setAttribute(ariaType, newProperty);
    };
    setAccordionAria = function (el1, el2, expanded) {
        switch (expanded) {
            case "true":
                setAriaAttr(el1, 'aria-expanded', 'true');
                setAriaAttr(el2, 'aria-hidden', 'false');
                break;
            case "false":
                setAriaAttr(el1, 'aria-expanded', 'false');
                setAriaAttr(el2, 'aria-hidden', 'true');
                break;
            default:
                break;
        }
    };
    //function
    switchAccordion = function (e) {
        e.preventDefault();
        var thisAnswer = e.target.parentNode.nextElementSibling;
        var thisQuestion = e.target;
        if (thisAnswer.classList.contains('is-collapsed')) {
            setAccordionAria(thisQuestion, thisAnswer, 'true');
        } else {
            setAccordionAria(thisQuestion, thisAnswer, 'false');
        }
        thisQuestion.classList.toggle('is-collapsed');
        thisQuestion.classList.toggle('is-expanded');
        thisAnswer.classList.toggle('is-collapsed');
        thisAnswer.classList.toggle('is-expanded');

        thisAnswer.classList.toggle('animateIn');
    };
    for (var i = 0, len = accordionToggles.length; i < len; i++) {
        if (touchSupported) {
            accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
        }
        if (pointerSupported) {
            accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
        }
        accordionToggles[i].addEventListener('click', switchAccordion, false);
    }
    /**
        End Accordion Widget
    **/
});