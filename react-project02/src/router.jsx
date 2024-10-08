import { createBrowserRouter } from "react-router-dom";
// pages
import App from "./App";
import Home from "./layouts/Home";
import Error from "./layouts/Error";
// games
import NumberGuessing from "./games/number-guessing/NumberGuessing";
import RockPaperScissor from "./games/rock-paper-scissor/RockPaperScissor";
import TicTacToe from "./games/tic-tac-toe/TicTacToe";
import MemoryGame from "./games/memory-game/MemoryGame";
import Hangman from "./games/hangman/Hangman";
import WordScramble from "./games/word-scramble/WordScramble";
// projects
import Accordion from "./components/accordion/Accordion";
import RandomColor from "./components/random-color/RandomColor";
import StarRating from "./components/star-rating/StarRating";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadmoreData from "./components/loadmore-data/LoadmoreData";
import TreeView from "./components/tree-view/TreeView";
import QRCodeGenerator from "./components/qr-code-generator/QRCodeGenerator";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import CustomTabs from "./components/custom-tabs/CustomTabs";
import CustomModal from "./components/custom-modal/CustomModal";
import GithubProfileFinder from "./components/github-profile-finder/GithubProfileFinder";
import SearchAutocomplete from "./components/search-autocomplete/SearchAutocomplete";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // games
      {
        path: "/number-guessing",
        element: <NumberGuessing />,
      },
      {
        path: "/rock-paper-scissor",
        element: <RockPaperScissor />,
      },
      {
        path: "/tic-tac-toe",
        element: <TicTacToe />,
      },
      {
        path: "/memory-game",
        element: <MemoryGame />,
      },
      {
        path: "/hangman",
        element: <Hangman />,
      },
      {
        path: "/word-scramble",
        element: <WordScramble />,
      },
      // projects
      {
        path: "/accordion",
        element: <Accordion />,
      },
      {
        path: "/random-color",
        element: <RandomColor />,
      },
      {
        path: "/star-rating",
        element: <StarRating totalStars={5} />,
      },
      {
        path: "/image-slider",
        element: (
          <ImageSlider
            url={"https://picsum.photos/v2/list"}
            page={1}
            limit={8}
          />
        ),
      },
      {
        path: "/loadmore-data",
        element: (
          <LoadmoreData url={"https://dummyjson.com/products?limit=20"} />
        ),
      },
      {
        path: "/tree-view",
        element: <TreeView />,
      },
      {
        path: "/qr-code-generator",
        element: <QRCodeGenerator />,
      },
      {
        path: "/light-dark-mode",
        element: <LightDarkMode />,
      },
      {
        path: "/scroll-indicator",
        element: (
          <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
        ),
      },
      {
        path: "/custom-tabs",
        element: <CustomTabs />,
      },
      {
        path: "/custom-modal",
        element: <CustomModal />,
      },
      {
        path: "/github-profile-finder",
        element: <GithubProfileFinder />,
      },
      {
        path: "/search-autocomplete",
        element: (
          <SearchAutocomplete url={"https://dummyjson.com/users?limit=50"} />
        ),
      },
    ],
  },
]);
