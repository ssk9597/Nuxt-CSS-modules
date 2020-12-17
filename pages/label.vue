<template>
    <div>
        <!-- ラベル -->
        <Label />
        <!-- リンクラベル -->
        <LinkLabel />
        <!-- 楕円ラベル -->
        <RoundLabel />
    </div>
</template>

<script>
import Label from '@/components/Atoms/Label/Label';
import LinkLabel from '@/components/Atoms/Label/LinkLabel';
import RoundLabel from '@/components/Atoms/Label/RoundLabel';

export default {
    components: {
        Label,
        LinkLabel,
        RoundLabel,
    },
};
</script>

<style lang="scss" scoped>
</style>