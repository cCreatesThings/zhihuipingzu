<template>
  <Row>
    <Col :span="16"
      ><div class="bg-[#e0f5ff] pl-[15px] leading-[35px] h-[35px] text-gray-500"
        >px 房源地址:T005 /武汉市硚口区测试楼栋(测试数据)B1栋2单元-510室
      </div>
      <div class="flex justify-around mt-3 ml-3">
        <div class="flex">
          <div class="bg-blue-100 w-[25px] h-[25px] rounded-full pl-1 mt-2">
            <Icon icon="fontisto:person" style="color: #0083ff" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">租客信息</span>
            <span>小阿飞-1334996869</span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-orange-200 w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="mdi:house-flash" style="color: #ff9300" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">付款金额</span>
            <span>6000 </span>
          </div>
        </div>
        <div class="flex ml-7">
          <div class="bg-orange-200 w-[25px] h-[25px] rounded-full pl-1 pt-[2px] mt-2">
            <Icon icon="mingcute:bank-card-fill" style="color: #ff9300" />
          </div>
          <div class="flex flex-col ml-2">
            <span class="text-xs mb-[2px] text-gray-400">费用摘要</span>
            <span>房屋租金</span>
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
        <!-- 合同信息 -->
        <TabPane key="2">
          <template #tab>
            <span>
              <Icon icon="bi:person-lines-fill" />
              支付详情
            </span>
          </template>
          <div class="flex flex-wrap justify-around">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">收款人姓名</span>
              <span>小阿飞</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">收款人电话</span>
              <span>1212312345</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">收款人账号</span>
              <span>-</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">付款金额</span>
              <span> 6000 </span>
            </div>
          </div>
          <div class="flex flex-wrap justify-around mt-5">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">付款途径</span>
              <span>现金</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">费用摘要</span>
              <span>房屋租金</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">付款确认人</span>
              <span>程贝</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">付款确认人</span>
              <span> 2023.2.16 17:36 </span>
            </div>
          </div>
          <div class="flex flex-wrap justify-around mt-5">
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">交易流水号</span>
              <span>-</span>
            </div>
            <div class="flex flex-col w-1/5 ml-2">
              <span class="text-xs mb-[2px] text-gray-400">操作时间</span>
              <span> 2023.2.16 17:36 </span></div
            >
            <div class="flex flex-col w-1/5 ml-2"> </div>
            <div class="flex flex-col w-1/5 ml-2"> </div>
          </div>
          <div class="ml-[23px] flex flex-col mt-5">
            <span class="text-xs mb-[2px] text-gray-400">支付备注</span>
            <span> - </span>
          </div>
          <div class="ml-[23px] flex flex-col mt-5">
            <span class="text-xs mb-[2px] text-gray-400">支付凭证</span>
            <div class="w-[50px] h-[40px] bg-gray-400">
              <img src="../../../../assets/images/colef.jpg" alt="" />
            </div>
          </div>
          <div>
            <div class="text-xl font-bold mb-[10px] ml-5 border-l-3 border-[#009cff] mt-5 pl-2"
              >流水明细</div
            >
            <Table :columns="boxh" :dataSource="boxl" :pagination="{ showQuickJumper: false }">
              <template #amount="{ text }">
                <span :style="{ color: text < 0 ? 'red' : 'black' }">{{ text }}元</span>
              </template>
            </Table>
          </div>
          <div class="flex mt-3 border-gray-400 border-dashed border-t-1">
            <div class="text-xs mb-[2px] text-gray-400">程贝创建于2023年1月28号 15:03</div>
            <div
              class="text-xs mb-[2px] text-gray-400 border-l-1 border-gray-400 border-dashed pl-5 ml-5"
              >程贝更新于2023年1月28号 15:03</div
            >
          </div>
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
  import { Row, Col, Table, Tabs, TabPane } from 'ant-design-vue';
  import { boxh, boxl } from './table';
  import Icon from '/@/components/Icon';
</script>
