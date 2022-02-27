export class AutoLike {
    run() {
        setTimeout(this._likeInternal.apply(this), 10000);
    }

    private _likeInternal() {
        this.run();
        chrome.tabs.query({}, function (tabs) {
            for (var i = 0; i < tabs.length; ++i) {
                const message = { cmd: 'Like', selector: `div[aria-label="Like"]` };
                chrome.tabs.sendMessage(tabs[i].id, message);
            }
        });
    }
}