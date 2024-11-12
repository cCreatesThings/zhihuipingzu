import { ref } from 'vue';
import { ColumnProps } from 'ant-design-vue/es/table/interface';
// 流水明细表格数据
export const boxh = ref([
  {
    title: '费用科目',
    dataIndex: 'subject',
    key: 'subject',
  },
  {
    title: '金额',
    dataIndex: 'amount',
    key: 'amount',
    scopedSlots: { customRender: 'amount' },
  },
  {
    title: '费用周期',
    dataIndex: 'period',
    key: 'period',
  },
]);

export const boxl = ref([
  {
    key: '1',
    subject: '房屋押金',
    amount: -6000,
    period: '2023.02.06 - 2023.08.05',
  },
  {
    key: '2',
    subject: '费用合计',
    amount: -6000,
    period: '',
  },
]);

export const lie = ref([
  { age: '暂无数据' },
  // ... 你的数据
]);

const renderContent = ({ text, index }: any) => {
  const obj = {
    children: text,
    props: {} as any,
  };
  if (index === 4) {
    obj.props.colSpan = 0;
  }
  return obj;
};

export const hang: ColumnProps[] = [
  {
    title: '费用项',
    dataIndex: 'name',
    // customRender: ({ text, index }) => {
    //   if (index < 4) {
    //     return h('a', { href: 'javascript:;' }, text);
    //   }
    //   return {
    //     children: h('a', { href: 'javascript:;' }, text),
    //     props: {
    //       colSpan: 5,
    //     },
    //   };
    // },
  },
  {
    title: '付款方式',
    dataIndex: 'age',
    customRender: renderContent,
  },
  {
    title: '全额',
    dataIndex: 'address',
    customRender: renderContent,
  },
];
