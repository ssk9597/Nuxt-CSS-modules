<template>
    <div>
        <dl class="accordion">
            <dt class="accordion-ttl" v-if="open">
                <button @click="toggle()">{{ title }}</button>
            </dt>
            <dt class="accordion-ttl open" v-else>
                <button @click="toggle()">{{ title }}</button>
            </dt>
            <transition name="accordion">
                <dd class="accordion-body" v-if="!open">
                    <p class="accordion-txt">
                        {{ body }}
                    </p>
                </dd>
            </transition>
        </dl>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        title: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            open: true,
        };
    },
    methods: {
        toggle() {
            this.open = !this.open;
        },
    },
};
</script>

<style lang="scss" scoped>
.accordion {
    &-ttl {
        & button {
            position: relative;
            display: block;
            width: 100%;
            padding: 10px 40px 10px 15px;
            background: #0074d9;
            border: 1px solid #0074d9;
            color: #fff;
            font-size: 1.125rem;
            text-align: left;
            cursor: pointer;
            transition: 0.25s;
            outline: none;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                right: 15px;
                display: block;
                width: 20px;
                height: 2px;
                background: currentColor;
                transform: translateY(-50%);
            }

            &::after {
                content: '';
                position: absolute;
                top: 50%;
                right: 24px;
                display: block;
                width: 2px;
                height: 20px;
                background: currentColor;
                transform: translateY(-50%);
            }
        }

        &.open {
            & button {
                &::after {
                    content: none;
                }
            }
        }
    }

    &-body {
        padding: 15px;
        margin-bottom: 24px;
        border: 1px solid #ddd;
    }
}

.accordion-enter,
.accordion-leave-to {
    opacity: 0;
}

.accordion-enter-active,
.accordion-leave-active {
    transition: opacity 1s;
}
</style>