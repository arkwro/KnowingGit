/**
 * Created by Arkadiusz on 2015-03-24.
 */
angular.module("customFilters",[])
    .filter('unique',function(){
        return function(data, propertyName){
            if(angular.isArray(data) && angular.isString(propertyName)){
                var result =[];
                var checked={};
                for(var i=0; i<data.length; i++){
                    var value = data[i][propertyName];
                    if(angular.isUndefined(checked[value])){
                        checked[value] = true;
                        result.push(value);

                    }
                }
                return result;
            }else{
                return data;
            }
        }
    });
