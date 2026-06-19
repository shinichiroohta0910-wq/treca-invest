// トレカ投資アプリ — 相場レイヤー（正本）
// 公開可能な市場相場情報のみ。Shin個人の仕入額・損益は一切含めない（守秘）。
// null=未取得（表示「—」・計算は0扱い＝保守モデル）／0=実際にゼロ
// signals: 出口需要シグナル（buyback=ショップ買取床/ebay=海外sold/oripa=オリパ採用）。価格の正本はsnapshots(スニダン約定)で不変。
const TRECA_DATA = {
  "schemaVersion": 1,
  "updatedAt": "2026-06-19T17:13:35+09:00",
  "updatedBy": "treca-scout(OP/DBFW/遊戯王): 孫悟空R FB05-053を投資候補に追加（rate10 97.46%・p10¥60k/素体¥12.7k・鑑定edge約+¥30k/枚。3ゲーム横断の本命）・2026-06-19",
  "games": [
    {
      "id": "onepiece",
      "name": "ワンピース",
      "color": "#ff6b6b"
    },
    {
      "id": "pokemon",
      "name": "ポケモン",
      "color": "#f5c518"
    },
    {
      "id": "dbfw",
      "name": "ドラゴンボールFW",
      "color": "#4aa8ff"
    },
    {
      "id": "lorcana",
      "name": "ロルカナ",
      "color": "#39d98a"
    },
    {
      "id": "yugioh",
      "name": "遊戯王",
      "color": "#a06cd5"
    }
  ],
  "cards": [
    {
      "id": "op-p001-hanafuda-luffy",
      "game": "onepiece",
      "name": "モンキー・D・ルフィ",
      "number": "P-001",
      "variant": "花札版（プロモーションカードセット1）",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/4f602258-7bb7-468b-a08e-179a921c5d35.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/157931",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-07T22:43:00+09:00",
          "p10": 298000,
          "p9": null,
          "rawA": 80000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 86.34,
          "currency": "JPY",
          "src": "PSA10率=PSA POPレポート / p10=スニダン売買履歴(実売・apparels/157931) / rawA=シミュレーターseedDeal素体実売 / p9=出典0扱い→null。出典: ワンピプロモセット1_損益シート_20260607.html DEFAULTS＋トレカ鑑定転売_損益シミュレーター.html seedDeal",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-15T09:01:00+09:00",
          "p10": 200000,
          "p9": null,
          "rawA": 75000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 86.34,
          "currency": "JPY",
          "src": "p10/rawA=スニダン売買履歴(実売・直近約定の中央値・apparels/157931) / p9=PSA9約定なし→null / rate10=前回POP値据置(POP未再取得) / ask(出品価格)は不使用",
          "stale": false,
          "alert": "PSA10 ▲33% 急落（6/7¥298,000→¥200,000・素体A ¥80,000→¥75,000）"
        },
        {
          "at": "2026-06-18T10:11:53+09:00",
          "p10": 215000,
          "p9": null,
          "rawA": 72000,
          "rawB": 52000,
          "pop10": null,
          "popTotal": null,
          "rate10": 86.34,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157931 2026-06-18取得): PSA10直近約定¥215,000(2日前×2)・¥216,666(3日前)→215,000採用 / 素体A=直近1日前約定中央¥72,000(¥65,800〜79,999) / 素体B=¥52,000(6/11約定) / PSA9約定なし→null / rate10=前回POP値据置(POP未再取得) / ask不使用",
          "stale": false,
          "alert": "PSA10 △+8%回復(¥200,000→¥215,000)・素体B¥52,000を新規記録"
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 215000,
          "p9": null,
          "rawA": 72000,
          "rawB": 52000,
          "pop10": null,
          "popTotal": null,
          "rate10": 86.34,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157931): PSA10直近約定¥215,000(2日前×2・3日前¥216,666) / 素体A=直近24h約定中央¥72,000(¥65,800〜79,999) / 素体B=¥52,000(6/11) / PSA9約定なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 215833,
          "p9": null,
          "rawA": 76450,
          "rawB": 52500,
          "pop10": 846,
          "popTotal": 979,
          "rate10": 86.41,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(846/979→rate10 86.41%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 69862,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-op01-016-hanafuda-nami",
      "game": "onepiece",
      "name": "ナミ",
      "number": "OP01-016",
      "variant": "花札版（プロモーションカードセット1）",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/97319e97-5408-4a3a-8b90-a8629e2d506b.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/129616",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-07T22:43:00+09:00",
          "p10": 120000,
          "p9": null,
          "rawA": 25000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 95.7,
          "currency": "JPY",
          "src": "PSA10率=PSA POPレポート / p10=スニダン売買履歴(実売・apparels/129616) / rawA=シミュレーターseedDeal素体実売 / p9=出典0扱い→null。出典: ワンピプロモセット1_損益シート_20260607.html DEFAULTS＋トレカ鑑定転売_損益シミュレーター.html seedDeal",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-15T09:01:00+09:00",
          "p10": 98000,
          "p9": null,
          "rawA": 31000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 95.7,
          "currency": "JPY",
          "src": "p10/rawA=スニダン売買履歴(実売・直近約定の中央値・apparels/129616) / p9=PSA9約定なし→null / rate10=前回POP値据置(POP未再取得) / ask(出品価格)は不使用",
          "stale": false,
          "alert": "素体A △24%上昇（¥25,000→¥31,000）／ PSA10 ▽18%（¥120,000→¥98,000）"
        },
        {
          "at": "2026-06-18T10:11:53+09:00",
          "p10": 89000,
          "p9": null,
          "rawA": 23000,
          "rawB": 13000,
          "pop10": null,
          "popTotal": null,
          "rate10": 95.7,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/129616 2026-06-18取得): PSA10直近約定¥89,000(12時間前)・¥89,800/¥89,000(3日前)→89,000採用 / 素体A=直近約定中央¥23,000(1〜4時間前¥21,500〜23,000・下落) / 素体B=¥13,000(7時間前約定) / PSA9約定なし→null / rate10=前回POP値据置 / ask不使用",
          "stale": false,
          "alert": "素体A ⚠️急落 ▽-26%(¥31,000→¥23,000)・PSA10 ▽-9%(¥98,000→¥89,000)"
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 89000,
          "p9": null,
          "rawA": 23000,
          "rawB": 13000,
          "pop10": null,
          "popTotal": null,
          "rate10": 95.7,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/129616): PSA10直近約定¥89,000(21h前・3日前¥89,800/89,000) / 素体A=直近約定中央¥23,000(6/13の¥30k帯から軟化) / 素体B=¥13,000(16h前) / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 110500,
          "p9": null,
          "rawA": 24000,
          "rawB": 18000,
          "pop10": 1280,
          "popTotal": 1336,
          "rate10": 95.81,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(1280/1336→rate10 95.81%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": "+24% 急騰"
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 84132,
          "soldMedianUSD": null,
          "n": 48,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-st01-013-zoro",
      "game": "onepiece",
      "name": "ロロノア・ゾロ",
      "number": "ST01-013",
      "variant": "プロモーションカードセット1",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/58297fd0-6885-490c-ad23-72c90d7baa4d.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/157930",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 12100,
      "snapshots": [
        {
          "at": "2026-06-07T22:43:00+09:00",
          "p10": 70000,
          "p9": null,
          "rawA": 5000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 87.94,
          "currency": "JPY",
          "src": "PSA10率=PSA POPレポート / p10=スニダン売買履歴(実売・apparels/157930) / rawA=シミュレーターseedDeal素体実売 / p9=出典0扱い→null。出典: ワンピプロモセット1_損益シート_20260607.html DEFAULTS＋トレカ鑑定転売_損益シミュレーター.html seedDeal",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-15T09:01:00+09:00",
          "p10": 110000,
          "p9": null,
          "rawA": 9999,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 87.94,
          "currency": "JPY",
          "src": "p10=スニダン売買履歴の実勢中央(直近約定¥77,000(6/10)と¥160,000(3日前)が2倍乖離・出品¥100k〜138k・Shin確認の上¥110,000で記録・apparels/157930) / rawA=直近実売¥9,999×2 / p9=PSA9約定なし→null / rate10=前回POP値据置 / ask不使用",
          "stale": false,
          "alert": "PSA10 △57%（¥70,000→¥110,000・直近約定¥77k〜¥160kで乱高下・要監視）／素体A ¥5,000→¥9,999"
        },
        {
          "at": "2026-06-18T10:11:53+09:00",
          "p10": 110000,
          "p9": null,
          "rawA": 9999,
          "rawB": 3200,
          "pop10": null,
          "popTotal": null,
          "rate10": 87.94,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157930 2026-06-18取得): PSA10は6/11¥160,000・6/10¥77,000以降の新規約定なし→前回¥110,000据置(乱高下継続・要監視) / 素体A=通常実勢¥9,999(直近1日前¥100,000のA約定は出品実勢¥8,500〜9,888に対し異常値で除外) / 素体B=¥3,200(6/08¥3,500・¥2,800) / PSA9約定なし→null / rate10=前回POP据置 / ask不使用",
          "stale": false,
          "alert": "PSA10据置(新規約定なし・¥77k〜¥160kで乱高下)・素体B¥3,200を新規記録"
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 100000,
          "p9": null,
          "rawA": 9480,
          "rawB": 3500,
          "pop10": null,
          "popTotal": null,
          "rate10": 87.94,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157930): PSA10低流動・約定¥65,800〜160,000でばらつき大(直近6/11¥160,000は単発スパイク/クラスタ6/06-10¥66-77k)→中心値¥100,000採用(旧¥110,000近辺) / 素体A=直近4h約定7件中央¥9,480(¥8,000〜9,998) / 素体B=¥3,500(6/08) / 状態Aの¥100k表記2件は誤タグ扱い除外 / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 55400,
          "p9": null,
          "rawA": 9490,
          "rawB": 3150,
          "pop10": 455,
          "popTotal": 517,
          "rate10": 88.01,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(455/517→rate10 88.01%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": "-45% 急落"
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 76655,
          "soldMedianUSD": null,
          "n": 48,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-st09-012-yamato",
      "game": "onepiece",
      "name": "ヤマト",
      "number": "ST09-012",
      "variant": "プロモーションカードセット1",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/37d9941f-b4bc-4813-a6cd-d75db9e95759.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/157932",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-07T22:43:00+09:00",
          "p10": 31000,
          "p9": null,
          "rawA": 2000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 97.85,
          "currency": "JPY",
          "src": "PSA10率=PSA POPレポート / p10=スニダン売買履歴(実売・apparels/157932) / rawA=シミュレーターseedDeal素体実売 / p9=出典0扱い→null。出典: ワンピプロモセット1_損益シート_20260607.html DEFAULTS＋トレカ鑑定転売_損益シミュレーター.html seedDeal",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-15T09:01:00+09:00",
          "p10": 48000,
          "p9": null,
          "rawA": 6000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 97.85,
          "currency": "JPY",
          "src": "p10=スニダン売買履歴(実売・直近約定¥48,000・6/4¥29k→6/9¥53k→直近¥48kの上昇トレンド・apparels/157932) / rawA=直近通常美品Aの中心値(実売¥4,500〜7,500・¥13,500〜32,500の高値約定は除外) / p9=PSA9約定なし→null / rate10=前回POP値据置 / ask不使用",
          "stale": false,
          "alert": "PSA10 △55% 急騰（¥31,000→¥48,000・上昇トレンド明確）／素体Aは実売ノイズ大"
        },
        {
          "at": "2026-06-18T10:11:53+09:00",
          "p10": 48000,
          "p9": null,
          "rawA": 4500,
          "rawB": 1000,
          "pop10": null,
          "popTotal": null,
          "rate10": 97.85,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157932 2026-06-18取得): PSA10は6/11¥48,000以降の新規約定なし→¥48,000据置(6/03¥18k→6/11¥48kの上昇後横ばい) / 素体A=直近約定¥4,000〜4,500(1日前¥4,000・6/14¥4,500・軟化。6/10の¥13.5k〜32.5kは高値異常で除外) / 素体B=¥1,000(3日前・6/04約定) / PSA9約定なし→null / rate10=前回POP据置 / ask不使用",
          "stale": false,
          "alert": "素体A ⚠️軟化 ▽-25%(¥6,000→¥4,500)・PSA10据置¥48,000・素体B¥1,000新規"
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 48000,
          "p9": null,
          "rawA": 4500,
          "rawB": 1000,
          "pop10": null,
          "popTotal": null,
          "rate10": 97.85,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157932): PSA10直近約定¥48,000(6/11)・上昇トレンド継続(6/03¥18k→6/09¥53k) / 素体A=直近約定中央¥4,500(直近1日前¥4,000へ軟化・¥4,000〜6,800) / 素体B=¥1,000(6/14) / 6/10の¥13.5k〜32.5kA表記は誤タグ除外 / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 27000,
          "p9": null,
          "rawA": 7000,
          "rawB": 1000,
          "pop10": 735,
          "popTotal": 751,
          "rate10": 97.87,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(735/751→rate10 97.87%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": "-44% 急落"
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 15492,
          "soldMedianUSD": null,
          "n": 30,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-blacky-gx",
      "game": "pokemon",
      "name": "ブラッキーGX",
      "number": "229/150",
      "variant": "GXウルトラシャイニー SSR",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/7326142.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/91299",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-17T11:24:09+09:00",
          "p10": 217000,
          "p9": 85000,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/91299)クリーン体: PSA10¥208,000〜222,000の中央¥217,000 / PSA9¥85,000。2026-06-17取得。※Shin保有はN3インクド=改ざん判定で本相場は非該当(大幅減価)。素体A約定なし→rawA null。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 218000,
          "p9": 85000,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/91299): PSA10直近約定¥218,000(6/11)・クラスタ¥215-220k安定 / PSA9=直近約定¥85,000(5/18・最新PSA9約定据置) / 素体約定なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 217500,
          "p9": 75250,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 168358,
          "soldMedianUSD": null,
          "n": 8,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-tohoku-pikachu",
      "game": "pokemon",
      "name": "トウホクピカチュウ",
      "number": "260",
      "variant": "ポケモンセンタートウホク PROMO",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250613060628-2.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/618445",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-17T11:13:05+09:00",
          "p10": 58900,
          "p9": 15800,
          "rawA": 15500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 60,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/618445): PSA10¥58,000〜59,888の中央¥58,900 / PSA9¥15,800 / 素体A¥14,200〜18,000の中央¥15,500。2026-06-17取得。rate10は前回(POP帯)据置。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 57000,
          "p9": 15800,
          "rawA": 13500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 60,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/618445 高流動): PSA10直近約定¥56,999(43分前)・¥54,000〜58,450→¥57,000採用(旧¥58,900から微減) / 素体A=¥13,500均一(旧¥15,500から軟化) / PSA9=直近約定なし→旧¥15,800据置 / rate10=POP未取得(リンクなし)旧60据置 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 56583,
          "p9": 15800,
          "rawA": 13500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 60,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=旧値据置(登録URLがbase-setのみ等) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 72621,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-lilie-kesshin-sar",
      "game": "pokemon",
      "name": "リーリエの決心SAR",
      "number": "091/063",
      "variant": "メガブレイブ SAR",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250731010923-1.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/663637",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/pokemon-japanese-m1l-mega-brave/312124"
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-17T11:13:05+09:00",
          "p10": 78500,
          "p9": 25500,
          "rawA": 30000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 48,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/663637): PSA10直近約定¥76,000〜79,480の中央¥78,500 / PSA9¥25,400〜27,000の中央¥25,500 / 素体A¥30,000。2026-06-17取得。rate10は前回(POP)据置。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 78000,
          "p9": 25000,
          "rawA": 30000,
          "rawB": 24000,
          "pop10": null,
          "popTotal": null,
          "rate10": 48,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/663637 高流動): PSA10直近約定¥78,000安定(¥76,000〜79,000) / PSA9=クラスタ¥24,000〜25,800→¥25,000(直近¥46,600は単発外れ値除外) / 素体A=¥29,800〜30,000→¥30,000 / 素体B=¥24,000(41分前約定・新規) / rate10=POP後追い更新予定・暫定旧48据置 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 77500,
          "p9": 25544,
          "rawA": 30000,
          "rawB": 23750,
          "pop10": 17777,
          "popTotal": 35646,
          "rate10": 49.87,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(17777/35646→rate10 49.87%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 78797,
          "soldMedianUSD": null,
          "n": 58,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-m2a-246-mega-kairyu-sar",
      "game": "pokemon",
      "name": "メガカイリューex",
      "number": "246",
      "variant": "MEGAドリームEX SAR",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128090358-3.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/730964",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/pokemon-japanese-m2a-mega-dream-ex/323965"
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-17T11:13:05+09:00",
          "p10": 65000,
          "p9": null,
          "rawA": 33500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 85,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730964): PSA10¥61,000〜65,500の中央¥65,000 / 素体A¥33,000〜35,000の中央¥33,500。PSA9直近約定なし→null。2026-06-17取得。rate10は前回(POP帯)据置。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 63000,
          "p9": null,
          "rawA": 31000,
          "rawB": 30000,
          "pop10": null,
          "popTotal": null,
          "rate10": 85,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730964 高流動): PSA10直近約定¥63,000(18分前)・¥62,300〜64,900→¥63,000(旧¥65,000から微減) / 素体A=直近約定中央¥31,000(¥30,000〜35,500) / 素体B=¥30,000(8h前複数約定・新規) / PSA9=約定なし→null / rate10=POP後追い更新予定・旧85据置 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 64250,
          "p9": null,
          "rawA": 32500,
          "rawB": 29850,
          "pop10": 16477,
          "popTotal": 18234,
          "rate10": 90.36,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(16477/18234→rate10 90.36%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 80527,
          "soldMedianUSD": null,
          "n": 56,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-sv8a-212-nymphia-sar",
      "game": "pokemon",
      "name": "ニンフィアex",
      "number": "212/187",
      "variant": "テラスタルフェスex SAR",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20241205122510-4.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/455595",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2024/pokemon-japanese-sv8a-terastal-fest-ex/288603"
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-17T11:13:05+09:00",
          "p10": 37400,
          "p9": 20200,
          "rawA": 20500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/455595): PSA10¥37,000〜37,999の中央¥37,400 / PSA9¥20,000〜20,500 / 素体A¥20,000〜21,000。2026-06-17取得。POP未取得→rate10 null。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 37300,
          "p9": 20200,
          "rawA": 20500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/455595 高流動・PSA10中心): PSA10直近約定¥37,800(44分前)・¥36,700〜38,200→¥37,300(前回¥37,400同水準) / PSA9=直近約定なし→旧¥20,200据置 / 素体A=直近約定なし→旧¥20,500据置 / 素体B=約定なし(出品¥17,999)→null / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 37000,
          "p9": 19000,
          "rawA": 20000,
          "rawB": 17500,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 48412,
          "soldMedianUSD": null,
          "n": 47,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128023630-2.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 11980,
      "id": "pk-m2a-242-zoroark-sar",
      "name": "Nのゾロアークex",
      "number": "242/193",
      "variant": "MEGAドリームEX SAR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/730961",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/pokemon-japanese-m2a-mega-dream-ex/323965"
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:24:09+09:00",
          "p10": 21000,
          "p9": 9000,
          "rawA": 7000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730961): PSA10¥20,500〜21,499の中央¥21,000 / PSA9¥8,000〜9,999の中央¥9,000 / 素体A¥6,800〜7,100の中央¥7,000。2026-06-17取得。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 20800,
          "p9": 9999,
          "rawA": 7000,
          "rawB": 6500,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730961): PSA10直近約定¥20,800(1h前)・¥20,000〜21,000(10h前¥61,000は誤タグ除外) / PSA9=¥9,999(1日前約定・旧¥9,000) / 素体A=直近約定中央¥7,000(¥6,900〜8,380) / 素体B=¥6,500(8h前・新規) / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 20800,
          "p9": 9000,
          "rawA": 7150,
          "rawB": 7000,
          "pop10": 5232,
          "popTotal": 5950,
          "rate10": 87.93,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(5232/5950→rate10 87.93%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 28401,
          "soldMedianUSD": null,
          "n": 53,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20241205122510-3.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 11980,
      "id": "pk-sv8a-211-efi-sar",
      "name": "エーフィex",
      "number": "211/187",
      "variant": "テラスタルフェスex SAR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/469628",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2024/pokemon-japanese-sv8a-terastal-fest-ex/288603"
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:24:09+09:00",
          "p10": 23700,
          "p9": 9800,
          "rawA": 12000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/469628): PSA10¥22,999〜25,000の中央¥23,700 / PSA9¥9,000〜9,999の中央¥9,800 / 素体A¥12,000。2026-06-17取得。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 23500,
          "p9": 9800,
          "rawA": 12000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/469628 高流動): PSA10直近約定¥22,500(45分前)・¥22,500〜24,500中央¥23,500(前回¥23,700同水準) / PSA9=¥9,000〜9,999中央¥9,800 / 素体A=¥12,000均一 / 素体B=約定なし→null / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 23750,
          "p9": 9800,
          "rawA": 11000,
          "rawB": 6950,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 29518,
          "soldMedianUSD": null,
          "n": 58,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251127044048-1.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 11980,
      "id": "pk-m2a-248-canary-sar",
      "name": "カナリィ",
      "number": "248/193",
      "variant": "MEGAドリームEX SAR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/730966",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/pokemon-japanese-m2a-mega-dream-ex/323965"
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:24:09+09:00",
          "p10": 17400,
          "p9": 3800,
          "rawA": 3650,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730966): PSA10¥17,000〜17,500の中央¥17,400 / PSA9¥3,700〜3,999の中央¥3,800 / 素体A¥3,500〜3,799の中央¥3,650。2026-06-17取得。PSA10とPSA9の乖離大。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 16900,
          "p9": 3900,
          "rawA": 4000,
          "rawB": 3600,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730966): PSA10直近約定¥16,900(7h前)・¥16,500〜17,500(旧¥17,400) / PSA9=¥3,800〜3,999中央¥3,900 / 素体A=¥4,000(9h前・旧¥3,650) / 素体B=¥3,600(1日前・新規) / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 17245,
          "p9": 3900,
          "rawA": 3800,
          "rawB": 3600,
          "pop10": 2739,
          "popTotal": 4427,
          "rate10": 61.87,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(2739/4427→rate10 61.87%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 32276,
          "soldMedianUSD": null,
          "n": 15,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20221202050307-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 11980,
      "id": "pk-s12a-205-pikachu-ar",
      "name": "ピカチュウ",
      "number": "205/172",
      "variant": "VSTARユニバース AR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/105553",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2022/pokemon-japanese-sword-shield-vstar-universe/225772"
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:24:09+09:00",
          "p10": 100000,
          "p9": null,
          "rawA": 45000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/105553): PSA10¥95,000〜106,890の中央¥100,000 / 素体A¥45,000。PSA9直近約定なし→null。2026-06-17取得。人気AR。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 99780,
          "p9": null,
          "rawA": 56999,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/105553 高流動): PSA10直近約定¥99,780(6h前)・¥98,400〜104,000(前回¥100,000同水準) / 素体A=直近3約定¥56,500〜56,999→¥56,999採用(旧¥45,000から+27%上昇・直近で揃う) / PSA9=約定なし(出品¥42,000)→null / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": "素体A +27% 上昇（¥45,000→¥56,999・直近3約定で揃う）"
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 98750,
          "p9": 40000,
          "rawA": 46000,
          "rawB": null,
          "pop10": 17091,
          "popTotal": 20321,
          "rate10": 84.11,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(17091/20321→rate10 84.11%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 90858,
          "soldMedianUSD": null,
          "n": 40,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20231206074636-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 11980,
      "id": "pk-sv4a-347-mew-ex-sar",
      "name": "ミュウex",
      "number": "347/190",
      "variant": "シャイニートレジャーex SAR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/164250",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2023/pokemon-japanese-sv4a-shiny-treasure-ex/255404"
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:58:44+09:00",
          "p10": 143000,
          "p9": 70000,
          "rawA": 65000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/164250): PSA10¥141,000〜146,000の中央¥143,000 / PSA9¥69,000〜72,000の中央¥70,000 / 素体(B)¥65,000。2026-06-17取得。Shin訂正でSV4a 347/190(シャイニートレジャー)に確定(旧151版は誤り)。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 144300,
          "p9": 69800,
          "rawA": 88000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/164250 高流動): PSA10直近約定¥144,300(4h前)・¥143,500〜150,000(前回¥143,000同水準) / PSA9=¥69,000〜70,000中央¥69,800 / 素体A=直近約定¥85,000/91,000平均¥88,000(旧¥65,000から+35%上昇) / 素体B=約定なし→null / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": "素体A +35% 上昇（¥65,000→¥88,000・直近約定¥85k〜91k）"
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 143000,
          "p9": 69900,
          "rawA": 86000,
          "rawB": 65000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 161380,
          "soldMedianUSD": null,
          "n": 44,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128023141-5.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-m2a-228-lucario-ma",
      "name": "メガルカリオex",
      "number": "228/193",
      "variant": "MEGAドリームEX MA",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/722241",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 12000,
          "p9": null,
          "rawA": 1100,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/722241): PSA10¥12,000/PSA9—/素体A¥1,100。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 12000,
          "p9": 4500,
          "rawA": 1500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/722241): PSA10直近約定¥12,000(1日前複数)・¥11,800〜14,400(旧¥12,000同水準) / PSA9=¥4,500(1日前・新規) / 素体A=¥1,500(6h前・旧¥1,100) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 13550,
          "p9": 4500,
          "rawA": 1150,
          "rawB": 1000,
          "pop10": 9077,
          "popTotal": 9881,
          "rate10": 91.86,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(9077/9881→rate10 91.86%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 12787,
          "soldMedianUSD": null,
          "n": 47,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128023141-3.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-m2a-226-sirnight-ma",
      "name": "メガサーナイトex",
      "number": "226/193",
      "variant": "MEGAドリームEX MA",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/722240",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 9300,
          "p9": null,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/722240): PSA10¥9,300/PSA9—/素体A¥1,000。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 8700,
          "p9": null,
          "rawA": 1000,
          "rawB": 1000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/722240): PSA10直近約定¥8,700(17h前)・軟化(6/13¥10,800→¥8,700・1日前¥66,000は誤タグ除外) / 素体A=¥1,000 / 素体B=¥1,000(1日前・新規) / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 10100,
          "p9": null,
          "rawA": 1000,
          "rawB": 1000,
          "pop10": 7906,
          "popTotal": 8660,
          "rate10": 91.29,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(7906/8660→rate10 91.29%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 9588,
          "soldMedianUSD": null,
          "n": 22,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128023141-1.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-m2a-224-yukimenoko-ma",
      "name": "メガユキメノコex",
      "number": "224/193",
      "variant": "MEGAドリームEX MA",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/730948",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 7900,
          "p9": null,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730948): PSA10¥7,900/PSA9—/素体A—。2026-06-17取得。素体A約定なし。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 7400,
          "p9": null,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/730948): PSA10直近約定¥7,498(37分前)・¥7,300〜7,500クラスタ・軟化(6/13¥8,400→¥7,400)→¥7,400採用(旧¥7,900) / 素体A=¥1,000(1日前・新規) / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 7800,
          "p9": null,
          "rawA": 1000,
          "rawB": 2000,
          "pop10": 6337,
          "popTotal": 6959,
          "rate10": 91.06,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(6337/6959→rate10 91.06%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 9198,
          "soldMedianUSD": null,
          "n": 30,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20230611131828-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-214sp-pichu",
      "name": "いたずら好きのピチュー",
      "number": "214 S-P",
      "variant": "プロモ",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/111868",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 16200,
          "p9": 6600,
          "rawA": 4900,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/111868): PSA10¥16,200/PSA9¥6,600/素体A¥4,900。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 16000,
          "p9": 4000,
          "rawA": 5000,
          "rawB": 2700,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/111868): PSA10直近約定¥15,999(1日前)・¥15,999〜16,500(旧¥16,200・¥61,480は誤タグ除外) / PSA9=¥4,000(19h前・薄商い・3日前¥6,600から低下・出品¥4,280) / 素体A=¥4,800〜5,000中央¥5,000 / 素体B=¥2,700(6/14複数・新規) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 16450,
          "p9": 5300,
          "rawA": 4850,
          "rawB": 2700,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 19163,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/pkmn-tcg-M-P-020-of.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-mp020-mac-pikachu",
      "name": "ピカチュウ",
      "number": "M-P 020",
      "variant": "マクドナルド2025プロモ",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/671486",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 14700,
          "p9": 5450,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/671486): PSA10¥14,700/PSA9¥5,450/素体A—。2026-06-17取得。素体A約定なし(プロモ安価)。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 14700,
          "p9": 6000,
          "rawA": 3900,
          "rawB": 3200,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/671486): PSA10直近約定¥14,700(48分前)・¥14,000〜15,000(旧¥14,700同値・¥28,000/¥155,000約定は誤タグ/エラー版除外) / PSA9=¥6,000(18h前・旧¥5,450) / 素体A=¥3,899(4h前・新規) / 素体B=¥3,200(8h前・新規) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 14700,
          "p9": 6000,
          "rawA": 3900,
          "rawB": 3200,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 17307,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/pkmn-tcg-M-P-019-of.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 5275,
      "id": "pk-mp019-mac-quaxly",
      "name": "クワッス",
      "number": "M-P 019",
      "variant": "マクドナルド2025プロモ",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/671485",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 6000,
          "p9": 3000,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/671485): PSA10¥6,000/PSA9¥3,000/素体A—。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 5900,
          "p9": 2999,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/671485): PSA10直近約定¥5,800〜6,050中央¥5,900(7h前複数・旧¥6,000) / PSA9=¥2,999(2日前・旧¥3,000) / 素体A=¥1,000(4h前・新規) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 5999,
          "p9": 2200,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 6213,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "pokemon",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20221122085826-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "pk-sm10b-059-3birds-gx",
      "name": "ファイヤー&サンダー&フリーザーGX",
      "number": "059/054",
      "variant": "スカイレジェンド SR",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/104606",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 62000,
          "p9": 11500,
          "rawA": 12000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/104606): PSA10¥62,000/PSA9¥11,500/素体A¥12,000。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 55555,
          "p9": 12000,
          "rawA": 12000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/104606 低流動): PSA10直近約定¥55,555(6/12)・旧¥62,000から軟化(6/02¥62,000→6/12¥55,555) / PSA9=¥12,000(6/09・旧¥11,500) / 素体A=直近約定なし→旧¥12,000据置(最終A約定4/27¥12,000) / 素体B=信頼できる直近約定なし(5/02¥11,000のみ)→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 66000,
          "p9": 12250,
          "rawA": 14000,
          "rawB": 8499,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 15977,
          "soldMedianUSD": null,
          "n": 5,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250728020433-4.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-prb02-017-hancock",
      "name": "ボア・ハンコック",
      "number": "PRB02-017",
      "variant": "THE BEST vol.2 SR-P",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/656346",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 65000,
          "p9": null,
          "rawA": 9800,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/656346): PSA10¥65,000/PSA9—/素体A¥9,800。2026-06-17取得。PSA10約定は薄め。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 85000,
          "p9": null,
          "rawA": 9800,
          "rawB": 6600,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/656346): PSA10直近約定¥85,000(7h前・旧¥65,000から+31%上昇・出品¥86,000で裏付け・6/11は¥65,000) / 素体A=直近約定中央¥9,800(¥8,400〜12,000・¥15k/¥16.8kは外れ) / 素体B=¥6,600(1日前・新規) / PSA9約定なし→null / ask不使用",
          "stale": false,
          "alert": "PSA10 +31% 急騰（¥65,000→¥85,000・直近7h前約定＋出品¥86,000で裏付け）"
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 60000,
          "p9": null,
          "rawA": 8000,
          "rawB": 5000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": "-29% 急落"
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 26628,
          "soldMedianUSD": null,
          "n": 19,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20231208102838-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-p043-luffy",
      "name": "モンキー・D・ルフィ",
      "number": "P-043",
      "variant": "週刊少年ジャンプ2023付録",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/167350",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 54000,
          "p9": null,
          "rawA": 19000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/167350): PSA10¥54,000/PSA9—/素体A¥19,000。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 50000,
          "p9": null,
          "rawA": 16000,
          "rawB": 6000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/167350): PSA10直近約定¥49,000〜50,000(1h前・¥299,999/¥500,000の荒らし出品約定は除外・旧¥54,000から軟化) / 素体A=直近約定中央¥16,000(¥15,500〜16,700・旧¥19,000から軟化) / 素体B=¥6,000(2h前複数・新規) / PSA9なし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 53950,
          "p9": null,
          "rawA": 16300,
          "rawB": 6250,
          "pop10": 12088,
          "popTotal": 14156,
          "rate10": 85.39,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(12088/14156→rate10 85.39%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 48414,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/85a7566e-dc05-4f68-8e85-c280b5bed602.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-op16-079-yamato",
      "name": "ヤマト",
      "number": "OP16-079",
      "variant": "決戦の刻 L",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/828148",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": null,
          "p9": null,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン apparels/828148: 売買履歴セクションなし(2026-05-30発売の新Lカード・お気に入り4人・出品のみ¥1,000〜5,000・約定データ皆無)→ask不使用ルールにより値を設定せずstale。初回取得・要手入力 or 流動性が付くまで保留",
          "stale": true,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": null,
          "p9": null,
          "rawA": null,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "約定皆無(スニダン中古に取引成立なし)→stale維持・POP=未取得",
          "stale": true,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 14803,
          "soldMedianUSD": null,
          "n": 54,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20231215103803-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-op05-060-luffy",
      "name": "モンキー・D・ルフィ",
      "number": "OP05-060",
      "variant": "新時代の主役 L-P",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/135420",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 46000,
          "p9": null,
          "rawA": 11500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/135420): PSA10¥46,000/PSA9—/素体A¥11,500。2026-06-17取得。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 45000,
          "p9": null,
          "rawA": 11500,
          "rawB": 5500,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/135420): PSA10直近約定¥45,000(1日前×3・旧¥46,000同水準) / 素体A=直近約定中央¥11,500(¥11,000〜12,000・旧¥11,500据置) / 素体B=¥5,500(2日前¥4,900〜5,999中央・新規) / PSA9なし(出品¥10,500)→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 48250,
          "p9": null,
          "rawA": 11950,
          "rawB": 4800,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 34616,
          "soldMedianUSD": null,
          "n": 48,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20240712015537-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-st17-004-hancock",
      "name": "ボア・ハンコック",
      "number": "ST17-004",
      "variant": "ST17-004 プロモ(安価版)",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/311583",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:58:44+09:00",
          "p10": null,
          "p9": null,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン素体実売(apparels/311583)¥1,000。Shin確認: 安価プロモ版で確定（高額プレミアブースター版SR-P¥700k超ではない）。鑑定中だが素体floorはごく低額。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": null,
          "p9": null,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/311583 バルク・低流動): 素体A=¥1,000(最終約定5/25・5/22/2-14も¥1,000均一・旧¥1,000据置) / PSA約定なし→p10/p9 null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": null,
          "p9": null,
          "rawA": 1000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 52448,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "game": "onepiece",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20240414053228-0.webp",
      "imageNote": "",
      "watch": true,
      "gradingCostDefault": 12770,
      "id": "op-op02-059-hancock",
      "name": "ボア・ハンコック",
      "number": "OP02-059",
      "variant": "プロモセット2 UC",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/157936",
        "psaPop": null
      },
      "snapshots": [
        {
          "at": "2026-06-17T11:38:00+09:00",
          "p10": 76000,
          "p9": null,
          "rawA": 30000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157936): PSA10¥76,000/PSA9—/素体A¥30,000。2026-06-17取得。PSA10は変動大(直近¥76k・数日前¥130k)。鑑定中・PSA10率(POP)未取得→rate10 null=保守期待値（素体floor基準）。鑑定確定で再評価。",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 76000,
          "p9": null,
          "rawA": 26500,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/157936): PSA10直近約定¥75,000/76,800(1日前)中央¥76,000(前回¥76,000同水準=6/09-10¥130k→6/13¥120k→¥76kの急落は前回反映済) / 素体A=直近約定中央¥26,500(¥25,000〜28,000・旧¥30,000から軟化) / 素体B=約定なし→null / PSA9なし(出品¥45,000)→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 94900,
          "p9": null,
          "rawA": 29000,
          "rawB": 17000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": "+25% 急騰"
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 56535,
          "soldMedianUSD": null,
          "n": 44,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-svp289-fukuoka-pikachu",
      "game": "pokemon",
      "name": "フクオカのピカチュウ",
      "number": "SV-P 289",
      "variant": "スペシャルBOX ポケモンセンターフクオカ プロモ",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250613060628-1.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/618447",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-18T13:27:18+09:00",
          "p10": 51900,
          "p9": null,
          "rawA": 17500,
          "rawB": null,
          "pop10": 20747,
          "popTotal": 24850,
          "rate10": 83.5,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/618447 2026-06-18取得): PSA10直近約定¥50,500〜51,999(14h内14件)→51,900採用 / 素体A=¥17,500(複数約定で一定) / PSA9約定なし→null / rate10=PSA10率83.5%(POP10=20,747/総24,850 GemRateミラー値・psacard.comはログイン化で直読不可) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 52000,
          "p9": null,
          "rawA": 17500,
          "rawB": null,
          "pop10": 20747,
          "popTotal": 24850,
          "rate10": 83.5,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/618447 高流動): PSA10直近約定¥52,099(1h前)・¥50,500〜52,500中央¥52,000(旧¥51,900) / 素体A=¥17,500均一(旧同値) / PSA9=約定なし(出品¥18,400)→null / rate10=前回POP値83.5%(pop10=20747/popTotal=24850・6/18取得)据置 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 51289,
          "p9": 18000,
          "rawA": 17500,
          "rawB": null,
          "pop10": 20747,
          "popTotal": 24850,
          "rate10": 83.5,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=旧値据置(登録URLがbase-setのみ等) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 77462,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-p033-luffy",
      "game": "onepiece",
      "name": "モンキー・D・ルフィ",
      "number": "P-033",
      "variant": "週刊少年ジャンプ2023年1月7日号付録",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20230124031016-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/108050",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2023/one-piece-japanese-promos/229483"
      },
      "watch": true,
      "gradingCostDefault": 12770,
      "snapshots": [
        {
          "at": "2026-06-18T13:27:18+09:00",
          "p10": 84000,
          "p9": null,
          "rawA": 21700,
          "rawB": 8500,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/108050 2026-06-18取得): PSA10直近約定¥83,000〜84,900→84,000採用(¥800,000の2件は別物/異常で除外) / 素体A=¥21,500〜22,000(一定) / 素体B=¥8,000〜9,000→8,500 / PSA9約定なし→null / rate10=POP未取得(psacard.comログイン化・要ログイン直読) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 79500,
          "p9": null,
          "rawA": 21200,
          "rawB": 9500,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/108050 高流動): PSA10直近約定¥79,000(53分前)・¥77,800〜84,200中央¥79,500(旧¥84,000から軟化) / 素体A=直近約定中央¥21,200(¥21,000〜21,999・旧¥21,700) / 素体B=¥9,500(4h前・旧¥8,500) / PSA9なし→null / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 77650,
          "p9": null,
          "rawA": 21350,
          "rawB": 9500,
          "pop10": 6353,
          "popTotal": 8416,
          "rate10": 75.49,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(6353/8416→rate10 75.49%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 116745,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-pp001-luffy-25th",
      "game": "onepiece",
      "name": "モンキー・D・ルフィ",
      "number": "P-001(P-P)",
      "variant": "プレミアムカードコレクション25周年エディション",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20220830082917-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/94909",
        "psaPop": null
      },
      "watch": true,
      "gradingCostDefault": 12770,
      "snapshots": [
        {
          "at": "2026-06-18T13:27:18+09:00",
          "p10": 39500,
          "p9": null,
          "rawA": 9000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/94909 2026-06-18取得): PSA10直近約定¥38,200〜40,500(高流動)→39,500採用(¥120,000の1件は異常で除外) / 素体A=¥6,700〜10,999→9,000 / PSA9約定なし→null / rate10=POP未取得 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 39500,
          "p9": null,
          "rawA": 9000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/94909): PSA10直近約定¥40,000(9h前)・¥38,200〜40,500中央¥39,500(旧同値・¥120,000は誤タグ除外) / 素体A=¥6,700〜10,999中央¥9,000(旧同値) / PSA9・素体Bなし→null / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 39450,
          "p9": 8888,
          "rawA": 7300,
          "rawB": 6000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=未取得 (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 55288,
          "soldMedianUSD": null,
          "n": 47,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "yg-nyc1-blueeyes-25th",
      "game": "yugioh",
      "name": "青眼の白龍",
      "number": "NYC1-JP001",
      "variant": "25周年 浮世絵風 フレーム切手セット SE",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250430094149-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/442415",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/yu-gi-oh-japanese-nyc1-blue-eyes-white-dragon-ukiyo-e-style-limited-ocg-card-framed-stamp-set/301724"
      },
      "watch": true,
      "gradingCostDefault": 12100,
      "snapshots": [
        {
          "at": "2026-06-18T13:27:18+09:00",
          "p10": 100000,
          "p9": 30000,
          "rawA": 44000,
          "rawB": 35000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/442415 2026-06-18取得): PSA10直近約定¥98,000〜108,000(高流動)→100,000採用 / PSA9=¥30,000(下値フロア) / 素体A=¥44,000〜44,900 / 素体B=¥32,000〜39,800→35,000 / rate10=POP未取得(psacard.comログイン化) / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-18T19:11:28+09:00",
          "p10": 104000,
          "p9": 30000,
          "rawA": 44000,
          "rawB": 36000,
          "pop10": null,
          "popTotal": null,
          "rate10": null,
          "currency": "JPY",
          "src": "スニダン売買履歴(実売・apparels/442415): PSA10直近約定¥104,000〜105,000(16h前・上昇トレンド・旧¥100,000) / PSA9=¥30,000(2日前・旧同値) / 素体A=¥44,000(旧同値) / 素体B=¥32,000/39,800中央¥36,000(旧¥35,000) / ARS10¥58,000は別鑑定で不使用 / rate10=POP後追い更新予定 / ask不使用",
          "stale": false,
          "alert": null
        },
        {
          "at": "2026-06-19T09:23:08+09:00",
          "p10": 102500,
          "p9": 29150,
          "rawA": 44000,
          "rawB": 39800,
          "pop10": 4705,
          "popTotal": 5462,
          "rate10": 86.14,
          "currency": "JPY",
          "src": "価格=スニダン約定値の直近トリム中央値(外れ値・グレード誤登録除外/ask不使用) / POP=PSA(4705/5462→rate10 86.14%) (treca-market-update 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 64552,
          "soldMedianUSD": null,
          "n": 47,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "db-dbsc-tcg-fb06-119-722695",
      "game": "dbfw",
      "name": "Son Goku :Youth SCR* [FB06-119](FUSION WORLD \"MANGA BOOSTER 02\")",
      "number": "DBSC-TCG-FB06-119",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/TCG-DB-2025-10-31-118-of.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/722695",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 190000,
          "p9": null,
          "rawA": 36000,
          "rawB": 49500,
          "pop10": 160,
          "popTotal": 167,
          "rate10": 95.81,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n41/PSA10n31・最新06-19・最安出品P10 ¥200,000・ask不使用) / PSA POP実測 95.81% (g10=160/total=167・cert経由DBS FW Manga Booster02) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 69367,
          "soldMedianUSD": null,
          "n": 48,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "db-dbsc-tcg-fb06-119-569552",
      "game": "dbfw",
      "name": "Son Goku :Youth SCR* [FB06-119](FUSION WORLD \"Rivals Clash\")",
      "number": "DBSC-TCG-FB06-119",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/FB06-119_p1-of.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/569552",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 110000,
          "p9": null,
          "rawA": 25000,
          "rawB": null,
          "pop10": 160,
          "popTotal": 167,
          "rate10": 95.81,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n8/PSA10n31・最新06-19・最安出品P10 ¥148,000・ask不使用) / PSA POP実測 95.81% (g10=160/total=167・同FB06-119(Manga Booster02)) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 69367,
          "soldMedianUSD": null,
          "n": 48,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-st10-006-315324",
      "game": "onepiece",
      "name": "Monkey.D.Luffy SR [ST10-006](Promotional Card \"ONE PIECE DAY'24 Visitor Benefits\")",
      "number": "ST10-006",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20240813013643-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/315324",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 110000,
          "p9": 39800,
          "rawA": 48000,
          "rawB": 25000,
          "pop10": 3914,
          "popTotal": 5512,
          "rate10": 71.01,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n8/PSA10n36・最新06-19・最安出品P10 ¥118,499・ask不使用) / PSA POP実測 71.01% (g10=3914/total=5512・One Piece Day24) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 149276,
          "soldMedianUSD": null,
          "n": 36,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-st21-015-635880",
      "game": "onepiece",
      "name": "Roronoa Zoro SR [ST21-015](Promotional Card \"Flagship Battle Top 8 Souvenirs\")",
      "number": "ST21-015",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250701071049-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/635880",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 90000,
          "p9": null,
          "rawA": 39800,
          "rawB": 27900,
          "pop10": 3843,
          "popTotal": 4245,
          "rate10": 90.53,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n15/PSA10n26・最新06-19・最安出品P10 ¥78,999・ask不使用) / PSA POP実測 90.53% (g10=3843/total=4245・Official Event Prize) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 32518,
          "soldMedianUSD": null,
          "n": 31,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-eb02-017-838503",
      "game": "onepiece",
      "name": "Nami R [EB02-017](Promotional Card \"ONE PIECE CARD GAME 3rd ANNIVERSARY COMPLETE GUIDE\")",
      "number": "EB02-017",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/OPC-TCG-2026-06-11-EB02-017-of.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/838503",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 52500,
          "p9": null,
          "rawA": 6650,
          "rawB": null,
          "pop10": 299,
          "popTotal": 357,
          "rate10": 83.75,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n43/PSA10n13・最新06-19・最安出品P10 ¥49,800・ask不使用) / PSA POP実測 83.75% (g10=299/total=357・OP 3rd Anv Complete Guide) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 24207,
          "soldMedianUSD": null,
          "n": 38,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-m3-115-753274",
      "game": "pokemon",
      "name": "Rosa's Encouragement SAR [M3 115/080](Expansion Pack \"Munikis / Nihil Zero\")",
      "number": "pkmn-tcg-M3-115",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20260121064939-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/753274",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 61000,
          "p9": 16999,
          "rawA": 18800,
          "rawB": 16000,
          "pop10": 2515,
          "popTotal": 4683,
          "rate10": 53.7,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n7/PSA10n38・最新06-19・最安出品P10 ¥61,999・ask不使用) / PSA POP実測 53.7% (g10=2515/total=4683・M3 Nullifying Zero・新弾センタリング難) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 71894,
          "soldMedianUSD": null,
          "n": 76,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-op02-059-102461",
      "game": "onepiece",
      "name": "Boa Hancock UC-P [OP02-059] (Booster Pack Final Battle)",
      "number": "OP02-059",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20221103131243-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/102461",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 44500,
          "p9": null,
          "rawA": 4500,
          "rawB": 2000,
          "pop10": 1571,
          "popTotal": 1737,
          "rate10": 90.44,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n26/PSA10n8・最新06-18・最安出品P10 ¥42,999・ask不使用) / PSA POP実測 90.44% (g10=1571/total=1737・OP02 Box Topper) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 30661,
          "soldMedianUSD": null,
          "n": 42,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-m2a-240-724996",
      "game": "pokemon",
      "name": "MEGA Gengar ex SAR [M2a 240/193](High Class Pack \"MEGA Dream ex\")",
      "number": "pkmn-tcg-M2a-240",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128090358-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/724996",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 107800,
          "p9": 54222,
          "rawA": 65000,
          "rawB": 45000,
          "pop10": null,
          "popTotal": null,
          "rate10": 88.6,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n3/PSA10n51・最新06-19・最安出品P10 ¥107,500・ask不使用) / PSA POP実測 88.6% / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 166418,
          "soldMedianUSD": null,
          "n": 57,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "db-dbsc-tcg-e01-01-203863",
      "game": "dbfw",
      "name": "Energy Marker(Son Goku) * [E01-01](FUSION WORLD Promotion Card Pack \"Energy Marker Pack 01\" )",
      "number": "DBSC-TCG-E01-01",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20240315081502-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/203863",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 66000,
          "p9": null,
          "rawA": 25000,
          "rawB": null,
          "pop10": 54,
          "popTotal": 58,
          "rate10": 93.1,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n7/PSA10n56・最新06-19・最安出品P10 ¥64,000・ask不使用) / PSA POP実測 93.1% (g10=54/total=58・Energy Marker Pack01) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 32654,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-p-110-686000",
      "game": "onepiece",
      "name": "Monkey.D.Luffy P [P-110](Premium Card Collection \"ONE PIECE DAY'25\")",
      "number": "P-110",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250828112538-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/686000",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 69999,
          "p9": null,
          "rawA": 29500,
          "rawB": 23999,
          "pop10": 13799,
          "popTotal": 14658,
          "rate10": 94.14,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n3/PSA10n48・最新06-19・最安出品P10 ¥70,500・ask不使用) / PSA POP実測 94.14% (g10=13799/total=14658・OP PCC Day25) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 58286,
          "soldMedianUSD": null,
          "n": 59,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-op-p-041-134163",
      "game": "onepiece",
      "name": "Monkey D Luffy (Gear 5) P [P-041] (Promotion Card Seven-Eleven Collaboration)",
      "number": "OP-P-041",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20230816022100-2.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/134163",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 39999,
          "p9": null,
          "rawA": 3950,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 88.94,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n33/PSA10n6・最新06-19・最安出品P10 ¥35,000・ask不使用) / PSA POP実測 88.94%(one-piece-promos 7-Eleven版) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 62938,
          "soldMedianUSD": null,
          "n": 21,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・海外セラー円建て)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-m2a-234-730956",
      "game": "pokemon",
      "name": "Pikachu ex SAR [M2a 234/193](High Class Pack \"MEGA Dream ex\")",
      "number": "pkmn-tcg-M2a-234",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128090358-4.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/730956",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 93750,
          "p9": 40000,
          "rawA": 55000,
          "rawB": null,
          "pop10": null,
          "popTotal": null,
          "rate10": 86.4,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n10/PSA10n29・最新06-19・最安出品P10 ¥93,799・ask不使用) / PSA POP実測 86.4% / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 105211,
          "soldMedianUSD": null,
          "n": 62,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-sv2a-201-128117",
      "game": "pokemon",
      "name": "Charizard ex SAR [SV2a 201/165](Enhanced Expansion Pack \"Pokemon Card 151\")",
      "number": "pkmn-tcg-SV2a-201",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20241211035656-2.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/128117",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 124000,
          "p9": 64500,
          "rawA": 79000,
          "rawB": 65000,
          "pop10": 36145,
          "popTotal": 42711,
          "rate10": 84.63,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n4/PSA10n41・最新06-19・最安出品P10 ¥117,000・ask不使用) / PSA POP実測 84.63% (g10=36145/total=42711) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 126997,
          "soldMedianUSD": null,
          "n": 6,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・海外セラー円建て)"
        }
      }
    },
    {
      "id": "op-opcd-098-712256",
      "game": "onepiece",
      "name": "DON!! Card : Robin & Uta & Nami & Hancock Super Parallel [Opened](Extra Booster \"Heroines Edition Special Set\")",
      "number": "OPCD-098",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/OPCD-098-2.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/712256",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 79000,
          "p9": null,
          "rawA": 45000,
          "rawB": 40000,
          "pop10": 1682,
          "popTotal": 1812,
          "rate10": 92.83,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n13/PSA10n40・最新06-19・最安出品P10 ¥109,900・ask不使用) / PSA POP実測 92.83% (g10=1682/total=1812・OP Heroines SP Set-Gold) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ]
    },
    {
      "id": "db-dbsc-tcg-fb01-139-190309",
      "game": "dbfw",
      "name": "Son Goku SCR* [FB01-139](FUSION WORLD Booster Pack \"Heartbeat of Awakening\")",
      "number": "DBSC-TCG-FB01-139",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20240316022728-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/190309",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 40000,
          "p9": 15800,
          "rawA": 13000,
          "rawB": null,
          "pop10": 385,
          "popTotal": 399,
          "rate10": 96.49,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n21/PSA10n44・最新06-19・最安出品P10 ¥64,400・ask不使用) / PSA POP実測 96.49% (g10=385/total=399・Awakened Pulse) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 52020,
          "soldMedianUSD": null,
          "n": 46,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "op-st21-014-706813",
      "game": "onepiece",
      "name": "Monkey.D.Luffy SR [ST21-014](Promotional Card \"ONE PIECE magazine Special Feature Weekly Shonen Jump & ONE PIECE 020\")",
      "number": "ST21-014",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251005093907-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/706813",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T12:54:06+09:00",
          "p10": 53450,
          "p9": 23800,
          "rawA": 25999,
          "rawB": 19000,
          "pop10": 34269,
          "popTotal": 37494,
          "rate10": 91.4,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n8/PSA10n46・最新06-19・最安出品P10 ¥55,555・ask不使用) / PSA POP実測 91.4% (g10=34269/total=37494・OP magazine Vol.20) / 投資候補(treca-discovery 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 50431,
          "soldMedianUSD": null,
          "n": 78,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-m4-114-776365",
      "game": "pokemon",
      "name": "MEGA Greninja ex SAR [M4 114/083](Expansion Pack \"Ninja Spinner\")",
      "number": "pkmn-tcg-M4-114",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/e51cbcb5-3be1-4420-ab26-8777703f7c25.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/776365",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T13:29:00+09:00",
          "p10": 71000,
          "p9": null,
          "rawA": 37500,
          "rawB": null,
          "pop10": 6882,
          "popTotal": 7270,
          "rate10": 94.66,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n1/PSA10n62・最新06-19・最安出品P10 ¥71,299・ask不使用) / PSA POP実測 94.66% (g10=6882/total=7270・M4 Ninja Spinner) / 素体約定が薄い(n1)＝買い集め注意 / 投資候補(treca-discovery拡張 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 50835,
          "soldMedianUSD": null,
          "n": 49,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-sv10-125-568902",
      "game": "pokemon",
      "name": "Team Rocket's Mewtwo ex SAR [SV10 125/098](Expansion Pack \"Glory of Team Rocket\")",
      "number": "pkmn-tcg-SV10-125",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250417015534-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/568902",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T13:29:00+09:00",
          "p10": 109000,
          "p9": null,
          "rawA": 62500,
          "rawB": 55000,
          "pop10": 11052,
          "popTotal": 13294,
          "rate10": 83.14,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n2/PSA10n45・最新06-19・最安出品P10 ¥106,800・ask不使用) / PSA POP実測 83.14% (g10=11052/total=13294・SV10 Glory of Team Rocket) / 素体約定が薄い(n2)＝買い集め注意 / 投資候補(treca-discovery拡張 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 109093,
          "soldMedianUSD": null,
          "n": 54,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-sv8a-217-455596",
      "game": "pokemon",
      "name": "Umbreon ex SAR [SV8a 217/187](High Class Pack \"Terastal Festival ex\")",
      "number": "pkmn-tcg-SV8a-217",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20241205122342-4.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/455596",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T13:29:00+09:00",
          "p10": 102900,
          "p9": null,
          "rawA": 67000,
          "rawB": 57000,
          "pop10": 74331,
          "popTotal": 85328,
          "rate10": 87.11,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n1/PSA10n52・最新06-19・最安出品P10 ¥102,000・ask不使用) / PSA POP実測 87.11% (g10=74331/total=85328) / 素体約定が薄い(n1)＝買い集め注意 / 投資候補(treca-discovery拡張 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 121842,
          "soldMedianUSD": null,
          "n": 46,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "yg-ygo-ocg-tcg-qcac-jp019-532226",
      "game": "yugioh",
      "name": "Dark Magician Girl 25th SE [QCAC-JP019](QUARTER CENTURY ART COLLECTION)",
      "number": "YGO-OCG-TCG-QCAC-JP019",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/YGO-OCG-TCG-QCAC-0085.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/532226",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T13:29:00+09:00",
          "p10": 39000,
          "p9": null,
          "rawA": 10500,
          "rawB": 7000,
          "pop10": 493,
          "popTotal": 570,
          "rate10": 86.49,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n5/PSA10n15・最新06-18・最安出品P10 ¥44,900・ask不使用) / PSA POP実測 86.49% (g10=493/total=570・YG QCAC 6th TCG Artwork QCSCR) / 投資候補(treca-discovery拡張 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 15264,
          "soldMedianUSD": null,
          "n": 22,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "yg-ygo-ocg-tcg-nkc1-en002-692556",
      "game": "yugioh",
      "name": "Red-Eyes Black Dragon SE [NKC1-EN002](Yu-Gi-Oh x Nike Air Max 95 QS Air Muscle House of Duel Limited)",
      "number": "YGO-OCG-TCG-NKC1-EN002",
      "variant": "",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250905010803-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/692556",
        "psaPop": ""
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T13:29:00+09:00",
          "p10": 175000,
          "p9": 60000,
          "rawA": 98000,
          "rawB": 71250,
          "pop10": 559,
          "popTotal": 698,
          "rate10": 80.09,
          "currency": "JPY",
          "src": "価格=スニダン直近3約定中央値(素体n46/PSA10n29・最新06-19・最安出品P10 ¥264,000・ask不使用) / PSA POP実測 80.09% (g10=559/total=698・YG Nikeコラボ NKC1-EN002) / 投資候補(treca-discovery拡張 2026-06-19)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 104895,
          "soldMedianUSD": null,
          "n": 7,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(完了済・同一originfetch・型番一致中央値)"
        }
      }
    },
    {
      "id": "pk-pkmn-tcg-m2a-223-722239",
      "game": "pokemon",
      "name": "MEGA Charizard X ex MA",
      "number": "pkmn-tcg-M2a-223",
      "variant": "MEGA ATTACK RARE",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20251128023141-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/722239/used",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/pokemon-japanese-m2a-mega-dream-ex/323965"
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T16:57:14+09:00",
          "p10": 25999,
          "p9": null,
          "rawA": 7000,
          "rawB": null,
          "pop10": 30977,
          "popTotal": 34231,
          "rate10": 90.49,
          "currency": "JPY",
          "src": "treca-scout: スニダン約定(直近3中央値 PSA10 n27/素体A n12・apparels/722239) / rate10=PSA POP cert方式(M2a #223 main g10=30977/34231)",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 30663,
          "soldMedianUSD": null,
          "n": 60,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(同一originfetch・対スニダン+18%)"
        }
      }
    },
    {
      "id": "db-dbsc-tcg-fb05-053-595511",
      "game": "dbfw",
      "name": "Son Goku R [FB05-053]",
      "number": "DBSC-TCG-FB05-053",
      "variant": "1st Complete Card Collection",
      "lang": "ja",
      "image": "https://cdn.snkrdunk.com/upload_bg_removed/20250518061905-0.webp",
      "imageNote": "",
      "links": {
        "snkrdunk": "https://snkrdunk.com/apparels/595511/used",
        "psaPop": "https://www.psacard.com/pop/tcg-cards/2025/dragon-ball-super-card-game-fusion-world-japanese-1st-complete-collection/297045"
      },
      "watch": true,
      "invest": true,
      "gradingCostDefault": 11980,
      "snapshots": [
        {
          "at": "2026-06-19T17:13:35+09:00",
          "p10": 60000,
          "p9": null,
          "rawA": 12700,
          "rawB": null,
          "pop10": 1303,
          "popTotal": 1337,
          "rate10": 97.46,
          "currency": "JPY",
          "src": "treca-scout: スニダン約定(直近3中央値 PSA10 n19/素体A n30・apparels/595511) / rate10=PSA POP cert方式(FB05-053 g10=1303/1337) / 鑑定edge約+¥30k",
          "stale": false,
          "alert": null
        }
      ],
      "signals": {
        "ebay": {
          "soldMedianJPY": 36919,
          "soldMedianUSD": null,
          "n": 34,
          "days": 90,
          "at": "2026-06-19",
          "src": "eBay sold(同一originfetch・対スニダン-38%=国内優位)"
        }
      }
    }
  ]
};
if (typeof window !== "undefined") window.TRECA_DATA = TRECA_DATA;
if (typeof module !== "undefined") module.exports = TRECA_DATA;
