
<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiper-slide v-for="photo in photos" :key="photo.id">
                <img :src="photo.url" :alt="photo.alt" />
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/swiper-bundle.css';

export default {
    name: 'swiper-example-loop',
    title: 'Loop mode / Infinite loop',
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        photos: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                //ページネーション
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true, //クリックするとその要素に移動
                },
                //次へ進むなどのナビゲーション
                navigation: {
                    nextEl: '.swiper-button-next', //次に進むボタン
                    prevEl: '.swiper-button-prev', //前へ戻るボタン
                },
                //自動再生
                autoplay: {
                    delay: 3000, //3秒
                },
            },
        };
    },
};
</script>

<style lang="scss" scoped>
.swiper-slide {
    width: 100%;
    height: 30vh;
    background-size: contain;
    // background-size: cover;
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .swiper-slide {
        width: 100%;
        height: 50vh;
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .swiper-slide {
        width: 100%;
        height: 60vh;
    }
}
</style>