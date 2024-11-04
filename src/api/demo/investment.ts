import { defHttp } from '/@/utils/http/axios';
import { investmentModel } from '/@/api/demo/model/investmentModel';

enum Api {
  INVE_MANAGEMENT = '/investment/management',
}

export const InvestmentManagementAPI = () =>
  defHttp.get<investmentModel[]>({
    url: Api.INVE_MANAGEMENT,
    baseURL: 'https://apifoxmock.com/m1/4147612-0-default',
  });
export const InvestmentManagementBlobAPI = () =>
  defHttp.get<investmentModel[]>({
    url: Api.INVE_MANAGEMENT,
    baseURL: 'https://apifoxmock.com/m1/4147612-0-default',
    responseType: 'blob',
  });
