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
      title: '年度任务',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
      ],
      dataIndex: 'AnnualMission',
      key: '',
      // customCell: (record) => {
      //   return {
      //     style: {
      //       backgroundColor: '#f0f0f0', // 你可以选择你想要的颜色
      //     },
      //   };
      // },
    },
    {
      title: '年度完成情况/占比',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
      ],
      dataIndex: 'AnnualCompletion',
      key: '',
    },
    {
      title: '一季度目标',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
      ],
      dataIndex: 'Q1target',
      key: '',
    },
    {
      title: '一季度完成情况/占比',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
      ],
      dataIndex: 'CompletionProportion',
      key: '',
    },

    {
      title: '二季度目标',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
      ],
      dataIndex: 'Q2target',
      key: '',
    },
    {
      title: '二季度完成情况/占比',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
      ],
      dataIndex: 'secondCompletionPercentage',
      key: '',
    },
    {
      title: '三季度目标',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
      ],
      dataIndex: 'Q3target',
      key: '',
    },
    {
      title: '三季度完成情况/占比',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
      ],
      dataIndex: 'ThreeCompletionPercentage',
      key: '',
    },
    {
      title: '四季度目标',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
      ],
      dataIndex: 'Q4target',
      key: '',
    },
    {
      title: '四季度完成情况/占比',
      children: [
        {
          title: '租赁面积（㎡）',
          dataIndex: 'Leasedarea',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
        {
          title: '租赁回款（万元）',
          dataIndex: 'Leaserepayment',
          key: '',
        },
        {
          title: '占比',
          dataIndex: 'Percentage',
          key: '',
        },
      ],
      dataIndex: 'FourCompletionPercentage',
      key: '',
    },
  ],
  columnsroom: [
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
      title: '可租面积（㎡',
      dataIndex: 'Rentablearea',
      key: '',
    },
    {
      title: '出租率目标（%）',
      dataIndex: 'Occupancytarget',
      key: '',
    },
    {
      title: '出租面积目标（㎡）',
      dataIndex: 'RentalAreaTarget',
      key: '',
    },
    {
      title: '2023-03-01 至 2023-03-31 完成情况',
      children: [
        {
          title: '累计已出租面积（㎡）',
          dataIndex: 'Cumulativeleasedarea',
          key: '',
        },
        {
          title: '出租率（%）',
          dataIndex: 'Occupancyrate',
          key: '',
        },
        {
          title: '比较上月净增面积（㎡）',
          dataIndex: 'Comparemonth',
          key: '',
        },
      ],
      dataIndex: 'time',
      key: '',
    },
    {
      title: '出租面积缺口（㎡）',
      dataIndex: 'Rentalareagap',
      key: '',
    },
  ],
  dataSource: [
    {
      id: '',
      name: '',
      Rentablearea: '',
      Occupancytarget: '',
      RentalAreaTarget: '',
      Cumulativeleasedarea: '',
      Occupancyrate: '',
      Comparemonth: '',
      time: '',
      Rentalareagap: '',
    },
  ],
  dataSourceroom: [
    {
      id: '',
      name: '',
      bystages: '',
      buildings: '',
      Layernumber: '',
      room: '',
      Measuredarea: '',
      Rentablearea: '',
      Leasedarea: '',
      Availability: '',
      customer: '',
      brand: '',
      Contractarea: '',
      Dateofcontract: '',
      Contractstartdate: '',
      Contractexpirationdate: '',
      lease: '',
      Rentfreeperiod: '',
      Deposit: '',
      Performancebonds: '',
      ContractedUnitPrice: '',
      Investmentpersonnel: '',
      Cognitivepathways: '',
      Industry: '',
      remark: '',
    },
  ],
};
