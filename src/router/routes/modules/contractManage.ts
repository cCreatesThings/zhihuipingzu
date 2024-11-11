import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/hooks/web/useI18n';

const investmentManage: AppRouteModule = {
  path: '/contract',
  name: 'Contract',
  component: LAYOUT,
  redirect: '/contractManage/electronicContract',
  meta: {
    orderNo: 14,
    icon: 'clarity:contract-solid',
    title: t('routes.contractManage.contractManage'),
  },
  children: [
    {
      path: 'electronicContract',
      name: 'ElectronicContract',
      component: () => import('/@/views/contracrManage/index.vue'),
      meta: {
        // affix: true,
        icon: 'icon-park-solid:electronic-pen',
        title: t('routes.contractManage.electronicContract'),
      },
    },
  ],
};

export default investmentManage;
