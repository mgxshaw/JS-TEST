const getProfitListData = async ()=>{
    const res = await getProfitList({belongId:CID})
    if(res?.result === 0){
        const data = res.data?.records || []
    }
}