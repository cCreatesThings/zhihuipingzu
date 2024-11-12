<template>
  <div class="flex">
    <div class="border-2 border-black-900 rounded-[3px]">
      <ImagePage />
    </div>
    <div class="border-2 border-black-900 rounded-[3px] ml-[20px]">
      <ImagePageS />
    </div>
  </div>
  <div class="mt-[30px]">
    <ImagePageA />
  </div>
</template>
<script setup>
  import ImagePage from '/@/views/dataAnalysis/components/Outstanding/ImagePage.vue';
  import ImagePageS from '/@/views/dataAnalysis/components/Outstanding/ImagePageS.vue';
  import ImagePageA from '/@/views/dataAnalysis/components/Outstanding/ImagePageA.vue';
</script>
