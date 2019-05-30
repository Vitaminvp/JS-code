window.ImagesResolver = (function () {
  class ImagesResolver {
    constructor() {
      this.idb = window.localDB;
    }
    local = this.idb;
    search(query, searchModuleId) {
      if(searchModuleId === 'local'){
        const images = this.idb.reduce((acc, curr) => {
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
      else {
        throw new Error('error')
      }
    }
  }

  return ImagesResolver;
})();
