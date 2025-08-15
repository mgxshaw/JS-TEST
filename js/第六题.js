// 声明定时器ID变量，用于存储和清除定时器
let tid;

// 定义win为window对象（通常用于简化代码或兼容处理）
const win = window;

// 定义refreshrem函数（假设是处理rem适配的函数，例如调整根元素字体大小）
function refreshRem() {
  console.log("执行refreshrem：调整rem基准值");
}

const C_resize = function(){
    clearTimeout(tid);
    tid = setTimeout(refreshRem,300);
    console.log('resize');
    window.removeEventListener('resize',C_resize);
};

// 给窗口添加resize事件监听（触发条件）
win.addEventListener("resize", C_resize);
