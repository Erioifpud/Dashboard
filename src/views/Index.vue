<template>
  <div>
    
    <div class="charts">
      <chart title="Processor" color="#83d8e7"></chart>
      <chart title="Memory" color="#ebaf84"></chart>
      <chart title="Macintosh HD" color="#dd5aa7"></chart>
    </div>
  </div>
</template>
 
<script>
import { Component, Vue } from 'vue-property-decorator'
import Chart from '@/components/Chart'

@Component({
  components: {
    Chart
  }
})
export default class Index extends Vue {

}
</script>

<style>
.charts {
  display: flex;
}
</style>
