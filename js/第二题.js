const checkedColumn = ["name", "address"];
const columns = [
  { dataIndex: "name", width: 150 }, // 列1：标识name，宽度150
  { dataIndex: "age", width: 100 }, // 列2：标识age，宽度100
  { dataIndex: "address" }, // 列3：标识address，无width（默认100）
  { dataIndex: "email", width: 200 }, // 列4：标识email，宽度200
];
const tableColums = checkedColumn.length
  ? columns.filter((item) =>
      checkedColumn.some((val) => val === item.dataIndex)
    )
  : columns;
const scrollWidth = tableColums.reduce(
  (result, item) => (result += item.width || 100),
  0
);

console.log(scrollWidth)
