const attachmentsUpLoadUrl = () => {
    const env = process.env.REACT_APP_ENV || "unknown";
    switch (env) {
        case "dev":
            return `${location.protocol}//preuploadv2.viphrm.com/filemanager/upload`;
        case "pre":
            return `${location.protocol}//preuploadv2.viphrm.com/filemanager/upload`;
        case "release":
            return "/filemanager/upload";
        default:
          return `${location.protocol}//uploadv2.viphrm.com/filemanager/upload`;
    }
}