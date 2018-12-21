import * as tslib_1 from "tslib";
import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../store";
let PublicModule = class PublicModule {
    constructor() {
        // state
        this.isShowRouter = false;
    }
    // getters
    get getIsShowRouter() {
        return this.isShowRouter;
    }
    // mutations
    setIsShowRouter(isShowRouter) {
        this.isShowRouter = isShowRouter;
    }
    // actions
    async changeIsShowRouter(item) {
        //const user = await fetchUser()
        this.setIsShowRouter(item.isShow);
    }
};
tslib_1.__decorate([
    Mutation
], PublicModule.prototype, "setIsShowRouter", null);
tslib_1.__decorate([
    Action
], PublicModule.prototype, "changeIsShowRouter", null);
PublicModule = tslib_1.__decorate([
    Module({ name: "public", store })
], PublicModule);
export const publicModule = new PublicModule();
