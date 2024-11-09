import { defHttp } from '/@/utils/http/axios';
import { PerformanceRoyaltyDetailsType } from '/@/api/demo/model/preformance';
import { SubcommissionAllocationType } from '/#/performance';
const baseURL = 'https://apifoxmock.com/m1/4147612-0-default';
enum Api {
  PERFORMANCE = '/performance/royaltyDetails',
  PERFORMANCETOTAL = '/performance/performanceTotal',
  PERFORMANCERECORDROOM = '/performance/recordRoom',
  PERFORMANCERECORDPERSON = '/performance/recordPerson',
  SUBCOMMISSIONALLOCATION = '/performance/subcommissionAllocation',
}

export const PerformanceAPI = () =>
  defHttp.get<PerformanceRoyaltyDetailsType[]>({
    url: Api.PERFORMANCE,
    baseURL,
  });

// https://apifoxmock.com/m1/4147612-0-default/performanceTotal
/**租赁提成汇总API */
export const PerformanceTotalAPI = () => {
  return defHttp.get<any[]>({
    url: Api.PERFORMANCETOTAL,
    baseURL,
  });
};

//https://apifoxmock.com/m1/4147612-0-default/performance/recordRoom
/** 租凭提成记录 按房源 */
export const PerformanceRecordAPI = (type: 1 | 2) => {
  return defHttp.get({
    url: type === 1 ? Api.PERFORMANCERECORDROOM : Api.PERFORMANCERECORDPERSON,
    baseURL,
  });
};

//https://apifoxmock.com/m1/4147612-0-default/performance/subcommissionAllocation
/** 签约业绩提成配置表 */
export const SubcommissionAllocationAPI = () => {
  return defHttp.get<SubcommissionAllocationType[]>({
    url: Api.SUBCOMMISSIONALLOCATION,
    baseURL,
  });
};
