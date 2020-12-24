<template>
    <div class="table-wrapper">
        <div class="container">
            <!-- テーブル（水平） -->
            <HorizontalTable :horizontalTable="horizontalTable"></HorizontalTable>
        </div>

        <div class="container">
            <!-- テーブル（垂直） -->
            <VerticalTable :tablesTh="tablesTh" :tablesTd="tablesTd" />
        </div>

        <div class="container">
            <!-- テーブル（交差） -->
            <CrossingTable :tablesTh="tablesTh" :tablesTd="tablesTd" />
        </div>
    </div>
</template>

<script>
import HorizontalTable from '@/components/Molecules/Table/HorizontalTable';
import VerticalTable from '@/components/Molecules/Table/VerticalTable';
import CrossingTable from '@/components/Molecules/Table/CrossingTable';

export default {
    components: {
        HorizontalTable,
        VerticalTable,
        CrossingTable,
    },
    data() {
        return {
            horizontalTable: [
                { id: 1, th: '名前', td: '田中太郎' },
                { id: 2, th: '所属', td: '株式会社〇〇' },
                { id: 3, th: '職種', td: 'マーケティング' },
                { id: 4, th: '得意分野', td: 'SEO' },
            ],
            tablesTh: [
                { id: 1, th: '名前' },
                { id: 2, th: '所属' },
                { id: 3, th: '職種' },
                { id: 4, th: '得意分野' },
            ],
            tablesTd: [
                { id: 1, td1: '田中太郎', td2: '株式会社〇〇', td3: 'マーケティング', td4: 'SEO' },
                {
                    id: 2,
                    td1: '佐藤花子',
                    td2: '株式会社〇〇',
                    td3: 'マーケティング',
                    td4: '広告',
                },
                { id: 3, td1: '鈴木一郎', td2: '株式会社〇〇', td3: '営業', td4: 'テレアポ' },
            ],
        };
    },
};
</script>

<style>
.table-wrapper {
    max-width: 780px;
    margin: 0 auto;
}

.container {
    margin-bottom: 32px;
}
</style>