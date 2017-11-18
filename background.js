function replaceResource(pattern, resource) {
  chrome.webRequest.onBeforeRequest.addListener(
    () => ({ redirectUrl: chrome.extension.getURL(resource) }),
    { urls: [pattern] },
    ["blocking"]
  );
}

replaceResource("*://www.garlandtools.org/bell/locale.js", 'sites/garlandbell.js');
