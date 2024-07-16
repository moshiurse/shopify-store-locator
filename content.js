chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_shopify_variable') {
      let shopifyData = window.Shopify;

      document.addEventListener('DOMContentLoaded', function() {
          console.log(window.location,window.Shopify, 'Content');
          shopifyData = window.Shopify;
      })
      sendResponse({ shopifyData: shopifyData });
    }
  });