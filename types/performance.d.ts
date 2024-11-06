export interface PerformanceRoyaltyDetailsType {
  /** 序号 */
  id: number;

  /** 企业名称 */
  enterpriseName: string;

  /**租赁提成标准，如自主招商、合作招商等 */
  rentIntent: string;

  /** 所属行业 */
  industry: string;

  /** 房号，包含城市、区、街道和房号 */
  address: string;

  /** 签约时间，格式为 yyyy-MM-dd HH:mm */
  signTime: string;

  /** 签约面积，单位为平方米 (㎡) */
  area: string;

  /** 签约单价，单位为元/㎡ */
  pricePerSquareMeter: string;

  /** 合同起止时间，格式为 yyyy-MM-dd~yyyy-MM-dd (含合同期限) */
  contractPeriod: string;

  /** 首月租金，单位为元/月 */
  monthlyRent: string;

  /** 本次租金保证金金额，单位为元 */
  rentDeposit: string;

  /** 实际到账时间，格式为 yyyy-MM-dd HH:mm:ss */
  paymentTime: string;

  /** 应收押金，单位为元 */
  receivableDeposit: string;

  /** 实收押金，单位为元 */
  receivedDeposit: string;

  /** 招商人员的姓名 */
  recruitmentPerson: string;

  /** 应提成总额，单位为元 */
  dueAmount: string;

  /** 已发放提成金额，单位为元 */
  amountRecovered: string;

  /** 操作说明，如“发起追回” */
  action: string;
}

interface PreformanceTotalType {
  id: number;
  /**分佣人员 */
  employee: string;
  /** 分销编号 */
  employeeId: string;
  /** 房源 */
  property: string;
  /** 3年以上（首月租金）  */
  industry_above_3_amount: number;
  /**  3年以上提成比例 */
  industry_above_3_percentage: string;
  /** 3年以内（首月租金） */
  industry_below_3_amount: number;
  /** 签约面积 */
  external_area: number;
  /**提成比例（行业外） */
  external_percentage: string;
  /** 提成目标完成时间 */
  completion_date: string; // 假设日期格式为 'YYYY-MM-DD'
  /** 租频总租金 */
  total_rent: number;
  /** 扣除总额 */
  trust_amount: number;
  /** 此次发放总额 */
  current_payment: number;
}

export interface PreformanceRecordRoomType {
  id: number;
  roomInfo: string;
  contractPeriod: string;
  totalCommission: number;
  distributedCommission: number;
  lastDistributionTime: string;
}

export interface PreformanceRecordPersonType {
  serialNumber: number;
  commissioner: string;
  position: string;
  roomInfo: string;
  contractPeriod: string;
  commissionAmount: number;
  overdueDeduction: number;
  distributedAmount: number;
  distributionTime: string;
}
