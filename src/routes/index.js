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
import { DefaultLayout, NoneLayout } from "~/layouts";
import AdminPage from "~/components/adminPage/adminPage.js";
import RenevuePage from "~/components/adminPage/RenevuePage/RenevuePage";
import ContentTable from "~/components/adminPage/ContentTable/ContentTable";
import BillDetail from "~/components/adminPage/ContentTable/BillDetail";
import ProductsPage from "~/components/adminPage/Products/Products";
import Staff from "~/components/adminPage/Users/Staff";
import Customers from "~/components/adminPage/Users/Customer";
import AddProduct from "~/components/adminPage/Products/AddProduct";
import EditProduct from "~/components/adminPage/Products/EditProduct";

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
  { path: "/fags", component: FagsPage, layout: DefaultLayout },

  { path: "/login", component: LoginPage, layout: DefaultLayout },

  { path: "/register", component: RegisterPage, layout: DefaultLayout },
  { path: "/admin", component: AdminPage, layout: NoneLayout },
  { path: "/admin/carts", component: ContentTable, layout: NoneLayout },
  { path: "/admin/carts/order/:id", component: BillDetail, layout: NoneLayout },
  { path: "/admin/customers", component: Customers, layout: NoneLayout },
  { path: "/admin/staffs", component: Staff, layout: NoneLayout },
  { path: "/admin/products", component: ProductsPage, layout: NoneLayout },
  { path: "/admin/addproducts", component: AddProduct, layout: NoneLayout },
  {
    path: "/admin/editproduct/:id",
    component: EditProduct,
    layout: NoneLayout,
  },
  { path: "/editproducts", component: AdminPage, layout: NoneLayout },
  { path: "/designwebsite", component: EditProduct, layout: NoneLayout },
  { path: "/admin/renevue", component: RenevuePage, layout: NoneLayout },
];

export { privateRoutes, publicRoutes };
