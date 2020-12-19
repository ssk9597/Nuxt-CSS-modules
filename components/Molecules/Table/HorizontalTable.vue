<template>
    <div class="table">
        <table>
            <tbody>
                <slot>
                    <tr>
                        <th>名前</th>
                        <td>田中太郎</td>
                    </tr>
                    <tr>
                        <th>所属</th>
                        <td>株式会社〇〇</td>
                    </tr>
                    <tr>
                        <th>職種</th>
                        <td>マーケティング</td>
                    </tr>
                    <tr>
                        <th>得意分野</th>
                        <td>SEO</td>
                    </tr>
                </slot>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HorizontalTable',
};
</script>

<style lang="scss" scoped>
.table {
    border: 1px solid #ddd;
    border-right-width: 0;
    overflow-x: auto;

    & table {
        width: 100%;
    }

    & th {
        width: 20%;
        padding: 15px;
        background-color: #efefef;
        border-bottom: 1px solid #ddd;
        font-weight: bold;
        vertical-align: middle;
        white-space: nowrap;
    }

    & td {
        padding: 15px;
        border-bottom: 1px solid #ddd;
        white-space: nowrap;
        border-right: 1px solid #ddd;
    }

    & tr:last-child th,
    & tr:last-child td {
        border-bottom-width: 0;
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .table {
        border-right-width: 1px;

        & th {
            white-space: normal;
        }

        & td {
            white-space: normal;
            border-right-width: 0;
        }
    }
}
</style>