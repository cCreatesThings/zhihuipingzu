<template>
  <PageWrapper>
    <div class="bg-white w-[100%] h-[900px] rounded-xl">
      <div class="flex ml-5 pt-7">
        <div class="w-[5px] h-[15px] rounded-full bg-blue-500"></div>
        <span class="pl-3 font-bold leading-3">待我审批的</span>
      </div>
      <div class="mt-5 flex items-center justify-between w-[100%]">
        <div>
          <Menu v-model:selectedKeys="current" mode="horizontal">
            <MenuItem key="all"> 全部 </MenuItem>
            <MenuItem key="goin"> 审批中 </MenuItem>
            <MenuItem key="goon"> 审批通过 </MenuItem>
            <MenuItem key="goout"> 审批驳回 </MenuItem>
            <MenuItem key="getout"> 已撤销 </MenuItem>
          </Menu>
        </div>
        <div class="w-[400px] mr-5 mt-1">
          <Input v-model:value="value" placeholder="标题/内容" style="width: 100%" />
        </div>
      </div>
      <div class="mt-5">
        <!-- 审批表格 -->
        <Table
          :columns="columns"
          :data-source="data"
          :pagination="{ pageSize: 3 }"
          class="line-clamp-6"
          @row-click="showModal"
        >
          <template #serial="{ index }">
            {{ index + 1 }}
          </template>
          <template #action>
            <span>
              <Popover title="更多操作">
                <template #content>
                  <p>通过</p>
                  <p>驳回</p>
                  <p>撤销</p>
                  <p @click="showtitle">催办</p>
                  <Modal v-model:visible="smt" title="" @ok="hdOk" closable="false">
                    <div class="h-5"></div>
                    <div class="flex mt-5 ml-6">
                      <Icon icon="ri:question-line" style="color: #ffb100; font-size: 25px" />
                      <div>
                        <span class="ml-2 leading-1">确定要给当前审批人发送消息提醒吗</span>
                      </div>
                    </div>
                    <div class="ml-[55px] text-gray-400 text-xs">
                      确定后会以信息的方式通知到当前审批人
                    </div>
                    <div class="bg-gray-100 ml-[55px] w-[45%] h-[30px] pt-1 pl-1">
                      当前审批人:刘清晨
                    </div>
                    <div class="h-10"></div>
                    <div class="absolute top-[165px] left-[55px]">
                      <Checkbox v-model:checked="checked">短信通知当前审批人</Checkbox>
                    </div>
                  </Modal>
                  <!-- 财务流水 -->
                  <!-- 合同详情页面 -->
                </template>
                <MoreOutlined @click.prevent />
              </Popover>
            </span>
          </template>
          <Popover title="Title">
            <template #content>
              <p>Content</p>
              <p>Content</p>
            </template>
            <Button type="primary">Hover me</Button>
          </Popover>
        </Table>
      </div>
    </div>
    <!-- 对话浮动窗 -->
    <div
      ><Modal
        v-model:visible="visible"
        @ok="handleOk"
        width="70%"
        :body-style="{ height: '500px', backgroundColor: 'lightgray' }"
        okText="通过"
        cancelText="驳回"
      >
        <template #title>
          <span style="color: #55aae9">批量调价-审核详情</span>
        </template>
        <textareaB />
      </Modal>
    </div>
  </PageWrapper>
</template>

<script setup lang="ts">
  import { PageWrapper } from '/@/components/Page';
  import { ref, onMounted } from 'vue';
  import { Icon } from '/@/components/Icon';
  import { Input, Menu, MenuItem, Table, Popover, Button, Modal, Checkbox } from 'ant-design-vue';
  import { MoreOutlined } from '@ant-design/icons-vue';
  import { columns, data } from '../wait/table';
  import textareaB from '../wait/components/textarea.vue';

  const current = ref<string[]>(['all']);
  const value = ref<string>('');
  const visible = ref<boolean>(false);
  const smt = ref<boolean>(false);
  const checked = ref(false);

  const showtitle = () => {
    smt.value = true;
  };

  const hdOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };
  // 表格点击事件触发对话框

  const showModal = () => {
    console.log('11');
    visible.value = true;
  };

  const handleOk = (e: MouseEvent) => {
    console.log(e);
    visible.value = false;
  };

  // 表格数据

  // 定义数据项的类型
  interface ApprovalData {
    key: string;
    status: string;
    type: string;
    title: string;
    content: string;
    initiator: string;
    initiatedAt: string;
  }
  // 重复数据的函数
  function repeatData(dataArray: ApprovalData[], totalTimes: number): ApprovalData[] {
    let repeatedData: ApprovalData[] = [];
    const timesPerItem = Math.floor(totalTimes / dataArray.length);
    const remainingTimes = totalTimes % dataArray.length;

    for (let i = 0; i < timesPerItem; i++) {
      repeatedData = repeatedData.concat(dataArray);
    }

    // 处理剩余的项
    for (let i = 0; i < remainingTimes; i++) {
      repeatedData.push(dataArray[i]);
    }

    return repeatedData;
  }
  // 表格数据

  onMounted(() => {
    // 总共循环600次
    data.value = repeatData(data.value, 600);
  });
</script>

<style lang="less" scoped>
  /deep/ .ant-modal-header {
    background-color: #40a9ff;
  }
</style>
