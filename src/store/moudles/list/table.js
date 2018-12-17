var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../../store";
let TableModule = class TableModule {
    constructor() {
        // state
        this.bondsAllList = new Array();
        for (let i = 0; i < 60; i++) {
            this.bondsAllList.push({
                "name": "16协信01",
                "marketValue": i * 10,
                "type": "信用债" + i,
                "ratio": i / 10
            });
        }
        ;
    }
    ;
    // getters
    get getBondsAllList() {
        return this.bondsAllList;
    }
    // mutations
    setBondsAllList(list) {
        this.bondsAllList = list;
    }
    ;
    // actions
    async changeBondsAllList(item) {
        //const user = await fetchUser()
        //debugger;
        //this.setIsShowRouter(item.isShow);
    }
    ;
};
__decorate([
    Mutation
], TableModule.prototype, "setBondsAllList", null);
__decorate([
    Action
], TableModule.prototype, "changeBondsAllList", null);
TableModule = __decorate([
    Module({ name: "list-table", store })
], TableModule);
export const tableModule = new TableModule();
