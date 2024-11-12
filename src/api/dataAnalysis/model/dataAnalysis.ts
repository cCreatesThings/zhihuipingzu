export interface clientListParams {
  type: 'private' | 'public';
  baseId: string;
}
export enum Status {
  '问询' = 1,
  '看房' = 2,
  '关闭' = 3,
}
export enum Channel {
  '广告' = 1,
  '朋友推荐' = 2,
  '行业协会' = 3,
}
export interface clientListResult {
  id: string;
  name: string;
  phone: string;
  intention: string;
  status: Status;
  transactor: string;
  createTime: string;
  lastContactDate: string;
  nextContactDate: string;
  channel: Channel;
  remark: string;
}
