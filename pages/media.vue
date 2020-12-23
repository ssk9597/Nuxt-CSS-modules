<template>
    <div>
        <!-- 左イメージ、右にテキストを配置したモジュール -->
        <div class="container">
            <Media title="夜明け前">
                木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
            </Media>
        </div>

        <!-- 右イメージ、左にテキストを配置したモジュール -->
        <div class="container">
            <ReverseMedia :image="require('~/assets/image/photo2.jpg')" title="吾輩は猫である">
                吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。
                吾輩はここで始めて人間というものを見た。
            </ReverseMedia>
        </div>

        <!-- 左イメージ(50%)、右にテキスト(50%)を配置したモジュール -->
        <div class="container">
            <HalfMedia title="人間失格">
                恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。
            </HalfMedia>
        </div>

        <!-- 右イメージ(50%)、左にテキスト(50%)を配置したモジュール -->
        <div class="container">
            <HalfReverseMedia :image="require('~/assets/image/photo2.jpg')" title="夜明け前">
                木曾路はすべて山の中である。あるところは岨づたいに行く崖の道であり、あるところは数十間の深さに臨む木曾川の岸であり、あるところは山の尾をめぐる谷の入り口である。
            </HalfReverseMedia>
        </div>

        <div class="container">
            <MediaButton title="人間失格">
                恥の多い生涯を送って来ました。自分には、人間の生活というものが、見当つかないのです。自分は東北の田舎に生れましたので、汽車をはじめて見たのは、よほど大きくなってからでした。
            </MediaButton>
        </div>
    </div>
</template>

<script>
//Molecules
import Media from '@/components/Molecules/Media/Media';
import ReverseMedia from '@/components/Molecules/Media/ReverseMedia';
import HalfMedia from '@/components/Molecules/Media/HalfMedia';
import HalfReverseMedia from '@/components/Molecules/Media/HalfReverseMedia';
//Organisms
import MediaButton from '@/components/Organisms/MediaButton/MediaButton';

export default {
    components: {
        Media,
        ReverseMedia,
        HalfMedia,
        HalfReverseMedia,
        MediaButton,
    },
};
</script>

<style lang="scss">
.container {
    padding-bottom: 40px;
}
</style>