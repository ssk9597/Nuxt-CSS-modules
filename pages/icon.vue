<template>
    <div>
        <!-- ダウンロードボタン -->
        <div class="text-center">
            <IconSmall name="ダウンロード" icon="download" link="/" />
        </div>

        <!-- PDFボタン -->
        <div class="text-center">
            <Icon name="ファイル名.pdf" icon="file-pdf" link="/" />
        </div>
    </div>
</template>

<script>
import IconSmall from '@/components/Atoms/Icon/IconSmall';
import Icon from '@/components/Atoms/Icon/Icon';

export default {
    components: {
        IconSmall,
        Icon,
    },
};
</script>

<style lang="scss">
.text-center {
    text-align: center;
    padding-bottom: 24px;
}
</style>
