<template>
    <div class="header">
        <div class="header-wrapper">
            <!-- ロゴ -->
            <h1 class="header-logo">
                <nuxt-link to="/">
                    <img :src="require('@/assets/image/symbol.png')" alt="ロゴ" />
                </nuxt-link>
            </h1>
            <!-- Hamburger -->
            <button class="menu-trigger" @click="toggle()" :class="{ active: isToggle }">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <!-- メニュー -->
        <nav class="menu-nav" :class="{ 'menu-nav-active': isToggle }">
            <nuxt-link to="/media" class="menu-nav-item" @click.native="toggle()">
                商品情報
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                キャンペーン
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                CM情報
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                工場見学・学ぶ
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                手づくりレシピ
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                オンラインショップ
                <fa class="icon" icon="angle-right" />
            </nuxt-link>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isToggle: false,
        };
    },
    methods: {
        toggle() {
            this.isToggle = !this.isToggle;
        },
    },
};
</script>

<style lang="scss" scoped>
// SPメニュー
.header {
    position: relative;
    background-color: #fff;

    &-wrapper {
        padding: 0 15px;
        height: 8vh;
        box-shadow: 0 0.1rem 1rem rgba(34, 34, 34, 0.2);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    // ロゴ
    &-logo {
        margin: 10px 0;
        & a {
            display: flex;
            align-items: center;

            & img {
                height: 20px;
            }
        }
    }
}
// Hamburger
.menu-trigger,
.menu-trigger span {
    display: inline-block;
    transition: all 0.3s;
    box-sizing: border-box;
}
.menu-trigger {
    margin: 12px 0;
    background: #fff;
    border: none;
    outline: none;
    position: relative;
    width: 20px;
    height: 16px;
    & span {
        position: absolute;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: #0074d9;
        border-radius: 4px;
        &:nth-of-type(1) {
            top: 0;
        }
        &:nth-of-type(2) {
            top: 7px;
        }
        &:nth-of-type(3) {
            bottom: 0;
        }
    }
    &:after {
        position: absolute;
        left: -5px;
        bottom: -20px;
        content: 'MENU';
        display: block;
        width: 100%;
        color: #0074d9;
        font-size: 6px;
        text-decoration: none;
        text-align: center;
        white-space: nowrap;
        transition: all 0.3s;
    }
    //クリック
    &.active {
        &:after {
            content: 'CLOSE';
            bottom: -20px;
        }
        & span {
            &:nth-of-type(1) {
                transform: translateY(7px) rotate(-45deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                transform: translateY(-7px) rotate(45deg);
            }
        }
    }
}
// メニュー
.menu-nav {
    height: 92vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #0074d9;
    transition: all 0.5s;
    opacity: 0;
    overflow-y: scroll;
    visibility: hidden;
    &-item {
        position: relative;
        text-align: left;
        width: 100%;
        padding: 10px 30px;
        color: #fff;
        text-decoration: none;
        display: block;
    }
    &-active {
        visibility: visible;
        opacity: 1;
    }
}
//アイコン
.icon {
    color: #fff;
    display: inline-block;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    // タブレットメニュー
    .header {
        &-wrapper {
            padding: 0 100px;
        }
        // ロゴ
        &-logo {
            & a {
                & img {
                    height: 30px;
                }
            }
        }
    }

    // Hamburger
    .menu-trigger {
        width: 28px;
        height: 24px;
        & span {
            &:nth-of-type(2) {
                top: 11px;
            }
        }
        &:after {
            left: 0;
        }
        //クリック
        &.active {
            & span {
                &:nth-of-type(1) {
                    transform: translateY(11px) rotate(-45deg);
                }
                &:nth-of-type(3) {
                    transform: translateY(-11px) rotate(45deg);
                }
            }
        }
    }
    // メニュー
    .menu-nav {
        &-item {
            font-size: 1.25rem;
            text-align: center;
            padding: 20px 30px;
        }
    }
    //アイコン
    .icon {
        height: 25px;
        width: 30px;
    }
}
</style>