<template>
  <Row>
    <Col :span="16"
      ><div class="bg-[#e0f5ff] pl-[15px] leading-[35px] h-[35px] text-gray-500"
        >px 房源地址:T005 /武汉市硚口区测试楼栋(测试数据)B1栋2单元-510室
      </div>
      <div class="flex mt-3 ml-3">
        <div class="flex">
          <div class="bg-blue-100 w-[25px] h-[25px] rounded-full pl-1 mt-2">
            <Icon icon="fontisto:person" style="color: #0083ff" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">租客信息</span>
            <span>林志志-1334996869</span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-orange-200 w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="mdi:house-flash" style="color: #ff9300" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">租金</span>
            <span>3000/月 </span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-orange-200 w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="mingcute:bank-card-fill" style="color: #ff9300" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">付款方式</span>
            <span>压2付6</span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-[#ddfdf2] w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="bi:calendar-date-fill" style="color: #00efa4" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">租期</span>
            <span>2023.1.27-2024.1.28(1年)</span>
          </div>
        </div>
      </div>
      <Tabs v-model:activeKey="activeKey">
        <TabPane key="1">
          <template #tab>
            <span>
              <Icon icon="bi:person-lines-fill" />
              个人信息
            </span>
          </template>
          暂无数据！
        </TabPane>
        <!-- 合同信息 -->
        <TabPane key="2">
          <template #tab>
            <span>
              <Icon icon="iconoir:page-search" />
              合同信息
            </span>
          </template>
          <div class="flex flex-wrap justify-around">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">租金</span>
              <span>3000 元/月</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">押金</span>
              <span>6000 元</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">付款方式</span>
              <span>押 2 付 6</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">合同周期</span>
              <span>
                2023.1.27-2024.1.28
                <span class="text-[#ffbd44]">(1年) </span>
              </span>
            </div>
          </div>
          <div class="flex mt-[30px]">
            <div class="flex flex-col ml-[22px]">
              <span class="text-xs mb-[2px] text-gray-400">收租日设置</span>
              <span>提前0天收租</span>
            </div>
            <div class="flex flex-col ml-[152px]">
              <span class="text-xs mb-[2px] text-gray-400">合同类型</span>
              <span>电子合同 <span class="text-[#30daff]">(已认证)</span></span>
            </div>
          </div>
          <div class="flex mt-[30px] mb-[30px]">
            <div class="flex flex-col ml-[22px]">
              <span class="text-xs mb-[2px] text-gray-400">合同补充说明</span>
              <span>-</span>
            </div>
          </div>
          <span class="text-xl font-bold mb-[10px] ml-5">其他信息</span>
          <div class="flex flex-wrap justify-around">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">签约类型</span>
              <span>换签</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">合同编号</span>
              <span>HT8767876</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">租客自助申请发票</span>
              <span>不允许</span>
            </div>
            <div class="w-1/5"></div>
          </div>
          <div class="flex flex-col ml-[22px]">
            <span class="text-xs mb-[2px] text-gray-400 mt-[30px]">
              备注
              <span class="text-[#ffab18]">(仅内部可见)</span>
            </span>
            <span>-</span>
          </div>
          <div class="flex flex-col ml-[22px]">
            <span class="text-xs mb-[2px] text-gray-400 mt-[30px]">
              标签
              <span class="text-[#ffab18]">(仅内部可见)</span>
            </span>
            <span>-</span>
          </div>
          <div class="flex flex-col ml-[22px] mt-[30px]">
            <span class="text-xs mb-[2px] text-gray-400"> 附件类型 </span>
            <span>-</span>
          </div>
          <span class="text-xl font-bold mb-[10px] ml-5">其他费用信息</span>
          <Table :columns="hang" :data-source="lie" class="ml-5 text-center">
            <template #name="{ text }">
              <a>{{ text }}</a>
            </template>
          </Table>
          <span class="text-xl font-bold mb-[10px] ml-5">其他费用信息</span>
          <div class="flex flex-wrap justify-around">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">合约归属门店(部门)</span>
              <span>公寓测试部门</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">合约维护人</span>
              <span>刘清晨-13237158815</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">签约人</span>
              <span>程贝-1334996869</span>
            </div>
            <div class="flex flex-col w-1/5 pl-2 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">签约时间</span>
              <span> 2023.1.28 </span>
            </div>
          </div>
          <div class="flex mt-3 border-gray-400 border-dashed border-t-1">
            <div class="text-xs mb-[2px] text-gray-400">程贝创建于2023年1月28号 15:03</div>
            <div
              class="text-xs mb-[2px] text-gray-400 border-l-1 border-gray-400 border-dashed pl-5 ml-5"
              >程贝更新于2023年1月28号 15:03</div
            >
          </div>
        </TabPane>
        <TabPane key="3">
          <template #tab>
            <span>
              <Icon icon="ri:building-fill" />
              物业交割单
            </span>
          </template>
          暂无数据！
        </TabPane>
        <TabPane key="4">
          <template #tab>
            <span>
              <Icon icon="fluent-mdl2:page-list-filter" />
              账单信息
            </span>
          </template>
          暂无数据！
        </TabPane>
      </Tabs>
    </Col>
    <Col :span="8" class="border-gray-400 border-solid border-l-5">
      <div class="flex justify-between ml-5">
        <div class="flex">
          <div class="bg-blue-100 w-[35px] h-[35px] rounded-full pl-1 mt-2">
            <Icon icon="fa-solid:paper-plane" style="color: #0083ff" class="mt-[7px] ml-[4px]" />
          </div>
          <div class="flex flex-col mt-2 ml-2">
            <span>发起申请</span>
            <span class="text-xs mb-[2px] text-gray-400">程贝</span>
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
              >三人会签<span class="text-yellow-400">(审批中...)</span></span
            >
            <div class="flex">
              <div
                class="w-[50px] h-[25px] bg-gray-100 text-sm flex items-center justify-center mr-1"
                >程贝
              </div>
              <div
                class="w-[50px] h-[25px] bg-gray-100 text-sm flex items-center justify-center mr-1"
                >刘清晨
              </div>
              <div
                class="w-[50px] h-[25px] bg-gray-100 text-sm flex items-center justify-center mr-1"
                >童琴</div
              >
            </div>
            <div
              class="h-[35px] border-l-2 border-dashed border-blue-100 absolute left-[35px] top-[40px]"
            ></div>
          </div>
        </div>
      </div>
    </Col>
  </Row>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  // import { Row, Col, TabPane, Tabs, Table } from 'ant-design-vue';
  // import { hang, lie } from './table';
  import Icon from '/@/components/Icon/src/Icon.vue';

  const activeKey = ref('2');
</script>
