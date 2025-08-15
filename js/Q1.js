const res =[{title:"解析结果",dataIndex:"errMsg",width:180}]
const data =[
{name:"姓名",key:"username"},
{name:"年龄",key:"age"},
{name:"邮箱",key:"email"}
]

const mergedResult = res.concat(data.map(item => ({
  title: item.name,
  dataIndex: item.key,
  width: 150
})));

// 打印合并后的结果
console.log(mergedResult);

