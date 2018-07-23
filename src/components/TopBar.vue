<template>
  <div class="topbar">
    <div class="left">
      
    </div>
    <div class="right">
      <div class="search">
        <ion-icon name="search"></ion-icon>
        <input type="text" placeholder="Search ...">
      </div>
    </div>
  </div>    
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TopBar extends Vue {

}
</script>

<style lang="scss" scoped>
@import '@/styles/varibles.scss';

.topbar {
  background-color: $content-background-color;
  margin-left: $sidebar-width;
  height: $topbar-height;
  line-height: $topbar-height;
  padding: $content-padding-v $content-padding-h;
  // box-shadow: 0 5px 5px darken($sidebar-background-color, 5%);
}

.left {
  float: left;
}

.right {
  float: right;
}

.search {
  display: inline-block;
  

  ion-icon {
    font-size: 2rem;
    vertical-align: middle;
    color: rgb(90, 99, 125);
  }

  input {
    height: $topbar-height - 1rem;
    font-size: $topbar-height - 2rem;
    vertical-align: middle;
    background-color: transparent;
    border: none;
    // border-bottom: solid 1px rgb(90, 99, 125);
    color: #dfdeed;
    outline: none;
  }
}
</style>
