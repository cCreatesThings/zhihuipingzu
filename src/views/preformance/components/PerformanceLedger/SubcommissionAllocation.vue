<script setup lang="ts">
  import { ref } from 'vue';
  import { SubcommissionAllocationAPI } from '/@/api/demo/preformance';
  import { subcommissionAllocationColumns } from '/@/views/preformance/data';
  import { SubcommissionAllocationType } from '/#/performance';
  import { message } from 'ant-design-vue';
  const projectId = ref('1');
  const projectList = ref([
    {
      value: '1',
      label: '项目一',
    },
    {
      value: '2',
      label: '项目二',
    },
    {
      value: '3',
      label: '项目三',
    },
  ]);
  // 分页配置
  const pagination = {
    pageSize: 5,
    showTotal: (total) => `共 ${total} 条`,
    showSizeChanger: true,
    showQuickJumper: true,
    pageSizeOptions: ['5', '10', '15', '20', '25'],
  };
  const subcommissionAllocationdataSource = ref<SubcommissionAllocationType[]>([]);
  const getSubcommissionAllocation = async () => {
    const res = await SubcommissionAllocationAPI();
    subcommissionAllocationdataSource.value = res;
  };
  getSubcommissionAllocation();

  // 新增
  const addSubcommissionAllocation = () => {
    console.log('addSubcommissionAllocation');
    message.success('新增成功');
  };

  // 编辑
  const editSubcommissionAllocation = (record: SubcommissionAllocationType) => {
    console.log('editSubcommissionAllocation', record);
    message.success(record.standard + '编辑成功');
  };
  // 禁用
  const disableSubcommissionAllocation = (record: SubcommissionAllocationType) => {
    console.log('disableSubcommissionAllocation', record);
    message.success(record.standard + '禁用成功');
  };
</script>

<template>
  <a-card class="card">
    <div class="heade flex justify-between items-center">
      <div class="ml-[20px] flex items-center flex-col">
        <div class="title mb-[10px] font-bold">请选择项目</div>
        <a-select v-model:value="projectId" defaultActiveFirstOption>
          <a-select-option v-for="item in projectList" :value="item.value" :key="item.value">{{
            item.label
          }}</a-select-option>
        </a-select>
      </div>
      <div class="add">
        <a-button type="primary" @click="addSubcommissionAllocation">新增分佣配置 </a-button>
      </div>
    </div>
    <div class="content mt-[20px]">
      <div class="title font-bold">签约业绩提成配置表</div>
      <a-table
        bordered
        :pagination="pagination"
        rowKey="id"
        :columns="subcommissionAllocationColumns"
        :data-source="subcommissionAllocationdataSource"
      >
        <template #action="{ record }">
          <a-button type="link" @click="editSubcommissionAllocation(record)">编辑</a-button>
          <a-button type="link" danger @click="disableSubcommissionAllocation(record)"
            >禁用</a-button
          >
        </template>
      </a-table>
    </div>
  </a-card>
</template>

<style scoped>
  .card {
    margin: 8px;
  }
</style>
