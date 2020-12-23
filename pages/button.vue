<template>
    <div>
        <!-- ボタン -->
        <!-- ①ボタンテキスト、②リンク先、③ボタンカラー、④ボタンサイズの調整、⑤アイコンの有無、⑥アイコン名 -->
        <div class="text-center">
            <Button
                name="標準ボタン"
                link="/accordion"
                btnColor="blue"
                padding="padding: 10px"
                icon="true"
                iconName="arrow-right"
            />
        </div>
        <div class="text-center">
            <Button name="標準ボタン" link="/accordion" btnColor="blue-w" padding="padding: 10px" />
        </div>

        <!-- 角丸ボタン -->
        <div class="text-center">
            <RoundButton
                name="角丸ボタン"
                link="/accordion"
                btnColor="gray"
                padding="padding: 10px"
            />
        </div>
    </div>
</template>

<script>
import Button from '@/components/Atoms/Button/Button';
import RoundButton from '@/components/Atoms/Button/RoundButton';

export default {
    components: {
        Button,
        RoundButton,
    },
};
</script>

<style lang="scss">
.text-center {
    text-align: center;
    padding-bottom: 24px;
}
</style>
