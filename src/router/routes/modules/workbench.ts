import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const workbench: AppRouteModule = {
  path: '/workbench',
  name: 'Workbench',
  component: LAYOUT,
  redirect: '/workbench/management',
  meta: {
    hideChildrenInMenu: true,
    icon: 'icon-park-outline:workbench',
    title: t('routes.workbench.workbench'),
    orderNo: 12,
  },
  children: [
    {
      path: 'management',
      name: 'WorkbenchManagement',
      component: () => import('/@/views/workbench/management/index.vue'),
      meta: {
        title: t('routes.workbench.management'),
        icon: 'icon-park-outline:workbench',
        hideMenu: true,
      },
    },
  ],
};

export default workbench;
