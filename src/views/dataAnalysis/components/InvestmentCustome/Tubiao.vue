<template>
  <!-- 1 -->
  <div class="flex">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">科技园月度客户组数对比</div>
        <div class="mr-[20px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value1"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">新增客户</SelectOption>
            <SelectOption value="lucy">来访客户</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePage />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">各项目客户占比</div>
        <div class="mr-[20px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value1"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">新增客户</SelectOption>
            <SelectOption value="lucy">来访客户</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageA />
    </div>
  </div>
  <!-- 2 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex">
        <div class="font-bold ml-[10px] mt-[20px]">客户来源渠道大类占比</div>
        <div class="ml-[380px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value1"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">新增客户</SelectOption>
            <SelectOption value="lucy">来访客户</SelectOption>
          </Select>
        </div>
        <div class="ml-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value2"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">选择渠道</SelectOption>
            <SelectOption value="lucy">渠道1</SelectOption>
            <SelectOption value="lucy">渠道2</SelectOption>
            <SelectOption value="lucy">渠道3</SelectOption>
            <SelectOption value="lucy">渠道4</SelectOption>
            <SelectOption value="lucy">渠道5</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageB />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex">
        <div class="font-bold ml-[10px] mt-[20px]">客户来源渠道小类占比</div>
        <div class="ml-[380px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value1"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">新增客户</SelectOption>
            <SelectOption value="lucy">来访客户</SelectOption>
          </Select>
        </div>
        <div class="ml-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value2"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">选择渠道</SelectOption>
            <SelectOption value="lucy">渠道1</SelectOption>
            <SelectOption value="lucy">渠道2</SelectOption>
            <SelectOption value="lucy">渠道3</SelectOption>
            <SelectOption value="lucy">渠道4</SelectOption>
            <SelectOption value="lucy">渠道5</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageA />
    </div>
  </div>
  <!-- 3 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div>
        <div class="font-bold ml-[10px] mt-[20px]">客户意向级别占比</div>
      </div>
      <ImagePageC />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div>
        <div class="font-bold ml-[10px] mt-[20px]">科技园月度成交客户组数</div>
      </div>
      <ImagePage />
    </div>
  </div>
  <!-- 4 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">行业成交客户占比</div>
        <div class="mr-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value3"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">选择行业</SelectOption>
            <SelectOption value="lucy">行业1</SelectOption>
            <SelectOption value="lucy">行业2</SelectOption>
            <SelectOption value="lucy">行业3</SelectOption>
            <SelectOption value="lucy">行业4</SelectOption>
            <SelectOption value="lucy">行业5</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageD />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">渠道大类成交客户占比</div>
        <div class="mr-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value2"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">选择渠道</SelectOption>
            <SelectOption value="lucy">渠道1</SelectOption>
            <SelectOption value="lucy">渠道2</SelectOption>
            <SelectOption value="lucy">渠道3</SelectOption>
            <SelectOption value="lucy">渠道4</SelectOption>
            <SelectOption value="lucy">渠道5</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageB />
    </div>
  </div>
  <!-- 5 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">渠道小类成交客户占比</div>
        <div class="mr-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value2"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">选择渠道</SelectOption>
            <SelectOption value="lucy">渠道1</SelectOption>
            <SelectOption value="lucy">渠道2</SelectOption>
            <SelectOption value="lucy">渠道3</SelectOption>
            <SelectOption value="lucy">渠道4</SelectOption>
            <SelectOption value="lucy">渠道5</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageA />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex">
        <div class="font-bold ml-[10px] mt-[20px]">客户成交周期占比</div>
      </div>
      <ImagePageG />
    </div>
  </div>
  <!-- 6 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div>
        <div class="font-bold ml-[10px] mt-[20px]">客户成交面积占比</div>
      </div>
      <ImagePageF />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div class="flex justify-between">
        <div class="font-bold ml-[10px] mt-[20px]">各项目渠道新增客户对比</div>
        <div class="mr-[10px] mt-[20px]">
          <Select
            ref="select"
            v-model:value="value1"
            style="width: 120px"
            @focus="focus"
            @change="handleChange"
          >
            <SelectOption value="jack">新增客户</SelectOption>
            <SelectOption value="lucy">来访客户</SelectOption>
          </Select>
        </div>
      </div>
      <ImagePageE />
    </div>
  </div>
  <!-- 7 -->
  <div class="flex mt-[30px]">
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div>
        <div class="font-bold ml-[10px] mt-[20px]">新增客户转化比（项目）</div>
      </div>
      <ImagePageH />
    </div>
    <div class="border-2 border-black-700 w-[800px] h-[350px] rounded-[10px] ml-[20px]">
      <div>
        <div class="font-bold ml-[10px] mt-[20px]">新增客户转化比（渠道）</div>
      </div>
      <ImagePageH />
    </div>
  </div>
</template>
<script setup>
  import ImagePageA from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageA.vue';
  import ImagePage from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePage.vue';
  import ImagePageB from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageB.vue';
  import ImagePageC from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageC.vue';
  import ImagePageD from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageD.vue';
  import ImagePageE from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageE.vue';
  import ImagePageF from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageF.vue';
  import ImagePageG from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageG.vue';
  import ImagePageH from '/@/views/dataAnalysis/components/InvestmentCustome/ImagePageH.vue';
  import { Select, SelectOption } from 'ant-design-vue';
  import { ref } from 'vue';

  const value1 = ref('新增客户');
  const value2 = ref('选择渠道');
  const value3 = ref('选择行业');
</script>
