import List "mo:core/List";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Types "../types/content";
import Runtime "mo:core/Runtime";

module {
  public type ContentItem = Types.ContentItem;
  public type ContentInput = Types.ContentInput;
  public type ContentId = Types.ContentId;
  public type Season = Types.Season;
  public type Episode = Types.Episode;
  public type Part = Types.Part;

  let seedData : [ContentItem] = [
    // Movies (10) — no seasons
    { id = "1";  title = "Inception";               description = "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO. A mind-bending heist thriller that blurs the line between dreams and reality."; category = "movie";  genre = "Sci-Fi";    year = 2010; rating = 8.8; duration = "2h 28m"; posterUrl = "https://picsum.photos/300/450?random=1";  seasons = null },
    { id = "2";  title = "The Dark Knight";          description = "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice. A landmark superhero epic that redefined the genre."; category = "movie";  genre = "Action";    year = 2008; rating = 9.0; duration = "2h 32m"; posterUrl = "https://picsum.photos/300/450?random=2";  seasons = null },
    { id = "3";  title = "Avatar";                   description = "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home. A revolutionary visual spectacle with a sweeping environmentalist story."; category = "movie";  genre = "Adventure"; year = 2009; rating = 7.8; duration = "2h 42m"; posterUrl = "https://picsum.photos/300/450?random=3";  seasons = null },
    { id = "4";  title = "Interstellar";             description = "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival. An emotionally profound journey through time, gravity, and love set against the backdrop of a dying Earth."; category = "movie";  genre = "Sci-Fi";    year = 2014; rating = 8.6; duration = "2h 49m"; posterUrl = "https://picsum.photos/300/450?random=4";  seasons = null },
    { id = "5";  title = "The Matrix";               description = "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers. A groundbreaking cyberpunk action film that spawned a generation of imitators."; category = "movie";  genre = "Sci-Fi";    year = 1999; rating = 8.7; duration = "2h 16m"; posterUrl = "https://picsum.photos/300/450?random=5";  seasons = null },
    { id = "6";  title = "Avengers: Endgame";        description = "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos's actions and restore balance to the universe. The ultimate culmination of over a decade of Marvel storytelling."; category = "movie";  genre = "Action";    year = 2019; rating = 8.4; duration = "3h 1m";  posterUrl = "https://picsum.photos/300/450?random=6";  seasons = null },
    { id = "7";  title = "Spider-Man: No Way Home";  description = "Peter Parker's identity is revealed and he asks Doctor Strange for help, leading to a multiverse-shattering adventure. A love letter to fans featuring surprise appearances from across the Spider-Man franchise."; category = "movie";  genre = "Action";    year = 2021; rating = 8.2; duration = "2h 28m"; posterUrl = "https://picsum.photos/300/450?random=7";  seasons = null },
    { id = "8";  title = "Top Gun: Maverick";        description = "After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront ghosts of his past when he leads a new generation of recruits on a dangerous mission. A spectacular return that surpasses its legendary predecessor."; category = "movie";  genre = "Action";    year = 2022; rating = 8.3; duration = "2h 11m"; posterUrl = "https://picsum.photos/300/450?random=8";  seasons = null },
    { id = "9";  title = "John Wick";                description = "An ex-hitman comes out of retirement to track down the gangsters who killed his dog, a final gift from his deceased wife. A sleek, hyper-stylized action thriller that reinvented modern action choreography."; category = "movie";  genre = "Action";    year = 2014; rating = 7.4; duration = "1h 41m"; posterUrl = "https://picsum.photos/300/450?random=9";  seasons = null },
    { id = "10"; title = "The Godfather";            description = "The aging patriarch of an organized crime dynasty transfers control of his empire to his reluctant son. Widely regarded as one of the greatest films ever made, a masterclass in character and storytelling."; category = "movie";  genre = "Drama";     year = 1972; rating = 9.2; duration = "2h 55m"; posterUrl = "https://picsum.photos/300/450?random=10"; seasons = null },

    // Anime (10) — with seasons/episodes/parts
    {
      id = "11"; title = "Naruto"; description = "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. An epic coming-of-age story full of friendship, perseverance, and jaw-dropping battles."; category = "anime"; genre = "Action"; year = 2002; rating = 8.3; duration = "23m"; posterUrl = "https://picsum.photos/300/450?random=11";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "The beginning of Naruto's ninja journey."; episodes = [
          { episodeNumber = 1; title = "Enter: Naruto Uzumaki!"; description = "Naruto fails his ninja exam and discovers the forbidden scroll."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "My Name is Konohamaru!"; description = "Naruto meets the Hokage's grandson who wants to surpass his grandfather."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 3; title = "Sasuke and Sakura: Friends or Foes?"; description = "Team 7 is formed. Naruto, Sasuke, and Sakura become teammates."; duration = "23m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2: Chunin Exams"; description = "Naruto enters the Chunin Selection Exams."; episodes = [
          { episodeNumber = 1; title = "Chunin Exam Begins!"; description = "Team 7 registers for the Chunin Selection Exams."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "The Forest of Death"; description = "The second phase begins in the dangerous Forest of Death."; duration = "23m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "12"; title = "One Piece"; description = "Monkey D. Luffy sets off on an adventure to find the legendary treasure One Piece and become King of the Pirates. One of the longest-running and most beloved adventure series of all time with an enormous cast of characters."; category = "anime"; genre = "Adventure"; year = 1999; rating = 8.9; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=12";
      seasons = ?[
        { seasonNumber = 1; title = "East Blue Saga"; description = "Luffy forms his crew and sets sail from the East Blue."; episodes = [
          { episodeNumber = 1; title = "I'm Luffy! The Man Who's Gonna Be King of the Pirates!"; description = "Young Luffy meets the pirate Red-Haired Shanks and eats a Devil Fruit."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Enter the Great Swordsman! Pirate Hunter Roronoa Zoro!"; description = "Luffy rescues the legendary swordsman Zoro from the Marines."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Alabasta Saga"; description = "The crew travels to the desert kingdom of Alabasta."; episodes = [
          { episodeNumber = 1; title = "Entering into the Grand Line"; description = "The Straw Hats enter the treacherous Grand Line."; duration = "24m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "13"; title = "Attack on Titan"; description = "Humanity lives inside cities surrounded by enormous walls due to the Titans, gigantic humanoid beings who devour humans seemingly without reason. A dark, complex narrative that subverts every expectation it sets up."; category = "anime"; genre = "Action"; year = 2013; rating = 9.0; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=13";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "The fall of Wall Maria and the rise of the Survey Corps."; episodes = [
          { episodeNumber = 1; title = "To You, in 2000 Years"; description = "The walls protecting humanity fall and the Titans invade."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "That Day"; description = "Eren, Mikasa, and Armin survive the initial Titan attack and vow revenge."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 3; title = "Night of the Disbanding Ceremony"; description = "The recruits begin their training to join the military."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Secrets of the Titans are slowly revealed."; episodes = [
          { episodeNumber = 1; title = "Beast Titan"; description = "A new, terrifying Titan appears beyond the walls."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 3; title = "Season 3"; description = "The Survey Corps battles political enemies within the walls."; episodes = [
          { episodeNumber = 1; title = "Smoke Signal"; description = "The Survey Corps goes into hiding from the Military Police."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 4; title = "The Final Season"; description = "The war for Paradis begins. Eren's final plan is set in motion."; episodes = [
          { episodeNumber = 1; title = "The Other Side of the Sea"; description = "Four years later, the Warrior Unit attacks Fort Slava."; duration = "24m"; videoUrl = null;
            parts = ?[
              { partNumber = 1; title = "Part 1"; videoUrl = null; duration = "24m" },
              { partNumber = 2; title = "Part 2"; videoUrl = null; duration = "24m" },
            ]
          },
        ]},
      ]
    },
    {
      id = "14"; title = "Dragon Ball Z"; description = "Goku and his allies defend Earth against an assortment of villains including aliens, androids, and magical creatures. The definitive battle shonen that established the template for power-scaling anime worldwide."; category = "anime"; genre = "Action"; year = 1989; rating = 8.7; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=14";
      seasons = ?[
        { seasonNumber = 1; title = "Saiyan Saga"; description = "Goku's alien origins are revealed as Saiyan warriors arrive on Earth."; episodes = [
          { episodeNumber = 1; title = "The New Threat"; description = "Raditz arrives on Earth seeking Goku, his long-lost brother."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Reunions"; description = "Goku reunites with his brother Raditz and learns his Saiyan heritage."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Frieza Saga"; description = "The Z Fighters travel to Planet Namek to face the tyrant Frieza."; episodes = [
          { episodeNumber = 1; title = "A New Goal: Namek"; description = "The Namekian Dragon Balls offer hope to revive the fallen heroes."; duration = "24m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "15"; title = "Demon Slayer"; description = "Tanjiro Kamado becomes a demon slayer after his family is slaughtered and his sister Nezuko is turned into a demon. Stunning animation and emotional depth make this modern series an instant classic."; category = "anime"; genre = "Action"; year = 2019; rating = 8.7; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=15";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Tanjiro begins his journey as a Demon Slayer to cure his sister."; episodes = [
          { episodeNumber = 1; title = "Cruelty"; description = "Tanjiro returns home to find his family slaughtered by a demon."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Trainer Sakonji Urokodaki"; description = "Tanjiro begins his arduous training to become a Demon Slayer."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Entertainment District Arc"; description = "Tanjiro joins the Sound Hashira on a mission in the Entertainment District."; episodes = [
          { episodeNumber = 1; title = "Sound Hashira Tengen Uzui"; description = "Tengen Uzui recruits Tanjiro's team for a mission in the red-light district."; duration = "45m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "16"; title = "My Hero Academia"; description = "In a world where most people have superpowers, a boy born without any enrolls in a high school for budding heroes. An uplifting underdog story that captures the spirit of classic superhero fiction."; category = "anime"; genre = "Action"; year = 2016; rating = 8.4; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=16";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Izuku Midoriya inherits the greatest Quirk and enrolls in U.A. High School."; episodes = [
          { episodeNumber = 1; title = "Izuku Midoriya: Origin"; description = "Quirkless Izuku meets All Might and is chosen to inherit his power."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "What It Takes to Be a Hero"; description = "Izuku trains for 10 months to receive One For All."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2: Sports Festival"; description = "The U.A. Sports Festival puts young heroes to the ultimate test."; episodes = [
          { episodeNumber = 1; title = "That's the Idea, Ochaco"; description = "The second term begins as Class 1-A prepares for the Sports Festival."; duration = "24m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "17"; title = "Death Note"; description = "A high school student discovers a supernatural notebook that allows him to kill anyone whose name he writes in it. A tense psychological cat-and-mouse thriller between the world's two greatest minds."; category = "anime"; genre = "Thriller"; year = 2006; rating = 9.0; duration = "23m"; posterUrl = "https://picsum.photos/300/450?random=17";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1: L Arc"; description = "Light Yagami uses the Death Note while the mysterious detective L closes in."; episodes = [
          { episodeNumber = 1; title = "Rebirth"; description = "Light Yagami discovers the Death Note dropped by the Shinigami Ryuk."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Confrontation"; description = "The detective L makes his first move against Kira."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 3; title = "Dealings"; description = "Light acquires the eyes of the Shinigami through a dangerous deal."; duration = "23m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2: Near & Mello Arc"; description = "New detectives Near and Mello take up the hunt for Kira."; episodes = [
          { episodeNumber = 1; title = "Silence"; description = "The investigation continues with new successors to L."; duration = "23m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "18"; title = "Fullmetal Alchemist"; description = "Two brothers use alchemy in a quest to restore their bodies after a disastrous failed attempt to revive their deceased mother. A richly plotted adventure exploring the costs of power and the value of human life."; category = "anime"; genre = "Adventure"; year = 2003; rating = 9.1; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=18";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Ed and Al search for the Philosopher's Stone to restore their bodies."; episodes = [
          { episodeNumber = 1; title = "Those Who Challenge the Sun"; description = "The Elric brothers attempt human transmutation and pay a terrible price."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Body of the Sanctioned"; description = "Ed and Al visit a town where a fraud alchemist poses as a healer."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "The truth behind the Philosopher's Stone is uncovered."; episodes = [
          { episodeNumber = 1; title = "The Philosopher's Stone"; description = "Edward learns the horrifying secret ingredient of the Philosopher's Stone."; duration = "24m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "19"; title = "Hunter x Hunter"; description = "Gon Freecss aspires to become a Hunter like his absent father, setting out on a journey that draws him into a world of darkness and moral ambiguity. A masterpiece of long-form storytelling and character development."; category = "anime"; genre = "Adventure"; year = 2011; rating = 9.1; duration = "23m"; posterUrl = "https://picsum.photos/300/450?random=19";
      seasons = ?[
        { seasonNumber = 1; title = "Hunter Exam Arc"; description = "Gon takes the dangerous Hunter Examination to find his father."; episodes = [
          { episodeNumber = 1; title = "Departure x And x Friends"; description = "Gon leaves his island home to take the Hunter Exam."; duration = "23m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Test x Of x Tests"; description = "The first phase of the Hunter Exam begins in treacherous waters."; duration = "23m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Chimera Ant Arc"; description = "Gon and his friends face the terrifying Chimera Ants."; episodes = [
          { episodeNumber = 1; title = "Ants x And x Humans"; description = "A new threat emerges as Chimera Ants begin to appear."; duration = "23m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "20"; title = "Sword Art Online"; description = "Players in a virtual reality MMORPG discover they cannot log out and that dying in the game means dying in real life. A pioneering isekai series that explored virtual worlds and human connection with great emotional resonance."; category = "anime"; genre = "Sci-Fi"; year = 2012; rating = 7.7; duration = "24m"; posterUrl = "https://picsum.photos/300/450?random=20";
      seasons = ?[
        { seasonNumber = 1; title = "Aincrad Arc"; description = "Kirito and Asuna fight to survive inside the death game of Aincrad."; episodes = [
          { episodeNumber = 1; title = "The World of Swords"; description = "10,000 players are trapped inside Sword Art Online on launch day."; duration = "24m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Beater"; description = "Kirito earns the title of Beater to protect other former beta testers."; duration = "24m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Fairy Dance Arc"; description = "Kirito dives into ALfheim Online to rescue Asuna."; episodes = [
          { episodeNumber = 1; title = "Return"; description = "Kirito discovers Asuna is trapped inside a new game."; duration = "24m"; videoUrl = null; parts = null },
        ]},
      ]
    },

    // Dramas (10) — with seasons/episodes
    {
      id = "21"; title = "Breaking Bad"; description = "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine to secure his family's future. A Greek tragedy of self-destruction and moral collapse, widely considered television's finest achievement."; category = "drama"; genre = "Crime"; year = 2008; rating = 9.5; duration = "47m"; posterUrl = "https://picsum.photos/300/450?random=21";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Walter White's transformation from teacher to drug manufacturer begins."; episodes = [
          { episodeNumber = 1; title = "Pilot"; description = "Diagnosed with cancer, Walter White teams up with former student Jesse Pinkman to cook meth."; duration = "47m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Cat's in the Bag"; description = "Walt and Jesse must dispose of evidence from their first cook."; duration = "47m"; videoUrl = null; parts = null },
          { episodeNumber = 3; title = "...And the Bag's in the River"; description = "Walt faces a fatal decision about a captive who knows too much."; duration = "47m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Walt's drug empire grows while his double life strains his family."; episodes = [
          { episodeNumber = 1; title = "Seven Thirty-Seven"; description = "Walt and Jesse face terrifying cartel enforcers."; duration = "47m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 3; title = "Season 3"; description = "The Salamanca twins arrive for revenge as Walt joins Gus Fring's operation."; episodes = [
          { episodeNumber = 1; title = "No Mas"; description = "The aftermath of the plane crash changes everything for Walt."; duration = "47m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "22"; title = "Game of Thrones"; description = "Nine noble families fight for control of the mythical land of Westeros while an ancient enemy returns after being dormant for thousands of years. An epic fantasy saga with shocking twists and a vast ensemble cast."; category = "drama"; genre = "Fantasy"; year = 2011; rating = 9.2; duration = "57m"; posterUrl = "https://picsum.photos/300/450?random=22";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "House Stark is drawn into the dangerous politics of King's Landing."; episodes = [
          { episodeNumber = 1; title = "Winter Is Coming"; description = "Eddard Stark is asked to serve as the King's Hand."; duration = "57m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "The Kingsroad"; description = "The royal party travels south as Jon Snow heads to the Wall."; duration = "57m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Five kings wage war across Westeros after Ned Stark's execution."; episodes = [
          { episodeNumber = 1; title = "The North Remembers"; description = "The War of the Five Kings begins across the Seven Kingdoms."; duration = "57m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 8; title = "Season 8: The Final Season"; description = "The Long Night arrives and the Iron Throne's fate is decided."; episodes = [
          { episodeNumber = 3; title = "The Long Night"; description = "The Battle of Winterfell — the living face the Army of the Dead."; duration = "82m"; videoUrl = null;
            parts = ?[
              { partNumber = 1; title = "Before the Storm"; videoUrl = null; duration = "30m" },
              { partNumber = 2; title = "The Battle"; videoUrl = null; duration = "52m" },
            ]
          },
        ]},
      ]
    },
    {
      id = "23"; title = "The Crown"; description = "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century. A lavish, meticulously crafted portrait of power, duty, and the royal family."; category = "drama"; genre = "Historical"; year = 2016; rating = 8.6; duration = "58m"; posterUrl = "https://picsum.photos/300/450?random=23";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "A young Queen Elizabeth II navigates the early years of her reign."; episodes = [
          { episodeNumber = 1; title = "Wolferton Splash"; description = "King George VI's health deteriorates as Elizabeth prepares to take the throne."; duration = "58m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Hyde Park Corner"; description = "Elizabeth unexpectedly becomes Queen during a royal tour."; duration = "58m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "The Queen faces personal and political crises through the 1960s."; episodes = [
          { episodeNumber = 1; title = "Misadventure"; description = "The Profumo Affair threatens the British establishment."; duration = "58m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "24"; title = "Peaky Blinders"; description = "A gangster family epic set in 1919 Birmingham, England, centering on the Shelby crime family. A stylish, atmospheric period crime drama elevated by an iconic lead performance and an unforgettable soundtrack."; category = "drama"; genre = "Crime"; year = 2013; rating = 8.8; duration = "60m"; posterUrl = "https://picsum.photos/300/450?random=24";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Tommy Shelby expands the Peaky Blinders' criminal empire in post-war Birmingham."; episodes = [
          { episodeNumber = 1; title = "Episode 1"; description = "Tommy Shelby runs his criminal gang in the Peaky Blinders' territory of Birmingham."; duration = "60m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Episode 2"; description = "Inspector Campbell arrives from Belfast to recover stolen weapons."; duration = "60m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Tommy expands into London, drawing powerful enemies."; episodes = [
          { episodeNumber = 1; title = "Episode 1"; description = "Two years later, the Peaky Blinders have expanded their operations."; duration = "60m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "25"; title = "Squid Game"; description = "Hundreds of cash-strapped players accept a strange invitation to compete in children's games, with a deadly prize at stake. A riveting South Korean thriller that became a global sensation overnight."; category = "drama"; genre = "Thriller"; year = 2021; rating = 8.0; duration = "54m"; posterUrl = "https://picsum.photos/300/450?random=25";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "456 desperate players compete in childhood games for 45.6 billion won — or death."; episodes = [
          { episodeNumber = 1; title = "Red Light, Green Light"; description = "Seong Gi-hun joins a mysterious competition and discovers the deadly stakes."; duration = "60m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Hell"; description = "Survivors are given the chance to leave but return for the next game."; duration = "54m"; videoUrl = null; parts = null },
          { episodeNumber = 3; title = "The Man with the Umbrella"; description = "Players must use a ddakji to extract their shape from a honeycomb."; duration = "54m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Gi-hun returns to confront the games from the inside."; episodes = [
          { episodeNumber = 1; title = "What Is Your Dream?"; description = "Three years later, Gi-hun infiltrates the games to destroy them."; duration = "60m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "26"; title = "Money Heist"; description = "A criminal mastermind orchestrates the biggest heist in history by assembling a band of thieves who take over the Royal Mint of Spain. A slick, politically charged Spanish thriller that swept the world with its audacious style."; category = "drama"; genre = "Crime"; year = 2017; rating = 8.2; duration = "50m"; posterUrl = "https://picsum.photos/300/450?random=26";
      seasons = ?[
        { seasonNumber = 1; title = "Part 1"; description = "The Professor's gang takes over the Royal Mint of Spain."; episodes = [
          { episodeNumber = 1; title = "Episode 1"; description = "The Professor recruits a team and sets the grand heist in motion."; duration = "50m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Episode 2"; description = "The gang locks down the Mint with 67 hostages inside."; duration = "50m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Part 2"; description = "The heist reaches its climax as the Professor's plan unravels."; episodes = [
          { episodeNumber = 1; title = "Episode 1"; description = "The gang fights to maintain control inside the Mint."; duration = "50m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 3; title = "Part 3: Bank of Spain"; description = "A new, bigger heist targeting the Bank of Spain begins."; episodes = [
          { episodeNumber = 1; title = "Episode 1"; description = "Berlin's past is revealed as the Professor plans his next heist."; duration = "50m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "27"; title = "Stranger Things"; description = "When a young boy disappears, his mother, friends, and the local police chief investigate supernatural forces in order to get him back. A nostalgic love letter to 1980s genre fiction brimming with heart and horror."; category = "drama"; genre = "Sci-Fi"; year = 2016; rating = 8.7; duration = "51m"; posterUrl = "https://picsum.photos/300/450?random=27";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Will Byers disappears and a mysterious girl with powers appears in Hawkins."; episodes = [
          { episodeNumber = 1; title = "The Vanishing of Will Byers"; description = "Will Byers goes missing, and a strange girl named Eleven appears in town."; duration = "47m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "The Weirdo on Maple Street"; description = "The boys hide Eleven while Will's mother receives strange calls."; duration = "47m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 4; title = "Season 4: Vecna's Curse"; description = "A new supernatural evil targets the teens of Hawkins."; episodes = [
          { episodeNumber = 1; title = "The Hellfire Club"; description = "A string of mysterious murders terrorizes Hawkins as Eleven adjusts to a new life."; duration = "76m"; videoUrl = null;
            parts = ?[
              { partNumber = 1; title = "Volume 1"; videoUrl = null; duration = "76m" },
              { partNumber = 2; title = "Volume 2"; videoUrl = null; duration = "150m" },
            ]
          },
        ]},
      ]
    },
    {
      id = "28"; title = "Dark"; description = "A family saga with a supernatural twist set in a German town where the disappearance of two young children exposes the relationships among four interconnected families. A labyrinthine time-travel mystery of extraordinary ambition."; category = "drama"; genre = "Mystery"; year = 2017; rating = 8.7; duration = "60m"; posterUrl = "https://picsum.photos/300/450?random=28";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Children go missing in Winden, exposing a time-travel conspiracy spanning generations."; episodes = [
          { episodeNumber = 1; title = "Secrets"; description = "A cave system is uncovered as children begin to disappear in Winden."; duration = "60m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Lies"; description = "Jonas discovers a connection between past and present through the cave."; duration = "60m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "The time knot grows larger as the apocalypse approaches."; episodes = [
          { episodeNumber = 1; title = "Beginnings and Endings"; description = "1953, 1986, and 2019 collide as the cycle continues."; duration = "60m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 3; title = "Season 3: The Knot"; description = "A parallel world is revealed, and the true origin of the time knot is uncovered."; episodes = [
          { episodeNumber = 1; title = "Deja-vu"; description = "Eva's world is revealed as a mirror to Jonas's timeline."; duration = "60m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "29"; title = "The Witcher"; description = "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts. A sweeping fantasy epic rich in moral complexity and worldbuilding."; category = "drama"; genre = "Fantasy"; year = 2019; rating = 8.1; duration = "60m"; posterUrl = "https://picsum.photos/300/450?random=29";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Geralt's destiny becomes intertwined with a young princess called Ciri."; episodes = [
          { episodeNumber = 1; title = "The End's Beginning"; description = "Geralt hunts monsters across the Continent while a kingdom falls."; duration = "60m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Four Marks"; description = "Yennefer's origin story begins as she finds her magical potential."; duration = "60m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Geralt protects Ciri at the witcher fortress of Kaer Morhen."; episodes = [
          { episodeNumber = 1; title = "A Grain of Truth"; description = "Geralt and Ciri seek shelter with a cursed man named Nivellen."; duration = "60m"; videoUrl = null; parts = null },
        ]},
      ]
    },
    {
      id = "30"; title = "House of Cards"; description = "A Congressman works with his ruthless wife to exact revenge on the people who betrayed him, climbing all the way to the top of the political ladder. A cold, calculated political thriller built around one of television's most compelling antiheroes."; category = "drama"; genre = "Political"; year = 2013; rating = 8.7; duration = "51m"; posterUrl = "https://picsum.photos/300/450?random=30";
      seasons = ?[
        { seasonNumber = 1; title = "Season 1"; description = "Frank Underwood begins his calculated climb to the highest office."; episodes = [
          { episodeNumber = 1; title = "Chapter 1"; description = "Frank Underwood is passed over for Secretary of State and plots revenge."; duration = "51m"; videoUrl = null; parts = null },
          { episodeNumber = 2; title = "Chapter 2"; description = "Frank manipulates a labor dispute to further his political agenda."; duration = "51m"; videoUrl = null; parts = null },
        ]},
        { seasonNumber = 2; title = "Season 2"; description = "Frank becomes Vice President and sets his sights on the Presidency."; episodes = [
          { episodeNumber = 1; title = "Chapter 14"; description = "Frank becomes Vice President as he eliminates a dangerous threat."; duration = "51m"; videoUrl = null; parts = null },
        ]},
      ]
    },

    // Music (10) — no seasons
    { id = "31"; title = "Blinding Lights";          description = "The Weeknd's synth-pop anthem topped charts globally and became one of the best-charting singles in Billboard history. Its pulsing 80s-inspired production and soaring chorus make it an undeniable modern classic."; category = "music";  genre = "Pop";       year = 2020; rating = 9.0; duration = "3m 20s"; posterUrl = "https://picsum.photos/300/450?random=31"; seasons = null },
    { id = "32"; title = "Shape of You";             description = "Ed Sheeran's catchy tropical pop hit blends R&B grooves with folksy storytelling to irresistible effect. It became one of the best-selling digital singles of all time with over a billion streams in its first weeks."; category = "music";  genre = "Pop";       year = 2017; rating = 8.5; duration = "3m 54s"; posterUrl = "https://picsum.photos/300/450?random=32"; seasons = null },
    { id = "33"; title = "Bohemian Rhapsody";        description = "Queen's six-minute operatic rock epic defied every convention and became one of the greatest songs ever recorded. Its shifting movements and Freddie Mercury's towering vocal performance remain unmatched in rock history."; category = "music";  genre = "Rock";      year = 1975; rating = 9.8; duration = "5m 54s"; posterUrl = "https://picsum.photos/300/450?random=33"; seasons = null },
    { id = "34"; title = "Uptown Funk";              description = "Mark Ronson and Bruno Mars crafted a horn-driven funk throwback that dominated global charts for months and reinvigorated classic soul music for a new generation. Possibly the most joyful song of the 2010s."; category = "music";  genre = "Funk";      year = 2014; rating = 8.8; duration = "4m 30s"; posterUrl = "https://picsum.photos/300/450?random=34"; seasons = null },
    { id = "35"; title = "Someone Like You";         description = "Adele's heartbreaking piano ballad about lost love showcased her extraordinary voice and became an anthem of heartbreak worldwide. Its raw emotional honesty resonated with millions and cemented her superstar status."; category = "music";  genre = "Soul";      year = 2011; rating = 9.1; duration = "4m 45s"; posterUrl = "https://picsum.photos/300/450?random=35"; seasons = null },
    { id = "36"; title = "Rolling in the Deep";      description = "Adele's fiery breakup anthem fuses blues, soul, and pop with a gospel choir and a thunderous rhythm section. It became one of the best-selling singles of the 21st century and established Adele as a global phenomenon."; category = "music";  genre = "Soul";      year = 2010; rating = 9.2; duration = "3m 48s"; posterUrl = "https://picsum.photos/300/450?random=36"; seasons = null },
    { id = "37"; title = "Smells Like Teen Spirit";  description = "Nirvana's grunge manifesto exploded into pop culture in 1991 and became the defining song of a generation's disillusionment. Its quiet-loud dynamics and Kurt Cobain's raw anguish forever changed the direction of rock music."; category = "music";  genre = "Rock";      year = 1991; rating = 9.5; duration = "5m 1s";  posterUrl = "https://picsum.photos/300/450?random=37"; seasons = null },
    { id = "38"; title = "Lose Yourself";            description = "Eminem's Oscar-winning motivational rap epic from the 8 Mile soundtrack captured the urgency of chasing a dream in one visceral, breathless performance. It remains one of the greatest hip-hop tracks ever recorded."; category = "music";  genre = "Hip-Hop";   year = 2002; rating = 9.3; duration = "5m 26s"; posterUrl = "https://picsum.photos/300/450?random=38"; seasons = null },
    { id = "39"; title = "Hotel California";         description = "The Eagles' haunting, six-and-a-half minute masterpiece weaves a surreal tale of excess and spiritual emptiness against a lush, laid-back rock backdrop. Its iconic guitar outro remains one of the most celebrated in all of music."; category = "music";  genre = "Rock";      year = 1977; rating = 9.6; duration = "6m 30s"; posterUrl = "https://picsum.photos/300/450?random=39"; seasons = null },
    { id = "40"; title = "Stairway to Heaven";       description = "Led Zeppelin's eight-minute prog-rock odyssey builds from a delicate acoustic intro to a thunderous electric climax, exploring themes of materialism and spiritual longing. Consistently voted one of the greatest rock songs ever written."; category = "music";  genre = "Rock";      year = 1971; rating = 9.7; duration = "8m 2s";  posterUrl = "https://picsum.photos/300/450?random=40"; seasons = null },
  ];

  public func seedSamples(items : List.List<ContentItem>) {
    if (not items.isEmpty()) { return };
    for (item in seedData.values()) {
      items.add(item);
    };
  };

  public func getAll(items : List.List<ContentItem>) : [ContentItem] {
    items.toArray();
  };

  public func getById(items : List.List<ContentItem>, id : ContentId) : ?ContentItem {
    items.find(func(item) { item.id == id });
  };

  public func getByCategory(items : List.List<ContentItem>, category : Types.Category) : [ContentItem] {
    items.filter(func(item) { item.category == category }).toArray();
  };

  public func search(items : List.List<ContentItem>, term : Text) : [ContentItem] {
    let lower = term.toLower();
    items.filter(func(item) {
      item.title.toLower().contains(#text lower) or
      item.description.toLower().contains(#text lower) or
      item.genre.toLower().contains(#text lower)
    }).toArray();
  };

  public func addContent(items : List.List<ContentItem>, nextId : Nat, input : ContentInput) : Nat {
    let newId = nextId + 1;
    let item : ContentItem = {
      id = newId.toText();
      title = input.title;
      description = input.description;
      category = input.category;
      genre = input.genre;
      year = input.year;
      rating = input.rating;
      duration = input.duration;
      posterUrl = input.posterUrl;
      seasons = input.seasons;
    };
    items.add(item);
    newId;
  };

  public func updateContent(items : List.List<ContentItem>, id : ContentId, input : ContentInput) : Bool {
    let idx = items.findIndex(func(item) { item.id == id });
    switch (idx) {
      case null { false };
      case (?i) {
        items.put(i, {
          id = id;
          title = input.title;
          description = input.description;
          category = input.category;
          genre = input.genre;
          year = input.year;
          rating = input.rating;
          duration = input.duration;
          posterUrl = input.posterUrl;
          seasons = input.seasons;
        });
        true;
      };
    };
  };

  public func deleteContent(items : List.List<ContentItem>, id : ContentId) : Bool {
    let idx = items.findIndex(func(item) { item.id == id });
    switch (idx) {
      case null { false };
      case (?i) {
        let size = items.size();
        if (size > 0) {
          let last : Nat = size - 1 : Nat;
          if (i < last) {
            let lastItem = items.at(last);
            items.put(i, lastItem);
          };
          ignore items.removeLast();
        };
        true;
      };
    };
  };
};
