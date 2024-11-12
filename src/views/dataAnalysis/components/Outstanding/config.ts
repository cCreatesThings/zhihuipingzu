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
      title: '房间号',
      dataIndex: 'room',
      key: '',
    },
    {
      title: '客户名称',
      dataIndex: 'customer',
      key: '',
    },
    {
      title: '合同面积（㎡）',
      dataIndex: 'Contractarea',
      key: '',
    },
    {
      title: '合同起始时间',
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
      title: '押金（元）',
      dataIndex: 'deposit',
      key: '',
    },
    {
      title: '应收租金（元）',
      dataIndex: 'Rentreceivable',
      key: '',
    },
    {
      title: '实收租金（元）',
      dataIndex: 'Paiduprent',
      key: '',
    },
    {
      title: '拖欠租金（元）',
      dataIndex: 'Rentarrears',
      key: '',
    },
    {
      title: '应回款节点',
      dataIndex: 'Payment',
      key: '',
    },
    {
      title: '逾期天数',
      dataIndex: 'Late',
      key: '',
    },
    {
      title: '催款进度',
      dataIndex: 'Dunning',
      key: '',
    },
    {
      title: '措施',
      dataIndex: 'measure',
      key: '',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: '',
    },
  ],
  dataSource: [
    {
      id: '',
      name: '',
      room: '',
      customer: '',
      Contractarea: '',
      Contractstartdate: '',
      Contractexpirationdate: '',
      deposit: '',
    },
  ],
};
