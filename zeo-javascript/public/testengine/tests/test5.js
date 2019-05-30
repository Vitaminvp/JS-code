describe("Task 5 - cancel request", function () {
  const desc = "<p>Because your <code>.search()</code> works <strong>asynchronously</strong>, you can get incorrect result if you do multiple searches. " +
    "For example, perform search when user is typing.</strong></p>" +
    "<p>You must handle case if user performs search many times per moment and still get correct results.</p>";

  describe(desc, function () {
    it("in results query must be a 'cats'", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function(){
        galleryTested.search('cat', 'pixabay');
        galleryTested.search('cats', 'pixabay');
      });

      waits(2000); // Need to wait for real requests to return
      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 1000);

      runs(function(){
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];

        expect(galleryTested._onReceiveSearchResult.callCount).toBe(1);

        expect(results.query).toBe('cats');
      });
    });
  });
});