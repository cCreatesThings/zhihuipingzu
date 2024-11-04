import { defHttp } from '/@/utils/http/axios';
import { PerformanceRoyaltyDetailsType } from '/@/api/demo/model/preformance';

enum Api {
  PERFORMANCE = '/performance/royaltyDetails',
}

export const PerformanceAPI = () =>
  defHttp.get<PerformanceRoyaltyDetailsType[]>({
    url: Api.PERFORMANCE,
    baseURL: 'https://apifoxmock.com/m1/4147612-0-default',
  });
