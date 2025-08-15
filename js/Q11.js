const put = (url,callback)=>{
    axios.put(getRootUrl()+url)
    .then(function(response){
        if(response.data.result === 0){
            callback.success(response.data.data);
        }else{
            dealError(callback,response.data.result,response.data.detail);
         }
    })
    .catch(function(error){
        let errorMsg = error.request && error.request.statusText;
        if(!errorMsg){
            errorMsg = '网络不给力';   
        }
        dealError(callback,error.request.status,errorMsg)
    });
}