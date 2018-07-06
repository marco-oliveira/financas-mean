(function () {
    'use strict'
    angular.module('financas').component('field', {
        bindings: {
            id: '@',
            label: '@',
            placeholder: '@',
            type: '@',
            grid: '@',
            model: '=',
            readonly: '<'

        },
        controller: ['gridSystem', function (gridSystem) {
            this.$onInit = () => this.gridClass = gridSystem.toCssClass(this.grid)
        }],
        template: `
         <div class="{{ $ctrl.gridClass }}">
            <div class="form-group">
                <label for="{{ $ctrl.id }}">{{ $ctrl.label }}</label>
                <input id="{{ $ctrl.id }}" type="{{ $ctrl.type }}" class="form-control" 
                    placeholder="{{ $ctrl.placeholder }}" ng-model="$ctrl.model" ng-readonly="$ctrl.readonly">
            </div>
         </div>
        
        `
    })
})()