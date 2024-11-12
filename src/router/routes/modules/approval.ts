import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
// import { t } from '/@/hooks/web/useI18n';

const dashboard: AppRouteModule = {
  path: '/approval',
  name: 'Aultiple',
  component: LAYOUT,
  // redirect: '/dashboard/analysis',
  meta: {
    orderNo: 10,
    icon: 'ion:grid-outline',
    title: '审批管理',
  },
  children: [
    {
      path: 'wait',
      name: 'wait',
      component: () => import('/@/views/approval/wait/index.vue'),
      meta: {
        title: '待我审批的',
      },
    },
    {
      path: 'finish',
      name: 'finish',
      component: () => import('/@/views/approval/finish/index.vue'),
      meta: {
        // affix: true,
        title: '我已审批的',
      },
    },
    {
      path: 'launch',
      name: 'launch',
      component: () => import('/@/views/approval/launch/index.vue'),
      meta: {
        // affix: true,
        title: '我发起的',
      },
    },
    {
      path: 'copy',
      name: 'copy',
      component: () => import('/@/views/approval/copy/index.vue'),
      meta: {
        // affix: true,
        title: '抄送我的',
      },
    },
  ],
};

export default dashboard;
