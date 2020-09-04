new Vue({
    el: '#exercise',
    data: {
        value: 0,
        interval: 5
    },
    computed: {
        result: function () {
            return this.value > 10 ? 'Llegaste a 10' : 'aun te falta para llegar a 10';
        }
    },
    watch: {
        value: function () {
            var vm = this;
            setTimeout(() => {
                vm.value = 0;
            }, vm.interval * 1000);
        }
    },
});