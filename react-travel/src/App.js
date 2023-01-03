import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import CategoryPage from "./pages/CategoryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";
import CheckoutPage from "./pages/CheckoutPage";
import NewsPage from "./pages/NewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import CheckoutDonePage from "./pages/CheckoutDonePage";
import OrderManagement from './pages/OrderManagement';
import UpdateOrder from './pages/UpdateOrder';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/trang-chu" element={<HomePage></HomePage>}></Route>
        <Route
          path="/category/:slug"
          element={<CategoryPage></CategoryPage>}
        ></Route>
        <Route
          path="/product/:slug"
          element={<ProductPage></ProductPage>}
        ></Route>
        <Route
          path="/checkout/:tour_code"
          element={<CheckoutPage></CheckoutPage>}
        ></Route>
        <Route path="/tin-tuc" element={<NewsPage></NewsPage>}></Route>
        <Route
          path="/tin-tuc/:slug"
          element={<NewsDetailPage></NewsDetailPage>}
        ></Route>
        <Route
          path="/checkout-done"
          element={<CheckoutDonePage></CheckoutDonePage>}
        ></Route>
        <Route path="/dang-nhap" element={<SignInPage></SignInPage>}></Route>
        <Route path="/dang-ky" element={<SignUpPage></SignUpPage>}></Route>
        <Route path="/order-management" element={<OrderManagement></OrderManagement>}></Route>
        <Route path="/update-order/:id" element={<UpdateOrder></UpdateOrder>}></Route>
        <Route path="*" element={<NotFoundPage></NotFoundPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
