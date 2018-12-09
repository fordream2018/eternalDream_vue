var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
__decorate([
    Mutation
], Demo1Module.prototype, "setName", null);
__decorate([
    Action
], Demo1Module.prototype, "changeName", null);
Demo1Module = __decorate([
    Module({ name: "demo1", store })
], Demo1Module);
export const demo1Module = new Demo1Module();
