//remove any and all context menus before we generate them again
chrome.contextMenus.removeAll();

//creates context menu item, taking these parameters.
chrome.contextMenus.create({"id": "mySearch", "title": "Search on Ultimate Guitar", "contexts": ["selection"]}, function(){});

//function when we click on an item in the context menu
chrome.contextMenus.onClicked.addListener(function (clickData) {
    //checks if we did indeed click the correct menu item and that we have selection text
    if (clickData.menuItemId == 'mySearch' && clickData.selectionText) {
        //hard codes the search url for UG and appends our selected text.

        //the encode function, adds the %20 for spaces and trim() removes leading and trailing white spaces. Makes it url friendly.
        //ie converts something like " the quick brown fox " -> "the20%quick20%brown%20fox"
        let selection = 'https://www.ultimate-guitar.com/search.php?search_type=title&value=' + encodeURIComponent(clickData.selectionText.trim());
        //opens a new tab using our search query
        chrome.tabs.create({url: selection})
    }
});

