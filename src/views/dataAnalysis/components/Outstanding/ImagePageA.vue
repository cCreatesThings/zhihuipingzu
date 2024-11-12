<template>
  <div ref="tuBiaoA" style="width: 1500px; height: 400px"></div>
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
    title: {
      text: '项目逾期欠款金额',
      left: 'left',
    },
    xAxis: {
      type: 'category',
      data: [
        '项目1',
        '项目2',
        '项目3',
        '项目4',
        '项目5',
        '项目6',
        '项目7',
        '项目8',
        '项目9',
        '项目10',
        '项目11',
        '项目12',
        '项目13',
        '项目14',
        '项目15',
        '项目16',
        '项目17',
        '项目18',
        '项目19',
      ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [
          200000, 150000, 50000, 175000, 100000, 210000, 220000, 210000, 180000, 140000, 270000,
          270000, 270000, 270000, 270000, 270000, 270000, 270000, 270000,
        ],
        type: 'bar',
        itemStyle: {
          color: 'red', // 设置柱状图的颜色为红色
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
