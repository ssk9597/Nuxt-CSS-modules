<template>
    <div class="table-wrapper">
        <div class="container">
            <!-- テーブル（水平） -->
            <HorizontalTable></HorizontalTable>
        </div>

        <div class="container">
            <!-- テーブル（垂直） -->
            <VerticalTable>
                <thead>
                    <tr>
                        <th>名前</th>
                        <th>所属</th>
                        <th>職種</th>
                        <th>得意分野</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>田中太郎</td>
                        <td>株式会社〇〇</td>
                        <td>マーケティング</td>
                        <td>SEO</td>
                    </tr>
                    <tr>
                        <td>佐藤花子</td>
                        <td>株式会社〇〇</td>
                        <td>営業</td>
                        <td>BtoB営業</td>
                    </tr>
                    <tr>
                        <td>鈴木一郎</td>
                        <td>株式会社〇〇</td>
                        <td>経理</td>
                        <td>計算</td>
                    </tr>
                    <tr>
                        <td>高橋大輔</td>
                        <td>株式会社〇〇</td>
                        <td>総務</td>
                        <td>すべて</td>
                    </tr>
                </tbody>
            </VerticalTable>
        </div>

        <div class="container">
            <!-- テーブル（交差） -->
            <CrossingTable></CrossingTable>
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