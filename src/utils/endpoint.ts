export interface Game {
  id: string;
  genre: string;
  image: string;
  name: string;
  description: string;
  price: number;
  isNew: boolean;
}

// Mock games data
export const allGames: Game[] = [
  {
    id: "1",
    genre: "Action",
    image: "/game-images/cyberpunk2077.jpeg",
    name: "Cyberpunk 2077",
    description: "An open-world, action-adventure story set in Night City.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "2",
    genre: "RPG",
    image: "/game-images/thewitcher3.jpeg",
    name: "The Witcher 3: Wild Hunt",
    description:
      "A story-driven, next-generation open world role-playing game.",
    price: 39.99,
    isNew: false,
  },
  {
    id: "3",
    genre: "Adventure",
    image: "/game-images/zeldabotw.jpeg",
    name: "The Legend of Zelda: Breath of the Wild",
    description:
      "An epic adventure that breaks boundaries in the Zelda series.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "4",
    genre: "Action",
    image: "/game-images/gta5.jpeg",
    name: "Grand Theft Auto V",
    description:
      "An action-adventure game set in the sprawling city of Los Santos.",
    price: 29.99,
    isNew: false,
  },
  {
    id: "5",
    genre: "Shooter",
    image: "/game-images/doometernal.jpeg",
    name: "DOOM Eternal",
    description: "A fast-paced, thrilling shooter where you battle demons.",
    price: 59.99,
    isNew: false,
  },
  {
    id: "6",
    genre: "Simulation",
    image: "/game-images/thesims4.jpeg",
    name: "The Sims 4",
    description:
      "A life simulation game where you control the rich and entertaining moments of your Sims' lives.",
    price: 39.99,
    isNew: false,
  },
  {
    id: "7",
    genre: "Action",
    image: "/game-images/gofwar.jpeg",
    name: "Gear Of War",
    description:
      "Gears of War is an acclaimed third-person shooter video game focused on humanity's battle against the terrifying Locust Horde",
    price: 59.99,
    isNew: true,
  },
  {
    id: "8",
    genre: "Racing",
    image: "/game-images/forzahorizon4.jpeg",
    name: "Forza Horizon 4",
    description:
      "An open world racing game set in a fictional representation of the United Kingdom.",
    price: 49.99,
    isNew: false,
  },
  {
    id: "9",
    genre: "Sports",
    image: "/game-images/fifa21.jpeg",
    name: "FIFA 21",
    description:
      "The latest installment in the world-renowned football simulation series.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "10",
    genre: "MMORPG",
    image: "/game-images/worldofwarcraft.jpeg",
    name: "World of Warcraft",
    description:
      "A massively multiplayer online role-playing game set in the Warcraft universe.",
    price: 14.99,
    isNew: false,
  },
  {
    id: "11",
    genre: "Puzzle",
    image: "/game-images/portal2.jpeg",
    name: "Portal 2",
    description:
      "A puzzle-platform game that challenges you with mind-bending puzzles.",
    price: 19.99,
    isNew: false,
  },
  {
    id: "12",
    genre: "Horror",
    image: "/game-images/residentevil2.jpeg",
    name: "Resident Evil 2",
    description:
      "A survival horror game set in the aftermath of a deadly virus outbreak.",
    price: 59.99,
    isNew: false,
  },
  {
    id: "13",
    genre: "Indie",
    image: "/game-images/hollowknight.jpeg",
    name: "Hollow Knight",
    description:
      "An action-adventure game set in a beautifully hand-drawn mysterious world.",
    price: 14.99,
    isNew: true,
  },
  {
    id: "14",
    genre: "Action",
    image: "/game-images/sekiro.jpeg",
    name: "Sekiro: Shadows Die Twice",
    description:
      "A game where you seek revenge on your foes in late 1500s Sengoku Japan.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "15",
    genre: "Adventure",
    image: "/game-images/firewatch.jpeg",
    name: "Firewatch",
    description:
      "A single-player first-person mystery set in the Wyoming wilderness.",
    price: 19.99,
    isNew: false,
  },
  {
    id: "16",
    genre: "Action-Adventure",
    image: "/game-images/assassinscreedvalhalla.jpeg",
    name: "Assassin's Creed Valhalla",
    description:
      "Live as a legendary Viking warrior raised on tales of battle and glory.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "17",
    genre: "RPG",
    image: "/game-images/finalfantasyxv.jpeg",
    name: "Final Fantasy XV",
    description:
      "Embark on an epic journey with your friends to reclaim your homeland.",
    price: 39.99,
    isNew: false,
  },
  {
    id: "18",
    genre: "Shooter",
    image: "/game-images/callofdutywarzone.jpeg",
    name: "Call of Duty: Warzone",
    description:
      "A free-to-play battle royale game where you fight to be the last one standing.",
    price: 77.99,
    isNew: false,
  },
  {
    id: "19",
    genre: "Strategy",
    image: "/game-images/ageofempiresII.jpeg",
    name: "Age of Empires II: Definitive Edition",
    description:
      "A classic strategy game remastered in full HD with new features.",
    price: 19.99,
    isNew: false,
  },
  {
    id: "20",
    genre: "MOBA",
    image: "/game-images/leagueoflegends.jpeg",
    name: "League of Legends",
    description:
      "A fast-paced, competitive online game that blends the speed and intensity of an RTS with RPG elements.",
    price: 90.0,
    isNew: true,
  },
  {
    id: "21",
    genre: "Indie",
    image: "/game-images/celeste.jpeg",
    name: "Celeste",
    description:
      "Help Madeline survive her inner demons on her journey to the top of Celeste Mountain.",
    price: 19.99,
    isNew: false,
  },
  {
    id: "22",
    genre: "Puzzle",
    image: "/game-images/tetris99.jpeg",
    name: "Tetris 99",
    description:
      "The iconic puzzle game Tetris with a 99-player battle royale twist.",
    price: 85.99,
    isNew: true,
  },
  {
    id: "23",
    genre: "Battle Royale",
    image: "/game-images/freefire.jpeg",
    name: "Free Fire",
    description:
      "A fast-paced battle royale game where players fight to be the last one standing.",
    price: 60.99,
    isNew: false,
  },
  {
    id: "24",
    genre: "Action",
    image: "/game-images/godofwar.jpeg",
    name: "God of War",
    description:
      "Kratos steps into the world of Norse gods in this critically acclaimed action game.",
    price: 49.99,
    isNew: false,
  },
  {
    id: "25",
    genre: "Adventure",
    image: "/game-images/reddeadredemption2.jpeg",
    name: "Red Dead Redemption 2",
    description:
      "An epic tale of life in America at the dawn of the modern age.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "26",
    genre: "Horror",
    image: "/game-images/thelastofuspart2.jpeg",
    name: "The Last of Us Part II",
    description: "A complex, emotional story in a brutal post-pandemic world.",
    price: 59.99,
    isNew: false,
  },
  {
    id: "27",
    genre: "Racing",
    image: "/game-images/mariokar8.jpeg",
    name: "Mario Kart 8 Deluxe",
    description:
      "The ultimate version of Mario Kart 8 with more racers, tracks, and features.",
    price: 59.99,
    isNew: true,
  },
  {
    id: "28",
    genre: "Sports",
    image: "/game-images/nba2k21.jpeg",
    name: "NBA 2K21",
    description: "Experience the next generation of basketball simulation.",
    price: 59.99,
    isNew: false,
  },
  {
    id: "29",
    genre: "MMORPG",
    image: "/game-images/guildwars2.jpeg",
    name: "Guild Wars 2",
    description:
      "A living, breathing online world where adventure awaits around every corner.",
    price: 70.0,
    isNew: true,
  },
  {
    id: "30",
    genre: "Indie",
    image: "/game-images/amongus.jpeg",
    name: "Among Us",
    description:
      "An online multiplayer social deduction game set in a space-themed setting.",
    price: 45.0,
    isNew: false,
  },
];

export const availableFilters = Array.from(
  new Set(allGames.map((game) => game.genre))
);

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
