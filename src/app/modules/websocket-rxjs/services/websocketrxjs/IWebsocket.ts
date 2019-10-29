export interface IWebsocket {
    create(url:string);
    send(msg);
    bind(url:string);
    unBind();
}