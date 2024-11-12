<template>
  <div ref="tuBiaoA" style="width: 800px; height: 300px"></div>
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

  const tuBiaoA = ref(null);

  // ECharts 配置项
  const option = {
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['E类', 'D类', 'C类', 'B类', 'A类'],
    },
    legend: {
      data: ['1月新增客户', '2月新增客户', '3月新增客户'], // 修改图例名称
      bottom: 'bottom',
    },
    series: [
      {
        name: '1月新增客户',
        data: [50, 40, 30, 20, 10],
        type: 'bar',
        itemStyle: {
          color: '#1E90FF', // 1月的颜色
        },
      },
      {
        name: '2月新增客户',
        data: [30, 45, 50, 25, 20],
        type: 'bar',
        itemStyle: {
          color: '#00BFFF', // 2月的颜色
        },
      },
      {
        name: '3月新增客户',
        data: [20, 40, 50, 25, 10],
        type: 'bar',
        itemStyle: {
          color: '#00CED1', // 3月的颜色
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
