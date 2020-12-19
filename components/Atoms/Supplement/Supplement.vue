<template>
    <div>
        <p class="el-note">{{ text }}</p>
    </div>
</template>

<script>
export default {
    name: 'Supplement',
    props: {
        text: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-note {
    font-size: 0.75rem;
}
</style>