'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6b4d0d8e628f428e227f49055b0ada20",
"favicon.ico": "7aa55f8f4b52452d48c1557887b2fd57",
"index.html": "1e6f601102fc321a0513885e5dd5b102",
"/": "1e6f601102fc321a0513885e5dd5b102",
"main.dart.js": "7111882b4a5a7ee84c2647dfae4caab2",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"script.js": "0f122e53b18cac26f4f75ba71657c4ff",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/favicon-16x16.png": "c123f8d4db0e338cffb2c1a52ff90026",
"icons/favicon.ico": "7aa55f8f4b52452d48c1557887b2fd57",
"icons/apple-icon.png": "0ac58fd3ab2b873362ca533dd67d961a",
"icons/apple-icon-144x144.png": "b24a37a5bce44867d0872e8eab893ba4",
"icons/android-icon-192x192.png": "4d0df2193510952db1897b2e9323b8c3",
"icons/apple-icon-precomposed.png": "0ac58fd3ab2b873362ca533dd67d961a",
"icons/apple-icon-114x114.png": "78ce86a05446c2eeba94e46e60ea3cc4",
"icons/ms-icon-310x310.png": "4c94be01137f8988f83d35591ddf726c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/ms-icon-144x144.png": "b24a37a5bce44867d0872e8eab893ba4",
"icons/apple-icon-57x57.png": "88c041fa845778f907d5dc4b309a9061",
"icons/apple-icon-152x152.png": "712b675cd5366c170797e7b50c015cd4",
"icons/ms-icon-150x150.png": "ba1f75d10d27a6f6d13d46f52e0fa66b",
"icons/android-icon-72x72.png": "bf10683d3f6b6a7f49f854383ac4cfe3",
"icons/android-icon-96x96.png": "9368854aefc0c2a162169e3a8ec4621f",
"icons/android-icon-36x36.png": "3871ea7d458403d06ddc875a32addc71",
"icons/apple-icon-180x180.png": "72691d6acbe74d918d4c75f1d938b2b3",
"icons/favicon-96x96.png": "1236d2da7fd147b2c4ee0a34399e6a72",
"icons/android-icon-48x48.png": "003770abd63afcd563022dbb03cc30af",
"icons/apple-icon-76x76.png": "12ba5b165a561b1d30a5459bd1da7936",
"icons/apple-icon-60x60.png": "ab99c8ac7da51f6ae548deefbce7a2e8",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/android-icon-144x144.png": "4967da3a043db3bdff72dab60bb88305",
"icons/apple-icon-72x72.png": "11304307801fc89e82aeff3522c6eea4",
"icons/apple-icon-120x120.png": "a2af5958e135aebbd79f82d7b1b4fd1e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/favicon-32x32.png": "ab660c0a23eb3d2b12bafcae6276a0f1",
"icons/ms-icon-70x70.png": "b96b33581d2eb000b2a0213f719435fc",
"manifest.json": "1cabd6a6b3dd483445c3723cb75ccb42",
"assets/AssetManifest.json": "0cb2cbdf0b82bba7390a0b759ec60e91",
"assets/NOTICES": "41c10e4531b8645067d0dbee61a94fbb",
"assets/FontManifest.json": "e8fc6bb469773e067c51d27ba8df22b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/dividerfloral24.svg": "e94c04a7dbe9024deaedd5583eb9d40d",
"assets/assets/images/Save-The-Date.gif": "a2aec3ea6793a2a2274aee524fe0ba3f",
"assets/assets/images/ornamentfloral24.svg": "dc10d0ae865bc5e4e6d24118bc08f600",
"assets/assets/images/prokes3putih.svg": "90450e29fc1bb0daf43d35a4ffb58cd9",
"assets/assets/images/online-payment.png": "84d65b656632552b422a85b0f7b85af5",
"assets/assets/images/prokes2putih.svg": "64aaa71052d358283adb43822dc769e5",
"assets/assets/images/image-dialog.png": "740d8a928e9b01530491f5a0a2b91693",
"assets/assets/images/specialeventfloral24.svg": "afe4ce5f9deaad4b402a349b383121d2",
"assets/assets/images/angpaudigital2.svg": "634a7ec55e5945bc4232e1c876203d87",
"assets/assets/images/logo-bca.png": "956ab12d2f8634427095145a96fab9ae",
"assets/assets/images/angpaudigital2.png": "d868d9ee24d37849d0e019eccc23fbda",
"assets/assets/images/background-bca.svg": "2502c76204c8ea9a4f4a53d0dd33fb06",
"assets/assets/images/bukurtamu2_inactive.svg": "64276b5817b683a2ab86d5345e236e51",
"assets/assets/images/iluscasual3green.svg": "2966922b5adca2ab740299857a07e323",
"assets/assets/images/acarafloral24.svg": "c9c47c4ad4d5a2754656b4b7e3bcb537",
"assets/assets/images/menjadisatu.jpeg": "f0c53e01531ec254ba1cb31dd87cd509",
"assets/assets/images/audio.mp3": "1b421ff14e20c547cb344113bda28435",
"assets/assets/images/cowofloral24.png": "dcde3f20a1548f38f52c193cccb66c43",
"assets/assets/images/beranda2_inactive.svg": "2caf489957c8e21d6dfe9ad377c5ef51",
"assets/assets/images/prokes4putih.svg": "d3ae2a400c1ca0664b949c4a00f147aa",
"assets/assets/images/cewefloral24.png": "c50c9ba2390b1d22167eb1527b024173",
"assets/assets/images/mempelaifloral24.svg": "4a4ea129afa6cd35c9951d00476a462c",
"assets/assets/images/panduantamufloral24.svg": "c5a35ca1c2740d89c6c9cb9d0bc3e4f6",
"assets/assets/images/prokes1putih.svg": "277e15653cf683e561d292ebedfe3a64",
"assets/assets/images/animasi-amplop300.gif": "bf32fead7ef029f3786c893cbd78ffb1",
"assets/assets/images/mempelai2_inactive.svg": "4666649ba0a848ba9990cf98dcafdea6",
"assets/assets/images/prokes5.svg": "0da956501db4ee3e94c5da46315c5995",
"assets/assets/images/prokes4.svg": "155821b6350ea5df3ad67c646a35747e",
"assets/assets/images/prokesfloral24.svg": "a1feb8e288274ec2b4e95cc39ea47200",
"assets/assets/images/prokes6.svg": "ffc1fb5de5868858be81060fae25b978",
"assets/assets/images/acara2.svg": "b19124ad22eb1e14c0f995e432dba170",
"assets/assets/images/miniig.svg": "84bca0a49e302bb6e8090b05427fd7f9",
"assets/assets/images/prokes3.svg": "6f594a8ff09c0e2bf147a9a7d9e03531",
"assets/assets/images/checklist-kehadiran.svg": "f111b61a17b0f5089dd862c0304e55ce",
"assets/assets/images/prokes2.svg": "98d5a42e8a09fe07b12131f624af40f8",
"assets/assets/images/prokes1.svg": "3aa6428fb3c2a49dd6632832c5074725",
"assets/assets/images/bridesmaidfloral24.svg": "417eca7f68e52425656e55d90054eaac",
"assets/assets/font/Montserrat-Medium.ttf": "b3ba703c591edd4aad57f8f4561a287b",
"assets/assets/font/Montserrat-Bold.ttf": "1f023b349af1d79a72740f4cc881a310",
"assets/assets/font/Montserrat-MediumItalic.ttf": "2e7c02a0a4a5fd318b0625d120ad2033",
"assets/assets/font/Tahu!.ttf": "98c36c6da792d6726ffdba9e6d6989ab",
"assets/assets/font/Signatura%2520Monoline.ttf": "1d03aea31371a4a9edf706f4cc485e7e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
