(function () {
    'use strict'
    angular.module('financas').controller('BillingCycleCtrl', ['$http', BillingCycleCtrl])

    function BillingCycleCtrl($http) {
        const vm = this
        vm.create = function () {
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.billingCycle = {}
                console.log('sucesso!')
            })
        }
    }
})()