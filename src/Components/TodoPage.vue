<template>
    <div class="container">
        <h1 class="title">Мой список дел</h1>
        <form class="form" @submit.prevent>
            <TextInput
                v-model="text"
                placeholder="Введите задачу"
            />
            <CustomButton @click="createPost">
                Добавить
            </CustomButton>
        </form>
        <div class="list">
            <h2 v-if="todoList.length > 0">Список активных задач</h2>
            <h2 v-else>Нет активных задач</h2>
            <TransitionGroup name="todoList" tag="div" class="todoList">
                <Card
                    v-for="todo in todoList"
                    :todo="todo"
                    :key="todo.id"
                    :todoList="todoList"
                    @deletePost="deletePost"
                    @completedTodo="completedTodo"
                />
            </TransitionGroup>
        </div>
    </div>
</template>

<script>
import Card from '@/Components/Common/Card.vue';
import CustomButton from '@/Components/Ui/CustomButton.vue';

export default {
    name: "TodoPage",
    data() {
        return {
            text: ""
        };
    },
    computed: {
        todoList() {
            return this.$store.state.todo.todoList;
        }
    },
    methods: {
        createPost() {
            this.$store.commit("addTodo", this.text);
            this.text = "";
        },
        deletePost(id) {
            this.$store.commit("deletePost", id);
        },
        completedTodo(id) {
            this.$store.commit("completedTodo", id);
        }
    },
    components: { Card }
}

</script>

<style lang="scss" scoped>
    @use "@/Style/colors/colors.scss";
    @use "@/Style/mixins/borderStl.scss";
    
    .container {
        margin-top: 100px;
        width: 500px;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .todoList-enter-active, .todoList-leave-active {
        transition: all 0.5s ease;
    }

    .todoList-enter-from, .todoList-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    .todoList {
        display: flex;
        flex-direction: column;
        row-gap: 20px;
    }

    .list {
        display: flex;
        flex-direction: column;
        row-gap: 10px;

        h2 {
            color: colors.$primary
        }
    }

    .title {
        font-size: 40px;
        font-weight: 900;
        text-transform: uppercase;
        text-align: center;
        color: colors.$secondary;
    }

    .form {
        display: flex;
        align-items: center;
    }

</style>