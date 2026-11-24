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
