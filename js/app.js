//Define an angular module for our app

var app = angular.module('myapp', ['ngRoute', 'angularFileUpload', 'angularUtils.directives.dirPagination'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                controller: 'loginCtrl',
                templateUrl: 'partials/home.html'
            })
            .when('/registration', {
                controller: 'registerCtrl',
                templateUrl: 'partials/registration.html'
            })
            .when('/conformation', {
                controller: 'registerCtrl',
                templateUrl: 'partials/conformation.html'
            })
            .when('/innerPage', {
                controller: 'innerCtrl',
                templateUrl: 'partials/innerPage.html'
            })
            .when('/home', {
                controller: 'loginCtrl',
                templateUrl: 'partials/home.html'
            })
            .when('/viewProfile', {
                controller: 'viewCtrl',
                templateUrl: 'partials/viewProfile.html'
            })
            .when('/main', {
                controller: 'loginCtrl',
                templateUrl: 'partials/tpl/test.html'
            })
            .otherwise({
                redirectTo: '/'
            });
    });


app.run(function ($rootScope, $location, loginService) {
    var routespermission = ['/innerPage'];  //route that require login
    $rootScope.$on('$routeChangeStart', function () {
        if (routespermission.indexOf($location.path()) != -1) {
            var connected = loginService.islogged();
            connected.then(function (msg) {
                if (!msg.data) $location.path('/home');
            });
        }
    });
});

app.filter('minYear', function () {
        return function (input,minage) {

            var filtered = [];
            if (!input) {
                input = {};
            }
            if (!minage) {
                minage = 1997;
            }
            for (var i = 0; i < input.length; i++) {
                var value =  input[i];
                var date = new Date(value.date_of_birth);
                var year = date.getFullYear();
                if (year <= minage) {
                    filtered.push(value);
                }
            }
            return filtered;
        }
    }
)

app.filter('maxYear', function () {
        return function (data, maxage) {

            var filtered = [];
            if (!data) {
                data = {};
            }
            if (!maxage) {
                maxage = 1971;
            }
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                var date = new Date(value.date_of_birth);
                var year = date.getFullYear();
                if (year >= maxage) {
                    filtered.push(value);
                }
            }
            return filtered;
        }
    }
)


app.filter('minHeight', function () {
        return function (data, minheight) {

            var filtered = [];
            if (!data) {
                data = {};
            }
            if (!minheight) {
                minheight = 4.5;
            }
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                var height = value.height;
                if (height >= minheight) {
                    filtered.push(value);
                }
            }
            return filtered;
        }
    }
)

app.filter('maxHeight', function () {
        return function (data, maxheight) {

            var filtered = [];
            if (!data) {
                data = {};
            }
            if (!maxheight) {
                maxheight = 7.0;
            }
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                var height = value.height;
                if (height <= maxheight) {
                    filtered.push(value);
                }
            }
            return filtered;
        }
    }
)

app.filter('getGender', function () {
        return function (data, opposite_gender) {

            var filtered = [];
            if (!data) {
                data = {};
            }
             if (!opposite_gender) {
                opposite_gender = 'male';
            }
           
            for (var i = 0; i < data.length; i++) {
                var value = data[i];
                var gender_of_profile = value.gender;
                if (gender_of_profile == opposite_gender) {
                    
                }
                else{
                	filtered.push(value);
                }
            }
            return filtered;
        }
    }
)