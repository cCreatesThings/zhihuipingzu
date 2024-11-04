import { MockMethod } from 'vite-plugin-mock';
import { resultError, resultSuccess, getRequestToken, requestParams } from '../_util';
import { faker } from '@faker-js/faker';

export function createFakeUserList() {
  return [
    {
      userId: '1',
      username: 'vben',
      realName: 'Vben Admin',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=190848757&s=640',
      desc: 'manager',
      password: '123456',
      token: 'fakeToken1',
      homePath: '/dashboard/analysis',
      roles: [
        {
          roleName: 'Super Admin',
          value: 'super',
        },
      ],
    },
    {
      userId: '2',
      username: 'test',
      password: '123456',
      realName: 'test user',
      avatar: 'https://q1.qlogo.cn/g?b=qq&nk=339449197&s=640',
      desc: 'tester',
      token: 'fakeToken2',
      homePath: '/dashboard/workbench',
      roles: [
        {
          roleName: 'Tester',
          value: 'test',
        },
      ],
    },
  ];
}

// 生成工作台信息
const generateWorkbenchInfo = () => {
  return Array.from({ length: 7 }, () => ({
    name: faker.commerce.productName(), // 生成随机的公寓名称
    units: faker.number.int({ min: 1000, max: 2000 }).toString(), // 随机单位数
    shops: faker.number.int({ min: 1000, max: 2000 }).toString(), // 随机商铺数
    rate: `${faker.number.float({ min: 40, max: 60, fractionDigits: 2 }).toFixed(2)}%`, // 随机出租率
    total: faker.number.int({ min: 500, max: 1000 }).toString(), // 随机总数
    configured: faker.datatype.boolean() ? '1' : '0', // 随机配置状态
    rented: faker.datatype.boolean() ? '1' : '0', // 随机出租状态
    incomingExpiry: faker.number.int({ min: 600, max: 800 }).toString(), // 随机到期时间
    outgoingExpiry: faker.number.int({ min: 600, max: 800 }).toString(), // 随机到期时间
    expired: faker.number.int({ min: 1, max: 10 }).toString(), // 随机到期
  }));
};
const generateApprovalItems = () => {
  return [
    { label: '待我审批', value: faker.number.int({ min: 0, max: 100 }).toString() },
    { label: '我发起的', value: faker.number.int({ min: 0, max: 100 }).toString() },
    { label: '抄送我的', value: faker.number.int({ min: 0, max: 100 }).toString() },
  ];
};

const generateContractStatus = () => {
  return {
    list: [
      { label: '待定中', value: faker.number.int({ min: 0, max: 10 }).toString() },
      { label: '在租中', value: faker.number.int({ min: 0, max: 10 }).toString() },
      { label: '即将到期', value: faker.number.int({ min: 0, max: 10 }).toString() },
      { label: '已到期', value: faker.number.int({ min: 0, max: 10 }).toString() },
    ],
    total: faker.number.int({ min: 400, max: 1000 }).toString(),
  };
};

const generateLeaseItems = () => {
  return [
    { label: '待入住', value: faker.number.int({ min: 0, max: 5 }).toString() },
    { label: '今日到期', value: faker.number.int({ min: 0, max: 5 }).toString() },
    { label: '未履约', value: faker.number.int({ min: 0, max: 5 }).toString() },
    { label: '未预定', value: faker.number.int({ min: 0, max: 5 }).toString() },
  ];
};
const fakeCodeList: any = {
  '1': ['1000', '3000', '5000'],

  '2': ['2000', '4000', '6000'],
};
export default [
  // mock user login
  {
    url: '/basic-api/login',
    timeout: 200,
    method: 'post',
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createFakeUserList().find(
        (item) => item.username === username && password === item.password,
      );
      if (!checkUser) {
        return resultError('Incorrect account or password！');
      }
      const { userId, username: _username, token, realName, desc, roles } = checkUser;
      return resultSuccess({
        roles,
        userId,
        username: _username,
        token,
        realName,
        desc,
      });
    },
  },
  {
    url: '/basic-api/getUserInfo',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('The corresponding user information was not obtained!');
      }
      return resultSuccess(checkUser);
    },
  },
  {
    url: '/basic-api/getPermCode',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      const codeList = fakeCodeList[checkUser.userId];

      return resultSuccess(codeList);
    },
  },
  {
    url: '/basic-api/logout',
    timeout: 200,
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request);
      if (!token) return resultError('Invalid token');
      const checkUser = createFakeUserList().find((item) => item.token === token);
      if (!checkUser) {
        return resultError('Invalid token!');
      }
      return resultSuccess(undefined, { message: 'Token has been destroyed' });
    },
  },
  // 模拟 工作台的 数据接口
  {
    url: '/basic-api/workbenchInfo',
    timeout: 200,
    method: 'get',
    response: () => {
      return resultSuccess({
        propertyList: generateWorkbenchInfo(),
        ApprovalItems: generateApprovalItems(),
        ContractStatus: generateContractStatus(),
        LeaseItems: generateLeaseItems(),
      });
    },
  },
] as MockMethod[];
