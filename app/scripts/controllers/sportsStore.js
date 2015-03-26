'use strict';

/**
 * @ngdoc function
 * @name sportsStoreApp.controller:sportsStoreCtrl
 * @description
 * # sportsStoreCtrl
 * Controller of the sportsStoreApp
 */

angular.module('sportsStoreApp')
.controller('sportsStoreCtrl',function($scope){
        $scope.data = {
            'products':[
                {'name' : 'Product #1', 'description' : 'To jest produkt nr 1',
                    'category':'Kategoria 1', 'price':100
                },
                {
                    'name' : 'Product #2', 'description' : 'To jest produkt nr 2',
                    'category':'Kategoria 1', 'price':500
                }
                ,
                {
                    'name' : 'Product #3', 'description' : 'To jest produkt nr 3',
                    'category':'Kategoria 2', 'price':50
                }
                ,
                {
                    'name' : 'Product #4', 'description' : 'To jest produkt nr4 ',
                    'category':'Kategoria 3', 'price':45
                }
            ]
        };
    });