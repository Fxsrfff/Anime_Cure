var SOURCE_ID = "animecure";
var VIDEO = "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

function getInfo() {
  return {
    id: SOURCE_ID,
    name: "Anime Cure",
    lang: "ar",
    baseUrl: "https://storage.googleapis.com",
    type: "anime",
    version: "1.0.5"
  };
}

function search(query, page, opts) {
  return Promise.resolve([{
    id: "test",
    title: query,
    url: VIDEO + "#" + encodeURIComponent(query),
    type: "anime",
    sourceId: SOURCE_ID
  }]);
}

function getDetail(url, opts) {
  return getEpisodes(url, opts).then(function(episodes) {
    return {
      id: "test",
      title: decodeURIComponent(url.split("#")[1] || "Big Buck Bunny"),
      url: url,
      type: "anime",
      sourceId: SOURCE_ID,
      episodes: episodes
    };
  });
}

function getEpisodes(url, opts) {
  return Promise.resolve([{
    id: "1",
    number: 1,
    title: "Episode 1",
    url: VIDEO
  }]);
}

function getVideoSources(episodeUrl, opts) {
  return Promise.resolve([{
    url: VIDEO,
    quality: "720p",
    label: "Anime Cure Test",
    headers: {},
    subtitles: [],
    isM3U8: false
  }]);
}
