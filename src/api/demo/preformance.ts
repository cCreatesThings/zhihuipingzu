import { defHttp } from '/@/utils/http/axios';
import { PerformanceRoyaltyDetailsType } from '/@/api/demo/model/preformance';
const baseURL = 'https://apifoxmock.com/m1/4147612-0-default';
enum Api {
  PERFORMANCE = '/performance/royaltyDetails',
  PERFORMANCETOTAL = '/performance/performanceTotal',
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
