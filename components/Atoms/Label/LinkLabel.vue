<template>
    <div>
        <nuxt-link :to="link" :style="padding" :class="labelColor" class="el-label">
            {{ name }}
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'LinkLable',
    props: {
        name: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: '/',
        },
        labelColor: {
            type: String,
            default: 'orange',
        },
        padding: {
            type: String,
            default: 'padding: 0.2em 0.3em',
        },
    },
};
</script>

<style lang="scss" scoped>
.el-label {
    display: inline-block;
    padding: 0.2em 0.3em;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    transition: 0.25s;
    text-decoration: none;
    cursor: pointer;
}

//ラベルの色
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