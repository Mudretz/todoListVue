export const todoModule = {
    state: () => ({
        todoList: [
            {
                id: 1,
                text: "Изучить Vue",
                completed: true
            },
            {
                id: 2,
                text: "Сделать учебный проект на Vue",
                completed: true
            },
            {
                id: 3,
                text: "Найти новую работу",
                completed: false,
            }
        ]
    }),
    getters: {

    },
    mutations: {
        addTodo(state, payload) {
            state.todoList.push({
                id: Date.now(),
                text: payload,
                completed: false
            });
        },
        deletePost(state, payload) {
            state.todoList = state.todoList.filter((item) => item.id !== payload);
        },
        completedTodo(state, payload) {
            const index = state.todoList.findIndex((item) => item.id === payload);
            state.todoList[index] = { ...state.todoList[index], completed: true };
        }
    }
};