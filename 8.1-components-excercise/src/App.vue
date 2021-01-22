<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <br />
        <button class="btn btn-primary" @click="changeView('app-blue','Blue!')">Load Blue Template</button>
        <button class="btn btn-success" @click="changeView('app-green','Green!')">Load Green Template</button>
        <button class="btn btn-danger" @click="changeView('app-red','Red!'); ">Load Red Template</button>
        <hr />
        <component :is="selectedComponent">
          <h1 slot="title">{{viewTitle}}</h1>
          <span
            slot="content"
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ab excepturi accusamus autem aperiam deleniti, hic omnis corrupti. Neque rerum accusamus libero vero id deleniti perferendis optio repudiandae voluptates illum!</span>
        </component>
      </div>
    </div>
  </div>
</template>

<script>
import Blue from "./components/Blue.vue";
import Green from "./components/Green.vue";
import Red from "./components/Red.vue";

export default {
  data() {
    return {
      selectedComponent: "app-blue",
      viewTitle: "Blue!",
    };
  },
  methods: {
    changeView(component, title) {
      this.selectedComponent = component;
      this.viewTitle = title;
    },
  },
  components: {
    appBlue: Blue,
    appGreen: Green,
    appRed: Red,
  },
};
</script>

<style>
</style>
