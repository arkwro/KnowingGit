/**
 * Created by Arkadiusz on 2015-03-25.
 */
'use stritc';

angular.module('sportsStoreApp')
    .constant('activeCategory','btn-primary')
    .controller('productListCtrl',function($scope, activeCategory){
        var selectedCategory = null;
        $scope.selectCategory = function(category){
            console.log(category);
            selectedCategory = category;
        }
        $scope.filterCategory = function(product){
            return selectedCategory == null ||
                selectedCategory == product.category;

        }
        $scope.getCategoryClass = function(category){
            return selectedCategory == category ? activeCategory : '';
        }
    })
