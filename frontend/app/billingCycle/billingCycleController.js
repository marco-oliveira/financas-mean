(function () {
    'use strict'
    angular.module('financas').controller('BillingCycleCtrl', [
        '$http',
        'messages',
        BillingCycleCtrl])

    function BillingCycleCtrl($http, messages) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.reflesh = function(){
            $http.get(url).then(function (response) {
                vm.billingCycle = {}
                vm.billingCycles = response.data
            })
        }

        vm.create = function () {
            $http.post(url, vm.billingCycle).then(function (response) {
                vm.reflesh()
                messages.addSuccess('Operação Realizada com Sucesso.')
            }).catch(function (response) {
                messages.addError(response.data.errors)
            })
        }

        vm.reflesh()
    }
})()