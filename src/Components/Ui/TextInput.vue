<template>
    <input
        :value="modelValue"
        @input="updateInput"
        :placeholder="placeholder"
        type="text"
        class="input"
    >
</template>

<script>
export default {
    name: "TextInput",
    props: {
        modelValue: {
            type: [String, Number],
            required: true
        },
        placeholder: {
            type: String,
            required: true
        }
    },
    methods: {
        updateInput(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "@/Style/mixins/borderStl.scss";
    .input {
        padding: 16px 20px;
        box-sizing: border-box;
        width: 100%;
        border-radius: 10px 0px 0px 10px;
        border: none;
        font-size: 16px;
        @include borderStl.shadow;

        &:focus {
            outline: 0;
            box-shadow: 0 0 0 2px#87b7ff;
        }
    }
</style>