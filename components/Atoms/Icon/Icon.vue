<template>
    <div>
        <span class="el-beforeIcon">
            <nuxt-link :to="link">
                <fa class="icon" :icon="icon" />
                {{ name }}
            </nuxt-link>
        </span>
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: 'file-pdf',
        },
        link: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-beforeIcon {
    display: inline-block;

    & a {
        color: #111111;
    }
}

.icon {
    display: inline-block;
    margin-right: 0.3em;
    font-weight: 400;
    color: #111111;
}
</style>
