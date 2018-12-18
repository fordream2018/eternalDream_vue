import * as tslib_1 from "tslib";
import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../store";
let Demo1Module = class Demo1Module {
    constructor() {
        // state
        this.name = "lifei";
    }
    // getters
    get getName() {
        return this.name;
    }
    // mutations
    setName(name) {
        this.name = name;
    }
    // actions
    async changeName(item) {
        //const user = await fetchUser()
        this.setName(item.name);
    }
};
tslib_1.__decorate([
    Mutation
], Demo1Module.prototype, "setName", null);
tslib_1.__decorate([
    Action
], Demo1Module.prototype, "changeName", null);
Demo1Module = tslib_1.__decorate([
    Module({ name: "demo1", store })
], Demo1Module);
export const demo1Module = new Demo1Module();
