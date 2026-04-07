module {
  public type ContentId = Text;

  public type Category = Text; // "movie" | "anime" | "drama" | "music"

  public type Part = {
    partNumber : Nat;
    title : Text;
    videoUrl : ?Text;
    duration : Text;
  };

  public type Episode = {
    episodeNumber : Nat;
    title : Text;
    description : Text;
    duration : Text;
    videoUrl : ?Text;
    parts : ?[Part];
  };

  public type Season = {
    seasonNumber : Nat;
    title : Text;
    description : Text;
    episodes : [Episode];
  };

  public type ContentItem = {
    id : ContentId;
    title : Text;
    description : Text;
    category : Category;
    genre : Text;
    year : Nat;
    rating : Float;
    duration : Text;
    posterUrl : Text;
    seasons : ?[Season];
  };

  public type ContentInput = {
    title : Text;
    description : Text;
    category : Category;
    genre : Text;
    year : Nat;
    rating : Float;
    duration : Text;
    posterUrl : Text;
    seasons : ?[Season];
  };
};
