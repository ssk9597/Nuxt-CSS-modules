<template>
    <div>
        <Header />
        <div class="header-padding"></div>
        <Nuxt />
    </div>
</template>

<script>
//background//
// import Header from '@/components/Organisms/Header/HeaderFullwrap/BackGroundColorTextWhite/HamburgerText/Header';
// import Header from '@/components/Organisms/Header/HeaderFullwrap/BackGroundColorTextWhite/Hamburger/Header';

//Icon//
// import Header from '@/components/Organisms/Header/HeaderFullwrap/Icon/HamburgerText/Header';
// import Header from '@/components/Organisms/Header/HeaderFullwrap/Icon/Hamburger/Header';

//Accodion//
// import Header from '@/components/Organisms/Header/HeaderFullwrap/Accodion/HamburgerText/Header';
import Header from '@/components/Organisms/Header/HeaderFullwrap/Accodion/Hamburger/Header';

export default {
    components: {
        Header,
    },
};
</script>

<style lang="scss">
//https://github.com/stackcss/css-wipe
@import 'css-wipe';

html {
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
        sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

* {
    line-height: 2;
}

.header-padding {
    padding-bottom: 8vh;
}
</style>
