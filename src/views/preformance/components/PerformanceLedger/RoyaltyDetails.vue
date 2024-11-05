<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { columns } from '../../data';
  import { PerformanceAPI } from '/@/api/demo/preformance';
  import { PerformanceRoyaltyDetailsType } from '/#/performance';
  import { VerticalAlignBottomOutlined } from '@ant-design/icons-vue';
  import { donwloadFileFn } from '/@/utils/downLoad/downloadFile';
  // import moment from 'moment';
  defineProps<{
    title: string;
  }>();
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

  // 点击下载
  const handleDownload = () => {
    donwloadFileFn(dataSource.value, '招商信息明细');
  };

  // 搜索 监听变化

  watch(
    () => filters.value.search,
    () => {
      // 调用过滤函数
      filterDataKeywords();
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
    console.log(dataSource.value);
  };

  watch(
    () => filters.value.dateRange,
    (newVal) => {
      filterDataTimeRange(newVal);
    },
  );
  // 时间范围过滤
  const filterDataTimeRange = (val) => {
    console.log(val);
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
  .title {
    font-weight: bold;
    margin-top: 10px;
    padding-left: 8px;
    border-left: 2px solid #60a0ff;
    border-radius: 2px;
  }
</style>
