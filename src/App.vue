<template>
  <div id="app">
    <side-bar></side-bar>
    <top-bar></top-bar>
    <div class="content">
      
      <router-view/>
    </div>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '@/components/SideBar'
import TopBar from '@/components/TopBar'

@Component({
  components: {
    SideBar,
    TopBar
  }
})
export default class App extends Vue {

}
</script>

<style lang="scss">
@import '@/styles/varibles.scss';

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // background: #2980b9;
  // background: -webkit-linear-gradient(to right, #2980b9, #2c3e50);
  // background: linear-gradient(to right, #2980b9, #2c3e50);
  text-align: center;
  // color: #2c3e50;
  color: #fff;
  width: 100%;
  height: 100%;
}
#nav {
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.content {
  margin-left: $sidebar-width;
  padding: 0 $content-padding-h;
  height: calc(100%);
  background-color: $content-background-color;
}
</style>
