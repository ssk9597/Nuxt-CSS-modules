<template>
    <div>
        <!-- 左イメージ、右にテキストを配置したモジュール -->
        <Media />
        <!-- 右イメージ、左にテキストを配置したモジュール -->
        <ReverseMedia />
        <!-- 左イメージ(50%)、右にテキスト(50%)を配置したモジュール -->
        <HalfMedia />
    </div>
</template>

<script>
import Media from '@/components/Molecules/Media/Media';
import ReverseMedia from '@/components/Molecules/Media/ReverseMedia';
import HalfMedia from '@/components/Molecules/Media/HalfMedia';

export default {
    components: {
        Media,
        ReverseMedia,
        HalfMedia,
    },
};
</script>

<style>
</style>