<template>
  <Row class="flex justify-between">
    <Col :span="16" class="mr-1 bg-white h-[500px]">
      <div class="flex mt-3 ml-3">
        <div class="flex">
          <div class="bg-blue-100 w-[25px] h-[25px] rounded-full pl-1 mt-2">
            <Icon icon="mdi:house-flash" style="color: #0083ff" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">价格设置</span>
            <span>上浮677%</span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-orange-200 w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="solar:calendar-date-bold" style="color: #f37c06" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">生效时间</span>
            <span
              >2023年10月18日 10:08
              <span class="text-red-500">(已过预定生效时间，若审批生效则即刻通过)</span></span
            >
          </div>
        </div>
      </div>
      <div class="mt-5">
        <Tabs v-model:activeKey="activeKey">
          <!-- 调价详情 -->
          <TabPane key="1">
            <template #tab>
              <span>
                <Icon icon="bi:person-lines-fill" />
                调价详情
              </span>
            </template>
            <div class="flex ml-5">
              <div class="flex flex-col ml-2">
                <span class="text-xs mb-[2px] text-gray-400">价格设置</span>
                <span>上浮677%</span>
              </div>
              <div class="flex flex-col ml-[100px]">
                <span class="text-xs mb-[2px] text-gray-400">生效时间</span>
                <span>2023年10月18日 10:08 </span>
              </div>
              <div class="flex flex-col ml-[100px]">
                <span class="text-xs mb-[2px] text-gray-400">调价房间</span>
                <span
                  class="text-[12px] bg-gray-200 w-[60px] h-[20px] pt-1 pl-0.5 border border-gray-300"
                  >独栋：<span class="font-bold text-blue-400">3</span>间</span
                >
              </div>
            </div>
            <div class="flex flex-col mt-5 ml-7">
              <span class="text-xs mb-[2px] text-gray-400">调价备注</span>
              <span>-</span>
            </div>
            <div
              class="w-[93%] h-1 mx-auto border-dashed border-gray-300 border-t-[1.5px] mt-[30px]"
            ></div>
            <div class="flex mt-2">
              <div class="w-[40%] border-dashed border-gray-300 border-r-[1.5px] pl-[20px]"
                >刘清晨创建于2023年3月18日 10:08</div
              >
              <div class="ml-[20px]">刘清晨更新于2023年8月18日 10:08</div>
            </div>
          </TabPane>
          <!-- 调价房间 -->
          <TabPane key="2">
            <template #tab>
              <span>
                <Icon icon="iconoir:page-search" />
                调价房间
              </span>
            </template>
            <!-- 选择器 -->
            <div class="flex justify-around">
              <div class="flex">
                <div class="leading-8 bg-gray-200 border border-gray-300 h-[31px] text-[10px]"
                  >部门/人员</div
                >
                <Space>
                  <Select
                    ref="select"
                    v-model:value="value1"
                    style="width: 120px"
                    @focus="focus"
                    @change="handleChange"
                  >
                    <SelectOption value="jack">Jack</SelectOption>
                    <SelectOption value="lucy">不限</SelectOption>
                    <SelectOption value="disabled">Disabled</SelectOption>
                    <SelectOption value="yiminghe">yiminghe</SelectOption>
                  </Select>
                </Space>
              </div>
              <div class="flex">
                <div class="leading-8 bg-gray-200 border border-gray-300 h-[31px] text-[10px]"
                  >城市/区域</div
                >
                <Space>
                  <Select
                    ref="select"
                    v-model:value="value1"
                    style="width: 120px"
                    @focus="focus"
                    @change="handleChange"
                  >
                    <SelectOption value="jack">Jack</SelectOption>
                    <SelectOption value="lucy">不限</SelectOption>
                    <SelectOption value="disabled">Disabled</SelectOption>
                    <SelectOption value="yiminghe">yiminghe</SelectOption>
                  </Select>
                </Space>
              </div>
              <div class="flex">
                <div class="leading-8 bg-gray-200 border border-gray-300 h-[31px] text-[10px]"
                  >房源类型</div
                >
                <Space>
                  <Select
                    ref="select"
                    v-model:value="value1"
                    style="width: 120px"
                    @focus="focus"
                    @change="handleChange"
                  >
                    <SelectOption value="jack">Jack</SelectOption>
                    <SelectOption value="lucy">全部</SelectOption>
                    <SelectOption value="disabled">Disabled</SelectOption>
                    <SelectOption value="yiminghe">yiminghe</SelectOption>
                  </Select>
                </Space>
              </div>
              <div>
                <InputSearch
                  v-model:value="value2"
                  placeholder="房源编号/房源地址/项目地址"
                  enter-button
                  class="w-[50px]"
                />
              </div>
              <Button @click="clearValue">清空</Button>
            </div>

            <!-- 调价房间表格 -->
            <Table
              :columns="a"
              :data-source="b"
              bordered
              size="small"
              class="text-[3px] w-[750px] h-[300px] ml-3"
            >
              <template #name="{ text }">
                <a>{{ text }}</a>
              </template>
            </Table>
          </TabPane>
        </Tabs>
      </div>
    </Col>
    <!-- y右边栏 -->
    <Col :span="7" class="bg-white h-[500px]">
      <div class="flex justify-between ml-5">
        <div class="flex">
          <div class="bg-blue-100 w-[35px] h-[35px] rounded-full pl-1 mt-2">
            <Icon icon="fa-solid:paper-plane" style="color: #0083ff" class="mt-[7px] ml-[4px]" />
          </div>
          <div class="flex flex-col mt-2 ml-2">
            <span>发起申请</span>
            <span class="text-xs mb-[2px] text-gray-400">刘清晨</span>
          </div>
        </div>
        <div class="text-xs mb-[2px] text-gray-400 m-5"> 2023.2.7 10:28 </div>
      </div>
      <div class="flex justify-between mt-[15px] ml-5">
        <div class="flex">
          <div class="bg-blue-100 w-[35px] h-[35px] rounded-full pl-1 mt-2">
            <Icon icon="icon-park-solid:seal" style="color: #0083ff" class="mt-[7px] ml-[4px]" />
          </div>
          <div class="flex flex-col mt-2 ml-2">
            <span>审批人</span>
            <span class="text-xs mb-[2px] text-gray-400"
              >一人会签<span class="text-yellow-400">(审批中...)</span></span
            >
            <div class="w-[50px] h-[25px] bg-gray-100 text-sm flex items-center justify-center"
              >王子郭</div
            >
          </div>
        </div>
      </div>
      <!-- 评论框 -->
      <div class="absolute bottom-[-43px] right-[165px]">
        <Button type="primary" @click="showModal1">评论</Button>
        <Modal
          v-model:visible="visible1"
          @ok="handleOk1"
          :body-style="{ height: '300px' }"
          okText="保存"
          cancelText="取消"
        >
          <template #title>
            <span style="color: #55aae9">评论</span>
          </template>
          <div>
            <div class="text-xl ml-[15px]">评论内容</div>
            <div class="h-[25px]"
              ><Textarea
                v-model:value="value"
                showCount
                placeholder="输入评论内容，可@相关人员"
                :maxlength="300"
                class="w-[90%] h-[25px] ml-[15px]"
            /></div>
          </div>
          <div class="mt-[55px] ml-[20px]">
            <div>附件</div>
            <div class="flex">
              <div class="w-[130px] h-[80px] border-2 border-dashed border-gray-300 bg-gray-200">
                <div class="mt-1 ml-[55px] text-3xl">+</div>
                <div class="text-sm ml-[20px]">上传图片/附件</div>
              </div>
              <span class="mt-[35px] ml-1 mr-1">或</span>
              <div class="flex w-[220px] border-2 border-dashed border-gray-300">
                <div class="w">
                  <img
                    src="../../../../assets/images/crd.png"
                    alt=""
                    srcset=""
                    class="w-[100px] h-[80px]"
                  />
                </div>
                <div class="pt-2 pl-2 ml-2 border-l-2 border-gray-300 border-dashed">
                  <div class="text-base">
                    <Icon icon="ic:baseline-qrcode" style="color: #7cd997" />扫码传图
                  </div>
                  <div> 使用手机扫一扫即可上传图片 </div>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
      <div
        class="h-[35px] border-l-2 border-dashed border-blue-100 absolute left-[35px] top-[40px]"
      ></div>
    </Col>
  </Row>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import {
    Table,
    Row,
    Col,
    Tabs,
    TabPane,
    Textarea,
    SelectOption,
    Select,
    InputSearch,
    Button,
    Modal,
  } from 'ant-design-vue';
  import Icon from '/@/components/Icon';
  import { col, some } from '../table';
  const a = col;
  const b = some;

  const value2 = ref<string>('');
  const visible1 = ref<boolean>(false);

  const clearValue = () => {
    value2.value = '';
  };

  const showModal1 = () => {
    console.log('11');
    visible1.value = true;
  };

  const handleOk1 = (e: MouseEvent) => {
    console.log(e);
    visible1.value = false;
  };

  const focus = () => {
    console.log('focus');
  };

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
</script>
