/** 租赁提成明细 */
export const columnsDetail = [
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

/** 租赁提成汇总 */
export const columnsTotal = [
  {
    title: '序号',
    dataIndex: 'id',
    width: 60,
    slots: { customRender: 'id' },
  },
  {
    title: '分销人员',
    dataIndex: 'employee',
    width: 150,
  },
  {
    title: '分销编号',
    dataIndex: 'employeeId',
    width: 120,
  },
  {
    title: '房源',
    dataIndex: 'property',
    width: 120,
  },
  {
    title: '行业内/商业',
    children: [
      {
        title: '3年以上（首月租金）',
        dataIndex: 'industry_above_3_amount',
        width: 150,
      },
      {
        title: '提成比例',
        dataIndex: 'industry_above_3_percentage',
        width: 100,
      },
      {
        title: '3年以内（首月租金）',
        dataIndex: 'industry_below_3_amount',
        width: 150,
      },
      {
        title: '提成比例',
        dataIndex: 'industry_below_3_percentage',
        width: 100,
      },
    ],
  },
  {
    title: '行业外',
    children: [
      {
        title: '签约面积',
        dataIndex: 'external_area',
        width: 100,
      },
      {
        title: '提成比例',
        dataIndex: 'external_percentage',
        width: 100,
      },
    ],
  },
  {
    title: '提成目标完成时间',
    dataIndex: 'completion_date',
    width: 150,
  },
  {
    title: '租金总租金',
    dataIndex: 'total_rent',
    width: 120,
  },
  {
    title: '托管总额',
    dataIndex: 'trust_amount',
    width: 120,
  },
  {
    title: '此次发放总额',
    dataIndex: 'current_payment',
    width: 120,
  },
];

export // columns 字段，定义了表格的列和它们的属性
const columnsRecord = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: '房源信息',
    dataIndex: 'roomInfo',
    key: 'roomInfo',
    slots: { customRender: 'roomInfo' },
  },
  {
    title: '合同周期',
    dataIndex: 'contractPeriod',
    key: 'contractPeriod',
  },
  {
    title: '总提成金额(元)',
    dataIndex: 'totalCommission',
    key: 'totalCommission',
  },
  {
    title: '已发放提成金额(元)',
    dataIndex: 'distributedCommission',
    key: 'distributedCommission',
  },
  {
    title: '最近发放时间',
    dataIndex: 'lastDistributionTime',
    key: 'lastDistributionTime',
  },
];

// 按分佣人员
export const columnsPerson = [
  {
    title: '序号',
    dataIndex: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: '分佣人员',
    dataIndex: 'commissioner',
    key: 'commissioner',
  },
  {
    title: '分佣职务',
    dataIndex: 'position',
    key: 'position',
  },
  {
    title: '房源信息',
    dataIndex: 'roomInfo',
    key: 'roomInfo',
    slots: { customRender: 'roomInfo' },
    width: 300,
  },
  {
    title: '合同周期',
    dataIndex: 'contractPeriod',
    key: 'contractPeriod',
  },
  {
    title: '提成金额(元)',
    dataIndex: 'commissionAmount',
    key: 'commissionAmount',
  },
  {
    title: '逾期应扣款(元)',
    dataIndex: 'overdueDeduction',
    key: 'overdueDeduction',
  },
  {
    title: '发放金额(元)',
    dataIndex: 'distributedAmount',
    key: 'distributedAmount',
  },
  {
    title: '发放时间',
    dataIndex: 'distributionTime',
    key: 'distributionTime',
  },
];
