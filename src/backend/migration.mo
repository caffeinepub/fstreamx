import List "mo:core/List";
import Types "types/content";

module {
  // Old types (from previous version — no seasons field)
  type OldContentId = Text;
  type OldCategory = Text;
  type OldContentItem = {
    id : OldContentId;
    title : Text;
    description : Text;
    category : OldCategory;
    genre : Text;
    year : Nat;
    rating : Float;
    duration : Text;
    posterUrl : Text;
  };

  type OldActor = {
    contentItems : List.List<OldContentItem>;
    nextContentId : [var Nat];
  };

  type NewActor = {
    contentItems : List.List<Types.ContentItem>;
    nextContentId : [var Nat];
  };

  public func run(old : OldActor) : NewActor {
    let newItems = List.empty<Types.ContentItem>();
    for (item in old.contentItems.values()) {
      let newItem : Types.ContentItem = {
        id = item.id;
        title = item.title;
        description = item.description;
        category = item.category;
        genre = item.genre;
        year = item.year;
        rating = item.rating;
        duration = item.duration;
        posterUrl = item.posterUrl;
        seasons = null;
      };
      newItems.add(newItem);
    };
    { contentItems = newItems; nextContentId = old.nextContentId };
  };
};
