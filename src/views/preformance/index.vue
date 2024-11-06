<template>
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-sm">
      <div class="flex items-center justify-between px-4 py-2">
        <div class="flex items-center space-x-2">
          <div
            class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold"
          >
            <Icon
              icon="arcticons:3d-collection"
              width="24"
              height="24"
              style="color: black; font-weight: bold"
            />
          </div>
          <h1 class="text-lg font-medium text-[#1F2329]">零售租赁</h1>
        </div>
        <div class="flex items-center space-x-4">
          <a-dropdown>
            <a class="text-[#4E5969] hover:text-blue-600 text-sm">
              业绩台账
              <down-outlined />
            </a>
            <template #overlay>
              <a-menu>
                <a-menu-item
                  @click="handleDropdownMenuClick(item.value)"
                  v-for="item in dropdownMenuList"
                  :key="item.value"
                >
                  <a href="javascript:;">{{ item.label }}</a>
                </a-menu-item>
              </a-menu>
            </template>
          </a-dropdown>
          <div class="cursor-pointer">分佣配置</div>
        </div>
        <a-avatar size="small" src="https://i.postimg.cc/L4CKpVB7/image.png" />
      </div>
    </header>

    <!-- Main Content -->
    <component :is="activeDropdownCom" :title="activeDropdownMenu" />
  </div>
</template>

<script setup>
  import { ref, shallowRef } from 'vue';
  import { DownOutlined } from '@ant-design/icons-vue';
  import PerformanceLedgerRoyaltyDetails from './components/PerformanceLedger/RoyaltyDetails.vue';

  const activeDropdownMenu = ref('租赁提成明细');
  const activeDropdownCom = shallowRef(PerformanceLedgerRoyaltyDetails);
  const dropdownMenuList = [
    {
      label: '租赁提成明细',
      value: '租赁提成明细',
    },
    {
      label: '租赁提成汇总',
      value: '租赁提成汇总',
    },
    {
      label: '提成发放记录',
      value: '提成发放记录',
    },
  ];

  const handleDropdownMenuClick = (value) => {
    activeDropdownMenu.value = value;
  };
</script>

<style lang="scss">
  .custom-table {
    .ant-table-thead > tr > th {
      background: #f5f8ff !important;
      color: #1f2329 !important;
      font-weight: 500 !important;
      border-bottom: 1px solid #e5e6eb !important;
    }

    .ant-table-tbody > tr > td {
      color: #4e5969 !important;
      border-bottom: 1px solid #e5e6eb !important;
    }

    .ant-table-tbody > tr:hover > td {
      background: #e6f4ff !important;
    }

    .ant-table-pagination {
      margin: 16px 0 !important;
    }
  }

  .custom-select,
  .custom-date-picker,
  .custom-search {
    .ant-select-selector,
    .ant-picker,
    .ant-input-affix-wrapper {
      border-radius: 4px !important;
      border-color: #d9d9d9 !important;
    }

    &:hover,
    &:focus {
      .ant-select-selector,
      .ant-picker,
      .ant-input-affix-wrapper {
        border-color: #1677ff !important;
      }
    }
  }

  .custom-alert {
    border: none !important;
    background: #fff2f0 !important;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15) !important;

    .ant-alert-message {
      color: #ff4d4f !important;
    }
  }
</style>
