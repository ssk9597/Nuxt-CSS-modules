<template>
    <div>
        <!-- ラベル -->
        <div class="container">
            <div class="text-center">
                <Label name="NEWS" labelColor="blue" padding="padding: 2px 4px" />
            </div>
        </div>

        <!-- リンクラベル -->
        <div class="container">
            <div class="text-center">
                <LinkLabel name="NEWS" link="/" labelColor="blue-w" padding="padding: 2px 4px" />
            </div>
        </div>

        <!-- 楕円ラベル -->
        <div class="container">
            <RoundLabel :labelArray="labelArray" />
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
    data() {
        return {
            labelArray: [
                {
                    id: 1,
                    name: 'UI',
                    labelColor: 'orange',
                },
                {
                    id: 2,
                    name: 'SEO',
                    labelColor: 'orange',
                },
                {
                    id: 3,
                    name: 'Marketing',
                    labelColor: 'orange',
                },
                {
                    id: 4,
                    name: 'MA',
                    labelColor: 'orange',
                },
            ],
        };
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