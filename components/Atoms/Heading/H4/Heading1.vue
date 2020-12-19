<template>
    <div>
        <h3 class="el-lv3Heading">{{ title }}</h3>
    </div>
</template>

<script>
export default {
    name: 'Heading1',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-lv3Heading {
    padding: 0.5rem; /*文字周りの余白*/
    color: #111111; /*文字色*/
    background: transparent; /*背景透明に*/
    border-left: solid 5px #0074d9; /*左線（実線 太さ 色）*/
    font-size: 1.25rem;
    font-weight: bold;
}
</style>