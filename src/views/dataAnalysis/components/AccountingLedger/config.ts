export default {
  columns: [
    {
      title: '序号',
      dataIndex: 'id',
      key: '',
    },
    {
      title: '项目名称',
      dataIndex: 'name',
      key: '',
    },
    {
      title: '分期',
      dataIndex: 'bystages',
      key: '',
    },
    {
      title: '楼栋号',
      dataIndex: 'buildings',
      key: '',
    },
    {
      title: '房间号',
      dataIndex: 'room',
      key: '',
      // slots: { customRender: 'status' },
    },
    {
      title: '合同甲方名称',
      dataIndex: 'ContractPartyA',
      key: '',
    },
    {
      title: '合同编号',
      dataIndex: 'Contractnumber',
      key: '',
    },
    {
      title: '客户名称',
      dataIndex: 'client',
      key: '',
    },
    {
      title: '签约日期',
      dataIndex: 'Dateofcontract',
      key: '',
    },
    {
      title: '合同面积（㎡）',
      dataIndex: 'Contractarea',
      key: '',
      // slots: { customRender: 'channel' },
    },
    {
      title: '租金单价（元/㎡/月）',
      dataIndex: 'Unitpriceofrent',
      key: '',
    },
    {
      title: '租期（年）',
      dataIndex: 'lease',
      key: '',
      // slots: { customRender: 'operation' },
    },
    {
      title: '合同起始日',
      dataIndex: 'Contractstartdate',
      key: '',
      // slots: { customRender: 'operation' },
    },
    {
      title: '合同到期日',
      dataIndex: 'Contractexpirationdate',
      key: '',
    },
    {
      title: '应收履约保证金时间',
      dataIndex: 'Performancebondtime',
      key: '',
    },
    {
      title: '应收履约保证金金额（元）',
      dataIndex: 'Performancebonds',
      key: '',
    },
    {
      title: '已收履约保证金时间',
      dataIndex: 'Performancebondtime',
      key: '',
    },
    {
      title: '已收履约保证金金额（元）',
      dataIndex: 'ReceivedPerformancebonds',
      key: '',
    },

    {
      title: '装修免租期（天）',
      dataIndex: 'Rent-free period',
      key: '',
    },
    {
      title: '合同应收租金总额（元）',
      dataIndex: 'Totalrent',
      key: '',
    },
    {
      title: '租金税率',
      dataIndex: 'Rentaltaxrate',
      key: '',
    },
    {
      title: '截止当前应收租金金额（元）',
      dataIndex: '',
      key: '',
    },
    {
      title: '截止当前已收租金金额（元）',
      dataIndex: 'Currentrentalamount',
      key: '',
    },
    {
      title: '截止当前欠缴租金金额（元）',
      dataIndex: 'Rentarrearsareclosed',
      key: '',
    },
    {
      title: '截至当前开具发票时间',
      dataIndex: '',
      key: '',
    },
    {
      title: '截至当前已开具发票时间',
      dataIndex: 'Asofthetimeofinvoice',
      key: '',
    },
    {
      title: '已开发票对应租金周期',
      dataIndex: 'Invoicedcorrespondstotherentalperiod',
      key: '',
    },
    {
      title: '截止2023年x-1季度累计已确认收入 （元）',
      dataIndex: 'data2023',
      key: '',
    },
    {
      title: '2023年当年x-1季度累计已确认收入 （元）',
      dataIndex: 'data2023x-1',
      key: '',
    },
    {
      title: '2023年3月确认收入 （元）',
      dataIndex: 'data-3',
      key: '',
    },
    {
      title: '2023年6月确认收入 （元）',
      dataIndex: 'data-6',
      key: '',
    },
    {
      title: '2023年9月确认收入 （元）',
      dataIndex: 'data-9',
      key: '',
    },
    {
      title: '2023年12月确认收入 （元）',
      dataIndex: 'data-12',
      key: '',
    },
    {
      title: '租金减免额度（月）',
      dataIndex: '',
      key: '',
    },
    {
      title: '租金减免总金额（元）',
      dataIndex: 'Rentreliefamount',
      key: '',
    },
    {
      title: '租金减免应冲减收入（元）',
      dataIndex: 'Rentreliefamount-m',
      key: '',
    },
    {
      title: '租金减免已冲减收入（元）',
      dataIndex: 'Relief',
      key: '',
    },
    {
      title: '提前退租时间',
      dataIndex: 'Earlyexittime',
      key: '',
    },

    {
      title: '提前退租收取违约金应确认收入（元）',
      dataIndex: '',
      key: '',
    },
    {
      title: '提前退租收取违约金已确认收入（元）',
      dataIndex: 'Revenueerecognizeddamages',
      key: '',
    },
    {
      title: '合同是否在执行中',
      dataIndex: 'ContractExecution',
      key: '',
    },

    {
      title: '解除合同时间',
      dataIndex: 'Terminationcontract',
      key: '',
    },
  ],
  dataSource: [
    {
      id: '',
      name: '',
    },
  ],
};
