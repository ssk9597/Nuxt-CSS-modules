<template>
    <div class="flex">
        <div v-for="label in labelArray" :key="label.id">
            <span :style="label.padding" :class="label.labelColor" class="el-roundLabel">
                {{ label.name }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RoundLable',
    props: {
        labelArray: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: center;
}
.el-roundLabel {
    display: inline-block;
    padding: 0.2em 0.8em;
    margin-right: 0.5em;
    border-radius: 1em;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
}

//ラベルの色
.navy {
    background-color: #001f3f;
    border: 2px solid transparent;
}
.navy-w {
    color: #001f3f;
    border: 2px solid #001f3f;
    background-color: #fff;
}
.blue {
    background-color: #0074d9;
    border: 2px solid transparent;
}
.blue-w {
    color: #0074d9;
    border: 2px solid #0074d9;
    background-color: #fff;
}
.olive {
    background-color: #3d9970;
    border: 2px solid transparent;
}
.olive-w {
    color: #3d9970;
    border: 2px solid #3d9970;
    background-color: #fff;
}
.green {
    background-color: #2ecc40;
    border: 2px solid transparent;
}
.green-w {
    color: #2ecc40;
    border: 2px solid #2ecc40;
    background-color: #fff;
}
.orange {
    background-color: #ff851b;
    border: 2px solid transparent;
}
.orange-w {
    color: #ff851b;
    border: 2px solid #ff851b;
    background-color: #fff;
}
.red {
    background-color: #ff4136;
    border: 2px solid transparent;
}
.red-w {
    color: #ff4136;
    border: 2px solid #ff4136;
    background-color: #fff;
}
.maroon {
    background-color: #85144b;
    border: 2px solid transparent;
}
.maroon-w {
    color: #85144b;
    border: 2px solid #85144b;
    background-color: #fff;
}
.fuchsia {
    background-color: #f012be;
    border: 2px solid transparent;
}
.fuchsia-w {
    color: #f012be;
    border: 2px solid #f012be;
    background-color: #fff;
}
.purple {
    background-color: #b10dc9;
    border: 2px solid transparent;
}
.purple-w {
    color: #b10dc9;
    border: 2px solid #b10dc9;
    background-color: #fff;
}
.black {
    background-color: #111111;
    border: 2px solid transparent;
}
.black-w {
    color: #111111;
    border: 2px solid #111111;
    background-color: #fff;
}
.gray {
    background-color: #aaaaaa;
    border: 2px solid transparent;
}
.gray-w {
    color: #aaaaaa;
    border: 2px solid #aaaaaa;
    background-color: #fff;
}
</style>