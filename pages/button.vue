<template>
    <div>
        <!-- ボタン -->
        <div class="text-center">
            <ButtonHoverWhite name="標準ボタン" />
        </div>

        <!-- 大ボタン -->
        <div class="text-center">
            <LargeButtonHoverWhite name="大ボタン" />
        </div>

        <!-- 矢印付きボタン -->
        <div class="text-center">
            <ArrowButtonHoverWhite name="矢印付きボタン" icon="arrow-right" />
        </div>

        <!-- 角丸ボタン -->
        <div class="text-center">
            <RoundButtonHoverWhite name="角丸ボタン" />
        </div>

        <!-- ボタン -->
        <div class="text-center">
            <ButtonHoverColor name="標準ボタン" />
        </div>

        <!-- 大ボタン -->
        <div class="text-center">
            <LargeButtonHoverColor name="大ボタン" />
        </div>

        <!-- 矢印付きボタン -->
        <div class="text-center">
            <ArrowButtonHoverColor name="矢印付きボタン" icon="arrow-right" />
        </div>
    </div>
</template>

<script>
//hoverWhite
import ButtonHoverWhite from '@/components/Atoms/Button/HoverWhite/ButtonHW';
import LargeButtonHoverWhite from '@/components/Atoms/Button/HoverWhite/LargeButtonHW';
import ArrowButtonHoverWhite from '@/components/Atoms/Button/HoverWhite/ArrowButtonHW';
import RoundButtonHoverWhite from '@/components/Atoms/Button/HoverWhite/RoundButtonHW';
//hoverColor
import ButtonHoverColor from '@/components/Atoms/Button/HoverColor/ButtonHC';
import LargeButtonHoverColor from '@/components/Atoms/Button/HoverColor/LargeButtonHC';
import ArrowButtonHoverColor from '@/components/Atoms/Button/HoverColor/ArrowButtonHC';

export default {
    components: {
        ButtonHoverWhite,
        LargeButtonHoverWhite,
        ArrowButtonHoverWhite,
        RoundButtonHoverWhite,
        ButtonHoverColor,
        LargeButtonHoverColor,
        ArrowButtonHoverColor,
    },
};
</script>

<style lang="scss">
.text-center {
    text-align: center;
    padding-bottom: 24px;
}
</style>
