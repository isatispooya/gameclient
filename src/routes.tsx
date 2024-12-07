import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App.tsx"));
const SignupPage = lazy(() => import("./mudole/auth/pages/singup.page.tsx"));
const MissionsPage = lazy(
  () => import("./mudole/missions/pages/missions.page.tsx")
);
const PuzzlePage = lazy(() => import("./mudole/puzzle/pages/puzzle.page.tsx"));
const SejamPage = lazy(() => import("./mudole/sejam/pages/sejam.page.tsx"));
const RankingPage = lazy(
  () => import("./mudole/ranking/pages/ranking.page.tsx")
);

const FourChoiceQuestionsPage = lazy(
  () => import("./mudole/4_choice_questions/page/4_choice_questions.page.tsx")
);
const FourOptionsPage = lazy(
  () => import("./mudole/4_options/pages/4_options.tsx")
);
const AwardsPage = lazy(() => import("./mudole/awards/pages/awards.page.tsx"));
const Autotyping = lazy(
  () => import("./mudole/autotyping/pages/autotyping.tsx")
);
const LivePage = lazy(() => import("./mudole/livestream/pages/live.page.tsx"));
const QaPage = lazy(() => import("./mudole/Q&A/pages/qa.page.tsx"));
const MapPage = lazy(() => import("./mudole/map/pages/tuor.page.tsx"));
const TourPage = lazy(() => import("./mudole/tour/pages/tour.psge.tsx"));
const Question2Page = lazy(
  () => import("./mudole/question2/page/question2.page.tsx")
);

const BrokerPage = lazy(() => import("./mudole/brokers/pages/broker.page.tsx"));
const RecaptchaPage = lazy(
  () => import("./mudole/reCaptcha/page/recaptcha.page.tsx")
);
const CoffeePage = lazy(() => import("./mudole/coffee/pages/coffee.page.tsx"));
const UploadPicPage = lazy(
  () => import("./mudole/uploadpic/pages/uploadpic.page.tsx")
);
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <SignupPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "/map",
        element: <MapPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "tour",
        element: <TourPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },

      {
        path: "missions",
        element: <MissionsPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "puzzle",
        element: <PuzzlePage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "sejam",
        element: <SejamPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "ranking",
        element: <RankingPage />,
        // errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "4_choice_questions",
        element: <FourChoiceQuestionsPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "4_option",
        element: <FourOptionsPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "question2",
        element: <Question2Page />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "awards",
        element: <AwardsPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "autotyping",
        element: <Autotyping />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "live",
        element: <LivePage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "qa",
        element: <QaPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "broker",
        element: <BrokerPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "recaptcha",
        element: <RecaptchaPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "coffee",
        element: <CoffeePage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
      {
        path: "uploadpic",
        element: <UploadPicPage />,
        errorElement: <div>صفحه مورد نظر یافت نشد!</div>,
      },
    ],
  },
]);
