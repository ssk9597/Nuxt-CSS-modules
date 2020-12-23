<template>
    <div>
        <nuxt-link
            :to="link"
            :style="padding"
            :class="[btnColor, { 'icon-btn': icon }]"
            class="el-btn"
        >
            {{ name }}<fa :class="{ icon: icon }" :icon="iconName" />
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Button',
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
            default: 'padding: 20px 10px',
        },
        icon: {
            type: String,
            required: false,
        },
        iconName: {
            type: String,
            required: false,
        },
    },
};
</script>

<style lang="scss" scoped>
.el-btn {
    display: inline-block;
    width: 300px;
    max-width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    color: #fff;
    font-size: 1.125rem;
    text-align: center;
    text-decoration: none;
    transition: 0.25s;
}

//アイコン
.icon-btn {
    position: relative;
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

//ボタンの色
.navy {
    background-color: #001f3f;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #001f3f;
    }
}
.navy-w {
    color: #001f3f;
    border: 2px solid #001f3f;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #001f3f;
        color: #fff;
    }
}
.blue {
    background-color: #0074d9;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #0074d9;
    }
}
.blue-w {
    color: #0074d9;
    border: 2px solid #0074d9;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #0074d9;
        color: #fff;
    }
}
.olive {
    background-color: #3d9970;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #3d9970;
    }
}
.olive-w {
    color: #3d9970;
    border: 2px solid #3d9970;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #3d9970;
        color: #fff;
    }
}
.green {
    background-color: #2ecc40;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #2ecc40;
    }
}
.green-w {
    color: #2ecc40;
    border: 2px solid #2ecc40;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #2ecc40;
        color: #fff;
    }
}
.orange {
    background-color: #ff851b;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff851b;
    }
}
.orange-w {
    color: #ff851b;
    border: 2px solid #ff851b;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #ff851b;
        color: #fff;
    }
}
.red {
    background-color: #ff4136;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #ff4136;
    }
}
.red-w {
    color: #ff4136;
    border: 2px solid #ff4136;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #ff4136;
        color: #fff;
    }
}
.maroon {
    background-color: #85144b;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #85144b;
    }
}
.maroon-w {
    color: #85144b;
    border: 2px solid #85144b;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #85144b;
        color: #fff;
    }
}
.fuchsia {
    background-color: #f012be;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #f012be;
    }
}
.fuchsia-w {
    color: #f012be;
    border: 2px solid #f012be;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #f012be;
        color: #fff;
    }
}
.purple {
    background-color: #b10dc9;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #b10dc9;
    }
}
.purple-w {
    color: #b10dc9;
    border: 2px solid #b10dc9;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #b10dc9;
        color: #fff;
    }
}
.black {
    background-color: #111111;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #111111;
    }
}
.black-w {
    color: #111111;
    border: 2px solid #111111;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #111111;
        color: #fff;
    }
}
.gray {
    background-color: #aaaaaa;
    border: 2px solid transparent;

    &:focus,
    &:hover {
        background-color: #fff;
        border-color: currentColor;
        color: #aaaaaa;
    }
}
.gray-w {
    color: #aaaaaa;
    border: 2px solid #aaaaaa;
    background-color: #fff;

    &:focus,
    &:hover {
        background-color: #aaaaaa;
        color: #fff;
    }
}
</style>
