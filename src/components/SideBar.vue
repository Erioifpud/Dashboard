<template>
  <div class="sidebar">
    <div class="logo">  
      <svg width="40px" height="46px" viewBox="0 0 40 46" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <!-- Generator: Sketch 50 (54983) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-family="Avenir-Book, Avenir" font-weight="normal">
              <g id="Group" transform="translate(-5.000000, -18.000000)" fill="#dfdeed">
                  <text id="D" font-size="64">
                      <tspan x="0.288" y="64">D</tspan>
                  </text>
                  <text id="D" font-size="36">
                      <tspan x="10.162" y="54">D</tspan>
                  </text>
              </g>
          </g>
      </svg>
    </div>

    <ul class="side-item-list">
      <template v-for="item in sideItems">
        <li class="side-item"  :key="item.path">
          <router-link :to="item.path" class="router" exact>
            <ion-icon :name="item.icon"></ion-icon>
            {{ item.name }}
          </router-link>
        </li>
      </template>
    </ul>
  </div>    
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Type from '@/mock/type'

@Component
export default class SideBar extends Vue {
  private sideItems: Array<Type.SideItem> = []

  mounted() {
    this.$ax.get('/api/item')
      .then(r => {
        this.sideItems = r.data
      }) 
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/varibles.scss';

.sidebar {
  background-color: darken($sidebar-background-color, 0%);
  box-shadow: 5px 0 5px darken($sidebar-background-color, 5%);
  position: fixed;
  width: $sidebar-width;
  height: 100vh;
}

.logo {
  height: $sidebar-width;
  line-height: $sidebar-width;
  font-weight: 700;
  font-size: 2rem;
}

.side-item-list {
  text-align: left;
  margin: 0 1rem;
  padding: 0;
  height: 100%;
  border-top: solid 1px #727a85;
}

.side-item {
  vertical-align: middle;
  list-style-type: none;
  color: #5d667f;
  margin: 1.25rem 0;
  font-size: 1.2rem;

  ion-icon {
    vertical-align: middle;
    margin-right: 1.5rem;
    font-size: 1.25rem;
  }
}

.router {
  color: $light-grey;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.15s ease-in-out;

  &:hover:not(.router-link-active) {
    color: #4cd8b5;
  }
}

.router-link-active {
  color: #55d2e0;
  text-decoration: none;
}
</style>
