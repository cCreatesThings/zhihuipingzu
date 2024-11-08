<script setup lang="ts">
  import { DownOutlined } from '@ant-design/icons-vue';
  import { PerformanceRoyaltyDetailsType } from '/#/performance';
  import { ref } from 'vue';

  defineProps<{
    record: PerformanceRoyaltyDetailsType;
  }>();

  // 切换显示提成发放记录的展开和收起
  const toggleShowRoyaltyRelease = ref(true);
  const toggleShowRoyaltyReleaseHandle = () => {
    toggleShowRoyaltyRelease.value = !toggleShowRoyaltyRelease.value;
  };
</script>

<template>
  <div class="roomAddress bg-[#e6f3fe] h-[30px] leading-[15px] rounded-md p-2">
    {{ record?.address }}
  </div>
  <div class="container p-[10px]">
    <div>
      <div class="contractInfo mt-[10px] border-b-2 border-dashed border-[#e6e6e6]">
        <h3 class="text-[16px] font-bold">合约信息</h3>
        <ul class="flex gap-[10px] justify-between mt-[10px]">
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">月租金</span>
            <span>{{ record?.monthlyRent }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">押金</span>
            <span>{{ record?.receivableDeposit }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">付款方式</span>
            <span>{{ '押一付一' }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">合同周期</span>
            <span>{{ record?.contractPeriod }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-[15px] p-[10px] border-2 border-solid border-[#e6e6e6]">
      <h3 class="text-[16px] font-bold">提成分佣信息</h3>
      <div class="flex justify-between mt-[10px]">
        <ul
          class="flex gap-[10px] w-[100%] justify-between h-[53px] pb-[45px] pl-[10px] pr-[10px] pt-[10px] border-b-2 border-dashed"
        >
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">分佣人员</span>
            <span>{{ record?.recruitmentPerson }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">分佣职务</span>
            <span>{{ record?.industry }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">提成总额</span>
            <span>{{ record?.dueAmount }}</span>
          </li>
          <li class="flex justify-between flex-col">
            <span class="text-[13px] font-bold mb-[5px]">已发放提成</span>
            <span>{{ record?.amountRecovered }}</span>
          </li>
        </ul></div
      >
      <div class="mt-[10px]">
        <div class="text-[15px] cursor-pointer flex" @click="toggleShowRoyaltyReleaseHandle">
          <DownOutlined
            class="rotate-transition"
            :class="{ 'rotate-180': toggleShowRoyaltyRelease }"
          />
          <!-- <UpOutlined v-else /> -->
          <div class="flex ml-[10px]">
            <Icon icon="line-md:file-filled" /> <span>提成发放记录</span>
          </div>
        </div>
        <div
          class="fileList"
          :class="{ show: toggleShowRoyaltyRelease, hide: !toggleShowRoyaltyRelease }"
        >
          <div>
            <p class="pl-[50px] h-[6px]"
              ><Icon class="inline" icon="bitcoin-icons:file-outline" /> 第二次发放金额:{{
                record?.amountRecovered
              }}元, 发放时间: {{ record?.contractPeriod.split('~')[1] }}, 备注:{{ 'xxx' }}</p
            >
            <p class="pl-[50px] h-[6px]"
              ><Icon class="inline" icon="bitcoin-icons:file-outline" /> 第一次发放金额:{{
                record?.rentDeposit
              }}元, 发放时间: {{ record?.contractPeriod.split('~')[0] }}, 备注:{{ 'xxx' }}</p
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  ul li {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .fileList {
    overflow: hidden;
    transition: all 0.5s;
  }
  .show {
    height: 50px;
  }
  .hide {
    height: 0;
  }
  .rotate-transition {
    transition: all 0.5s;
  }
  .rotate-180 {
    transform: rotate(-180deg);
  }
</style>
