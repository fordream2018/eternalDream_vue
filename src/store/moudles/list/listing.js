import * as tslib_1 from "tslib";
import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../../store";
let ListModule = class ListModule {
    constructor() {
        // state
        this.tableData = new Array();
        for (let i = 0; i < 60; i++) {
            this.tableData.push({
                "date": "2016-05-02",
                "name": "fordream" + i * 10,
                "address": '上海市普陀区金沙江路 1518 弄'
            });
        }
        ;
    }
    ;
    // getters
    get getTableData() {
        return this.tableData;
    }
    // mutations
    setTableData(list) {
        this.tableData = list;
    }
    ;
    deleteTableData(index) {
        debugger;
        this.tableData.splice(index, 1);
    }
    ;
    // actions
    async changeTableData(index) {
        debugger;
        this.deleteTableData(index);
    }
    ;
};
tslib_1.__decorate([
    Mutation
], ListModule.prototype, "setTableData", null);
tslib_1.__decorate([
    Mutation
], ListModule.prototype, "deleteTableData", null);
tslib_1.__decorate([
    Action
], ListModule.prototype, "changeTableData", null);
ListModule = tslib_1.__decorate([
    Module({ name: "list-listing", store })
], ListModule);
export const listModule = new ListModule();
