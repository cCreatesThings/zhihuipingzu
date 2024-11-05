<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { columnsDetail, columnsTotal } from '../../data';
  import { PerformanceAPI, PerformanceTotalAPI } from '/@/api/demo/preformance';
  // import { PerformanceRoyaltyDetailsType } from '/#/performance';
  import { VerticalAlignBottomOutlined } from '@ant-design/icons-vue';
  import { donwloadFileFn } from '/@/utils/downLoad/downloadFile';
  // import moment from 'moment';
  const props = defineProps<{
    title: string;
  }>();
  const dataSource = ref<any[]>([]);

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

  // 监听 title 变化 重新渲染数据
  watch(
    () => props.title,
    (newVal) => {
      if (newVal === '租赁提成明细') {
        getPerformanceRoyaltyDetails();
      } else if (newVal === '租赁提成汇总') {
        getPerformanceTotal();
      }
    },
  );
  const getPerformanceTotal = async () => {
    const res = await PerformanceTotalAPI();
    dataSource.value = res;
  };

  // 点击下载
  const handleDownload = () => {
    donwloadFileFn(dataSource.value, '业绩台账');
  };

  // 搜索 监听变化
  watch(
    () => filters.value.search,
    (val) => {
      filters.value.search = val;
      // 如果为 ''  重新渲染所有数据
      if (!val) {
        props.title === '租赁提成明细' && getPerformanceRoyaltyDetails();
        props.title === '租赁提成汇总' && getPerformanceTotal();
      }
      // 调用过滤函数
      else filterDataKeywords();
    },
  );
  // 关键字过滤
  const filterDataKeywords = () => {
    dataSource.value = dataSource.value.filter((item) => {
      const itemStr = Object.values(item).join('').toLowerCase();
      const searchStr = filters.value.search.toLowerCase().trim();
      if (itemStr.includes(searchStr)) {
        return true;
      }
      return false;
    });
  };

  watch(
    () => filters.value.dateRange,
    (newVal) => {
      filterDataTimeRange(newVal);
    },
  );
  // 时间范围过滤
  const filterDataTimeRange = (val) => {
    const startTime = +new Date(val[0]);
    const endTime = +new Date(val[1]);
    dataSource.value = dataSource.value.filter((item) => {
      const contractPeriod = item.contractPeriod.split('~');
      return +new Date(contractPeriod[0]) >= startTime && +new Date(contractPeriod[1]) <= endTime;
    });
  };
</script>

<template>
  <main class="p-4">
    <div class="bg-white rounded-lg shadow">
      <!-- Filter Section -->
      <span class="text-sm title text-[#1F2329] m-4">{{ title }}</span>
      <div class="p-4 border-b border-[#E5E6EB]">
        <div class="flex items-center justify-between space-x-4">
          <div class="flex items-center w-[80%] space-x-4">
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
            <a-range-picker
              v-if="title != '租赁提成汇总'"
              v-model:value="filters.dateRange"
              class="custom-date-picker w-[200px]"
            />
            <a-input-search
              v-model:value="filters.search"
              placeholder="搜索内容"
              style="width: 300px"
              class="custom-search"
            />
          </div>
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
        v-if="title === '租赁提成明细'"
        rowKey="id"
        :scroll="{ x: 2800, y: 500 }"
        :columns="columnsDetail"
        :data-source="dataSource"
        :pagination="pagination"
        bordered
      >
        <template #action>
          <a class="text-blue-600 hover:text-blue-800">发放提成</a>
        </template>
      </a-table>
      <a-table
        :scroll="{ x: 2800, y: 500 }"
        v-else-if="title === '租赁提成汇总'"
        rowKey="id"
        :columns="columnsTotal"
        :data-source="dataSource"
        :pagination="pagination"
        bordered
        :row-class-name="(_record, index) => (index % 2 === 0 ? 'bg-white' : 'bg-gray-50')"
        class="custom-table"
      >
        <template #id="{ record }">
          <a-tag color="green">{{ record.id }}</a-tag>
        </template>
      </a-table>
      <a-table v-else>提成发放记录</a-table>
    </div>
  </main>
</template>

<style scoped>
  .title {
    font-weight: bold;
    margin-top: 10px;
    padding-left: 8px;
    border-left: 2px solid #60a0ff;
    border-radius: 2px;
  }
</style>
