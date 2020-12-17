<template>
    <div>
        <div class="bl-card">
            <b class="bl-card-badge">
                <span class="bl-card-badge-txt">New</span>
            </b>
            <figure class="bl-card-imgWrapper">
                <img src="~/assets/image/photo.jpg" alt="" />
            </figure>
            <div class="bl-card-body">
                <h3 class="bl-card-ttl">ユーザーを考えた設計で満足な体験を</h3>
                <p class="bl-card-txt">
                    提供するサービスやペルソナによって、Webサイトの設計は異なります。サービスやペルソナに合わせた設計を行うことにより、訪問者にストレスのないより良い体験を産み出し、満足を高めることとなります<br />私たちはお客様のサイトに合ったユーザビリティを考えるため、分析やヒアリングをきめ細かく実施、満足を体験できるクリエイティブとテクノロジーを設計・構築し、今までにない期待を超えたユーザー体験を提供いたします。
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.bl-card {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);

    &-badge {
        position: relative;

        &::after {
            content: '';
            position: absolute;
            z-index: 10;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            border-width: 3.75rem 3.75rem 0 0;
            border-style: solid;
            border-color: #e25c00 transparent transparent transparent;
        }

        &-txt {
            position: absolute;
            z-index: 20;
            top: 0.5rem;
            left: 0.3125rem;
            color: #fff;
            font-size: 0.875rem;
            font-weight: bold;
            transform: rotate(-45deg);
        }
    }

    &-imgWrapper {
        position: relative;
        padding-top: 56.25%;
        overflow: hidden;

        & img {
            position: absolute;
            top: 50%;
            width: 100%;
            transform: translateY(-50%);
        }
    }

    &-body {
        padding: 15px;

        &*:last-child {
            margin-bottom: 0;
        }
    }

    &-ttl {
        margin-bottom: 5px;
        font-size: 1.125rem;
        font-weight: bold;
    }

    &-txt {
        color: #777;
    }
}
</style>