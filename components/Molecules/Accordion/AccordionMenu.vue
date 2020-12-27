<template>
    <div class="accordion">
        <div class="accordion-ttl" v-if="open">
            <div @click="toggle()">
                <fa class="before-icon" icon="angle-right" />
                {{ parentMenu }}
                <fa class="after-icon" icon="plus" />
            </div>
        </div>
        <div class="accordion-ttl" v-else>
            <div @click="toggle()">
                <fa class="before-icon" icon="angle-right" />
                {{ parentMenu }}
                <fa class="after-icon" icon="minus" />
            </div>
        </div>
        <div class="accordion-body" v-if="!open">
            <nuxt-link
                class="accordion-body-text"
                v-for="menu in childMenus"
                :key="menu.id"
                :to="menu.link"
                @click.native="
                    AccordionToggle();
                    toggle();
                "
            >
                <fa class="before-icon" icon="angle-right" />
                {{ menu.nav }}
            </nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Accordion',
    props: {
        parentMenu: {
            type: String,
            required: true,
        },
        childMenus: {
            type: Array,
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
        AccordionToggle() {
            this.$emit('AccordionToggle');
        },
    },
};
</script>

<style lang="scss" scoped>
.accordion {
    width: 100%;
    &-ttl {
        & div {
            position: relative;
            display: block;
            width: 100%;
            padding: 15px 15px;
            background: #fff;
            border: none;
            border-top: 1px solid #ddd;
            color: #444;
            font-weight: bold;
            text-align: left;
            cursor: pointer;
            outline: none;
        }
    }

    &-body {
        &-text {
            display: block;
            width: 100%;
            padding: 10px 30px;
            border-bottom: 1px solid #ddd;
            text-decoration: none;
            color: #444;
            font-size: 0.875rem;

            &:last-child {
                border-bottom: none;
            }
        }
    }
}
//アイコン
.before-icon {
    color: #0074d9;
    display: inline-block;
    text-align: center;
    margin-right: 10px;
}
.after-icon {
    color: #0074d9;
    display: inline-block;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}
</style>