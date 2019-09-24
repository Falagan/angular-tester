// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUser: 'eloyperez6',
  apiKey: '2602eac2f07762e217a795f53641de8e',
  apiToken: 'f1dba1e6a2fab3097afddb18187d81281ad5f1c356fe4fa5a88efca5c28f7aa2',
  apiUrls: {
    boards: 'https://api.trello.com/1/boards/',
    members: 'https://api.trello.com/1/members/'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
