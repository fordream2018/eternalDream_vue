import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../../store";
import {Map} from "vue-baidu-map/types/map";

@Module({ name: "list-table", store })
class TableModule {
    // state
    bondsAllList:Array<Object>=new Array();

    constructor(){
        for(let i=0;i<60;i++){
            this.bondsAllList.push({
                "name": "16协信01",
                "marketValue": i*10,
                "type": "信用债"+i,
                "ratio": i/10
            });
        };
    };

    // getters
    get getBondsAllList() {
        return this.bondsAllList;
    }

    // mutations
    @Mutation
    setBondsAllList(list: Array<Object>) {
        this.bondsAllList=list;
    };


    // actions
    @Action
    async changeBondsAllList(item) {
        //const user = await fetchUser()
        //debugger;
        //this.setIsShowRouter(item.isShow);
    };
}

export const tableModule = new TableModule();
