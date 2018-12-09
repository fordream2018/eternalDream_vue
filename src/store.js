import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        isShowRouter: false,
    },
    getters: {
        getIsShowRouter: (state) => {
            return state.isShowRouter;
        }
    },
    mutations: {
        changeIsShowRouter: (state, payload) => {
            state.isShowRouter = payload.value;
        },
    },
    actions: {
        changeIsShowRouter: (context, param) => {
            context.commit('changeIsShowRouter', param);
        }
    }
});
