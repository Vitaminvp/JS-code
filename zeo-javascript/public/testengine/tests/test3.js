describe("Task 3 - network requests", function () {
  const desc = "<p>Add new search module with <strong>id = 'pixabay'</strong></p>" +
    "<p>This module must use <a href='https://pixabay.com/api/docs/' target='_blank'>pixabay API</a> and return exactly 100 search results.</p>" +
    "<p>API key: <code>8522875-59a2673910903be627161f155</code></p>" +
    "<p>For example: <a href='https://pixabay.com/api/?key=8522875-59a2673910903be627161f155&q=cats&image_type=all&per_page=100' target='_blank'>only 100 cats</a>.</p>" +
    "<p>Also <code>&lt;select&gt;</code> must be added to allow user what search module (local or pixabay) to use.</p>";

  describe(desc, function () {
    it("request must be async", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "pixabay");
      });

      runs(function(){
        expect(galleryTested._onReceiveSearchResult.callCount === 0).toBeTruthy();
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 1000);
    });
    it("must contain exactly 100 results", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function(){
        galleryTested.search("cat", "pixabay");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 1000);

      runs(function() {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];

        expect(results.query).toBe('cat');

        expect(results.images instanceof Array, 'check that results.images is an Array').toBeTruthy();

        expect(results.images.length).toBe(100);
      });
    });
  });
});