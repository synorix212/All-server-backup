chrome.runtime.onInstalled.addListener(function () {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [
                new chrome.declarativeContent.PageStateMatcher({
                    pageUrl: {
                        hostEquals: "www.betfair.com",
                        schemes: ["https"],
                    },
                   
                }),
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()],
        },]);
    });
});

var started = {};

chrome.pageAction.onClicked.addListener(function (tab) {
    if (started[tab.id] == undefined || !started[tab.id]) {
        chrome.tabs.executeScript(tab.id, {
            code: "startTracker()",
        });
    } else {
        chrome.tabs.executeScript(tab.id, {
            code: "stopTracker()",
        });
    }
});

chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.text == "started") {
        started[sender.tab.id] = true;
        started[msg.url] = true;
        chrome.pageAction.setIcon({ path: "pause.png", tabId: sender.tab.id });
    } else if (msg.text == "stopped") {
        started[sender.tab.id] = false;
        started[msg.url] = false;
        chrome.pageAction.setIcon({ path: "play.png", tabId: sender.tab.id });
    }
});

chrome.webNavigation.onCompleted.addListener(
    function (details) {
        if (started[details.tabId] == true) {
            chrome.tabs.executeScript(details.tabId, {
                code: "startTracker()",
            });
        }
    }, {
    url: [
        {
            hostSuffix: "www.betfair.com",
        }
    ],
}
);