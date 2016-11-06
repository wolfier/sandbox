mainApp.controller('AnalyticsCtrl',
    ['$rootScope', '$window', '$location',
    function($rootScope, $window, $location) {
        $rootScope.$on('$routeChangeSuccess', function(event) {
            $window.ga('send', 'pageview', { page: $location.url() });
        });
    }]);

mainApp.controller('AboutCtrl',
    ['$scope',
    function($scope) {

    }]);
// Dependencies must be in the same order as the function paramters...
