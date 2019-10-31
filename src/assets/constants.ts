import { IHeaderMenuData } from "src/app/shared/components/header-menu/IHeaderMenuData";
import IHomeLoginData from '../lib/library-angular-tester/ui/lib/bootstrap/custom/home-login/models/IHomeLoginData';
import IAsideMenuData from '../lib/library-angular-tester/ui/lib/bootstrap/custom/aside-menu/models/IAsideMenuData';


class Constants {
    
  public static HEADER_MENU_INIT_DATA: IHeaderMenuData = {
    routes: [
      { route: "reporter", text: "Reporter" },
      { route: "todo", text: "ToDo" },
      { route: "websocketrxjs", text: "WebsocketRxJs" }
    ]
  };

  public static ASIDE_MENU_INIT_DATA: IAsideMenuData = {
    routes: [
      { route: "/main/reporter", faIcon: "clipboard-list", text:'Reporter Home' }
    ]
  };

}

export default Constants;
export { Constants };
