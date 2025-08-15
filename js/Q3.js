const mustFields = ['name', 'age']; // 基础必填字段
const templateExtraMustFields = ['email', 'phone']; // 模板额外必填字段
const header = [
  { title: 'name' }, 
  { title: 'age' }, 
  { title: 'phone' } // header中存在name、age、phone，缺失email
];
const mustValidMsg = []; // 用于存储缺失的字段

[...mustFields, ...templateExtraMustFields].forEach((field, fieldIndex) => {
  !header.find((item) => item.title === field) && mustValidMsg.push(field);
});

console.log(mustValidMsg)