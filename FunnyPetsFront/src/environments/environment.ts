// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
	apiKey: "AIzaSyBRfZdgrnRTpB_siiWS7YZAqxYl6DKUNZ0",
	authDomain: "funnypets-d3a7a.firebaseapp.com",
	databaseURL: "https://funnypets-d3a7a.firebaseio.com",
	projectId: "funnypets-d3a7a",
	storageBucket: "funnypets-d3a7a.appspot.com",
	messagingSenderId: "974970038538"
    }
};
