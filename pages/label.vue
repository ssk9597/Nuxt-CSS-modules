<template>
    <div>
        <!-- ラベル -->
        <div class="container">
            <div class="text-center">
                <Label name="NEWS" />
            </div>
        </div>

        <!-- リンクラベル -->
        <div class="container">
            <div class="text-center">
                <LinkLabel name="NEWS" />
            </div>
        </div>

        <!-- 楕円ラベル -->
        <div class="container">
            <div class="text-center">
                <RoundLabel name="NEWS" />
            </div>
        </div>
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
.container {
    padding-bottom: 30px;
}

.text-center {
    text-align: center;
}
</style>