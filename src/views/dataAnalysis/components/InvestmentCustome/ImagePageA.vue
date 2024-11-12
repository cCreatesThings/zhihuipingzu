<template>
  <div ref="tuBiaoE" style="width: 850px; height: 300px"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts/core';
  import { GridComponent } from 'echarts/components';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([GridComponent, BarChart, CanvasRenderer]);
  const tuBiaoE = ref(null);

  // ECharts 配置项
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    legend: {
      data: ['1月新增客户', '2月新增客户', '3月新增客户'], // 修改图例名称
      bottom: 'bottom',
    },
    toolbox: {
      show: true,
      orient: 'vertical',
      left: 'right',
      top: 'center',
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        magicType: { show: true, type: ['line', 'bar', 'stack'] },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    xAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['项目1', '项目2', '项目3', '项目4', '项目5', '项目6', '项目7', '项目8', '项目9'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: '1月新增客户',
        type: 'bar',
        itemStyle: {
          color: '#1E90FF', // 深蓝色
        },
        data: [10, 20, 30, 40, 50, 60, 60, 60, 60],
      },
      {
        name: '2月新增客户',
        type: 'bar',
        itemStyle: {
          color: '#40E0D0', // 青色
        },
        data: [20, 25, 50, 45, 30, 40, 40, 40, 40],
      },
      {
        name: '3月新增客户',
        type: 'bar',
        itemStyle: {
          color: '#00BFFF', // 另一种蓝色
        },
        data: [20, 25, 50, 45, 30, 75, 75, 75, 75],
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(tuBiaoE.value);
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
