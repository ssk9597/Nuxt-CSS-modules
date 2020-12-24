<template>
    <div class="table">
        <table>
            <tbody>
                <tr v-for="table in horizontalTable" :key="table.id">
                    <th>{{ table.th }}</th>
                    <td>{{ table.td }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'HorizontalTable',
    props: {
        horizontalTable: {
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