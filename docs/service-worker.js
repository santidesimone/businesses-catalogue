/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f78661d364c325a6b4d6a92d71e0d997"
  },
  {
    "url": "api/cli.html",
    "revision": "6bc43a4e12e1c1a3acc1b26df3be9bc1"
  },
  {
    "url": "api/node.html",
    "revision": "2fc1a131f6b84a94777f98794b31d81e"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/1.9-lang.png",
    "revision": "9a95306985d4954fe54bc8de5512d3ba"
  },
  {
    "url": "assets/1.9-official-plugin-options.png",
    "revision": "55243b507656a5c36b45b7d4b27c1cab"
  },
  {
    "url": "assets/1.9-official-plugin-tuple-usage.png",
    "revision": "252870643841d8bac56aac10d1a9d91f"
  },
  {
    "url": "assets/1.9-overview.png",
    "revision": "f3534cdf12b0474265fd296bdc82c225"
  },
  {
    "url": "assets/css/0.styles.63c2c699.css",
    "revision": "c0f3239d7a0c67afe94bbe9183c80303"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8d3443b5.js",
    "revision": "a4f2b97bb73c1fe14fa709de7c758b93"
  },
  {
    "url": "assets/js/100.264f175c.js",
    "revision": "6ecb68fdb56188f38a383f4acc374a41"
  },
  {
    "url": "assets/js/101.00e06344.js",
    "revision": "2c7c2510944734094491b9930834b2b5"
  },
  {
    "url": "assets/js/102.01ed505c.js",
    "revision": "5bd70283db477e1b1946dc22b9218c4f"
  },
  {
    "url": "assets/js/103.924ecdd5.js",
    "revision": "e8cdc293eee8880c025978c400639ac5"
  },
  {
    "url": "assets/js/104.8c59b444.js",
    "revision": "773393d04139b08f4061d2fc4442c430"
  },
  {
    "url": "assets/js/105.b65ac1b8.js",
    "revision": "9fe1cdf6c7cf620132fdcc81c54aeed6"
  },
  {
    "url": "assets/js/106.6c7f3aea.js",
    "revision": "bd17b6190392fc73d1dffe5bf5f344b5"
  },
  {
    "url": "assets/js/107.6f8655a7.js",
    "revision": "9ae559541fadd7153fd67f86a2bce590"
  },
  {
    "url": "assets/js/108.c16451fe.js",
    "revision": "053f19526b7e780cfcdf997501e885ee"
  },
  {
    "url": "assets/js/109.bc1b077a.js",
    "revision": "ee745467e4a8b7e839b970515f7935bb"
  },
  {
    "url": "assets/js/11.86bddfdc.js",
    "revision": "2010b544b96fee628a41ec16530d8d6d"
  },
  {
    "url": "assets/js/110.cac27508.js",
    "revision": "98b9a051811d5fc58fb51ae0e8d8a408"
  },
  {
    "url": "assets/js/12.4c6c4262.js",
    "revision": "7462f409233164583ce6f63d8aaef5e7"
  },
  {
    "url": "assets/js/13.c5e46438.js",
    "revision": "7a77a74444612aa53599629d7d26250f"
  },
  {
    "url": "assets/js/14.b1c421f9.js",
    "revision": "52893b96be321b7bd4d8ee169fcd34f2"
  },
  {
    "url": "assets/js/15.5fc5623c.js",
    "revision": "7c55b9f528e08e6ffc76fd5da0e1d62a"
  },
  {
    "url": "assets/js/16.ed2f4936.js",
    "revision": "d27db9c86294c9fb22ddcca7dcc5b0cf"
  },
  {
    "url": "assets/js/17.ae1b46bd.js",
    "revision": "ec56c8f6f91ecaa0f418f328460c04eb"
  },
  {
    "url": "assets/js/18.192f180e.js",
    "revision": "b68ee6c95a8613e023dfd53dc18af210"
  },
  {
    "url": "assets/js/19.c358957f.js",
    "revision": "f2e77b98b87b0c8cff79c559f55b3328"
  },
  {
    "url": "assets/js/20.84e53a02.js",
    "revision": "77624df41fd55cf38dee5526162ece46"
  },
  {
    "url": "assets/js/21.b9f0a8c9.js",
    "revision": "f757eaf8dac29b09c9cdcc61add1d48d"
  },
  {
    "url": "assets/js/22.507060a5.js",
    "revision": "d717bde2d39eebcbb9e3d442cc29e704"
  },
  {
    "url": "assets/js/23.4de74f49.js",
    "revision": "419c5bd87b7ad8e44261d8c8e58d5e1c"
  },
  {
    "url": "assets/js/24.d11ec67e.js",
    "revision": "fe280e6dd48423972661d8ecf60c5d32"
  },
  {
    "url": "assets/js/25.1c45030e.js",
    "revision": "329ea681825e9414198c7ce74bf11fdf"
  },
  {
    "url": "assets/js/26.c539b9de.js",
    "revision": "506c19911475251c3ac12e9264edb339"
  },
  {
    "url": "assets/js/27.689d7b6c.js",
    "revision": "4489b34fe6f6d265d1e2a7e204516efa"
  },
  {
    "url": "assets/js/28.6d4dc976.js",
    "revision": "a946ae837151e5b8bf7afedbaa1fd854"
  },
  {
    "url": "assets/js/29.cf26717f.js",
    "revision": "af366b0c8988ac8f46c1c0e272b1db5a"
  },
  {
    "url": "assets/js/30.55ba9f35.js",
    "revision": "906584b5fb2034b4bda9878b390ed2c4"
  },
  {
    "url": "assets/js/31.b4fa78bc.js",
    "revision": "effa0e1a6f9b1b2baca66a4ff68ecf1b"
  },
  {
    "url": "assets/js/32.5a843c92.js",
    "revision": "ee1c7955cd6c707818d2ffbbeaea0c87"
  },
  {
    "url": "assets/js/33.b8ba37d8.js",
    "revision": "972f7ddfc1c5ca90850b0c755c8e2c0c"
  },
  {
    "url": "assets/js/34.5d83a2c2.js",
    "revision": "30fb3c716c9598205cbac94609e71da6"
  },
  {
    "url": "assets/js/35.ac6c5554.js",
    "revision": "607a7af8c3ab9c62c3c069b88e30d7df"
  },
  {
    "url": "assets/js/36.0f0ec77b.js",
    "revision": "e7a2af76d1c17fd1f92f0580242632ab"
  },
  {
    "url": "assets/js/37.2619507e.js",
    "revision": "dad2561025a922793911ca10f2d552a9"
  },
  {
    "url": "assets/js/38.085fec54.js",
    "revision": "d7973f89a476e96d5f77be2602b43072"
  },
  {
    "url": "assets/js/39.6f9e05b0.js",
    "revision": "0c559f1689b66de4bb61c334d76be6b1"
  },
  {
    "url": "assets/js/40.26470c8d.js",
    "revision": "d81bc7eb6295b2b9219883f5ef623388"
  },
  {
    "url": "assets/js/41.cefb1b7d.js",
    "revision": "a6dc848acdc49a020e6e309d92d9011a"
  },
  {
    "url": "assets/js/42.94c09bfd.js",
    "revision": "57172f91e5893e273a33c5600fdcb19c"
  },
  {
    "url": "assets/js/43.f0fb7ad6.js",
    "revision": "3c298c712d578904658c213f9471cb73"
  },
  {
    "url": "assets/js/44.9618bd7e.js",
    "revision": "8617c79780b9e91d57e2379af75357d8"
  },
  {
    "url": "assets/js/45.675d0bdc.js",
    "revision": "913a8dfafa1c9b230d17092f7bbaf67c"
  },
  {
    "url": "assets/js/46.c0279ce5.js",
    "revision": "a63a8f4ed0362b65db4fe782b7a97d4e"
  },
  {
    "url": "assets/js/47.04c79351.js",
    "revision": "0e6604583095e016b31306b672bbc043"
  },
  {
    "url": "assets/js/48.41e458e1.js",
    "revision": "1bf5db3fa4a32a6795eee10864ecfb6b"
  },
  {
    "url": "assets/js/49.d82e7128.js",
    "revision": "421aff3070e73cc89a2af59c3b28abfb"
  },
  {
    "url": "assets/js/5.ee49dc44.js",
    "revision": "7f68985ab06f11f8722afa8773623a5e"
  },
  {
    "url": "assets/js/50.45c31c8d.js",
    "revision": "99105618e508bc04af0be2835d4e1767"
  },
  {
    "url": "assets/js/51.4f508daf.js",
    "revision": "4fc3dc33e589c27652f69ca8d83eeb41"
  },
  {
    "url": "assets/js/52.00febbb9.js",
    "revision": "a2d5f25cc9ee5c0a01da9e574a3f3daa"
  },
  {
    "url": "assets/js/53.f3dc98f4.js",
    "revision": "5df2fd50c1be1fc7aa6f332d825ad9e4"
  },
  {
    "url": "assets/js/54.4339a8eb.js",
    "revision": "8c75305c718391d0f04dbbf5ef8bc923"
  },
  {
    "url": "assets/js/55.9c494e90.js",
    "revision": "fb3238b541ac1f9bd364e3ef74e026a5"
  },
  {
    "url": "assets/js/56.7cd79932.js",
    "revision": "5f79484568db008c4123e0274dc04b46"
  },
  {
    "url": "assets/js/57.490eacc9.js",
    "revision": "d600d26197deb5d95142ca67aaa02c82"
  },
  {
    "url": "assets/js/58.255f6794.js",
    "revision": "3bce5a92f6b1a9aead0b2f737308766b"
  },
  {
    "url": "assets/js/59.48feac09.js",
    "revision": "dd673d62db0ff6ab2d64704d3f5e24bf"
  },
  {
    "url": "assets/js/6.3218ba87.js",
    "revision": "a3d263a1b0568e302f34d38fe6953e05"
  },
  {
    "url": "assets/js/60.df0c2d8b.js",
    "revision": "474044e22869f1296c7cf62e26c87adf"
  },
  {
    "url": "assets/js/61.e82c4356.js",
    "revision": "0d26d1cee960bec95080b0d2d02c9d2b"
  },
  {
    "url": "assets/js/62.871bceb6.js",
    "revision": "dcf577bb331441558908612cfb83c439"
  },
  {
    "url": "assets/js/63.71b56858.js",
    "revision": "547eb6e3fc8414e3b2d3ac4abd8be2ad"
  },
  {
    "url": "assets/js/64.716a70d0.js",
    "revision": "c5ce160d0d8b8a37d2b1103e4aefc2f7"
  },
  {
    "url": "assets/js/65.262f520a.js",
    "revision": "d64d91bc39d60c2a32196825409034b7"
  },
  {
    "url": "assets/js/66.238b038a.js",
    "revision": "b810d442e676a998d3f090d5e3a4db45"
  },
  {
    "url": "assets/js/67.612bf971.js",
    "revision": "275e405a6d516ec6914e4d134280e7d4"
  },
  {
    "url": "assets/js/68.2af858ec.js",
    "revision": "962683259fa12cfb0173a476cb4339b9"
  },
  {
    "url": "assets/js/69.3335e7b1.js",
    "revision": "7397ea7b003c1f4a484eab0f78c98692"
  },
  {
    "url": "assets/js/7.622c5acd.js",
    "revision": "ef4d69da4af5183f38ae8ad40f07de8f"
  },
  {
    "url": "assets/js/70.9f1ee749.js",
    "revision": "756e409b33d97ac0c4ff49fd623b94f7"
  },
  {
    "url": "assets/js/71.a0f399b1.js",
    "revision": "06a27b5c7c97a03413e7074d8456b19c"
  },
  {
    "url": "assets/js/72.001f47b8.js",
    "revision": "03d8048355c9d432d064fdfa5f358558"
  },
  {
    "url": "assets/js/73.7319960b.js",
    "revision": "2ef5c31e86813b1ff59ee0c9e99532a5"
  },
  {
    "url": "assets/js/74.aa0b3398.js",
    "revision": "ffca24792873319ea15991a896567b3e"
  },
  {
    "url": "assets/js/75.090b0635.js",
    "revision": "be4b885113107d3ee798c4a05f441b46"
  },
  {
    "url": "assets/js/76.f7c25fd2.js",
    "revision": "34da44936b142956063df043209c1229"
  },
  {
    "url": "assets/js/77.c90b1221.js",
    "revision": "53e7692281c517d46f305456eafaf473"
  },
  {
    "url": "assets/js/78.10e59894.js",
    "revision": "9f10503eac86440ef40b63ee6529588e"
  },
  {
    "url": "assets/js/79.05ca6ba8.js",
    "revision": "338c624e733ef8b34a0e2a63c6e7bb8b"
  },
  {
    "url": "assets/js/8.7f1d50f3.js",
    "revision": "4882be89ad3df1ce9dd73313a2072d55"
  },
  {
    "url": "assets/js/80.d82fbab0.js",
    "revision": "3b76f14318f61756a1e0ec4507012c21"
  },
  {
    "url": "assets/js/81.f8ced8bb.js",
    "revision": "f4a38ea4afd0b2c99ed469cc951cfa2e"
  },
  {
    "url": "assets/js/82.11bde23f.js",
    "revision": "acee83981d45ef2837755ac2f2f32716"
  },
  {
    "url": "assets/js/83.81cfe200.js",
    "revision": "fb88c31c68dd95402f7bd980f5239330"
  },
  {
    "url": "assets/js/84.b406494e.js",
    "revision": "74fc77073d4ae21f77fbf193735789e1"
  },
  {
    "url": "assets/js/85.6aef09eb.js",
    "revision": "6ccee321c029be32cf172e32aadfa618"
  },
  {
    "url": "assets/js/86.5b4b5020.js",
    "revision": "8389ce0fb4e647990c13c44718ca64f4"
  },
  {
    "url": "assets/js/87.80c1e908.js",
    "revision": "9dc99fc43d98f74ccea08e5f3f0452f3"
  },
  {
    "url": "assets/js/88.36b0d84e.js",
    "revision": "33c149f7d6bf16e769cdbb56e074c498"
  },
  {
    "url": "assets/js/89.baf05efd.js",
    "revision": "6366642fe8f94946b5d904a736b7c157"
  },
  {
    "url": "assets/js/9.a904b64b.js",
    "revision": "4f2252a13e8b6da09b9aa8747be2fc49"
  },
  {
    "url": "assets/js/90.c017ddda.js",
    "revision": "9033399a6632231534795dd39edcce3e"
  },
  {
    "url": "assets/js/91.010e9b33.js",
    "revision": "b82f1acca932cbe078b6f5c9bb688a1f"
  },
  {
    "url": "assets/js/92.d377a4b6.js",
    "revision": "49a792028e9dce8c4efd4f201f285c50"
  },
  {
    "url": "assets/js/93.28e63796.js",
    "revision": "6c43c33596caab2386ec20ac877127ec"
  },
  {
    "url": "assets/js/94.322c7b4b.js",
    "revision": "41d95c2a8db1e45b5f1eac35ebbb5838"
  },
  {
    "url": "assets/js/95.59203e17.js",
    "revision": "e83800b5f485ae4da7f0574af7e5f6a5"
  },
  {
    "url": "assets/js/96.f408eeb9.js",
    "revision": "5b31b4c11b3e4655f04b99aaecbcc6cd"
  },
  {
    "url": "assets/js/97.b715d780.js",
    "revision": "a789ce035bef79b29817b74bf538c432"
  },
  {
    "url": "assets/js/98.271cb094.js",
    "revision": "0d1bb98939f9f625bc15628ed21284e9"
  },
  {
    "url": "assets/js/99.6f0ac4fd.js",
    "revision": "9c117f7a814f0dcc00313c408be6dc59"
  },
  {
    "url": "assets/js/app.a109231c.js",
    "revision": "ee254e34b49a01b76776ec9beece29b5"
  },
  {
    "url": "assets/js/vendors~docsearch.e0c00185.js",
    "revision": "7032f0387eda3c3cd075a2be354f4e8f"
  },
  {
    "url": "assets/js/vendors~flowchart.4d811a74.js",
    "revision": "5c4afe1847726abffdba010302bc0d6d"
  },
  {
    "url": "assets/js/vendors~notification.29f11cd4.js",
    "revision": "ed2eb05acd21b5ef4ef08408c5ea3733"
  },
  {
    "url": "config/index.html",
    "revision": "66e7b18a4a9d7798065be6e56b9985e5"
  },
  {
    "url": "faq/index.html",
    "revision": "2ada5d0694599b1fc9f12fbe018178e0"
  },
  {
    "url": "guide/assets.html",
    "revision": "44b1cff8846f5b25b03fd94489180ecd"
  },
  {
    "url": "guide/basic-config.html",
    "revision": "7a6fd5227a6037f4dfba1b65ef71e34a"
  },
  {
    "url": "guide/deploy.html",
    "revision": "d9a5dd3f118e36e5deb78b3de7a026bd"
  },
  {
    "url": "guide/directory-structure.html",
    "revision": "159a239927e16934336e8aaaaca93dbb"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "20a46cb21c4ee6d149bc579bccda64d3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8b007483ad8823fb3c5ba8950a81a8ff"
  },
  {
    "url": "guide/global-computed.html",
    "revision": "a8e6562afdb8d4ecde0c22fd66612c1b"
  },
  {
    "url": "guide/i18n.html",
    "revision": "3606ba9b8bbfb30d06152de66ada2e7c"
  },
  {
    "url": "guide/index.html",
    "revision": "24eb6caa61bcfb4bd6937c381640b505"
  },
  {
    "url": "guide/markdown-slot.html",
    "revision": "baa2fe333464440263b9cbb0038058c3"
  },
  {
    "url": "guide/markdown.html",
    "revision": "5c9d08c5efa1c430a0bf86b5b5e6e6a9"
  },
  {
    "url": "guide/permalinks.html",
    "revision": "a39f4f19f4d5c26d0ce6b99b7b43c18b"
  },
  {
    "url": "guide/typescript-as-config.html",
    "revision": "a202deaf9717e98ca36917a71b55829b"
  },
  {
    "url": "guide/using-vue.html",
    "revision": "5a67f60f5fb155894e5e94d4c05c4614"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "d7c9cf916a9708526a3981cdaeacf4ba"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "miscellaneous/design-concepts.html",
    "revision": "0af37fffb0ec227f4a47331fa05c622a"
  },
  {
    "url": "miscellaneous/glossary.html",
    "revision": "01b795e9435e917338f332b670a39b05"
  },
  {
    "url": "miscellaneous/local-development.html",
    "revision": "04e014ed1fa8796ad9aa64ea6d0ad172"
  },
  {
    "url": "miscellaneous/migration-guide.html",
    "revision": "cd2b2b4d74817b241423c1e2c2b5d636"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/context-api.html",
    "revision": "0f49abad83e2708e6522a844bce16c38"
  },
  {
    "url": "plugin/index.html",
    "revision": "ecbde52f403d1762870283e49f225e62"
  },
  {
    "url": "plugin/life-cycle.html",
    "revision": "bd49859af1847c08888ef5536d9390cc"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "4a56fd1c4861ee153471acb8471af289"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "180a8e6f7a688d3b978090f546187640"
  },
  {
    "url": "plugin/official/plugin-blog.html",
    "revision": "9a205c7b9818f3bdd7fb13cfdec6bf45"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "01609046c71524db8a602f7ae4f97fe4"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "23ef15daa9f24c33fa43b7eed5100587"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "7f534f27babd65916e1dddd201cf2754"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "465c4ba5443787be051ef8f81ec143fb"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c1381364e5e3ad55460d2ec773d3817a"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "9b4a97e397e27e8dc00569da8c55dc59"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "6316e80841e15470d6772ed0d5987ff1"
  },
  {
    "url": "plugin/option-api.html",
    "revision": "79df2f96b327a2084a39544261a26ab6"
  },
  {
    "url": "plugin/using-a-plugin.html",
    "revision": "727ee0ba883582dda328545d25905d36"
  },
  {
    "url": "plugin/writing-a-plugin.html",
    "revision": "7de451b4bc34b2c24e19e0ce08bce93b"
  },
  {
    "url": "theme/blog-theme.html",
    "revision": "6c3a0e138f592f4513d6004eea56fead"
  },
  {
    "url": "theme/default-theme-config.html",
    "revision": "586babc9582badf8bee01038f5bc9dbc"
  },
  {
    "url": "theme/index.html",
    "revision": "9eb1dac910769a8c6d72c83bbae3e150"
  },
  {
    "url": "theme/inheritance.html",
    "revision": "56ad25ab5aa0957810395578b0b4b460"
  },
  {
    "url": "theme/option-api.html",
    "revision": "066c687c43522e45bc0afe57e1fa9c57"
  },
  {
    "url": "theme/using-a-theme.html",
    "revision": "f5aecbf81b5183058c9b18a2e2752d06"
  },
  {
    "url": "theme/writing-a-theme.html",
    "revision": "9eacbbdde5a932c16e54201b58df8bbd"
  },
  {
    "url": "zh/api/cli.html",
    "revision": "96d651ecec09463aa27e63c4d9891b4c"
  },
  {
    "url": "zh/api/node.html",
    "revision": "123201d8e18dee1152abf6b83caca121"
  },
  {
    "url": "zh/config/index.html",
    "revision": "8fa60f0f65974cd55d985a712da5584e"
  },
  {
    "url": "zh/faq/index.html",
    "revision": "baa1b382a202c1b2c5485148a517cca0"
  },
  {
    "url": "zh/guide/assets.html",
    "revision": "91f141d3cf0802ec6c5ed2a87e86dd1f"
  },
  {
    "url": "zh/guide/basic-config.html",
    "revision": "85cce2b321da8a3ee0aa74b90465513d"
  },
  {
    "url": "zh/guide/deploy.html",
    "revision": "3f5dfe1d476f30bce695b3d6a005a90a"
  },
  {
    "url": "zh/guide/directory-structure.html",
    "revision": "ac2721176a7c7a7489c877f249561a70"
  },
  {
    "url": "zh/guide/frontmatter.html",
    "revision": "2480ef303b60366623f628c535725261"
  },
  {
    "url": "zh/guide/getting-started.html",
    "revision": "3cfe5f11613517c0df35e9988d5d4fa0"
  },
  {
    "url": "zh/guide/global-computed.html",
    "revision": "db822ddb129442fe0316ed1acfb6f96e"
  },
  {
    "url": "zh/guide/i18n.html",
    "revision": "28a7880f1369af1da6f42e69e2d1fc72"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "c5a1180065830c60306c8d0fe7c3172a"
  },
  {
    "url": "zh/guide/markdown-slot.html",
    "revision": "ed7fa717059a7a85581e97d3106b7260"
  },
  {
    "url": "zh/guide/markdown.html",
    "revision": "016b39f13d9ffd7eb5ff19c72369313c"
  },
  {
    "url": "zh/guide/permalinks.html",
    "revision": "29f7bbc0f2f28cc655899dc713a1b79b"
  },
  {
    "url": "zh/guide/typescript-as-config.html",
    "revision": "8602dbd54d5fd56bff7a78717b44dacd"
  },
  {
    "url": "zh/guide/using-vue.html",
    "revision": "208dfe039fe82ed8637e3959c9c45cbd"
  },
  {
    "url": "zh/index.html",
    "revision": "1a80a9247b7bcc6e3f107acd13789ec4"
  },
  {
    "url": "zh/miscellaneous/design-concepts.html",
    "revision": "a98c3612c49ac37d4ca988f5cbf0575c"
  },
  {
    "url": "zh/miscellaneous/glossary.html",
    "revision": "222a032a539ffc74087ac7a29295ce9b"
  },
  {
    "url": "zh/miscellaneous/local-development.html",
    "revision": "616bf1ac8d6e77f7cf758659e7f85033"
  },
  {
    "url": "zh/miscellaneous/migration-guide.html",
    "revision": "ebb928f6a5812727086bac6ca5635922"
  },
  {
    "url": "zh/plugin/context-api.html",
    "revision": "90aa83066f66b2142b505577aba1fdbf"
  },
  {
    "url": "zh/plugin/index.html",
    "revision": "9fad24d3ce01ac08902689b94133c520"
  },
  {
    "url": "zh/plugin/life-cycle.html",
    "revision": "1143597625febb4d8e444959dc0f117b"
  },
  {
    "url": "zh/plugin/official/plugin-active-header-links.html",
    "revision": "8c375e6c4d05b6792c8fc33d963de39c"
  },
  {
    "url": "zh/plugin/official/plugin-back-to-top.html",
    "revision": "71f447467f6b9dfe0cd70c42935ec92f"
  },
  {
    "url": "zh/plugin/official/plugin-blog.html",
    "revision": "d13867741d12e7e78ad586db46fe8a9d"
  },
  {
    "url": "zh/plugin/official/plugin-google-analytics.html",
    "revision": "555b928192a236bb55ec2b9a3d3ad22d"
  },
  {
    "url": "zh/plugin/official/plugin-last-updated.html",
    "revision": "55123ef0bb8d88fdb898935bbc29eacd"
  },
  {
    "url": "zh/plugin/official/plugin-medium-zoom.html",
    "revision": "4e3159baddf8465e79c846522cb64291"
  },
  {
    "url": "zh/plugin/official/plugin-nprogress.html",
    "revision": "7687b6014683bb3266788b621786db84"
  },
  {
    "url": "zh/plugin/official/plugin-pwa.html",
    "revision": "4e6058bf868bd66ae846d64a7ed20e75"
  },
  {
    "url": "zh/plugin/official/plugin-register-components.html",
    "revision": "4200be34e6b61cae0fdcdf6957011eb9"
  },
  {
    "url": "zh/plugin/official/plugin-search.html",
    "revision": "70802aab332f9f6adec7491ccb3e9096"
  },
  {
    "url": "zh/plugin/option-api.html",
    "revision": "8d8f9a4722aaa749e158b2c213319c38"
  },
  {
    "url": "zh/plugin/using-a-plugin.html",
    "revision": "8c1319aae7958b6de23f995f871a0abb"
  },
  {
    "url": "zh/plugin/writing-a-plugin.html",
    "revision": "f6d3d570ec85c70787cd8177dc9fe95d"
  },
  {
    "url": "zh/theme/blog-theme.html",
    "revision": "b610b0f0025a07e6a13f59dea7c7d2e4"
  },
  {
    "url": "zh/theme/default-theme-config.html",
    "revision": "879fc9613bddabb2a44e1614a3bb952c"
  },
  {
    "url": "zh/theme/index.html",
    "revision": "e08f8ca3a0ed511e9d4a70ecb5f86031"
  },
  {
    "url": "zh/theme/inheritance.html",
    "revision": "f20c20db4349c5fc6031e01fc23ea822"
  },
  {
    "url": "zh/theme/option-api.html",
    "revision": "e1a227322565833665fc08a46a45f2ec"
  },
  {
    "url": "zh/theme/using-a-theme.html",
    "revision": "a448c2ddc956de75727a65135e000ba8"
  },
  {
    "url": "zh/theme/writing-a-theme.html",
    "revision": "ac3c92d83d48cf6b43dbb1c9ecf3242f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
