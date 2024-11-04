import { ref } from 'vue';
import { TableColumnType } from '/#/investment-data';

export const columns = ref<TableColumnType[]>([
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '电话',
    dataIndex: 'phone',
    key: 'phone',
  },
  {
    title: '招商人员',
    dataIndex: 'waiter',
    key: 'waiter',
  },
  {
    title: '意向类型',
    dataIndex: 'intention',
    key: 'intention',
  },
  {
    title: '客户认知途径',
    dataIndex: 'customerCognitiveApproach',
    key: 'customerCognitiveApproach',
  },
  {
    title: '最近一次联系时间',
    dataIndex: 'lastContactTime',
    key: 'lastContactTime',
  },
  {
    title: '下次跟进时间',
    dataIndex: 'dateNextFollowup',
    key: 'dateNextFollowup',
  },
  {
    title: '创建日期',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    slots: { customRender: 'status' },
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
    slots: { customRender: 'action' },
  },
]);
