import { configureStore } from "@reduxjs/toolkit";

import editorReducer from "./editor";
import botReducer from "./bot";
import mainReducer from "./main";

const store = configureStore({
	reducer: {
		bot: botReducer,
		editor: editorReducer,
		main: mainReducer,
	},
});

export default store;