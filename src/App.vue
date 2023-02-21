<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>
<script>
import TheHeader from "./components/TheHeader";
export default {
  components: { TheHeader },
};
</script>
<style lang="scss">
#app {
  font-family: "Fira San", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  padding: 40px 30px;
}
* {
  margin: 0;
}
.flex {
  display: flex;
}
.align-center {
  align-items: center;
}
.justify-between {
  justify-content: space-between;
}
.cursor-pointer {
  cursor: pointer;
}
.mt-4 {
  margin-top: 16px;
}
.ml-5{
  margin-left: 16px;
}
</style>
