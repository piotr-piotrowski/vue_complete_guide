import { createStore } from "vuex";

import coachesMoudules from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesMoudules,
    }
});

export default store;