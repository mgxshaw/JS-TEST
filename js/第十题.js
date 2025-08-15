const getProfitListData = async ()=>{
    const res = await getProfitListData({belongId:CID})
    if(res?.result === 0){
        cobst data = res.data?.records || []
    }
}