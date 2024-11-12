<template>
  <div class="investmentpromotion">
    <div>
      <div ref="chartContainer" style="width: 375px; height: 300px; margin-top: 5vw"></div>
    </div>
    <div class="investmentpromotiontitle-icon-container">
      <div class="flex">
        <div class="font-light text">招商数据报表</div>
        <button
          class="ml-[20px] mt-[10px] bg-[#e6f3fe] w-[75px] h-[40px] text-[25px] font-bold text-[#2c8cec]"
          >客户</button
        >
      </div>
      <div style="font-size: 1vw; color: gainsboro">查看招商明细数据</div>
    </div>
  </div>
</template>

<script setup>
  import { onMounted, ref } from 'vue';
  import * as echarts from 'echarts/core';
  import { BarChart } from 'echarts/charts';
  import { CanvasRenderer } from 'echarts/renderers';
  import { GridComponent } from 'echarts/components';

  // 注册必要的组件
  echarts.use([GridComponent, BarChart, CanvasRenderer]);

  const chartContainer = ref(null);
  let chartInstance = null;

  onMounted(() => {
    if (chartContainer.value !== null) {
      chartInstance = echarts.init(chartContainer.value);
      const option = {
        xAxis: {
          type: 'category',
          data: ['1', '2', '3', '4', '5', '6'],
          show: false,
        },
        yAxis: {
          type: 'value',
          show: false,
        },
        series: [
          {
            data: [200, 250, 300, 700, 230, 200],
            type: 'bar',
            itemStyle: {
              color: '#6294f9',
            },
          },
        ],
      };

      chartInstance.setOption(option);
      window.addEventListener('resize', chartInstance.resize);
    } else {
      console.error('Chart container is not found');
    }
  });
</script>

<style>
  * {
    padding: 0;
  }
  .investmentpromotion {
    padding: 2vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 100%;
  }

  .investmentpromotiontitle-icon-container {
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
