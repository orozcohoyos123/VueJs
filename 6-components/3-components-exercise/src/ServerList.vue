<template>
  <div class="row">
    <div class="col-xs-12 col-sm-6">
      <ul class="list-group">
        <li class="list-group-item" v-for="(item, index) in 5" :key="index">Server #{{ index }}</li>
      </ul>
    </div>
    <server-log></server-log>
  </div>
</template>
<script>
export default {};
</script>