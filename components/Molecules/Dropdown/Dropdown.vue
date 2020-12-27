<template>
    <div class="dropdown" @mouseover="overToggle()" @mouseleave="leaveToggle()">
        <nuxt-link :to="parentLink" class="dropdown-ttl">
            {{ parentMenu }}
            <fa class="after-icon" icon="angle-down" />
        </nuxt-link>
        <ul class="dropdown-nav" v-if="open">
            <li class="dropdown-nav-list" v-for="menu in childMenus" :key="menu.id">
                <nuxt-link class="dropdown-nav-list-item" :to="menu.link">
                    <fa class="before-icon" icon="angle-right" />
                    {{ menu.nav }}
                </nuxt-link>
                <nuxt-link
                    class="dropdown-nav-childList"
                    v-for="childNav in menu.childNav"
                    :key="childNav.id"
                    :to="childNav.link"
                >
                    <fa class="before-icon" icon="angle-right" />
                    {{ childNav.nav }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Dropdown',
    props: {
        parentMenu: {
            type: String,
            required: true,
        },
        parentLink: {
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
            open: false,
        };
    },
    methods: {
        overToggle() {
            this.open = true;
        },
        leaveToggle() {
            this.open = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.dropdown {
    &-ttl {
        line-height: 8vh;
        padding: 0 10px;
        font-weight: bold;
        text-decoration: none;
        color: #111;
        &:hover {
            color: #0074d9;
        }
    }
    &-nav {
        position: absolute;
        top: 8vh;
        left: 0;
        width: 100%;
        display: flex;
        background: #fff;
        &-list {
            padding: 20px 30px;
            flex-grow: 1;
            display: block;
            text-align: left;
            &-item {
                color: #111;
                font-weight: bold;
                font-size: 0.875rem;
                text-decoration: none;
                &:hover {
                    color: #0074d9;
                }
            }
        }
        &-childList {
            display: block;
            padding: 10px 0 10px 20px;
            font-size: 0.875rem;
            font-weight: normal;
            color: #111;
            text-decoration: none;
            &:hover {
                color: #0074d9;
            }
        }
    }
}
</style>