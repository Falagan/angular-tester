import IHeaderRoute from './IHeaderMenuRoute';

interface IHeaderMenuData {
    module: {
        name: string
    },
    routes: IHeaderRoute[]
}

export default IHeaderMenuData;
export {IHeaderMenuData};