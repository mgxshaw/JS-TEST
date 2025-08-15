const header = [
  { title: "姓名", dataindex: "name", width: 150 },
  { title: "年龄", dataindex: "age", width: 100, align: "center" }
];

header.unshift(
  {
    title: "序号",
    dataIndex: "field999",
  },
  {
    title: "数据校验",
    dataIndex: "field998",
    width: 250,
    align: "left",
  }
);

console.log(header);
