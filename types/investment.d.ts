export interface WorkbenchInfoType {
  propertyList: PropertyListType[];
  ApprovalItems: WorkbenchGlobalType[];
  ContractStatus: { list: WorkbenchGlobalType[]; total: string };
  LeaseItems: WorkbenchGlobalType[];
}

export interface WorkbenchGlobalType {
  label: string;
  value: string;
}
export interface PropertyListType {
  name: string;
  units: string;
  shops: string;
  rate: string;
  total: string;
  configured: string;
  rented: string;
  incomingExpiry: string;
  outgoingExpiry: string;
  expired: string;
}

export interface TODOListType {
  key: number;
  TODOValue: string;
  createTime: string;
}

export interface TODOColumnsType {
  key: string;
  title: string;
  dataIndex: string;
  slots?: { customRender: string };
}
