<template>
  <div class="bg-gradient-to-b from-blue-500 to-white w-[100%] h-[100%]" style="padding: 1vw">
    <div style="background-color: white; height: 100%; width: 100%; border-radius: 0.5vw">
      <div style="background-color: gainsboro; padding: 1vw; border-radius: 0.5vw">
        <Row :gutter="[5]">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <AccountingLedger @click="toggleDialog" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <LeaseLedger @click="toggleD" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <Outstanding @click="toggleA" />
          </Col>
        </Row>
        <Row :gutter="[5]" style="margin-top: 10px">
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <investmentpromotion @click="toggleB" />
          </Col>
          <Col :xs="{ span: 24 }" :sm="{ span: 8 }" :md="{ span: 8 }">
            <InvestmentCustome @click="toggleC" />
          </Col>
        </Row>
      </div>
    </div>
    <Modal
      :visible="isDialogOpen"
      @update:visible="toggleDialog"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <DialogContent />
    </Modal>
    <Modal
      :visible="isLedgePage"
      @update:visible="toggleD"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <LedgePage />
    </Modal>
    <Modal
      :visible="isOutData"
      @update:visible="toggleA"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <OutData />
    </Modal>
    <Modal
      :visible="isinvestPage"
      @update:visible="toggleB"
      :width="'80%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <investPage />
    </Modal>
    <Modal
      :visible="isPortrait"
      @update:visible="toggleC"
      :width="'98%'"
      :style="{ top: '10vh' }"
      :footer="null"
    >
      <Portrait />
    </Modal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Col, Row, Modal } from 'ant-design-vue';
  import 'ant-design-vue/dist/antd.css';
  import AccountingLedger from '/@/views/dataAnalysis/components/AccountingLedger/AccountingLedger.vue';
  import Outstanding from '/@/views/dataAnalysis/components/Outstanding/Outstanding.vue';
  import LeaseLedger from '/@/views/dataAnalysis/components/LeaseLedger/LeaseLedger.vue';
  import investmentpromotion from '/@/views/dataAnalysis/components/investmentpromotion/investmentpromotion.vue';
  import InvestmentCustome from '/@/views/dataAnalysis/components/InvestmentCustome/InvestmentCustome.vue';
  import DialogContent from '/@/views/dataAnalysis/components/AccountingLedger/index.vue'; // 引入 DialogContent 组件
  import LedgePage from '/@/views/dataAnalysis/components/LeaseLedger/index.vue';
  import OutData from '/@/views/dataAnalysis/components/Outstanding/index.vue';
  import investPage from '/@/views/dataAnalysis/components/investmentpromotion/index.vue';
  import Portrait from '/@/views/dataAnalysis/components/InvestmentCustome/index.vue';
  const isDialogOpen = ref(false);

  const toggleDialog = () => {
    isDialogOpen.value = !isDialogOpen.value;
  };
  const isLedgePage = ref(false);

  const toggleD = () => {
    isLedgePage.value = !isLedgePage.value;
  };
  const isOutData = ref(false);

  const toggleA = () => {
    isOutData.value = !isOutData.value;
  };
  const isinvestPage = ref(false);

  const toggleB = () => {
    isinvestPage.value = !isinvestPage.value;
  };
  const isPortrait = ref(false);

  const toggleC = () => {
    isPortrait.value = !isPortrait.value;
  };
</script>

<style></style>
