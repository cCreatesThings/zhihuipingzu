<template>
  <div class="overflow-auto">
    <Table bordered :dataSource="dataSource" :columns="columns" style="width: 7000px">
      <template #status="{ record }">
        <Button>{{ Status[record.status] }}</Button>
      </template>

      <template #channel="{ record }">
        <Button>{{ Channel[record.channel] }}</Button>
      </template>
    </Table>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import { Table, Button } from 'ant-design-vue';
  import config from './config';
  import { getDataAnalysis } from '/@/api/dataAnalysis/index';

  const columns = ref([...config.columns]);
  const dataSource = ref([]);

  getDataAnalysis()
    .then((res) => {
      console.log(res);
      dataSource.value = [...res.result];
    })
    .catch((err) => {
      console.log(err);
    });
</script>
