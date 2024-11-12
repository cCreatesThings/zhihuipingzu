import { defHttp } from '/@/utils/http/axios';
export function getDataAnalysis() {
  return defHttp.get({ url: '/dataAnalysis' });
}
