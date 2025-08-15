async function getHtml(){
    const html = await fetch("/").then(res=>res.text());
    return html
}