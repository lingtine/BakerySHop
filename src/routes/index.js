import {
  HomePage,
  AboutPage,
  BakesClubPage,
  BDayBookingPage,
  CartPage,
  FagsPage,
  Collections,
  LoginPage,
  RegisterPage,
  AccountPage,
  NotFoundPage,
  ProductTypePage,
  ProductDetailPage,
} from "~/pages";
import { DefaultLayout } from "~/layouts";

const privateRoutes = [];
const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "*", component: NotFoundPage, layout: DefaultLayout },
  { path: "/about", component: AboutPage, layout: DefaultLayout },
  { path: "/account", component: AccountPage, layout: DefaultLayout },
  { path: "/bakes-club", component: BakesClubPage, layout: DefaultLayout },
  { path: "/b-day-booking", component: BDayBookingPage, layout: DefaultLayout },
  { path: "/cart", component: CartPage, layout: DefaultLayout },
  {
    path: "/collections",
    component: Collections,
    layout: DefaultLayout,
  },
  { path: "/fags", component: FagsPage, layout: DefaultLayout },

  { path: "/login", component: LoginPage, layout: DefaultLayout },

  { path: "/register", component: RegisterPage, layout: DefaultLayout },
  {
    path: "/collections/:collectionId",
    component: ProductTypePage,
    layout: DefaultLayout,
  },
  {
    path: "/collections/:collectionId/:productId",
    component: ProductDetailPage,
    layout: DefaultLayout,
  },
];

export { privateRoutes, publicRoutes };
