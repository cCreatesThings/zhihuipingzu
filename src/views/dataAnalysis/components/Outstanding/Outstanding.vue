<template>
  <div class="Outstanding">
    <div style="margin-top: 5vw">
      <div ref="pieChart" style="width: 375px; height: 300px"></div
    ></div>
    <div class="Outstandingtitle-icon-container">
      <div class="flex">
        <div class="font-light text">欠租欠款</div>
        <button
          class="ml-[20px] mt-[10px] bg-[#fff3e4] w-[75px] h-[40px] text-[25px] font-bold text-[#ffd9b2]"
          >财务</button
        >
      </div>
      <div style="font-size: 1vw; color: gainsboro">查看招商明细数据</div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { PieChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  echarts.use([PieChart, CanvasRenderer]);

  const pieChart = ref(null);

  const option = {
    backgroundColor: 'white',
    title: {
      text: 'Customized Pie',
      left: 'center',
      top: 20,
      textStyle: {
        color: '#ccc',
      },
    },
    tooltip: {
      trigger: 'item',
    },
    visualMap: {
      show: false,
      min: 80,
      max: 600,
      inRange: {
        colorLightness: [0, 1],
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '55%',
        center: ['50%', '50%'],
        data: [
          { value: 600, name: 'One' },
          { value: 500, name: 'Two' },
          { value: 400, name: 'Three' },
          { value: 300, name: 'Four' },
          { value: 200, name: 'Five' },
          { value: 100, name: 'Six' },
        ]
          .sort(function (a, b) {
            return b.value - a.value;
          })
          .map(function (item, index) {
            item.itemStyle = {
              color: ['red', '#62daab', '#657798', '#f6c022', '#e87df7', '#69fdf1'][index % 6],
            };
            return item;
          }),
        roseType: 'radius',
        label: {
          color: 'rgba(255, 255, 255, 0.3)',
        },
        labelLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
          },
          smooth: 0.2,
          length: 10,
          length2: 20,
        },
        animationType: 'scale',
        animationEasing: 'elasticOut',
        animationDelay: function (id) {
          return Math.random(id) * 200;
        },
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(pieChart.value);
    chart.setOption(option);
    useEventListener(window, 'resize', chart.resize);
  });
</script>

<style>
  * {
    padding: 0;
  }
  .Outstanding {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .Outstandingtitle-icon-container {
    width: 100%;
    justify-content: space-between;
    align-items: center;
  }

  .text {
    font-size: 2vw;
    font-weight: bold;
  }

  .chart-container {
    width: 100%;
    height: 500px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }
</style>
