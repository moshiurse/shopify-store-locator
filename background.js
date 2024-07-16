// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.message === 'get_current_tab') {
//       chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//         const activeTab = tabs[0];
//         let data = null
//         if(typeof Shopify == 'object'){
//             data = {...Shopify};
//             data.pageType = __st.p
//             data.pid = __st.rid;
//         }
//         sendResponse({ url: activeTab.url, data });
//       });
//       return true;  // Will respond asynchronously.
//     }
//   });

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === 'get_shopify_variable') {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { message: 'get_shopify_variable' }, (response) => {
            console.log(response);
          sendResponse(response);
        });
      });
      return true;  // Will respond asynchronously.
    }
  });