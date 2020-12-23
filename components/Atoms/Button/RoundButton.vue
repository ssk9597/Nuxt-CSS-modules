<template>
    <div>
        <nuxt-link :to="link" :style="padding" :class="btnColor" class="el-roundBtn">
            {{ name }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'RoundButton',
    props: {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: '/',
        },
        btnColor: {
            type: String,
            default: 'blue',
        },
        padding: {
            type: String,
            default: 'padding: 15px 10px',
        },
    },
};
</script>

<style lang="scss" scoped>
.el-roundBtn {
    display: inline-block;
    width: 236px;
    max-width: 100%;
    padding: 15px 10px;
    border-radius: 10px;
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

//ボタンの色
.navy {
    background-color: #001f3f;
    border: 2px solid transparent;
    border-bottom-color: #000e1d;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #001f3f;
    }
}
.blue {
    background-color: #0074d9;
    border: 2px solid transparent;
    border-bottom-color: #0062b7;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #0074d9;
    }
}
.olive {
    background-color: #3d9970;
    border: 2px solid transparent;
    border-bottom-color: #33815e;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #3d9970;
    }
}
.green {
    background-color: #2ecc40;
    border: 2px solid transparent;
    border-bottom-color: #28b037;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #2ecc40;
    }
}
.orange {
    background-color: #ff851b;
    border: 2px solid transparent;
    border-bottom-color: #f87300;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff851b;
    }
}
.red {
    background-color: #ff4136;
    border: 2px solid transparent;
    border-bottom-color: #ff2114;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff4136;
    }
}
.maroon {
    background-color: #85144b;
    border: 2px solid transparent;
    border-bottom-color: #67103a;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #85144b;
    }
}
.fuchsia {
    background-color: #f012be;
    border: 2px solid transparent;
    border-bottom-color: #d30da6;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #f012be;
    }
}
.purple {
    background-color: #b10dc9;
    border: 2px solid transparent;
    border-bottom-color: #950ba9;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #b10dc9;
    }
}
.black {
    background-color: #111111;
    border: 2px solid transparent;
    border-bottom-color: #000;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #111111;
    }
}
.gray {
    background-color: #aaaaaa;
    border: 2px solid transparent;
    border-bottom-color: #999999;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #aaaaaa;
    }
}
</style>
