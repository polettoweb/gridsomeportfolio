// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const fs = require("fs");
const path = require("path");
const pick = require("lodash.pick");
const axios = require("axios");

module.exports = function(api, options) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
  });

  api.loadSource(async store => {
    let portfolioItems = [];
    const res = await axios.get("https://www.marcopoletto.eu/api/v1/portfolio");
    portfolioItems = res.data.content;
    console.log(portfolioItems);

    const contentType = store.addContentType({
      typeName: "PortfolioItem",
      route: "projects"
    });

    for (const item of portfolioItems) {
      contentType.addNode({
        title: item.linkTitle,
        path: item.path,
        description: item.description,
        alt: item.alt,
        src: item.src,
        srcDevices: item.srcDevices,
        tags: item.tags,
        link: item.link,
        website: item.website,
        role: item.role
      });
    }
  });

  api.beforeBuild(({ config, store }) => {
    // Generate an index file for Fuse to search Posts
    const { collection } = store.getContentType("Post");

    const posts = collection.data.map(post => {
      return pick(post, ["title", "path", "summary"]);
    });

    const output = {
      dir: "./static",
      name: "search.json",
      ...options.output
    };

    const outputPath = path.resolve(process.cwd(), output.dir);
    const outputPathExists = fs.existsSync(outputPath);
    const fileName = output.name.endsWith(".json")
      ? output.name
      : `${output.name}.json`;

    if (outputPathExists) {
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    } else {
      fs.mkdirSync(outputPath);
      fs.writeFileSync(
        path.resolve(process.cwd(), output.dir, fileName),
        JSON.stringify(posts)
      );
    }
  });
};
