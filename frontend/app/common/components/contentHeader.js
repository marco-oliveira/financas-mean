(function () {
    'use strict'
    angular.module('financas').component('contentHeader', {
        bindings: {
            name: '@',
            small: '@'
        },
        template: `
            <section class="content-header">
                <h1>{{ $ctrl.name }} <small>{{ $ctrl.small }}</small></h1>
            </section>
        
        `
    })
})()
