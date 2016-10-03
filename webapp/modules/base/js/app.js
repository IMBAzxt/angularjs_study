var myApp = angular.module("myApp",['ui.router']);
myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise("/index");
	$stateProvider
		.state("index",{
			url: "/index",
            views: {
                '': {
                    templateUrl: "modules/base/index.html"
                },
                'topbar@index': {
                    templateUrl: "modules/base/topbar.html"
                },
                'main@index': {
                    templateUrl: "modules/base/main.html"
                }
            }
		})
        .state('index.usermgr', {
            url: '/usermgr',
            views: {
                'main@index': {
                    templateUrl: "modules/base/usermgr.html",
                    controller: function($scope, $state) {
                        $scope.addUserType = function() {
                            $state.go("index.usermgr.addusertype");
                        }
                    }
                }
            }
        })
        .state('index.usermgr.addusertype', {
            url: '/addusertype',
            templateUrl: 'modules/base/addusertypeform.html',
            controller: function($scope, $state) {
                $scope.backToPrevious = function() {
                    window.history.back();
                }
            }
        })
        .state('index.usermgr.highendusers', {
            url: '/highendusers',
            templateUrl: "modules/base/highendusers.html"
        })
        .state('index.usermgr.normalusers', {
            url: '/normalusers',
            templateUrl: "modules/base/normalusers.html"
        })
        .state('index.usermgr.lowusers', {
            url: '/lowusers',
            templateUrl: "modules/base/lowusers.html"
        })
		.state('index.rolemgr', {
            url: '/rolemgr',
            views: {
                'main@index': {
                    template: '权限管理'
                }
            }
        })
        .state('index.sysmgr', {
            url: '/sysmgr',
            views: {
                'main@index': {
                    template: '系统管理'
                }
            }
        })
})

