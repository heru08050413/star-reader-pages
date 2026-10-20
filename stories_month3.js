// stories_month3.js - Days 61-80 (simplified retellings of Advanced passages 01-20)
// Each story here is a simplified, 8-year-old friendly version (~150-220 words)
// so the daily 80-day track stays continuous after Month 2.

if (typeof window !== 'undefined' && !window.STORIES_DATA) {
  window.STORIES_DATA = [];
}
var STORIES_DATA = (typeof window !== 'undefined' ? window.STORIES_DATA : (typeof STORIES_DATA !== 'undefined' ? STORIES_DATA : []));

const MONTH3_STORIES = [
  // Stories will be added here.
];

MONTH3_STORIES.forEach(story => {
  if (!STORIES_DATA.some(existing => existing.id === story.id)) {
    STORIES_DATA.push(story);
  }
});

if (typeof window !== 'undefined') {
  window.MONTH3_STORIES = MONTH3_STORIES;
  window.STORIES_DATA = STORIES_DATA;
}
