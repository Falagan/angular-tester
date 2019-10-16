import { IHeaderMenuData } from "src/app/shared/components/header-menu/IHeaderMenuData";
import IHomeLoginData from 'ui/lib/bootstrap/custom/home-login/models/IHomeLoginData';
import IAsideMenuData from 'ui/lib/bootstrap/custom/aside-menu/models/IAsideMenuData';


class Constants {
    
  public static HEADER_MENU_INIT_DATA: IHeaderMenuData = {
    module: {
      name: "Inicio"
    },
    routes: [
      { route: "reporter", text: "Reporter" },
      { route: "todo", text: "ToDo" },
      { route: "websocketrxjs", text: "WebsocketRxJs" }
    ]
  };

  public static ASIDE_MENU_INIT_DATA: IAsideMenuData = {
    routes: [
      { route: "reporter/boards", faIcon: "task", text:'Reporter' },
      { route: "reporter/cards", faIcon: "task", text:'ToDo' },
      { route: "reporter/lists", faIcon: "task", text:'WebsocketRxJS' }
    ]
  };

  public static HOME_LOGIN_INIT_DATA: IHomeLoginData = {
   title: 'Angular Tester ¨',
   faIcons: {
     user:'user-astronaut',
     password:'fingerprint'
   }
  };
}

export default Constants;
export { Constants };
