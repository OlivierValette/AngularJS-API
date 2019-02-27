// Ajout d'un controller à l'application
app.controller("controllerVue", function($scope, $http, $log){

    $scope.reset = function() {
        $scope.input = {};
        $scope.input.year = '';
        $scope.number = {};
    };

    $scope.reset();

    $scope.submit = function() {

        $http.get('http://numbersapi.com/' + $scope.input.year + '/year?json')
            .then(
                function(result) {
                    $scope.number.found = result.data.found;
                    $scope.number.year = result.data.number;
                    $scope.number.fact = result.data.text;
                },
                function(error) {
                    $log.error("Erreur de chargement ", error)
                }
            );

        $scope.reset();

    };

});
