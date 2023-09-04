export const modalModule = {
    state: () => ({
        stateModalDelete: false
    }),
    getters: {

    },
    mutations: {
        openModalDelete(state) {
            state.stateModalDelete = true;
        },
        closeModalDelete(state) {
            state.stateModalDelete = false;
        }
    }
};