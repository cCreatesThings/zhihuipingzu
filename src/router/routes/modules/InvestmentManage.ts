import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const investmentManage: AppRouteModule = {
  path: '/investment',
  name: 'Investment',
  component: LAYOUT,
  redirect: '/investment/management',
  meta: {
    orderNo: 11,
    icon: 'eos-icons:content-lifecycle-management',
    title: t('routes.investment.investmentManagement'),
  },
  children: [
    {
      path: 'management',
      name: 'management',
      component: () => import('/@/views/investment/management/index.vue'),
      meta: {
        // affix: true,
        title: t('routes.investment.investmentManagement'),
      },
    },
  ],
};

export default investmentManage;
