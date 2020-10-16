import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight',{
  bind(el, binding, vnode){
    el.style.backgroundColor = 'green';
  }
});

Vue.directive('highlightWithParameter',{
  bind(el, binding, vnode){
    el.style.backgroundColor = binding.value;
  }
});

Vue.directive('highlightWithArgument',{
  bind(el, binding, vnode){
    if(binding.arg == 'background'){
      el.style.color = binding.value;
    }
    else{
      el.style.backgroundColor = binding.value;
    }
  }
});

Vue.directive('highlightWithModifier',{
  bind(el, binding, vnode){
    var delay = 0;
    if (binding.modifiers['delay']) 
      delay = 3000;

    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      }
      else{
        el.style.color = binding.value;
      }
    }, delay);

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
