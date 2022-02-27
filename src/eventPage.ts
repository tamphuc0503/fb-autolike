import { AutoLike } from "./facebook/autolike";
const autoLike = new AutoLike();

// Listen to messages sent from other parts of the extension.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // onMessage must return "true" if response is async.
    let isResponseAsync = false;
    if (request.popupMounted) {
        console.log('eventPage notified that Popup.tsx has mounted.');
    }
    return isResponseAsync;
});

chrome.tabs.onUpdated.addListener(function (tabId, info) {
    if (info.status === 'complete') {
        chrome.tabs.sendMessage(tabId, {
            cmd: 'Like', selector: `div[aria-label="Like"]`
        });  
    }
});

autoLike.run();