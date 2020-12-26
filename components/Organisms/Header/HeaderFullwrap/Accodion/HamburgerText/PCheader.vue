<template>
    <div class="header">
        <div class="header-wrapper">
            <!-- ロゴ -->
            <h1 class="header-logo">
                <nuxt-link to="/">
                    <img :src="require('@/assets/image/logo.png')" alt="ロゴ" />
                </nuxt-link>
            </h1>
            <!-- PCメニュー -->
            <nav class="header-nav">
                <nuxt-link to="/" class="header-nav-item">特徴</nuxt-link>
                <nuxt-link to="/" class="header-nav-item">サービス</nuxt-link>
                <nuxt-link to="/" class="header-nav-item">事例</nuxt-link>
                <nuxt-link to="/" class="header-nav-item">価格</nuxt-link>
                <nuxt-link to="/" class="header-nav-item">会社概要</nuxt-link>
                <nuxt-link to="/" class="header-nav-item">採用情報</nuxt-link>
                <nuxt-link to="/" class="header-nav-contact">お問い合わせ</nuxt-link>
            </nav>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
    display: none;
}
// //560px以上はタブレット
@media screen and (min-width: 560px) {
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .header {
        padding: 0 15px;
        display: block;
        background-color: #fff;
        box-shadow: 0 0.1rem 1rem rgba(34, 34, 34, 0.2);

        &-wrapper {
            height: 8vh;
            max-width: 1280px;
            width: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        &-logo {
            & a {
                display: flex;
                align-items: center;
            }
        }

        &-nav {
            display: flex;
            align-items: center;
            &-item,
            &-contact {
                line-height: 8vh;
                padding: 0 10px;
                font-weight: bold;
                text-decoration: none;

                &:hover {
                    opacity: 0.75;
                }
            }

            &-item {
                color: #111;
            }

            &-contact {
                font-weight: bold;
                margin-left: 10px;
                padding: 0 20px;
                height: 40px;
                line-height: 40px;
                border-radius: 10px;
                background: #0074d9;
                color: #fff;
            }
        }
    }
}
</style>