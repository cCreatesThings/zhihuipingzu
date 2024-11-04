import * as XLSX from 'xlsx';

export const donwloadFileFn = async (data: any, fileName: string) => {
  // 将 JSON 数据转换为工作表
  const worksheet = XLSX.utils.json_to_sheet(data);
  // 创建一个工作簿
  const workbook = XLSX.utils.book_new();

  // 将工作表添加到工作簿中
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  XLSX.writeFile(workbook, `${fileName}.xlsx`);
};
