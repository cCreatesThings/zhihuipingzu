<template>
  <div class="dashboard flex">
    <div class="flex-[1]">
      <div class="dashboard-row">
        <!-- 常用功能 -->
        <Card class="dashboard-card">
          <div class="card-header">
            <span>常用功能</span>
            <QuestionCircleOutlined class="help-icon" />
          </div>
          <div class="function-grid">
            <div v-for="(item, index) in functions" :key="index" class="function-item">
              <div class="function-btn">
                <UserOutlined />
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </Card>

        <!-- 审批管理 -->
        <Card class="dashboard-card">
          <div class="card-header">
            <span>审批管理</span>
          </div>
          <div
            class="approval-stats flex"
            style="flex-direction: row; justify-content: space-around"
          >
            <div v-for="(item, index) in approvalItems" :key="index" class="stat-item">
              <div class="stat-value">{{ item.value }}</div>
              <div class="stat-label">{{ item.label }}</div>
            </div>
          </div>
        </Card>
      </div>

      <div class="dashboard-row">
        <!-- 合约管理 -->
        <Card class="dashboard-card">
          <div class="card-header">
            <span>合约管理</span>
          </div>
          <div class="contract-content">
            <div class="contract-total">
              <span>租客合同</span>
              <span class="number"> {{ contractStatus?.total }} </span>
              <span class="unit">(份)</span>
            </div>
            <div class="contract-status">
              <span v-for="(status, index) in contractStatus?.list" :key="index">
                {{ status.label }} ({{ status.value }})
              </span>
            </div>
          </div>
        </Card>

        <!-- 租期 -->
        <Card class="dashboard-card">
          <div class="card-header">
            <span>租期</span>
          </div>
          <div class="lease-grid">
            <div v-for="(item, index) in leaseItems" :key="index" class="lease-item">
              <div class="stat-value">{{ item.value }}</div>
              <div class="stat-label">{{ item.label }}</div>
            </div>
          </div>
        </Card>
      </div>

      <!-- 房源管理 -->
      <div class="property-section">
        <div class="section-header">
          <span>房源管理</span>
        </div>
        <div class="property-grid">
          <div v-for="(type, index) in propertyList" :key="index" class="property-card">
            <Card>
              <div class="property-header">
                <span class="type-name">{{ type.name }}</span>
                <div class="type-info">
                  <span>{{ type.units }}单，{{ type.shops }}铺</span>
                  <span class="separator">|</span>
                  <span>出租率：{{ type.rate }}</span>
                  <QuestionCircleOutlined />
                </div>
              </div>
              <div class="property-stats">
                <div class="stats-row">
                  <div class="stat-col">
                    <div class="value">{{ type.total }}</div>
                    <div class="label">总量</div>
                  </div>
                  <div class="stat-col">
                    <div class="value">{{ type.configured }}</div>
                    <div class="label">配置量</div>
                  </div>
                  <div class="stat-col">
                    <div class="value">{{ type.rented }}</div>
                    <div class="label">已租</div>
                  </div>
                </div>
                <div class="stats-row">
                  <div class="stat-col">
                    <div class="value">{{ type.incomingExpiry }}</div>
                    <div class="label">即将到期入(30天内)</div>
                  </div>
                  <div class="stat-col">
                    <div class="value">{{ type.outgoingExpiry }}</div>
                    <div class="label">即将到期出(30天内)</div>
                  </div>
                  <div class="stat-col">
                    <div class="value">{{ type.expired }}</div>
                    <div class="label">已到期</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    <div class="right-section ml-[10px] flex flex-col items-center w-[29%]">
      <Card class="dashboard-card-right">
        <div class="h-[300px] overflow-y-auto">
          <div class="card-header">
            <span>待办事项</span>
            <div class="header-actions">
              <a class="more-link" @click="moreOpen = true">更多 > </a> |
              <a-button type="primary" size="small" @click="showModal">
                <PlusOutlined />
              </a-button>
            </div>
          </div>
          <div class="todo-list" v-if="TODOList.length">
            <div v-for="(item, index) in TODOList" :key="index">
              <div class="todo-item flex justify-between items-center p-[10px]">
                <span class="index">{{ index + 1 }}</span>
                <span>{{ item.TODOValue }}</span>
                <span>{{ item.createTime }}</span>
              </div>
            </div>
          </div>
          <div class="empty-state" v-else>
            <Empty />
          </div>
        </div>
      </Card>
      <Card class="dashboard-card-right">
        <div class="h-[300px]">
          <div class="card-header">
            <span>最新公告</span>
            <div class="header-actions">
              <a class="more-link">更多 > </a> |
              <a-button type="primary" size="small">
                <PlusOutlined />
              </a-button>
            </div>
          </div>
          <div class="notice-list" v-if="false">内容列表</div>
          <div class="empty-state" v-else>
            <Empty />
            <!-- <span>暂无数据</span> -->
          </div></div
        >
      </Card>
      <Card class="dashboard-card-right">
        <div class="chart-section h-[448px] flex flex-col items-center justify-center">
          <h3>资产出租率</h3>
          <div
            ref="pieChart"
            class="pie-chart"
            style="height: 100%; width: 100%; margin: -31px 31px 0px -31px"
          ></div>
        </div>
      </Card>
    </div>
  </div>

  <Modal v-model:visible="open" title="代办事项" @ok="handleOk" :inert="!open">
    <a-textarea v-model:value="TODOValue" placeholder="请输入代办事项" />
  </Modal>
  <!-- 点击更多 -->
  <Modal v-model:visible="moreOpen" :inert="!moreOpen" @ok="moreOpen = false">
    <Table :data-source="TODOList" :columns="columns" :pagination="{ pageSize: 5 }">
      <template #delete="{ record }">
        <a-button danger type="primary" size="small" @click="deleteItem(record)">X</a-button>
      </template>
    </Table>
  </Modal>
</template>

<script setup lang="ts">
  import { UserOutlined, QuestionCircleOutlined, PlusOutlined } from '@ant-design/icons-vue';
  import { ref, onMounted } from 'vue';
  import * as echarts from 'echarts';
  import { getWorkbenchInfoAPI } from '/@/api/sys/user';
  import type {
    PropertyListType,
    TODOColumnsType,
    TODOListType,
    WorkbenchGlobalType,
  } from '/#/investment';
  import { Empty, Card, Modal, message, Table } from 'ant-design-vue';

  const functions = [
    { name: '房管管理' },
    { name: '资产管理' },
    { name: '财务管理' },
    { name: '审批管理' },
  ];

  const approvalItems = ref<WorkbenchGlobalType[]>([]);

  const contractStatus = ref<{ list: WorkbenchGlobalType[]; total: string }>();

  const leaseItems = ref<WorkbenchGlobalType[]>([]);

  const propertyList = ref<PropertyListType[]>([]);
  const fetchPropertyList = async () => {
    try {
      const res = await getWorkbenchInfoAPI();
      propertyList.value = res.propertyList;
      approvalItems.value = res.ApprovalItems;
      contractStatus.value = res.ContractStatus;
      leaseItems.value = res.LeaseItems;
    } catch (error) {
      console.error('Failed to fetch property list:', error);
    }
  };

  fetchPropertyList();

  const pieChart = ref(null);

  onMounted(() => {
    const chart = echarts.init(pieChart.value);

    const option = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c}%',
      },
      legend: {
        // orient: 'vertical',
        top: '80%',
        data: ['公寓', '商办', '商铺', '广告牌', '车位', '会议室'],
      },
      series: [
        {
          name: '资产出租率',
          type: 'pie',
          radius: ['30%', '50%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 2,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
            formatter: (params) => {
              return params.value + '%';
            },
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold',
            },
          },
          data: [
            { value: 6.25, name: '公寓', itemStyle: { color: '#7D6FDE' } }, // 紫色
            { value: 9.38, name: '商办', itemStyle: { color: '#3BA5FF' } }, // 蓝色
            { value: 15.6, name: '商铺', itemStyle: { color: '#76F6EF' } }, // 浅蓝
            { value: 18.75, name: '广告牌', itemStyle: { color: '#F0DD50' } }, // 黄色
            { value: 18.75, name: '车位', itemStyle: { color: '#5EF668' } }, // 绿色
            { value: 18.75, name: '会议室', itemStyle: { color: '#FD9926' } }, // 橙色
          ],
        },
      ],
    };

    chart.setOption(option);

    // 响应式调整
    window.addEventListener('resize', () => {
      chart.resize();
    });
  });

  // 添加代办事项
  const TODOList = ref<TODOListType[]>([]);
  // 生成模拟数据
  Array.from({ length: 10 }).forEach((_, index) => {
    TODOList.value.push({
      key: index + 1,
      TODOValue: `测试${index + 1}`,
      createTime: new Date().toLocaleDateString(),
    });
  });
  const open = ref<boolean>(false);
  const TODOValue = ref<string>('');
  const moreOpen = ref<boolean>(false);

  const showModal = () => {
    open.value = true;
  };

  const handleOk = () => {
    if (TODOValue.value.trim()) {
      TODOList.value.unshift({
        key: TODOList.value.length + 1,
        TODOValue: TODOValue.value,
        createTime: new Date().toLocaleDateString(),
      });
      TODOList.value = TODOList.value.map((item, index) => ({ ...item, key: index + 1 }));
      TODOValue.value = '';
    } else {
      message.error('输入不能为空');
    }
    open.value = false;
  };

  const deleteItem = (record: TODOListType) => {
    TODOList.value = TODOList.value.filter((item) => item.key !== record.key);
    TODOList.value = TODOList.value.map((item, index) => ({ ...item, key: index + 1 }));
    console.log(TODOList.value);
  };

  const columns = ref<TODOColumnsType[]>([
    {
      key: 'key',
      title: '序号',
      dataIndex: 'key',
    },
    {
      key: 'TODOValue',
      title: '代办事项',
      dataIndex: 'TODOValue',
    },
    {
      key: 'createTime',
      title: '时间',
      dataIndex: 'createTime',
    },
    {
      key: 'delete',
      title: '删除',
      dataIndex: 'delete',
      slots: { customRender: 'delete' },
    },
  ]);
</script>

<style lang="scss" scoped>
  @media screen and (max-width: 750px) {
    .dashboard {
      flex-direction: column;
    }
    .right-section {
      width: 100%;
    }
    .dashboard-row {
      flex-direction: column;
    }
  }
  .chart-section {
    display: flex;
    flex-direction: column;
    align-items: center; /* 水平居中 */
    justify-content: center; /* 垂直居中 */
    height: 468px; /* 高度 */
  }

  .dashboard {
    background: linear-gradient(to bottom, #589bff 0%, #589bff 30%, #e6e9ed 30%, #e6e9ed 100%);
    padding: 16px;
    // background: #f5f7fa;
    min-height: 100vh;

    &-row {
      display: flex;
      gap: 16px;
      margin-bottom: 16px;
    }

    &-card {
      flex: 1;
      // background: #fff;
      border-radius: 8px;

      :deep(.ant-card-body) {
        padding: 16px;
      }
    }
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
    padding: 0 4px;

    span {
      font-size: 14px;
      font-weight: 500;
      // color: #1f2329;
    }

    .help-icon {
      color: #86909c;
      cursor: pointer;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 8px;

      .more-link {
        color: #1677ff;
        font-size: 12px;
      }
    }
  }

  .function-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    .function-btn {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 16px 0;
      // background: #ebf3ff;
      border-radius: 4px;
      cursor: pointer;

      :deep(.anticon) {
        font-size: 20px;
        color: #1677ff;
        margin-bottom: 8px;
      }

      span {
        font-size: 12px;
        // color: #1f2329;
      }

      &:hover {
        background: #e6f4ff;
      }
    }
  }

  .approval-stats {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .stat-item {
      text-align: center;

      .stat-value {
        font-size: 24px;
        font-weight: 500;
        color: #1677ff;
        line-height: 1;
      }

      .stat-label {
        margin-top: 4px;
        font-size: 12px;
        color: #86909c;
      }
    }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 0;

    img {
      width: 80px;
      margin-bottom: 12px;
    }

    span {
      color: #86909c;
      font-size: 12px;
    }
  }

  .contract-content {
    .contract-total {
      margin-bottom: 16px;

      .number {
        font-size: 32px;
        font-weight: 500;
        color: #1677ff;
      }

      .unit {
        font-size: 12px;
        color: #86909c;
        margin-left: 4px;
      }
    }

    .contract-status {
      display: flex;
      gap: 16px;
      color: #86909c;
      font-size: 12px;
    }
  }

  .lease-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;

    .lease-item {
      text-align: center;

      .stat-value {
        font-size: 24px;
        font-weight: 500;
        color: #1677ff;
        line-height: 1;
      }

      .stat-label {
        margin-top: 4px;
        font-size: 12px;
        color: #86909c;
      }
    }
  }

  .property-section {
    background: #fff;
    border-radius: 8px;
    padding: 16px;

    .section-header {
      margin-bottom: 16px;
      padding: 0 4px;
      font-size: 14px;
      font-weight: 500;
      color: #1f2329;
    }
  }

  .property-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .property-card {
    background: #f7f8fa;
    border-radius: 4px;
    // padding: 16px;

    .property-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      .type-name {
        font-size: 14px;
        font-weight: 500;
        // color: #1f2329;
      }

      .type-info {
        font-size: 12px;
        color: #86909c;

        .separator {
          margin: 0 8px;
          color: #e5e6eb;
        }

        :deep(.anticon) {
          margin-left: 4px;
          cursor: pointer;
        }
      }
    }

    .property-stats {
      .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .stat-col {
        text-align: center;

        .value {
          font-size: 14px;
          font-weight: 500;
          color: #1677ff;
          line-height: 1.4;
        }

        .label {
          font-size: 12px;
          color: #86909c;
          margin-top: 4px;
        }
      }
    }
  }

  .property-dashboard {
    display: flex;
    gap: 20px;
  }

  .property-grid {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 16px;
  }

  .property-card {
    background: #f7f8fa;
    border-radius: 4px;
    // padding: 16px;

    .property-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;

      .property-name {
        font-size: 14px;
        font-weight: 500;
        color: #1f2329;
      }

      .property-info {
        font-size: 12px;
        color: #86909c;

        .separator {
          margin: 0 8px;
          color: #e5e6eb;
        }

        :deep(.anticon) {
          margin-left: 4px;
          cursor: pointer;
        }
      }
    }

    .stats-grid {
      .stats-row {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin-bottom: 16px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      .stat-col {
        text-align: center;

        .value {
          font-size: 16px;
          font-weight: 500;
          color: #1677ff;
          line-height: 1.4;
        }

        .label {
          margin-top: 4px;
          font-size: 12px;
          color: #86909c;
        }
      }
    }
  }

  .chart-section {
    width: 350px;

    h3 {
      font-size: 14px;
      font-weight: 500;
      // color: #1f2329;
      margin-bottom: 16px;
    }

    .pie-chart {
      height: 300px;
    }
  }

  .dashboard-card-right {
    margin-bottom: 15px;
    width: 100%;
  }
</style>
