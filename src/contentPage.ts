chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    // chrome.runtime.sendMessage({ popupMounted: true });
    setTimeout(() => {
        const like = <any>document.querySelector(`div[aria-label="Like"]`);
        if (like && like.click) {
            like.click();
        }
    }, 5 * 1000);
});