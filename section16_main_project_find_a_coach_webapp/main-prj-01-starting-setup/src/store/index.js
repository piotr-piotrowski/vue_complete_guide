import { createStore } from "vuex";

import coachesMoudules from './modules/coaches/index.js';

const store = createStore({
    modules: {
        coaches: coachesMoudules,
    },
    state() {
        return {
            userId: 'c3'
        };
    },
    getters: {
        userId(state) {
            state.userId;
        }
    }
});

export default store;