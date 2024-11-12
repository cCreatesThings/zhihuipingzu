<template>
  <div class="bor">
    <div class="border-2 border-black-900 rounded-[3px] w-[500px]">
      <ImagePage />
    </div>
    <div class="mt-[30px]">
      <ImagePageS />
    </div>
  </div>
</template>
<script setup>
  import ImagePage from '/@/views/dataAnalysis/components/LeaseLedger/ImagePage.vue';
  import ImagePageS from '/@/views/dataAnalysis/components/LeaseLedger/ImagePageS.vue';
</script>
