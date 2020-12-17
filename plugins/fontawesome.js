import Vue from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { config, library } from '@fortawesome/fontawesome-svg-core';
import { faArrowRight, faDownload, faFilePdf } from '@fortawesome/free-solid-svg-icons';

// nuxt.config.tsでCSSファイルを追加
config.autoAddCss = false;

// 利用するアイコンを配列に追加
const solidIcons = [faArrowRight, faDownload, faFilePdf];

// 利用するアイコンをlibraryに追加
solidIcons.forEach(icon => library.add(icon));

// グローバルコンポーネントに登録
Vue.component('fa', FontAwesomeIcon);
