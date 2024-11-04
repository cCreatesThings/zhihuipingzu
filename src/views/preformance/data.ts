export const columns = [
  { title: '序号', dataIndex: 'id', width: 60 },
  { title: '企业名称', dataIndex: 'enterpriseName' },
  { title: '租赁提成标准', dataIndex: 'rentIntent' },
  { title: '所属行业', dataIndex: 'industry' },
  { title: '房号', dataIndex: 'address', width: 300 },
  { title: '签约时间', dataIndex: 'signTime' },
  { title: '签约面积', dataIndex: 'area' },
  { title: '签约单价', dataIndex: 'pricePerSquareMeter' },
  { title: '合同起止时间', dataIndex: 'contractPeriod', width: 249 },
  { title: '首月租金', dataIndex: 'monthlyRent' },
  { title: '租金保证金金额', dataIndex: 'rentDeposit' },
  { title: '实际到账时间', dataIndex: 'paymentTime' },
  { title: '应收押金', dataIndex: 'receivableDeposit' },
  { title: '实收押金', dataIndex: 'receivedDeposit' },
  { title: '招商人员姓名', dataIndex: 'recruitmentPerson' },
  { title: '应提成总额', dataIndex: 'dueAmount' },
  { title: '已发放提成金额', dataIndex: 'amountRecovered' },
  {
    title: '操作',
    dataIndex: 'action',
    fixed: 'right',
    slots: { customRender: 'action' },
  },
];
