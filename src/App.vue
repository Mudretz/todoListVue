<template>
    <div class="app">
        <TodoPage />
    </div>
</template>

<script>
import TodoPage from './Components/TodoPage.vue';

export default {
    components: {
    TodoPage
}
}

</script>

<style lang="scss" scoped>
    @use "@/Style/colors/colors.scss";

    .app {
        padding-bottom: 200px;
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        background-color: colors.$bgColor;
    }

</style>