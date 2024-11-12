<template>
  <!-- 租赁 -->

  <div>
    <Tabs v-model:activeKey="activeKey">
      <TabPane key="1" tab="招商数据统计" class="overflow-auto">
        <Table bordered :dataSource="dataSource" :columns="columns" style="width: 4000px">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table></TabPane
      >

      <TabPane key="2" tab="自持出租率" force-render class="overflow-auto">
        <Table bordered :dataSource="dataSourceroom" :columns="columnsroom">
          <template #status="{ record }">
            <Button>{{ Status[record.status] }}</Button>
          </template>

          <template #channel="{ record }">
            <Button>{{ Channel[record.channel] }}</Button>
          </template>
        </Table></TabPane
      >
      <template #tabBarExtraContent>
        <div v-if="activeKey === '1'">
          <Button style="background-color: blue; color: white" @click="dispositionModal"
            >配置目标/计划</Button
          >
        </div>
        <div v-else-if="activeKey === '2'">
          <Button style="background-color: blue; color: white" @click="dispositionModaldata"
            >配置出租率目标</Button
          >
        </div>
      </template>
    </Tabs>
  </div>
  <Modal v-model:visible="visible" title="配置目标/计划" @ok="handleOk" :width="'60%'">
    <Row :gutter="[10, 10]">
      <Col :xl="{ span: 24 }">
        <div class="flex ml-[10px]">
          <h1 class="ml-[10px] mt-[5px]">*项目</h1>
          <Select
            v-model:value="value"
            label-in-value
            style="width: 200px"
            :options="options"
            @change="handleChange"
          />
        </div>
      </Col>
    </Row>
    <Row :gutter="[20, 20]">
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*年度租赁面积</h1>
          <Input placeholder="请输入面积" suffix="㎡" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*年度租赁回款</h1>
          <Input placeholder="请输入金额" suffix="万元" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*一年度租赁面积</h1>
          <Input placeholder="请输入面积" suffix="㎡" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*一年度租赁回款</h1>
          <Input placeholder="请输入金额" suffix="万元" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*二年度租赁面积</h1>
          <Input placeholder="请输入面积" suffix="㎡" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*二年度租赁回款</h1>
          <Input placeholder="请输入金额" suffix="万元" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*三年度租赁面积</h1>
          <Input placeholder="请输入面积" suffix="㎡" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*三年度租赁回款</h1>
          <Input placeholder="请输入金额" suffix="万元" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*四年度租赁面积</h1>
          <Input placeholder="请输入面积" suffix="㎡" style="width: 200px" />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*四年度租赁回款</h1>
          <Input placeholder="请输入金额" suffix="万元" style="width: 200px" />
        </div>
      </Col>
    </Row>
  </Modal>
  <Modal v-model:visible="visibledata" title="配置目标/计划" @ok="handleOkdata" :width="'60%'">
    <Row :gutter="[10, 10]">
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[5px]">*项目</h1>
          <Select
            v-model:value="value"
            label-in-value
            style="width: 200px"
            :options="options"
            @change="handleChange"
          />
        </div>
      </Col>
      <Col :xl="{ span: 12 }">
        <div class="ml-[10px]">
          <h1 class="ml-[10px] mt-[10px]">*年度出租率目标</h1>
          <Input placeholder="请输入出租率百分比" suffix="%" style="width: 200px" />
        </div>
      </Col>
    </Row>
  </Modal>
</template>
<script setup>
  import { ref } from 'vue';
  import { Table, Button, Tabs, TabPane, Modal, Row, Col, Select, Input } from 'ant-design-vue';
  import config from './config';
  import { getDataAnalysis } from '/@/api/dataAnalysis/index';

  const columns = ref([...config.columns]);
  const columnsroom = ref([...config.columnsroom]);
  const dataSource = ref([]);
  const dataSourceroom = ref([]);
  const activeKey = ref('1');
  const visible = ref(false);
  const visibledata = ref(false);
  const dispositionModal = () => {
    visible.value = true;
  };
  const dispositionModaldata = () => {
    visibledata.value = true;
  };
  const handleOk = (e) => {
    console.log(e);
    visible.value = false;
  };
  const handleOkdata = (e) => {
    console.log(e);
    visible.value = false;
  };

  getDataAnalysis()
    .then((res) => {
      console.log(res);
      dataSource.value = [...res.investmentresult];
      dataSourceroom.value = [...res.Occupancyresult];
    })
    .catch((err) => {
      console.log(err);
    });
  const options = ref([
    {
      value: 'jack',
      label: '请选择项目配置规则',
    },
    {
      value: 'lucy',
      label: '项目1',
    },
    {
      value: 'jack1',
      label: '项目2',
    },
    {
      value: 'fuck',
      label: '项目三',
    },
    {
      value: 'fuck',
      label: '项目三',
    },
    {
      value: 'fuck1',
      label: '项目四',
    },
    {
      value: 'fuck2',
      label: '项目五',
    },
    {
      value: 'fuck3',
      label: '项目六',
    },
  ]);
  const handleChange = (value) => {
    console.log(value); // { key: "lucy", label: "Lucy (101)" }
  };
</script>
