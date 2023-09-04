import { createStore } from "vuex";
import { todoModule } from "./todoModule";
import { modalModule } from "./modalModule";

const store = createStore({
    modules: {
        todo: todoModule,
        modal: modalModule
    }
});

export default store;