(function () {
    'use strict'
    angular.module('financas').controller('BillingCycleCtrl', [
        '$http',
        'messages',
        BillingCycleCtrl])

    function BillingCycleCtrl($http, messages) {
        const vm = this
        vm.create = function () {
            const url = 'http://localhost:3003/api/billingCycles'
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.billingCycle = {}
                messages.addSuccess('Operação Realizada com Sucesso.')
            }).catch(function (response) {
                messages.addError(response.data.errors)
            })
        }
    }
})()