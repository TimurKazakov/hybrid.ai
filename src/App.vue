<template>
  <div class="App">
    <router-view />
  </div>
</template>
<script>
  export default {
    name: 'App',
  };
</script>

<style >
 @import "css/main.css";
@media (max-width:1200px) {
  .App{
    background: #FAF3F3;
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;


  }
  router-link{
    flex-grow: 2;
  }
}


</style>