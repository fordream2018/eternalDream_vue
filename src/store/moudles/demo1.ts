import { Module, Mutation, Action } from "vuex-class-modules";
import store from "../../store";

@Module({ name: "demo1", store })
class Demo1Module {
    // state
    name:String="lifei";

    // getters
    get getName() {
        return this.name;
    }

    // mutations
    @Mutation
    setName(name: String) {
        this.name=name;
    }


    // actions
    @Action
    async changeName(item) {
        //const user = await fetchUser()
        this.setName(item.name);
    }
}

export const demo1Module = new Demo1Module();
