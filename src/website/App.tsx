/**
 * eslint-disable react/jsx-no-comment-textnodes
 *
 * @format
 */

/** @format */

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/home/Home";
import Login from "../auth/Login/Login";
import Register from "../auth/Register/Register";
import Registration from "./pages/KoachRegration/KoachRegistrationSports";
import AdminRoutes from "../admin/routes/AdminRoutes";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import GameChooseSports from "./pages/GamesChoose/GameChoose.Sports";
import OutdoorGamesSection from "./pages/GamesChoose/OutdoorGamesSports/OutdoorGames.sports";
import { IndoorGamesSection } from "./pages/GamesChoose/IndoorGames/IndoorGames.sports";
import { TableTennisPage } from "./pages/GamesChoose/IndoorGames/TableTennisIndooeGame/TableTennisIndooeGame.sports";
import { ChessPage } from "./pages/GamesChoose/IndoorGames/ChessIndoorGame/ChessIndoorGame.sports";
import { BadmintonPage } from "./pages/GamesChoose/IndoorGames/BadmintonIndoorGame/BadmintonIndoorGame.sports";
import { CarromPage } from "./pages/GamesChoose/IndoorGames/CarromIndoorGame/CarromIndoorGame.sports";
import { WrestlingPage } from "./pages/GamesChoose/IndoorGames/WrestlingGame/wrestlingGames.sports";
import { CricketGame } from "./pages/GamesChoose/OutdoorGamesSports/CricketGame/CricketGame.sports";
import { FootballGame } from "./pages/GamesChoose/OutdoorGamesSports/FootballGame/FootballOutdoor.Sports";
import { BasketballGame } from "./pages/GamesChoose/OutdoorGamesSports/BasketballGame/BasketballOutdoor.sports";
import { KabaddiGame } from "./pages/GamesChoose/OutdoorGamesSports/KabaddiGame/KaabaddiOutdoor.sports";
import { VolleyballGame } from "./pages/GamesChoose/OutdoorGamesSports/VolleyballGame/VolleyballOutdoor.sports";
import { AthleticsGame } from "./pages/GamesChoose/OutdoorGamesSports/AthleticsGame/AthleticsOutdoor.sports";
import { TermsAndConditions } from "./components/Header/Terms & Conditon/Terms&Conditon.sports";
import { SportsLocation } from "./components/Header/Location/Location.sports";
import { ContactUs } from "./components/Header/ContactUs/ContactUs.sports";
import { AboutUs } from "./components/Header/AboutUs/AboutUs.sports";
import GameChooseForRegistratiionSports from "./pages/selectGameForRegistration/selectGameForRegistration.sports";
import FillGameDetails from "./pages/FillGameDetails/FillGameDetails.sports";
import PlayerRegistration from "./pages/PlayerRegistration/PlayerRegistration.sports";
import FeesPayment from "./pages/ProcessPaymentMethod/ProcessPaymentMethod.sports";
import RegistrationComplete from "./pages/RegistrationComplete/RegistrationComplete.sports";
import ShippingAndDelivery from "./components/Footer/ShippingAndDelivery/ShippingAndDelivery.Footer.sports";
import PrivacyPolicy from "./components/Footer/Privacy and Policy/PrivacyPolicy.Footer.sports";
import CancellationAndRefund from "./components/Footer/CancellationAndRefund/CancellationAndRefund.Footer.sports";
import { RegistrationProvider } from "./context/registration/RegistrationContext";
import Trofee from "./components/Header/Trofee/Trofee.sports";

const App = () => (
  <AuthProvider>
    <RegistrationProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
          {/* header routes here */}
          <Route
            path="/Header/TermsAndConditions"
            element={<TermsAndConditions />}
          />
          <Route path="/Header/Trofee" element={<Trofee />} />
          <Route
            path="/Header/SportsEventLocation"
            element={<SportsLocation />}
          />
          <Route path="/Header/SportsEventContactUs" element={<ContactUs />} />
          <Route path="/Header/SportsEventAboutUs" element={<AboutUs />} />
          {/* registration routes here */}
          <Route
            path="/registration/ChooseGame_registration"
            element={<GameChooseForRegistratiionSports />}
          />
          <Route
            path="/registration/ChooseSportsDetailsregistration"
            element={<FillGameDetails />}
          />
          <Route
            path="/registration/PlayerRegistrationDetails"
            element={<PlayerRegistration />}
          />
          <Route
            path="/registration/PlayerRegistrationFees"
            element={<FeesPayment />}
          />
          <Route
            path="/registration/RegistrationComplete"
            element={<RegistrationComplete />}
          />
          <Route path="/choose-game" element={<GameChooseSports />} />
          <Route
            path="/choose-Outdoor-game"
            element={<OutdoorGamesSection />}
          />
          <Route path="/indoor-games" element={<IndoorGamesSection />} />
          <Route
            path="/indoor-games/table-tennis"
            element={<TableTennisPage />}
          />
          <Route path="/indoor-games/chess" element={<ChessPage />} />
          <Route path="/indoor-games/Badminton" element={<BadmintonPage />} />
          <Route path="/indoor-games/Carrom" element={<CarromPage />} />
          <Route path="/indoor-games/wrestling" element={<WrestlingPage />} />
          <Route path="/outdoor-games" element={<OutdoorGamesSection />} />
          <Route path="/outdoor-games/Cricket" element={<CricketGame />} />
          <Route path="/outdoor-games/Football" element={<FootballGame />} />
          <Route
            path="/outdoor-games/Basketball"
            element={<BasketballGame />}
          />
          <Route
            path="/outdoor-games/Kabaddi-sports"
            element={<KabaddiGame />}
          />
          <Route
            path="/outdoor-games/VolleyBall-sports"
            element={<VolleyballGame />}
          />
          <Route
            path="/outdoor-games/Athletics-sports"
            element={<AthleticsGame />}
          />
          {/* Footer paths */}
          <Route
            path="/footer/TermsAndConditions"
            element={<TermsAndConditions />}
          />
          <Route
            path="/footer/SportsEventLocation"
            element={<SportsLocation />}
          />
          <Route path="/footer/SportsEventContactUs" element={<ContactUs />} />
          <Route
            path="/footer/shipping-delivery"
            element={<ShippingAndDelivery />}
          />
          <Route path="/footer/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route
            path="/footer/CancellationAndRefund"
            element={<CancellationAndRefund />}
          />
          <Route
            path="/outdoor-games/Athletics-sports"
            element={<AthleticsGame />}
          />
        </Routes>
        <Footer />
      </Router>
    </RegistrationProvider>
  </AuthProvider>
);

export default App;
