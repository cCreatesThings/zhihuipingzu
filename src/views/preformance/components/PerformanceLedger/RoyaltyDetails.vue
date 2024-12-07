<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { columnsDetail, columnsTotal, columnsRecord, columnsPerson } from '../../data';
  import {
    PerformanceAPI,
    PerformanceRecordAPI,
    PerformanceTotalAPI,
  } from '/@/api/demo/preformance';
  import { VerticalAlignBottomOutlined } from '@ant-design/icons-vue';
  import { donwloadFileFn } from '/@/utils/downLoad/downloadFile';
  import ReleaseRoyaltyDetails from './components/ReleaseRoyaltyDetails.vue';
  import { PerformanceRoyaltyDetailsType } from '/#/performance';
  const props = defineProps<{
    royaltyTitle: string;
  }>();
  const dataSource = ref<any[]>([]);

  const filters = ref({
    project: '不限',
    dateRange: [],
    search: '',
  });

  // 分页配置
  const pagination = {
    total: dataSource.value.length,
    pageSize: 5,
    showTotal: (total) => `共 ${total} 条`,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['5', '10', '15', '20', '25'],
  };

  // 选中的值    performanceRecord 按房源 按分佣人员
  const performanceRecordSelectVal = ref<1 | 2>(1);

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

  const getPerformanceRecord = async (type: 1 | 2) => {
    const res = await PerformanceRecordAPI(type);
    dataSource.value = res;
  };
  // getPerformanceRoyaltyDetails();
  const getPerformanceTotal = async () => {
    const res = await PerformanceTotalAPI();
    dataSource.value = res;
  };

  // 监听 title 变化 重新渲染数据
  watch(
    () => props.royaltyTitle,
    (newVal) => {
      if (newVal === '租赁提成明细') {
        getPerformanceRoyaltyDetails();
      } else if (newVal === '租赁提成汇总') {
        getPerformanceTotal();
      } else {
        getPerformanceRecord(performanceRecordSelectVal.value);
      }
    },
    {
      immediate: true,
    },
  );

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
        props.royaltyTitle === '租赁提成明细' && getPerformanceRoyaltyDetails();
        props.royaltyTitle === '租赁提成汇总' && getPerformanceTotal();
        props.royaltyTitle === '提成发放记录' &&
          getPerformanceRecord(performanceRecordSelectVal.value);
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
    if (Object.keys(val).length === 0) {
      getPerformanceRoyaltyDetails();
      return;
    }
    const startTime = +new Date(val[0]);
    const endTime = +new Date(val[1]);
    dataSource.value = dataSource.value.filter((item) => {
      const contractPeriod = item.contractPeriod.split('~');
      return +new Date(contractPeriod[0]) >= startTime && +new Date(contractPeriod[1]) <= endTime;
    });
  };

  // performanceRecord 按房源 按分佣人员
  const performanceRecordSelectList = [
    {
      label: '按房源',
      value: 1,
    },
    {
      label: '按分佣人员',
      value: 2,
    },
  ];

  watch(
    () => performanceRecordSelectVal.value,
    (val) => {
      getPerformanceRecord(val);
    },
  );
  // 传递给子组件渲染的数据
  const ReleaseRoyaltyDetailsItem = ref<PerformanceRoyaltyDetailsType>();
  // 控制弹窗显示的开关
  const openReleaseRoyaltyDetails = ref(false);
  const showReleaseRoyaltyDetails = (record: PerformanceRoyaltyDetailsType) => {
    openReleaseRoyaltyDetails.value = true; // 显示弹窗
    isHide.value = false; // 打印按钮显示
    ReleaseRoyaltyDetailsItem.value = record; // 传递数据
  };

  // 打印弹出层
  const isHide = ref(false);
  const handleOk = () => {
    isHide.value = true; // 打印按钮隐藏
    setTimeout(() => {
      window.print();
    }, 300);
  };
</script>

<template>
  <main class="p-4 main-content">
    <div class="rounded-lg shadow">
      <!-- Filter Section -->
      <span class="text-sm title m-4">{{ royaltyTitle }}</span>
      <div class="p-4 border-b border-[#E5E6EB]">
        <div class="flex items-center justify-between space-x-4">
          <div class="flex items-center w-[80%] space-x-4">
            <a-select v-model:value="filters.project" style="width: 200px" class="custom-select">
              <a-select-option v-for="item in selectList" :value="item.value" :key="item.value">{{
                item.label
              }}</a-select-option>
            </a-select>
            <div class="w-[250px]" v-if="royaltyTitle === '租赁提成明细'">
              <span class="text-sm">查询:</span>
              <a-range-picker
                v-model:value="filters.dateRange"
                class="custom-date-picker w-[200px]"
            /></div>
            <div
              v-if="royaltyTitle === '提成发放记录'"
              class="flex w-[251px] item-center justify-center"
            >
              <div class="font-bold text-center leading-7"> 查看维度: </div>
              <a-select v-model:value="performanceRecordSelectVal" style="width: 150px">
                <a-select-option
                  v-for="item in performanceRecordSelectList"
                  :value="item.value"
                  :key="item.value"
                  >{{ item.label }}</a-select-option
                >
              </a-select>
            </div>

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
      <template v-if="dataSource.length">
        <a-table
          v-if="royaltyTitle === '租赁提成明细'"
          rowKey="id"
          :scroll="{ x: 2800, y: 500 }"
          :columns="columnsDetail"
          :data-source="dataSource"
          :pagination="pagination"
          bordered
        >
          <template #action="{ record }">
            <a
              class="text-blue-600 hover:text-blue-800 ml-[10px]"
              @click="showReleaseRoyaltyDetails(record)"
              >查看详情</a
            >
          </template>
        </a-table>
        <a-table
          :scroll="{ x: 2800, y: 500 }"
          v-else-if="royaltyTitle === '租赁提成汇总'"
          rowKey="id"
          :columns="columnsTotal"
          :data-source="dataSource"
          :pagination="pagination"
          bordered
        >
          <template #id="{ record }">
            <a-tag color="green">{{ record.id }}</a-tag>
          </template>
        </a-table>
        <template v-else>
          <a-table
            v-if="performanceRecordSelectVal === 1"
            :pagination="pagination"
            :dataSource="dataSource"
            :columns="columnsRecord"
            rowKey="id"
            :scroll="{ x: 1600, y: 500 }"
          >
            <template #roomInfo="{ record }">
              <a-tag color="green">{{ record.roomInfo?.slice(0, 4) }}</a-tag
              >{{ record.roomInfo?.slice(4) }}
            </template>
          </a-table>
          <a-table
            v-else
            rowKey="id"
            :pagination="pagination"
            :dataSource="dataSource"
            :columns="columnsPerson"
            :scroll="{ x: 2000, y: 500 }"
          >
            <template #roomInfo="{ record }">
              <a-tag color="green">{{ record.roomInfo?.slice(0, 4) }}</a-tag
              >{{ record.roomInfo?.slice(4) }}
            </template>
          </a-table>
        </template>
      </template>
      <template v-else> <a-spin /></template>
    </div>
    <a-modal
      class="print"
      :width="700"
      v-model:visible="openReleaseRoyaltyDetails"
      aria-hidden="true"
      title="房间业绩提成详情"
    >
      <ReleaseRoyaltyDetails :record="ReleaseRoyaltyDetailsItem!" />
      <template #footer>
        <a-button :class="{ hide: isHide }" key="submit" type="primary" @click="handleOk"
          >打印</a-button
        >
      </template>
    </a-modal>
  </main>
</template>

<style scoped>
  .hide {
    display: none;
  }
  .title {
    font-weight: bold;
    margin-top: 10px;
    padding-left: 8px;
    border-left: 2px solid #60a0ff;
    border-radius: 2px;
  }
  @media print {
    .main-content {
      visibility: hidden;
    }
    .print {
      visibility: visible;
    }
  }
</style>
