<template>
  <div ref="tuBiaoG" style="width: 850px; height: 300px"></div>
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

  const tuBiaoG = ref(null);

  // ECharts 配置项
  const option = {
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
          { value: 35, name: '行业1', itemStyle: { color: '#1E90FF' } },
          { value: 57, name: '行业2', itemStyle: { color: '#00BFFF' } },
          { value: 44, name: '行业3', itemStyle: { color: '#FFD700' } },
          { value: 36, name: '行业4', itemStyle: { color: '#FF0000' } },
          { value: 29, name: '行业5', itemStyle: { color: '#FF6347' } },
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
    const chart = echarts.init(tuBiaoG.value);
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
