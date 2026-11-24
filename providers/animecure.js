function getInfo() {
  return {
    name: "Anime Cure",
    lang: "ar",
    baseUrl: "https://schow.wasmer.app",
    type: "anime",
    version: "1.0.0"
  };
}

function search(query, page, opts) {
  return Promise.resolve([]);
}

function getDetail(url, opts) {
  return Promise.resolve({
    type: "anime",
    episodes: []
  });
}

function getEpisodes(url, opts) {
  return Promise.resolve([]);
}

function getVideoSources(episodeUrl) {
  return Promise.resolve([]);
}
