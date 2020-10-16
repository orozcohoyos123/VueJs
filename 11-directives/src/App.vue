<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives</h1>
        <p v-text="'Some Text!'"></p>
        <p v-html="'<strong>Some Strong Text</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <p v-highlight>custom background directive!</p>
        <p v-highlightWithParameter="'red'">
          custom background directive with value parameters!
        </p>
        <p v-highlightWithArgument:background="'red'">
          custom background directive with arguments!
        </p>
        <p v-highlightWithModifier:background.delay="'red'">
          custom background directive with modifier!
        </p>
        <p v-local-highlight:background.delay.blink="{mainColor: 'red', secondColor: 'blue', delay:3000, interval: 1000}">
          local custom background directive!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlight": {
      bind(el, binding, vnode) {
        var delay = 0;
        var interval = 1000;
        if (binding.modifiers["delay"]) delay = binding.value.delay;
        if (binding.modifiers["interval"]) interval = binding.value.interval;

        if (binding.modifiers["delay"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;

            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);

              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, interval);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style>
</style>
