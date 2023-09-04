<template>
    <Teleport to="body">
        <Transition name="fade">
            <div
                class="modal"
 
                v-if="active"
                @click="$emit('setActive', false)"
            >
                <div class="modalContent" @click="(e) => e.stopPropagation()">
                    <slot></slot>
                </div>
            </div>
        </Transition>
    </Teleport>
</template>

<script>
export default {
    name: "Modal",
    emits: ["setActive"],
    props: {
        active: {
            type: Boolean,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    .modal {
        height: 100vh;
        width: 100vw;
        background-color: #00000029;
        position: fixed;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        z-index: 999;
    }

    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }

    .modalContent {
        padding: 30px 45px;
        width: 30%;
        height: 20%;
        min-width: 250px;
        min-height: 150px;
        background-color: white;
        border-radius: 12px;
    }

</style>