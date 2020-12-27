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
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="inbox" />
                特徴
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="box-open" />
                サービス
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="folder" />
                事例
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="tags" />
                価格
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="building" />
                会社概要
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="user-tie" />
                採用情報
                <fa class="after-icon" icon="angle-right" />
            </nuxt-link>
            <nuxt-link to="/" class="menu-nav-item" @click.native="toggle()">
                <fa class="before-icon" icon="envelope" />
                お問い合わせ
                <fa class="after-icon" icon="angle-right" />
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
    background: #fff;
    border: none;
    outline: none;
    position: relative;
    width: 24px;
    height: 18px;
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
            top: 8px;
        }
        &:nth-of-type(3) {
            bottom: 0;
        }
    }
    //クリック
    &.active {
        & span {
            &:nth-of-type(1) {
                transform: translateY(8px) rotate(-45deg);
            }
            &:nth-of-type(2) {
                opacity: 0;
            }
            &:nth-of-type(3) {
                transform: translateY(-8px) rotate(45deg);
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
    background: #fff;
    transition: all 0.5s;
    opacity: 0;
    overflow-y: scroll;
    visibility: hidden;
    &-item {
        position: relative;
        text-align: left;
        width: 100%;
        padding: 10px 30px;
        color: #444;
        font-weight: bold;
        border-top: 1px solid #ddd;
        text-decoration: none;
        display: block;
        &:last-child {
            border-bottom: 1px solid #ddd;
        }
    }
    &-active {
        visibility: visible;
        opacity: 1;
    }
}
//アイコン
.before-icon {
    color: #aaa;
    display: inline-block;
    text-align: center;
    width: 18px;
    height: 18px;
    margin-right: 15px;
}
.after-icon {
    color: #aaa;
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
        width: 32px;
        height: 26px;
        & span {
            &:nth-of-type(2) {
                top: 12px;
            }
        }
        //クリック
        &.active {
            & span {
                &:nth-of-type(1) {
                    transform: translateY(12px) rotate(-45deg);
                }
                &:nth-of-type(3) {
                    transform: translateY(-12px) rotate(45deg);
                }
            }
        }
    }
    // メニュー
    .menu-nav {
        &-item {
            font-size: 1.25rem;
            padding: 20px 30px;
        }
    }
}
</style>