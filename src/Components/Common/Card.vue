<template>
    <div class="card">
        <div class="textBlock">
            <p class="text">{{  todo.text }}</p>
            <div class="line" :class="{ active: todo.completed }"></div>
        </div>
        <div class="iconGroup">
            <img
                @click="setActive(true)"
                :src="deleteIcon"
                alt="удалить"
                class="icon delete"
            >
            <img
                v-show="!todo.completed"
                @click="$emit('completedTodo', todo.id)"
                :src="checkIcon"
                alt="выполено"
                class="icon check"
            >
        </div>
        <ModalAddTodo
            :todo="todo"
            :active="active"
            @deletePost="$emit('deletePost', todo.id)"
            @setActive="setActive"
        />
    </div>
</template>

<script>
import deleteIcon from "@/Assets/Icons/delete.svg";
import editIcon from "@/Assets/Icons/edit.svg";
import checkIcon from "@/Assets/Icons/check.svg";
import ModalAddTodo from "@/Components/Common/ModalAddTodo.vue";

export default {
    components: {ModalAddTodo},
    emits: ["deletePost", "completedTodo"],
    data() {
        return {
            deleteIcon,
            editIcon,
            checkIcon,
            active: false
        };
    },
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        setActive(state) {
            this.active = state;
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "@/Style/colors/colors.scss";
    @use "@/Style/mixins/borderStl.scss";

    .card {
        padding: 0 20px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        column-gap: 30px;
        @include borderStl.shadow;
    }

    .line {
        position: absolute;
        width: 0;
        border-top: 2px solid black;
        transition: 0.3s;
        
        &.active {
            width: 100%;
            transition: 0.3s;
        }
    }

    .textBlock {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 20px;
        word-break: break-word;
    }

    .iconGroup {
        display: flex;
        column-gap: 10px;
    }

    .icon {
        padding: 2px;
        width: 20px;
        cursor: pointer;
        border: 2px solid colors.$bgColor;
        border-radius: 5px;
        transition: 0.3s;

        &:hover {
            border-width: 2px;
            border-style: solid;
            transition: 0.3s;

            &.delete {
                border-color: colors.$danger;
            }

            &.edit {
                border-color: colors.$primary;
            }

            &.check {
                border-color: colors.$success;
            }
        }
    }
</style>