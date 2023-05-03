import {
  HomePage,
  AboutPage,
  CartPage,
  FagsPage,
  Collections,
  LoginPage,
  RegisterPage,
  AccountPage,
  NotFoundPage,
  ProductTypePage,
  ProductDetailPage,
  CheckoutPage,
  PasswordResetPage,
  ResetPasswordPage,
} from "~/pages";
import { DefaultLayout, NoneLayout, NoHeaderLayout } from "~/layouts";

import AdminPage from "~/components/adminPage/adminPage.js";
import RenevuePage from "~/components/adminPage/RenevuePage/RenevuePage";
import ContentTable from "~/components/adminPage/ContentTable/ContentTable";
import BillDetail from "~/components/adminPage/ContentTable/BillDetail";
import ProductsPage from "~/components/adminPage/Products/Products";
import Staff from "~/components/adminPage/Users/Staff";
import Customers from "~/components/adminPage/Users/Customer";
import AddProduct from "~/components/adminPage/Products/AddProduct";
import EditProduct from "~/components/adminPage/Products/EditProduct";
import ProductTypes from "~/components/adminPage/Products/ProductTypes";
import AddType from "~/components/adminPage/Products/AddType";

import RequireAuth from "~/components/adminPage/RequireAuth";
const privateRoutes = [
  // {
  //   path: '/admin',
  //   component: RequireAuth(AdminPage),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/carts',
  //   component: RequireAuth(ContentTable),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/carts/order/:id',
  //   component: RequireAuth(BillDetail),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/customers',
  //   component: RequireAuth(Customers),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/staffs',
  //   component: RequireAuth(Staff),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/products',
  //   component: RequireAuth(ProductsPage),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/addproducts',
  //   component: RequireAuth(AddProduct),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/admin/editproduct/:id',
  //   component: RequireAuth(EditProduct),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/editproducts',
  //   component: RequireAuth(AdminPage),
  //   layout: NoneLayout,
  // },
  // {
  //   path: '/designwebsite',
  //   component: RequireAuth(EditProduct),
  //   layout: NoneLayout,
  // },
];
const publicRoutes = [
  { path: "/", component: HomePage, layout: DefaultLayout },
  { path: "*", component: NotFoundPage, layout: DefaultLayout },
  { path: "/about", component: AboutPage, layout: DefaultLayout },
  { path: "/account", component: AccountPage, layout: DefaultLayout },
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
  { path: "/checkout", component: CheckoutPage, layout: NoHeaderLayout },
  {
    path: "/account/forgot-password",
    component: PasswordResetPage,
    layout: DefaultLayout,
  },
  {
    path: "/response-password-reset/:token",
    component: ResetPasswordPage,
    layout: DefaultLayout,
  },

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
  {
    path: "/admin/productbytypes",
    component: ProductTypes,
    layout: NoneLayout,
  },
  { path: "/editproducts", component: AdminPage, layout: NoneLayout },
  { path: "/designwebsite", component: EditProduct, layout: NoneLayout },
  { path: "/admin/renevue", component: RenevuePage, layout: NoneLayout },
];

export { privateRoutes, publicRoutes };

