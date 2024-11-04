export interface DataType {
  id: number;
  name: string;
  phone: string;
  /**
   * 意向类型 A B C
   */
  intention: string; // 意向类型 A B C
  /**
   * 问询 看房 关闭
   */
  status: number;
  waiter: string; // 招商人员
  createTime: string;
  lastContactTime: string;
  /**
   * 下次跟进日期
   */
  dateNextFollowup: string;
  /**
   * 客户认知途径
   */
  customerCognitiveApproach?: string;
}

// 表格列
export interface TableColumnType {
  title: string;
  dataIndex: string;
  key: string;
  slots?: { customRender: string };
}
