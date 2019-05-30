describe("Task 2 - different search source", function () {
  const desc = "<p>Change your <code>ImagesResolver</code> from previous task so that you can add different sources for search.</p>" +
    "<p>Change <code>ImageGallery.search(query)</code> to <code>ImageGallery.search(query, searchModuleId)</code>.</p>" +
    "<p>Add searchModuleId = <strong>'local'</strong> to previous task to search in <code>local.db.js</code>.</p>" +
    "<p>If <strong>searchModuleId</strong> is not defined, throw error must be thrown.</p>";

  describe(desc, function () {
    it("must throw exception if module id is unknown", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      expect(function(){
        galleryTested.search("cat", "unknownModuleId");
      }).toThrow();
    });
  });
});