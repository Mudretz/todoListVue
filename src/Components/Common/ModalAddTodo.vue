<template>
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
                    @click="$emit('setActive', false)"
                    type="button"
                >
                    Нет
                </CustomButton>
            </div>
        </div>
    </Modal>
</template>

<script>
export  default {
    name: "ModalAddTodo",
    emits: ["deletePost", "setActive"],
    props: {
        todo: {
            type: Object,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
}

</script>

<style lang="scss">
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
</style>