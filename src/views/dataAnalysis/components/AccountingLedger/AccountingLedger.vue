<template>
  <div class="AccountingLedger">
    <div style="margin-top: 5vw">
      <div ref="chartContainer" style="width: 375px; height: 300px"></div>
    </div>
    <div class="AccountingLedgertitle-icon-container">
      <div class="flex">
        <div class="font-light text">财务台账</div>
        <button
          class="ml-[20px] mt-[10px] bg-[#fff3e4] w-[75px] h-[40px] text-[25px] font-bold text-[#ffd9b2]"
          >财务</button
        >
      </div>
      <div style="font-size: 1vw; color: gainsboro">财务收款相关报表</div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { LineChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([LineChart, CanvasRenderer]);

  const chartContainer = ref(null);

  // ECharts 配置项
  const option = {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      show: false,
    },
    yAxis: {
      type: 'value',
      show: false,
    },
    series: [
      {
        name: '1',
        data: [30, 50, 280, 190, 190, 70],
        type: 'line',
        lineStyle: {
          color: '#6d9bf9',
        },
        areaStyle: {
          color: '#d6e3fd',
        },
        symbol: 'none',
      },
      {
        name: '2',
        data: [20, 22, 100, 40, 50, 40],
        type: 'line',
        lineStyle: {
          color: '#75dab8',
        },
        areaStyle: {
          color: '#d6f5e9',
        },
        symbol: 'none',
      },
      {
        name: '3',
        data: [22, 24, 30, 26, 30, 40],
        type: 'line',
        lineStyle: {
          color: '#8198ac',
        },
        areaStyle: {
          color: '#d6dbe4',
        },
        symbol: 'none',
      },
      {
        name: '4',
        data: [20, 20, 23, 20, 20, 20],
        type: 'line',
        lineStyle: {
          color: '#f7c637',
        },
        areaStyle: {
          color: '#fdeec5',
        },
        symbol: 'none',
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(chartContainer.value);
    chart.setOption(option);
    useEventListener(window, 'resize', chart.resize);
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
