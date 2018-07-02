(function () {
    'use strict'
    angular.module('financas').controller('BillingCycleCtrl', [
        '$http',
        'messages',
        'tabs',
        BillingCycleCtrl])

    function BillingCycleCtrl($http, messages, tabs) {
        const vm = this
        const url = 'http://localhost:3003/api/billingCycles'

        vm.reflesh = function(){
            $http.get(url).then(function (response) {
                vm.billingCycle = {}
                vm.billingCycles = response.data
                tabs.show(vm, { tabList : true, tabCreate : true })
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

        vm.showTabUpdate = function(billingCycle){
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabUpdate: true })
        }

        vm.showTabDelete = function(billingCycle){
            vm.billingCycle = billingCycle
            tabs.show(vm, { tabDelete: true })
        }
        vm.reflesh()
    }
})()