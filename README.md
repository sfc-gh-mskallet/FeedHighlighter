# FeedHighlighter

Steps to Set Up:

1. Install Tampermonkey Chrome Extension from here: https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
2. Once at the link, simply click "Add to Chrome"
3. Open all Chrome extensions by going to chrome://extensions/
4. Find Tampermonkey > Then click Details.
5. Verify the "On" slider is on.
6. Verify "Site access" is set to "On all sites" (We block the script's access to only Salesforce sites in the script itself)
7. Verify "Allow User Scripts" is On
8. In a browser tab, paste this link: https://raw.githubusercontent.com/sfc-gh-mskallet/FeedHighlighter/main/Active-Post-Highlighter.user.js and hit Enter
9. Tampermonkey should open and show you the source code. Click 'Install' or 'Reinstall'
13. Go to Salesforce (gov or commercial) and open a case. Only when on a Salesforce case tab will the script show up if you click on the Tampermonkey extension. Here you can use the slider to turn it off and on.
14. Refresh the Salesforce case page to make sure the script is taking effect.
