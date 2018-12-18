import * as tslib_1 from "tslib";
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
tslib_1.__decorate([
    Mutation
], TableModule.prototype, "setBondsAllList", null);
tslib_1.__decorate([
    Action
], TableModule.prototype, "changeBondsAllList", null);
TableModule = tslib_1.__decorate([
    Module({ name: "list-table", store })
], TableModule);
export const tableModule = new TableModule();
