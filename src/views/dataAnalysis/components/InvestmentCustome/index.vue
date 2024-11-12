<template>
  <div class="dialog-content">
    <!-- 标题区域 -->
    <div
      style="
        color: #169ffe;
        background-color: #f2f2f2;
        height: 56px;
        line-height: 56px;
        font-size: 15px;
      "
    >
      <div class="ml-[15px]"> 租赁台账 </div>
    </div>
    <!-- 导航栏 -->
    <div class="nav-bar">
      <div
        v-for="item in navItems"
        :key="item.id"
        class="nav-item"
        @click="selectContent(item.id)"
        :class="{ active: currentId === item.id }"
      >
        <i :class="item.icon"></i> {{ item.name }}
      </div>
      <div>
        <h1 class="text-[grey] ml-[1000px]">
          指定统计周期：本月/本季度/本年 2023.03.01 --> 2023.03.31 项目
          <Select
            v-model:value="value"
            label-in-value
            style="width: 120px"
            :options="options"
            @change="handleChange"
          />
          <Icon icon="mynaui:download" class="bg-[#e6f3fe]" />
        </h1>
      </div>
    </div>
    <!-- 内容显示区域 -->
    <div class="content-area">
      <!-- 根据当前选中的ID显示对应的内容 -->
      <div v-if="currentId === 1"><TubiaoPage /></div>
      <div v-if="currentId === 2"><DataPage /></div>
      <!-- 可以继续添加更多的条件 -->
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Select } from 'ant-design-vue';
  import TubiaoPage from '/@/views/dataAnalysis/components/InvestmentCustome/Tubiao.vue';
  import DataPage from '/@/views/dataAnalysis/components/InvestmentCustome/DataPage.vue';

  const options = ref([
    {
      value: '项目1',
      label: '项目1',
    },
    {
      value: '项目2',
      label: '项目2',
    },
    {
      value: '项目3',
      label: '项目3',
    },
    {
      value: '项目4',
      label: '项目4',
    },
  ]);

  const navItems = [
    { id: 1, name: '图表', icon: 'icon-class-1' },
    { id: 2, name: '数据', icon: 'icon-class-2' },
    // 可以继续添加更多的导航项
  ];

  const currentId = ref(1);

  function selectContent(id) {
    currentId.value = id;
  }
</script>

<style scoped>
  .dialog-content {
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  /* 标题区域样式 */
  .dialog-content > div:first-child {
    color: #169ffe;
    background-color: #f2f2f2;
    height: 56px;
    line-height: 56px;
    font-size: 15px;
  }

  .nav-bar {
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
  }

  .nav-item {
    cursor: pointer;
    padding: 5px 10px;
    margin-right: 5px;
    margin-bottom: 5px;
    border: 1px solid transparent;
    /* border-radius: 4px; */
  }

  .nav-item:hover,
  .nav-item.active {
    border-bottom: #169ffe 2px solid;
  }

  .content-area {
    flex: 1;
    padding: 15px;
    overflow-y: auto;
  }
</style>
