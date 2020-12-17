<template>
    <div>
        <!-- ボタン -->
        <Button />
        <!-- 大ボタン -->
        <LargeButton />
        <!-- 矢印付きボタン -->
        <ArrowButton />
        <!-- 角丸ボタン -->
        <RoundButton />
    </div>
</template>

<script>
import Button from '@/components/Atoms/Button/Button';
import LargeButton from '@/components/Atoms/Button/LargeButton';
import ArrowButton from '@/components/Atoms/Button/ArrowButton';
import RoundButton from '@/components/Atoms/Button/RoundButton';

export default {
    components: {
        Button,
        LargeButton,
        ArrowButton,
        RoundButton,
    },
};
</script>

<style lang="scss"></style>
