document.addEventListener('DOMContentLoaded', function() {
    var myButton = document.getElementById('myButton');
    myButton.addEventListener('click', function() {
      chrome.runtime.sendMessage({ message: 'get_shopify_variable' }, (response) => {
        console.log(response?.shopifyData);
        if (response && response?.shopifyData) {
            alert('Shopify variable: ' + JSON.stringify(response.shopifyData));
          } else {
            alert('Could not get the Shopify variable.');
          }
      });
    });
  });