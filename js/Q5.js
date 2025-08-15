var search = function () {
  var obj = null;
  var searchInputObj = document.getElementById("searchInput");
  if (searchInputObj) {
    if (searchInputObj.name == "keyWords") {
      obj = document.getElementById("searchInput");
    }
  }
  if (obj != null) {
    obj.addEventListener("click", function () {
      console.log("测试");
    });
  }
};

search();
