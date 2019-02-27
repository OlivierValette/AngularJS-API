// Ajout d'un controller à l'application
app.controller("controllerVue", function($scope, $http, $log){

    $scope.reset();

    $scope.reset = function() {
        $scope.user = {};
        $scope.user.email = "";
        $scope.user.password = "";
        $scope.user.gender = "";
    };

    $http.get('http://quotes.rest')
        .then(
            function(result) {
                $scope.quotes = result.data;
            },
            function(error) {
                $log.error("Erreur de chargement ", error)
            }
        );

});