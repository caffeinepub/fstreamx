import List "mo:core/List";
import Types "types/content";
import ContentMixin "mixins/content-api";
import ContentLib "lib/content";
import Migration "migration";

(with migration = Migration.run)
actor {
  let contentItems = List.empty<Types.ContentItem>();
  let nextContentId : [var Nat] = [var 0];

  // Seed sample data on first init
  ContentLib.seedSamples(contentItems);

  include ContentMixin(contentItems, nextContentId);
};
