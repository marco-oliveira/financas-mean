angular.module('financas').controller('DashboardCtrl', [
    '$scope',
    '$http',
    DashboardController
])

function DashboardController($scope, $http) {
    $scope.getSummary = function () {
        const url = 'http://localhost:3003/api/billingsummary'
        $http.get(url).then(function (response) {

            const {credit, debt} = response.data

            $scope.credit = credit
            $scope.debt = debt
            $scope.total = credit - debt
        })
    }

    $scope.getSummary()
}