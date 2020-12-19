<template>
    <div>
        <nuxt-link to="/button" class="el-btn btn-color">
            {{ name }}<fa class="icon" :icon="icon" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'ArrowButton',
    props: {
        name: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            default: 'arrow-right',
        },
    },
};
</script>

<style lang="scss" scoped>
.el-btn {
    position: relative;
    display: inline-block;
    width: 300px;
    max-width: 100%;
    padding: 20px 10px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
    padding-right: 2em;
    padding-left: 1.38em;
}

.icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0.83em;
    font-weight: 900;
}

.btn-color {
    //colorはここから
    // http://clrs.cc/
    color: #0074d9;
    border: 2px solid #0074d9;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #0074d9;
        color: #fff;
    }
}
</style>
