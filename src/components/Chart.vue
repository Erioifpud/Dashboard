<template>
  <div class="chart-container">
    <div class="chart">
      <canvas :id="uid" style="width:100%;height:100%;"></canvas>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import ChartJS from 'chart.js'

@Component
export default class Chart extends Vue {

  @Prop({ default: '#fff' }) color: string
  @Prop() title: string


  get uid() {
    return `chart-${this._uid}`
  }

  // get containerStyle() {
  //   return {
  //     position: 'relative',
  //     width: this.width,
  //     height: this.height
  //   }
  // }

  mounted() {
    const canvas = <HTMLCanvasElement>document.getElementById(this.uid)
    const context = <CanvasRenderingContext2D>canvas.getContext('2d')
    var myPieChart = new ChartJS(canvas, {
      type: 'line',
      data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
            label: this.title,
            data: [93, 90, 85, 83, 74, 53],
            borderColor: this.color,
            backgroundColor: this.color,
            // fill: false
        }]
      },
      options: {
        responsive: true,
        animation: {
          animateScale: true
        },
        legend: {
          display: false,
          labels: {
            fontColor: '#dfdeed'
          }
        },
        scales: {
          xAxes: [{
            time: {
              unit: 'h:mm:ss a'
            }
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'percent',
              fontColor: '#dfdeed'
            }
          }]
        },
        title: {
          display: true,
          text: this.title,
          fontColor: '#dfdeed',
          fontFamily: "'Helvetica', 'Arial', 'sans-serif'"
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/varibles.scss';

.chart-container {
  display: inline-block;
  flex: 1;
  width: calc(100% / 3);
  height: 15rem;
  padding: $content-padding-h / 2;
  box-sizing: border-box;
  /* margin: auto; */
}

.chart-container:first-of-type {
  padding-left: 0;
}

.chart-container:last-of-type {
  padding-right: 0;
}

.chart {
  height: 100%;
  // background-color: #27314c;
  box-shadow: 0 5px 5px darken($content-background-color, 5%);
  background-color: #323841;
  // background: linear-gradient(360deg, #323841, lighten(#323841, 5%));
  border-radius: 0.75rem;
}
</style>
