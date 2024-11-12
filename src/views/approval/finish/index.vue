<template>
  <Table :columns="a" :data-source="b" bordered>
    <template #name="{ text }">
      <a>{{ text }}</a>
    </template>
  </Table>
</template>
<script lang="ts" setup>
  import { Table } from 'ant-design-vue';
  import { col, some } from '../wait/table';

  const a = col;
  const b = some;
</script>
