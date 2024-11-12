<template>
  <div class="overflow-auto">
    <Tabs v-model:activeKey="activeKe">
      <TabPane key="1" tab="项目新增客户" class="overflow-auto">
        <Table
          bordered
          :dataSource="dataSource"
          :columns="columns"
          :rowSpan="getRowSpan"
          style="width: 1900px"
        >
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="2" tab="客户来源渠道" class="overflow-auto">
        <Table bordered :dataSource="dataSourcecha" :columns="columnscha" style="width: 1300px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
        <Table bordered :dataSource="dataSourcecha" :columns="columnscha" style="width: 1300px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="3" tab="客户意向级别" class="overflow-auto">
        <Table bordered :dataSource="dataSourcelevel" :columns="columnslevel" style="width: 1300px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="4" tab="行业成交客户数" class="overflow-auto">
        <Table
          bordered
          :dataSource="dataSourceindustry"
          :columns="columnsindustry"
          style="width: 1600px"
        >
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="5" tab="渠道成交客户数" class="overflow-auto">
        <Table bordered :dataSource="dataSourcecha" :columns="columnscha" style="width: 1300px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="6" tab="客户成交周期" class="overflow-auto">
        <Table bordered :dataSource="dataSourcecycle" :columns="columnscycle" style="width: 1900px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
      <TabPane key="7" tab="项目新增客户渠道" class="overflow-auto">
        <Table bordered :dataSource="dataSourcecha" :columns="columnscha" style="width: 1300px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table>
      </TabPane>
    </Tabs>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Table, Button, TabPane, Tabs } from 'ant-design-vue';
  import config from './config';
  import { getDataAnalysis } from '/@/api/dataAnalysis/index';

  const columns = ref([...config.columns]);
  const columnscha = ref([...config.columnscha]);
  const columnslevel = ref([...config.columnslevel]);
  const columnsindustry = ref([...config.columnsindustry]);
  const columnscycle = ref([...config.columnscycle]);
  const dataSourcecha = ref([]);
  const dataSource = ref([]);
  const dataSourcelevel = ref([]);
  const dataSourceindustry = ref([]);
  const dataSourcecycle = ref([]);
  const activeKe = ref('1');

  getDataAnalysis()
    .then((res) => {
      console.log(res);
      dataSource.value = [...res.investmentpage];
      dataSourcecha.value = [...res.investmentpagechannel];
      dataSourcelevel.value = [...res.investmentpagelevel];
      dataSourceindustry.value = [...res.investmentpageindustry];
      dataSourcecycle.value = [...res.investmentpagecycle];
    })
    .catch((err) => {
      console.log(err);
    });
</script>
