import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//Global Style Css
import { GlobalStyle } from './App.style';
//components
import AdminToolbar from './components/AdminToolbar/AdminToolbar';
// Pages
import Homepage from './pages/Homepage/Homepage';
import SearchPage from './pages/Search/Search';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Recovery from './pages/Recovery/Recovery';
import Dashboard from './pages/Dashboard/Dashboard';
import Admin from './pages/Admin/Admin';
import ProductsDetails from './pages/ProductsDetaiks/ProductsDetails';
import Cart from './pages/Cart/Cart';
import Payment from './pages/Payment/Payment';
import Order from './pages/Order/Order';
//Layout
import MainLayout from './layouts/MainLayout';
import HomePageLayout from './layouts/HomePageLayout';
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
//redux-saga
import { checkUserSession } from './redux/User/user.actions';
//hoc
import WithAuth from './hooks/withAuth';
import WithAdminAuth from './hooks/withAdminAuth';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <AdminToolbar />
      <GlobalStyle />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <HomePageLayout>
              <Homepage />
            </HomePageLayout>
          )}
        />
        <Route
          exact
          path="/search"
          render={() => (
            <MainLayout>
              <SearchPage />
            </MainLayout>
          )}
        />
        <Route
          path="/search/:filterType"
          render={() => (
            <MainLayout>
              <SearchPage />
            </MainLayout>
          )}
        />
        <Route
          path="/product/:productID"
          render={() => (
            <MainLayout>
              <ProductsDetails />
            </MainLayout>
          )}
        />
        <Route
          path="/cart"
          render={() => (
            <WithAuth>
              <MainLayout>
                <Cart />
              </MainLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/payment"
          render={() => (
            <MainLayout>
              <Payment />
            </MainLayout>
          )}
        />
        <Route
          path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )}
        />
        <Route
          path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )}
        />
        <Route
          path="/recovery"
          render={() => (
            <MainLayout>
              <Recovery />
            </MainLayout>
          )}
        />
        <Route
          path="/dashboard"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Dashboard />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/orders/:orderID"
          render={() => (
            <WithAuth>
              <DashboardLayout>
                <Order />
              </DashboardLayout>
            </WithAuth>
          )}
        />
        <Route
          path="/admin"
          render={() => (
            <WithAdminAuth>
              <AdminLayout>
                <Admin />
              </AdminLayout>
            </WithAdminAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
