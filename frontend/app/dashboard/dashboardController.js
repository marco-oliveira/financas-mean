(function () {
    'use strict'
    angular.module('financas').controller('DashboardCtrl', [
        '$http',
        DashboardController
    ])

    function DashboardController($http) {
        const vm = this
        vm.getSummary = function () {
            const url = 'http://localhost:3003/api/billingsummary'
            $http.get(url).then(function (response) {

                const {credit, debt} = response.data

                vm.credit = credit
                vm.debt = debt
                vm.total = credit - debt
            })
        }

        vm.getSummary()
    }
})()
