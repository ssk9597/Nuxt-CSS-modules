<template>
    <div>
        <ul class="price-ul">
            <li class="price-li">
                <div class="price-header">
                    <p class="price-ttl">Starter</p>
                    <p class="price">6,000<span>円 / 月</span></p>
                </div>
                <div class="price-body">
                    <p class="price-lead">
                        初めてインバウンドマーケティングを行う企業向けのスタートアッププラン
                    </p>
                    <dl class="price-features">
                        <dt>費用に含まれるコンタクト数</dt>
                        <dd>1,000件</dd>
                        <dt>月間サイト訪問者数</dt>
                        <dd>3,000</dd>
                        <dt>月間Eメール送信数上限</dt>
                        <dd>最大コンタクト数の5倍</dd>
                    </dl>
                </div>
            </li>

            <li class="price-li">
                <div class="price-header">
                    <p class="price-ttl">Pro</p>
                    <p class="price">96,000<span>円 / 月</span></p>
                </div>
                <div class="price-body">
                    <p class="price-lead">
                        マーケティング担当者の欲しい機能が網羅されたおすすめプラン
                    </p>
                    <dl class="price-features">
                        <dt>費用に含まれるコンタクト数</dt>
                        <dd>1,000件</dd>
                        <dt>月間サイト訪問者数</dt>
                        <dd>無制限</dd>
                        <dt>月間Eメール送信数上限</dt>
                        <dd>最大コンタクト数の10倍</dd>
                    </dl>
                </div>
            </li>

            <li class="price-li">
                <div class="price-header">
                    <p class="price-ttl">EnterPrise</p>
                    <p class="price">384,000<span>円 / 月</span></p>
                </div>
                <div class="price-body">
                    <p class="price-lead">
                        マーケティングチームでインバウンドマーケティングを行える高機能プラン
                    </p>
                    <dl class="price-features">
                        <dt>費用に含まれるコンタクト数</dt>
                        <dd>10,000件</dd>
                        <dt>月間サイト訪問者数</dt>
                        <dd>無制限</dd>
                        <dt>月間Eメール送信数上限</dt>
                        <dd>最大コンタクト数の10倍</dd>
                    </dl>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'PriceTable',
    props: {},
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