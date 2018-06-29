(function () {
    'use strict'
    angular.module('financas').factory('messages', [
        'toastr',
        MessagesFactory
    ])
    function MessagesFactory(toastr) {
        function addMsgs(msgs, title, method) {
            if (msgs instanceof Array){
                msgs.forEach(msg => toastr[method](msg, title))
            } else{
                toastr[method](msgs, title)
            }
        }
        
        function addSuccess(msgs) {
            addMsgs(msgs, 'Sucesso', 'success')
        }
        
        function addError(msgs) {
            addMsgs(msgs, 'Erro', 'error')
        }
        return{ addSuccess, addError }
    }
})()