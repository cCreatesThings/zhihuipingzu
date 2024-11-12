import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/dataAnalysis',
  name: 'DataAnalysise',
  component: LAYOUT,
  // redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '数据分析',
  },
  children: [
    {
      path: 'dataAnalysis',
      name: 'dataAnalysis',
      component: () => import('/@/views/dataAnalysis/index.vue'),
      meta: {
        // affix: true,
        title: '数据分析界面',
      },
    },
  ],
};

export default dashboard;
