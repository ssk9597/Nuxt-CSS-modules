<template>
    <div class="table">
        <table>
            <thead>
                <tr>
                    <th v-for="tableTh in tablesTh" :key="tableTh.id">{{ tableTh.th }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="tableTd in tablesTd" :key="tableTd.id">
                    <td>{{ tableTd.td1 }}</td>
                    <td>{{ tableTd.td2 }}</td>
                    <td>{{ tableTd.td3 }}</td>
                    <td>{{ tableTd.td4 }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'VerticalTable',
    props: {
        tablesTh: {
            type: Array,
            required: true,
        },
        tablesTd: {
            type: Array,
            required: true,
        },
    },
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