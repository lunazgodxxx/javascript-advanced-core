const fetchUrlsInParallel = async (urls) => {
  const promises = urls.map(async (url) => {
    try {
      const response = await fetch(url);
      return await response.text();
    } catch (e) {
      console.log(e);
      return null;
    }
  });

  try {
    const contents = await Promise.all(promises);
    return contents;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

const urls = [
  "https://www.bsuir.by",
  "https://www.google.com",
  "https://www.github.com",
];

fetchUrlsInParallel(urls)
  .then((contents) => {
    contents.forEach((content, index) => {
      console.log(`Содержимое URL ${urls[index]}:`);
      console.log(content || "Ошибка при загрузке");
    });
  })
  .catch((e) => {
    console.log(e);
  });
