console = chrome.extension.getBackgroundPage().console;
var contextMenuItem = {
    "id": "text",
    "title": "Search on Ultimate Guitar",
    "contexts": ["all"]
};
chrome.contextMenus.create(contextMenuItem);
chrome.contextMenus.onClicked.addListener(function(clickData){
    if(clickData.menuItemId == 'text' && clickData.selectionText){
        let selection = encodeURIComponent(clickData.selectionText.trim());
        let src = 'https://www.ultimate-guitar.com/search.php?search_type=title&value=/';
        let url = src + selection;



        chrome.tabs.create({
            url: url
        })
    }
});