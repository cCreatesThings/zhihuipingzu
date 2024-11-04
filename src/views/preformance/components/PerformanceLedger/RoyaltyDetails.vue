<script setup lang="ts">
  import { ref } from 'vue';
  import { columns } from '../../data';
  import { PerformanceAPI } from '/@/api/demo/preformance';
  import { PerformanceRoyaltyDetailsType } from '/#/performance';
  import { VerticalAlignBottomOutlined } from '@ant-design/icons-vue';
  import { donwloadFileFn } from '/@/utils/downLoad/downloadFile';

  const dataSource = ref<PerformanceRoyaltyDetailsType[]>([]);

  const filters = ref({
    project: '不限',
    dateRange: [],
    search: '',
  });
  const pagination = {
    total: dataSource.value.length,
    pageSize: 5,
    showTotal: (total) => `共 ${total} 条`,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['5', '10', '15', '20', '25'],
  };

  const selectList = [
    {
      label: '不限',
      value: '不限',
    },
    {
      label: '软件新城',
      value: '软件新城',
    },
    {
      label: '邓甲新城',
      value: '邓甲新城',
    },
    {
      label: '创新公寓',
      value: '创新公寓',
    },
    {
      label: '测试楼栋公寓',
      value: '测试楼栋公寓',
    },
  ];
  const getPerformanceRoyaltyDetails = async () => {
    const res = await PerformanceAPI();
    dataSource.value = res;
  };
  getPerformanceRoyaltyDetails();

  const handleDownload = () => {
    donwloadFileFn(dataSource.value, '招商信息明细');
  };
</script>

<template>
  <main class="p-4">
    <div class="bg-white rounded-lg shadow">
      <!-- Filter Section -->
      <div class="p-4 border-b border-[#E5E6EB]">
        <div class="flex items-center justify-between space-x-4">
          <span class="text-sm text-[#1F2329]">招商信息明细</span>
          <a-select
            v-model:value="filters.project"
            placeholder="选择项目"
            style="width: 200px"
            class="custom-select"
          >
            <a-select-option v-for="item in selectList" :value="item.value" :key="item.value">{{
              item.label
            }}</a-select-option>
          </a-select>
          <span class="text-sm text-[#1F2329]">查询:</span>
          <a-range-picker v-model:value="filters.dateRange" class="custom-date-picker" />
          <a-input-search
            v-model:value="filters.search"
            placeholder="搜索内容"
            style="width: 300px"
            class="custom-search"
          />
          <a-popconfirm title="确定下载吗？" @confirm="handleDownload">
            <a-button type="primary">
              下载
              <VerticalAlignBottomOutlined />
            </a-button>
          </a-popconfirm>
        </div>
      </div>

      <!-- Table -->
      <a-table
        rowKey="id"
        :scroll="{ x: 2800, y: 500 }"
        :columns="columns"
        :data-source="dataSource"
        :pagination="pagination"
        bordered
      >
        <template #action>
          <a class="text-blue-600 hover:text-blue-800">发放提成</a>
        </template>
      </a-table>
    </div>
  </main>
</template>

<style scoped>
  /* Your styles here */
</style>
