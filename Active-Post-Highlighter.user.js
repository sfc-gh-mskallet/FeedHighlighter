// ==UserScript==
// @name         Active-Post-Highlighter
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Surrounds Active Salesforce case posts in different colors depending on visibility
// @author       Mark Skallet
// @match        https://snowforce--uat.sandbox.lightning.force.com/lightning/r/Case/*
// @match        https://snowflakegovcloud.lightning.force.com/lightning/r/Case/*
// @match        https://snowforce.lightning.force.com/lightning/r/Case/*
// @icon         https://i5.walmartimages.com/seo/Mr-Pen-Highlighters-Highlighters-Assorted-Colors-Pack-of-28-Highlighters-Bulk-Highlighter_c090afe3-c5ad-4277-8c85-82244ac5c75e.368562e5c661dc3081691f8ab86cd27b.jpeg
// @updateURL    https://raw.githubusercontent.com/sfc-gh-mskallet/FeedHighlighter/main/Active-Post-Highlighter.user.js
// @downloadURL  https://raw.githubusercontent.com/sfc-gh-mskallet/FeedHighlighter/main/Active-Post-Highlighter.user.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';

    const PARENT_CONTAINER_SELECTOR = 'div.forceChatterPublisherPresentationDesktop';
    const VISIBILITY_CONTAINERS = ['span.uiOutputText','span.preamble_custom-preamble'];
    const HIGHLIGHT_PLACEMENT = PARENT_CONTAINER_SELECTOR;

    console.log("Active Post Highlighter script is running");

    function highlightFeedEntries(selector) {
        //console.log("highlightFeedEntries function called")
        const entries = document.querySelectorAll(selector);
        entries.forEach(entry => {
            const text = entry.textContent?.trim();
            if (!text) return;

            const boxPlacement = entry.closest(HIGHLIGHT_PLACEMENT);
            
            if (!boxPlacement) return;

            if (text === 'Snowflake - Gov C... Only' || text === 'Snowflake Only' || text === 'To: Internal') {
                boxPlacement.style.border = '4px solid red';
            } else if (text === 'All with access' || text === 'To: All') {
                boxPlacement.style.border = '4px solid green';
            }
        });
    }

    // Observe changes to DOM what is to catch dynamic content
    function waitForFeedContainerAndObserve() {
        const container = document.querySelector(PARENT_CONTAINER_SELECTOR);

        if (!container) {
            requestAnimationFrame(waitForFeedContainerAndObserve);
            return;
        }
        console.log("Found Chatter feed, starting observer...");

        highlightFeedEntries(VISIBILITY_CONTAINERS); // Run initially

        const observer = new MutationObserver((mutations) => {
            for (const mutation of mutations) {
                if (mutation.addedNodes.length > 0) {
                    highlightFeedEntries(VISIBILITY_CONTAINERS);
                    break;
                }
            }
        });

        observer.observe(container, {
            childList: true,
            subtree: true
        });
    }

    waitForFeedContainerAndObserve();

/*     const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.addedNodes.length > 0) {
                highlightFeedEntries(DYNAMIC_VISIBILITY_CONTAINER,STATIC_VISIBILITY_CONTAINER);
                break; // once per batch of mutations
            }
        }
    });


    // Start observing the body for DOM changes
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
 */

})();