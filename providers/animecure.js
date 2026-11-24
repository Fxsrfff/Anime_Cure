
var SOURCE_ID = "animecure";

function getInfo() {
  return {
    name: "Anime Cure",
    lang: "ar",
    baseUrl: "https://schow.wasmer.app",
    type: "anime",
    version: "1.0.3"
  };
}

function search(query, page, opts) {
  if (page > 1) return Promise.resolve([]);

  return Promise.resolve([{
    id: "test",
    title: query,
    englishTitle: query,
    url: "test",
    type: "anime",
    sourceId: SOURCE_ID
  }]);
}

function getDetail(url, opts) {
  return getEpisodes(url, opts).then(function(episodes) {
    return {
      id: "test",
      title: "Big Buck Bunny",
      type: "anime",
      url: "test",
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
    url: "animecure://test/1"
  }]);
}

function getVideoSources(episodeUrl) {
  return Promise.resolve([{
    url: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    quality: "720p",
    type: "mp4",
    headers: {}
  }]);
}
