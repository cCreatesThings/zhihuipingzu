/**
 * Request
 */
export interface dataType {
  createTime: string;
  /**
   * 客户认知途径
   */
  customerCognitiveApproach: string;
  /**
   * 下次跟进时间
   */
  dateNextFollowup: string;
  id: string;
  intention: string;
  lastContactTime: string;
  /**
   * 名称
   */
  name: string;
  phone: string;
  /**
   * 状态
   */
  status: number;
  waiter: string;
}

export interface investmentModel {
  data: dataType[];
  success: boolean;
  code: number;
}
