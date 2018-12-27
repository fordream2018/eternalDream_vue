import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../../store";

@Module({ name: "list-listing", store })
class ListModule {
    // state
    tableData:Array<Object>=new Array();

    constructor(){
        for(let i=0;i<60;i++){
            this.tableData.push({
                "date": "2016-05-02",
                "name": "fordream"+i*10,
                "address": '上海市普陀区金沙江路 1518 弄'
            });
        };
    };

    // getters
    get getTableData() {
        return this.tableData;
    }

    // mutations
    @Mutation
    setTableData(list: Array<Object>) {
        this.tableData=list;
    };

    @Mutation
    deleteTableData(index:number) {
        debugger;
        this.tableData.splice(index,1);
    };


    // actions
    @Action
    async changeTableData(index:number) {
        debugger;
        this.deleteTableData(index);
    };
}

export const listModule = new ListModule();
