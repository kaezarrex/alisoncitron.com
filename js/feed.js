var $, google; //libraries
var initialize, createPreview; //functions

google.load("feeds", "1");

function initialize() {
	var feed, entries, entry;
	feed = new google.feeds.Feed("http://lovecitron.wordpress.com/feed/");
	feed.load(function (result) {
		if (!result.error) {
			entries = result.feed.entries;
			if (entries.length > 0) {
				entry = entries[0];
				$("#feed").append("<b>" + entry.title + "</b>");
				$("#feed").append(createPreview(entry));
			}
		}
	});
}

function createPreview(entry) {
	var pictures, endIndex;

	pictures = entry.mediaGroups[0].contents;

	if (pictures.length > 1) {
		return '<img src="' + pictures[1].url + '" style="width:389px; margin-top:5px;">';
	}
	
	endIndex = entry.content.indexOf("<p>", 1);
	return entry.content.slice(0, endIndex);
}

google.setOnLoadCallback(initialize);
