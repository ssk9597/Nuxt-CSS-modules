<template>
    <div>
        <ul class="price-ul">
            <li class="price-li" v-for="table in tables" :key="table.id">
                <div class="price-header">
                    <p class="price-ttl">{{ table.title }}</p>
                    <p class="price">{{ table.price }}<span>円 / 月</span></p>
                </div>
                <div class="price-body">
                    <p class="price-lead">
                        {{ table.lead }}
                    </p>
                    <dl class="price-features">
                        <dt>{{ table.featureTitle1 }}</dt>
                        <dd>{{ table.featureText1 }}</dd>
                        <dt>{{ table.featureTitle2 }}</dt>
                        <dd>{{ table.featureText2 }}</dd>
                        <dt>{{ table.featureTitle3 }}</dt>
                        <dd>{{ table.featureText3 }}</dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PriceTable',
    props: {
        tables: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.price-ul {
    display: block;
}

.price-li {
    border: 1px solid #ddd;
    margin-bottom: 24px;
}

.price-header {
    padding: 10px;
    background-color: #0074d9;
    color: #fff;
    text-align: center;
}

.price-ttl {
    font-size: 1.125rem;
}

.price {
    font-size: 1.875rem;

    & span {
        font-size: 1rem;
    }
}

.price-body {
    padding: 15px;

    &*:last-child {
        margin-bottom: 0;
    }
}

.price-lead {
    margin-bottom: 20px;
}

.price-features {
    text-align: center;

    &*:last-child {
        margin-bottom: 0;
    }

    & dt {
        padding: 5px;
        margin-bottom: 10px;
        background-color: #aaaaaa;
        color: #ffffff;
    }

    & dd {
        margin-bottom: 20px;
    }
}

// //560px以上はタブレット
@media screen and (min-width: 560px) {
    .price-ttl {
        font-size: 1.25rem;
    }

    .price {
        font-size: 2rem;

        & span {
            font-size: 1.125rem;
        }
    }
}

// //960px以上はPC
@media screen and (min-width: 960px) {
    .price-ul {
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .price-li {
        flex-basis: calc((100% - 6%) / 3);
        margin-right: 3%;
        margin-bottom: 0px;

        &:last-child {
            margin-right: 0;
        }
    }

    .price-ttl {
        font-size: 1.125rem;
    }

    .price {
        font-size: 1.875rem;

        & span {
            font-size: 1rem;
        }
    }
}
</style>