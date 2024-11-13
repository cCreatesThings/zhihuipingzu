<template>
  <div class="management">
    <div class="title">招商管理</div>
    <Row>
      <Col :span="12"
        ><Select
          class="select-popup"
          defaultActiveFirstOption
          v-model:value="selectRes"
          @change="selectResChange"
        >
          <SelectOption value="0">不限</SelectOption>
          <SelectOption value="1">测试楼栋</SelectOption>

          <SelectOption value="2">东西湖新创基地</SelectOption>
        </Select>
      </Col>
      <Col :span="3" :offset="9">
        <Popconfirm title="确定下载吗？" @confirm="donwload">
          <Button type="primary">下载</Button>
        </Popconfirm>
      </Col>
    </Row>
    <Tabs defaultActiveKey="1">
      <TabPane key="1" tab="私客">
        <Table
          v-if="investmentManagementList.length"
          :pagination="{ pageSize: 5 }"
          border
          :dataSource="investmentManagementList"
          :rowKey="(record:DataType) => record.id"
          :columns="columns"
        >
          <template #action="{ record }">
            <Button type="link" @click="deleteItem(record)">delete</Button>
          </template>
          <template #status="{ record }">
            <Tag :color="record.status == 1 ? 'green' : record.status == 2 ? 'blue' : 'red'">
              {{ statusMap[record.status] }}
            </Tag>
          </template>
        </Table>
        <Empty v-else />
      </TabPane>
      <TabPane key="2" tab="公客">key="2" tab="公客"</TabPane>
    </Tabs>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue';
  import {
    Table,
    Tabs,
    TabPane,
    Select,
    SelectOption,
    Button,
    Row,
    Col,
    Tag,
    Empty,
    Popconfirm,
  } from 'ant-design-vue';
  import { columns } from '../data';
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  import { DataType } from '/#/investment-data.d';
  import { StatusEnum } from '/@/enums/investment';
  import { InvestmentManagementAPI } from '/@/api/demo/investment';
  import { investmentModel } from '/@/api/demo/model/investmentModel';
  import { donwloadFileFn } from '/@/utils/downLoad/downloadFile';
  // import FileSaver from 'file-saver'; // 保存文件
  const investmentManagementList = ref<investmentModel[]>([]);

  const getInvestmentManagement = async () => {
    const res = await InvestmentManagementAPI();
    investmentManagementList.value = res;
  };
  getInvestmentManagement();

  const selectRes = ref('不限');
  //下拉框 搜索框选择事件
  const selectResChange = () => {
    console.log(selectRes.value);
  };

  const donwload = async () => {
    donwloadFileFn(investmentManagementList.value, '招商管理');
  };

  const statusMap = {
    [StatusEnum['问询']]: '问询',
    [StatusEnum['看房']]: '看房',
    [StatusEnum['关闭']]: '关闭',
  };
  console.log(statusMap);

  // 点击删除当前项
  const deleteItem = (record) => {
    console.log(record);
    // 删除当前项
    investmentManagementList.value = investmentManagementList.value.filter((item: any) => {
      return item.id !== record.id;
    });
  };
</script>

<style scoped>
  .title {
    margin: 5px 20px;
    width: fit-content;
    border-left: 3px solid #1890ff;
    border-radius: 3px;
    padding-left: 5px;
  }
  .select-popup {
    width: 200px;
  }
</style>
