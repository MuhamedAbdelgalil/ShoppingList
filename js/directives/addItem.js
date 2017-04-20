(function(){
    shoppingList.directive("addItem",function(){
        return{
            templateUrl:"./templates/addItem.html",
            restrict:"E",
            controller :"mainController",
            link : function(scope,ele,attr){
                
            }
        }
    })
}(shoppingList));