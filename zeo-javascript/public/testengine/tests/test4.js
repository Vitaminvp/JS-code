describe("Task 4 - work with different gallery", function () {
  const desc = "<p>Now your <code>imageResolver</code> must work with multiple galleries.</p>" +
    "<p><code>var firstGallery = new ImageGallery(window.imageResolver);</code>" +
    "<br>" +
    "<code>var secondGallery = new ImageGallery(window.imageResolver);</code></p>";

  describe(desc, function () {
    it("imageResolver must work with diverse galleries", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      var galleryTested2 = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");
      spyOn(galleryTested2, "_onReceiveSearchResult");

      runs(function(){
        galleryTested.search("cat", "pixabay");
        galleryTested2.search("cats", "pixabay");
      });

      waitsFor(function(){
        return galleryTested._onReceiveSearchResult.callCount > 0 && galleryTested2._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 1000);

      runs(function () {
        var result = galleryTested._onReceiveSearchResult.calls[0].args[0];
        var result2 = galleryTested2._onReceiveSearchResult.calls[0].args[0];

        expect(result.query).toBe("cat");
        expect(result2.query).toBe("cats");
      })
    });
  });
});