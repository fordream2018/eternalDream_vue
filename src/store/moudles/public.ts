import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../store";

@Module({ name: "public", store })
class PublicModule {
    // state
    isShowRouter:boolean=false;

    // getters
    get getIsShowRouter() {
        return this.isShowRouter;
    }

    // mutations
    @Mutation
    setIsShowRouter(isShowRouter: boolean) {
        this.isShowRouter=isShowRouter;
    }


    // actions
    @Action
    async changeIsShowRouter(item) {
        //const user = await fetchUser()
        debugger;
        this.setIsShowRouter(item.isShow);
    }
}

export const publicModule = new PublicModule();
