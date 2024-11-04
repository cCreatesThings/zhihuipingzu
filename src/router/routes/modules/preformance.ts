import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const preformance: AppRouteModule = {
  path: '/preformance',
  name: 'Preformance',
  component: LAYOUT,
  // redirect: '/preformance/royaltyDetails',
  meta: {
    hideChildrenInMenu: false,
    icon: 'material-symbols:work-history-sharp',
    title: t('业绩管理'),
    orderNo: 12,
  },
  children: [
    {
      path: 'performanceLedger',
      name: 'PerformanceLedger',
      component: () => import('/@/views/preformance/index.vue'),
      meta: {
        title: t('业绩台账'),
        icon: 'icon-park-twotone:view-grid-detail',
        hideMenu: false,
        // hideChildrenInMenu: true,
      },
    },
  ],
};

export default preformance;
