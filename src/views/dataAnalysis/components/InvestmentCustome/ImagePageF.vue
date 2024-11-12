<template>
  <div ref="tuBiao" style="width: 850px; height: 300px"></div>
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
    legend: {
      bottom: 10,
      left: 'center',
    },
    series: [
      {
        name: '面积分布',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 35, name: '500㎡以下', itemStyle: { color: '#1E90FF' } }, // 深蓝色
          { value: 0, name: '500-1000㎡', itemStyle: { color: '#00BFFF' } }, // 浅蓝色
          { value: 44, name: '1000-1500㎡', itemStyle: { color: '#FFD700' } }, // 金色
          { value: 44, name: '1500-2000㎡', itemStyle: { color: '#00FA9A' } }, // 浅绿色
          { value: 44, name: '2000-3000㎡', itemStyle: { color: '#99FF99' } }, // 番茄红
          { value: 44, name: '3000㎡以上', itemStyle: { color: '#FFFF00' } }, // 黄色
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
