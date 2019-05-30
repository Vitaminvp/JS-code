
describe("Task 1 - Search local data", function () {
  const desc = "<p>You must modify <code>ImagesResolver.search()</code> method to search strictly by the field 'tags' in <a href='/js/local.db.js' target='_blank'><strong>window.localDB</strong></a></p>" +
    "<p>For example:</p>" +
    "<p>If user searches for a ‘cat’, he doesn't get 'cat portrait’, if there is no 'cat' tag in string.</p>" +
    "<p>If user writes <strong>'cat'</strong> in input, there should be 16 photos with cats received. Show them in results.</p>" +
    "<p>Don't change <code>ImageGallery</code> in this task.</p>";
  describe(desc, function () {
    it("must call the _onReceiveSearchResult method", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);
    });
    it("query result should be a 'cat'", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);

      runs(function () {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];

        expect(results.query).toBe("cat");
      });
    });
    it("result.images must be an array", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);

      runs(function () {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];
        expect(results.images instanceof Array, "result.images is an Array").toBeTruthy()
      });
    });
    it("result.images must contain 16 items", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);

      runs(function () {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];
        expect(results.images.length).toBe(16);
      });
    });
    it("must contain correct fields", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search("cat", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);

      runs(function () {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];
        expect(results.images).toContain({
          id: 3261420,
          url: "/img/local/cat-3261420_640.jpg",
          tags: "cat, pet"
        });
        expect(results.images).toContain({
          id: 3261166,
          url: "/img/local/tiger-3261166_640.jpg",
          tags: "tiger, cat, predator"
        });
        expect(results.images).toContain({
          id: 3253084,
          url: "/img/local/lion-3253084_640.jpg",
          tags: "lion, cat, predator"
        });
      });
    });
    it("if query is empty, no need to show results", function () {
      var galleryTested = new ImageGallery(window.imageResolver);
      spyOn(galleryTested, "_onReceiveSearchResult");

      runs(function () {
        galleryTested.search(" ", "local");
      });

      waitsFor(function () {
        return galleryTested._onReceiveSearchResult.callCount > 0;
      }, "imageResolver results", 100);

      runs(function () {
        var results = galleryTested._onReceiveSearchResult.calls[0].args[0];
        expect(results.images.length).toBe(0);
      })
    })
  });
});
