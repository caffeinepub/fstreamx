import List "mo:core/List";
import Nat "mo:core/Nat";
import ContentLib "../lib/content";
import Types "../types/content";

mixin (items : List.List<Types.ContentItem>, nextId : [var Nat]) {

  public query func getAllContent() : async [Types.ContentItem] {
    ContentLib.getAll(items);
  };

  public query func getContentById(id : Types.ContentId) : async ?Types.ContentItem {
    ContentLib.getById(items, id);
  };

  public query func getContentByCategory(category : Types.Category) : async [Types.ContentItem] {
    ContentLib.getByCategory(items, category);
  };

  public query func searchContent(term : Text) : async [Types.ContentItem] {
    ContentLib.search(items, term);
  };

  public func addContent(input : Types.ContentInput) : async Types.ContentId {
    let newId = ContentLib.addContent(items, nextId[0], input);
    nextId[0] := newId;
    newId.toText();
  };

  public func updateContent(id : Types.ContentId, input : Types.ContentInput) : async Bool {
    ContentLib.updateContent(items, id, input);
  };

  public func deleteContent(id : Types.ContentId) : async Bool {
    ContentLib.deleteContent(items, id);
  };

};
