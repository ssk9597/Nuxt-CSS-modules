<template>
    <div>
        <Carousel :photos="photos" />
        <div class="container"></div>
    </div>
</template>

<script>
import Carousel from '@/components/Organisms/FirstView/Carousel/Carousel';
export default {
    components: {
        Carousel,
    },
    data() {
        return {
            photos: [
                { id: 1, url: require('@/assets/image/spring.jpg'), alt: '春' },
                { id: 2, url: require('@/assets/image/summer.jpg'), alt: '夏' },
                { id: 3, url: require('@/assets/image/auturn.jpg'), alt: '秋' },
                { id: 4, url: require('@/assets/image/winter.jpg'), alt: '冬' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    margin: 0 auto;
    padding: 0 15px;
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .container {
        width: 100%;
        margin: 0 auto;
        padding: 0 30px;
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .container {
        width: 100%;
        margin: 0 auto;
        padding: 0 50px;
    }
}

// //1310px以上はPC
@media screen and (min-width: 1310px) {
    .container {
        max-width: 1280px;
        width: 100%;
        margin: 0 auto;
        padding: 0 15px;
    }
}
</style>