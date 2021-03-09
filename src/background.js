'use strict';

chrome.action.onClicked.addListener(() => {
  chrome.tabs.query(
    {
      status: 'complete',
    },
    result => {
      if (!chrome.runtime.lastError && result.length > 0) {
        result.forEach(tab => {
          const { title, url, id } = tab;
          if (url.includes(title)) {
            chrome.tabs.reload(id, {
              bypassCache: true,
            });
          }
        });
      }
    }
  );
});
