<template>
  <div ref="tuBiaoA" style="width: 850px; height: 300px"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts/core';
  import { GridComponent } from 'echarts/components';
  import { LineChart } from 'echarts/charts';
  import { UniversalTransition } from 'echarts/features';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

  const tuBiaoA = ref(null);

  // ECharts 配置项
  const option = {
    xAxis: {
      type: 'category',
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [10, 15, 5, 20, 40, 25, 30, 11, 18, 40, 38, 40],
        type: 'line',
        itemStyle: {
          color: '#1E90FF', // 设置线条的颜色为图片中的浅蓝色
        },
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(tuBiaoA.value);
    chart.setOption(option);
    useEventListener(window, 'resize', () => chart.resize());
  });
</script>

<style>
  * {
    padding: 0;
  }
  .AccountingLedger {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .AccountingLedgertitle-icon-container {
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
