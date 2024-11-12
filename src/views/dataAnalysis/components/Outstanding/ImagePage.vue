<template>
  <div ref="tuBiao" style="width: 500px; height: 400px"></div>
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
  import { PieChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import * as echarts from 'echarts/core';
  import { useEventListener } from '@vueuse/core';

  // 注册必要的组件
  echarts.use([TitleComponent, TooltipComponent, LegendComponent, PieChart, CanvasRenderer]);

  const tuBiao = ref(null);

  // ECharts 配置项
  const option = {
    title: {
      text: '项目欠款情况占比',
      left: 'center',
    },
    legend: {
      bottom: 10,
      left: 'center',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 100000, name: '项目1' },
          { value: 150000, name: '项目2' },
          { value: 200000, name: '项目3' },
          { value: 25000, name: '项目4' },
          { value: 30000, name: '项目5' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  onMounted(() => {
    const chart = echarts.init(tuBiao.value);
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
