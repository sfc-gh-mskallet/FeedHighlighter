# FeedHighlighter

Steps to Set Up:

1. Install Tampermonkey Chrome Extension from here: https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Once at the link, simply click "Add to Chrome"
3. Open the Chrome extentions by going to chrome://extensions/
4. Find Tampermonkey > Then click Details.
5. Verify the "On" slider is on.
6. Verify "Site access" is set to "On all sites" (We block the script's access to ony Salesforce sites in the script itself)
7. Verify "Allow User Scripts" is On
8. Click "Extension Options"
9. Delete the Boiler Plate code and replace it with the below code block

```
// ==UserScript==
// @name         Active-Post-Highlighter
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  Surrounds Active Salesforce case posts in different colors depending on visibility
// @author       Mark Skallet
// @match        https://snowforce--uat.sandbox.lightning.force.com/lightning/r/Case/*
// @match        https://snowflakegovcloud.lightning.force.com/lightning/r/Case/*
// @match        https://snowforce.lightning.force.com/lightning/r/Case/*
// @updateURL    https://raw.githubusercontent.com/sfc-gh-mskallet/FeedHighlighter/main/Active-Post-Highlighter.user.js
// @downloadURL  https://raw.githubusercontent.com/sfc-gh-mskallet/FeedHighlighter/main/Active-Post-Highlighter.user.js
// ==/UserScript==
```

10. Click File -> Save
11. Click the "Installed Userscripts" tab.
12. Verify you see a script called "Active-Post-Highlighter" and that it is enabled.
13. Go to Salesforce (gov or commercial) and refresh the page to make sure the script is taking effect.
