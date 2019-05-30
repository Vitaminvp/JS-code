// import {URL} from "./constants.js";
// import {APIKEY} from "./constants";




window.ImagesResolver = (function () {
  class ImagesResolver {
    constructor() {
      this.idb = window.localDB;
    }

    search(query, searchModuleId) {
      const APIKEY = '12639051-83df761b8cd870f08ae0c2c2b';
      const URL = 'https://pixabay.com/api/';
      let db;
      if(searchModuleId === 'local'){
        db = this.idb;
        const images = db.reduce((acc, curr) => {
          const {tags, id, previewURL} = curr;
          const tagsArr = tags.split(', ');
          if (~tagsArr.indexOf(query)){
            return [...acc, {
              id,
              url: previewURL,
              tags
            }]
          }
          return acc;
        },[]);

        return {
          query, images
        };
      } else if(searchModuleId === 'pixabay'){
          const response = fetch(`${URL}/?key=${APIKEY}&q=${query}&image_type=photo&per_page=100&safesearch=true`)
              .then(response => {
                if (response.ok) {
                  return response.json();
                } else {
                  return new Error(response.statusText);
                }
              })
              .then(res => {
                let images;
                if(res) {
                  images = res.hits.reduce((acc, curr) => {
                    const {tags, id, previewURL} = curr;
                    const tagsArr = tags.split(', ');
                    if (~tagsArr.indexOf(query)){
                      return [...acc, {
                        id,
                        url: previewURL,
                        tags
                      }]
                    }
                    return acc;
                  },[]);
                }


                return {
                  query, images
                };



              });

      }
      else {
        throw new Error('error')

      }

      const images = db.reduce((acc, curr) => {
        const {tags, id, previewURL} = curr;
        const tagsArr = tags.split(', ');
        if (~tagsArr.indexOf(query)){
          return [...acc, {
            id,
            url: previewURL,
            tags
          }]
        }
        return acc;
      },[]);

      return {
        query, images
      };


    }
  }

  return ImagesResolver;
})();
