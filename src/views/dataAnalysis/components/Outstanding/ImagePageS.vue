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
      text: '项目欠租客户占比',
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
          { value: 10, name: '项目1', itemStyle: { color: '#1e90ff' } },
          { value: 15, name: '项目2', itemStyle: { color: '#87ceeb' } },
          { value: 20, name: '项目3', itemStyle: { color: '#00ced1' } },
          { value: 25, name: '项目4', itemStyle: { color: '#00fa9a' } },
          { value: 30, name: '项目5', itemStyle: { color: '#98fb98' } },
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
