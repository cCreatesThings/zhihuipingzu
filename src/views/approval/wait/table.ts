import { ref } from 'vue';
import { ColumnProps } from 'ant-design-vue/es/table/interface';
// import { h } from 'vue';

// 页面表格数据
export const columns = ref([
  {
    title: '序号',
    key: 'serial',
    slots: { customRender: 'serial' },
    scopedSlots: { customRender: 'serial' },
  },
  {
    title: '审批状态',
    dataIndex: 'status',
    key: 'status',
    slots: { customRender: 'status' },
  },
  {
    title: '审批类型',
    dataIndex: 'type',
    key: 'type',
    slots: { customRender: 'type' },
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    slots: { customRender: 'title' },
  },
  {
    title: '内容',
    dataIndex: 'content',
    key: 'content',
    slots: { customRender: 'content' },
  },
  {
    title: '发起人',
    dataIndex: 'initiator',
    key: 'initiator',
    slots: { customRender: 'initiator' },
  },
  {
    title: '发起时间',
    dataIndex: 'initiatedAt',
    key: 'initiatedAt',
    slots: { customRender: 'initiatedAt' },
  },
  {
    title: '操作',
    key: 'action',
    slots: { customRender: 'action' },
  },
]);

export const data = ref([
  {
    key: '1',
    status: '程贝等三人审批中',
    type: '租客签约（电子合同）',
    title: '【换签】租客签约（电子合同）审批：测试楼栋(测试数据)...',
    content: '租客:林志志-13349968696;房屋地址:测试楼栋...',
    initiator: '程贝',
    initiatedAt: '2023.01.28 15:03:32',
  },
  {
    key: '2',
    status: '李博杰审批中',
    type: '租客签约（电子合同）',
    title: '【换签】租客签约（电子合同）审批：测试楼栋(测试数据)...',
    content: '租客:林志志-13349968696;房屋地址:测试楼栋...',
    initiator: '李博杰',
    initiatedAt: '2023.01.28 15:03:32',
  },
  {
    key: '3',
    status: '逻辑杨已审批',
    type: '租客签约（电子合同）',
    title: '【换签】租客签约（电子合同）审批：测试楼栋(测试数据)...',
    content: '租客:林志志-13349968696;房屋地址:测试楼栋...',
    initiator: '逻辑杨',
    initiatedAt: '2023.01.28 15:03:32',
  },
]);

// 对话框表格数据
export const col = ref([
  {
    title: '序号',
    dataIndex: 'numb',
    key: 'numb',
    slots: { customRender: 'numb' },
  },
  {
    title: '城市/区域',
    dataIndex: 'city',
    key: 'city',
    ellipsis: true,
  },
  {
    title: '房源地址',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: '原价',
    dataIndex: 'prices',
    key: 'prices',
    ellipsis: true,
  },
  {
    title: '调价后',
    dataIndex: 'sell',
    key: 'sell',
    ellipsis: true,
  },
  {
    title: '所属门店（部门）',
    dataIndex: 'department',
    key: 'department',
    ellipsis: true,
  },
  {
    title: '维护人',
    dataIndex: 'person',
    key: 'person',
    ellipsis: true,
  },
]);

export const some = ref([
  {
    key: '1',
    numb: '1',
    city: '武汉市/硚口区',
    address: '测试楼栋(测试数据)B1栋2单元-510室',
    prices: '0',
    sell: '0',
    department: '公寓测试门店',
    person: '刘清晨/13237158815',
  },
  {
    key: '1',
    numb: '2',
    city: '武汉市/硚口区',
    address: '测试楼栋(测试数据)B1栋2单元-510室',
    prices: '0',
    sell: '0',
    department: '公寓测试门店',
    person: '刘清晨/13237158815',
  },
  {
    key: '1',
    numb: '3',
    city: '武汉市/硚口区',
    address: '测试楼栋(测试数据)B1栋2单元-510室',
    prices: '0',
    sell: '0',
    department: '公寓测试门店',
    person: '刘清晨/13237158815',
  },
]);
// 暂无数据
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
