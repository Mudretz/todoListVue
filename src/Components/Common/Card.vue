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
                class="icon delete"
            >
            <!-- <img
                @click="$emit('deletePost', todo.id)"
                :src="deleteIcon"
                class="icon delete"
            > -->
            <!-- <img
                v-show="!todo.completed"
                :src="editIcon"
                class="icon edit"
                
            > -->
            <img
                v-show="!todo.completed"
                @click="$emit('completedTodo', todo.id)"
                :src="checkIcon"
                class="icon check"
            >
        </div>
        <Modal
            :active="active"
            @setActive="setActive"
        >
            <div class="modal">
                <div class="box">
                    <p>Вы действительно хотите удалить задачу?</p>
                    <p class="text">"{{ todo.text }}"</p>
                </div>
                <div class="buttonGroup">
                    <CustomButton
                        type="button"
                        color="danger"
                        @click="$emit('deletePost', todo.id)"
                    >
                        Да
                    </CustomButton>
                    <CustomButton
                        @click="setActive(false)"
                        type="button"
                    >
                        Нет
                    </CustomButton>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script>
import deleteIcon from "@/Assets/Icons/delete.svg";
import editIcon from "@/Assets/Icons/edit.svg";
import checkIcon from "@/Assets/Icons/check.svg";

export default {
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

    .modal {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;

        .box {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .text {
            font-weight: 700;
        }
    }

    .buttonGroup {
        margin-top: 30px;
        display: flex;
        column-gap: 200px;
    }
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