<template>
  <!-- 租赁 -->
  <div class="overflow-auto">
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="按项目">
        <Table bordered :dataSource="dataSource" :columns="columns">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>
          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table></TabPane
      >
      <TabPane key="2" tab="按房间" force-render class="overflow-auto">
        <Table
          bordered
          :dataSource="dataSourceroom"
          :columns="columnsroom"
          :scroll="{ x: 1300 }"
          style="width: 3000px"
        >
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table></TabPane
      >
    </Tabs>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Table, Button, Tabs, TabPane } from 'ant-design-vue';
  import config from './config';
  import { getDataAnalysis } from '/@/api/dataAnalysis/index';

  const columns = ref([...config.columns]);
  const columnsroom = ref([...config.columnsroom]);
  const dataSource = ref([]);
  const dataSourceroom = ref([]);
  const activeKey = ref('1');

  getDataAnalysis()
    .then((res) => {
      console.log(res);
      dataSource.value = [...res.resultlease];
      dataSourceroom.value = [...res.resultleaseroom];
    })
    .catch((err) => {
      console.log(err);
    });
</script>
