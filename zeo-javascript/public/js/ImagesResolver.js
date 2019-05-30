// import {URL} from "./constants.js";
// import {APIKEY} from "./constants";

window.ImagesResolver = (function() {
  class ImagesResolver {
    constructor() {
      this.idb = window.localDB;
      this.images = {};
    }

    convertImagesArray(data, query) {
      if(Array.isArray(data)){
        const images = data.reduce((acc, curr) => {
          const { tags, id, previewURL } = curr;
          const tagsArr = tags.split(", ");
          if (~tagsArr.indexOf(query)) {
            return [
              ...acc,
              {
                id,
                url: previewURL,
                tags
              }
            ];
          }
          return acc;
        }, []);
        return {
          query,
          images
        };
      }

    }
    async getAsync(query) {
      const KEY = "12639051-83df761b8cd870f08ae0c2c2b";
      const URL = "https://pixabay.com/api";
      try {
        const response = await fetch(
            `${URL}/?key=${KEY}&q=${query}&image_type=photo&per_page=100&safesearch=true`
        );
        return await response.json();
      }
      catch (err) {
        throw new Error(err);
      }
    }

    search(query, searchModuleId) {

      try {
        if (searchModuleId === "local") {
          const db = this.idb;
          return this.convertImagesArray(db, query);
        } else if (searchModuleId === "pixabay") {
          return (async () => {
            const result = await this.getAsync(query);
            console.log("result", result);
            console.log("query", query);
            console.log('this.images', this.convertImagesArray(result.hits, query));
            return  this.convertImagesArray(result, query);

          })(query);

        } else {
          throw new Error("error");
        }
      }
      catch (err) {
        throw new Error(err);
      }

      // console.log(this.images);
      // return this.images;
    }
  }

  return ImagesResolver;
})();
