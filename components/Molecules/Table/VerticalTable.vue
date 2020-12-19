<template>
    <div class="table">
        <table>
            <slot>
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
                </tbody>
            </slot>
        </table>
    </div>
</template>

<script>
export default {
    name: 'VerticalTable',
};
</script>

<style lang="scss" scoped>
.table {
    border: 1px solid #ddd;
    border-right-width: 0;
    overflow-x: auto;

    & table {
        width: 100%;
        text-align: center;
    }

    & th {
        padding: 15px;
        background-color: #efefef;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        font-weight: bold;
        vertical-align: middle;
        white-space: nowrap;
    }

    & td {
        padding: 15px;
        border-bottom: 1px solid #ddd;
        border-right: 1px solid #ddd;
        vertical-align: middle;
        white-space: nowrap;
    }

    & tr:last-child th,
    & tr:last-child td {
        border-bottom-width: 0;
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .table {
        table-layout: fixed;

        & th {
            white-space: normal;
        }

        & td {
            white-space: normal;
        }
    }
}
</style>