import {
  HomePage,
  AboutPage,
  BakesClubPage,
  BDayBookingPage,
  BirthdayCakesPage,
  CartPage,
  DrinksPage,
  FagsPage,
  GiftDecorPage,
  Collections,
  IndividualCakesPage,
  LoginPage,
  MacronsPage,
  PetGiftPage,
  RegisterPage,
} from "~/pages";
import { DefaultLayout } from "~/layouts";

const privateRoutes = [];
const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "/about", component: AboutPage, layout: DefaultLayout },
  { path: "/bakes-club", component: BakesClubPage, layout: DefaultLayout },
  { path: "/b-day-booking", component: BDayBookingPage, layout: DefaultLayout },
  {
    path: "/birthday-cakes",
    component: BirthdayCakesPage,
    layout: DefaultLayout,
  },
  { path: "/cart", component: CartPage, layout: DefaultLayout },
  {
    path: "/collections",
    component: Collections,
    layout: DefaultLayout,
  },
  { path: "/drinks", component: DrinksPage, layout: DefaultLayout },
  { path: "/fags", component: FagsPage, layout: DefaultLayout },
  { path: "/gift-decor", component: GiftDecorPage, layout: DefaultLayout },
  {
    path: "/individual-cakes",
    component: IndividualCakesPage,
    layout: DefaultLayout,
  },
  { path: "/login", component: LoginPage, layout: DefaultLayout },
  { path: "/macrons", component: MacronsPage, layout: DefaultLayout },
  { path: "/pet-gift", component: PetGiftPage, layout: DefaultLayout },
  { path: "/register", component: RegisterPage, layout: DefaultLayout },
];

export { privateRoutes, publicRoutes };
