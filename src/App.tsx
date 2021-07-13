import { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import firebase from "firebase";
import { auth, handleUserProfile } from "./firebase/utils";
//Global Style Css
import { GlobalStyle } from "./App.style";
// Pages
import Homepage from "./pages/Homepage/Homepage";
import Registration from "./pages/Registration/Registration";
import Login from "./pages/Login/Login";
import Recovery from "./pages/Recovery/Recovery";
import Dashboard from "./pages/Dashboard/Dashboard";
//Layout
import MainLayout from "./layouts/MainLayout";
import HomePageLayout from "./layouts/HomePageLayout";
//store
import { useActions } from "./hooks/useAction";
import { setCurrentUserAction } from "./redux/User/user.actions";
//hoc
import WithAuth from "./hoc/withAuth";

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const { setCurrentUserAction } = useActions();

  useEffect(() => {
    const authListener = auth.onAuthStateChanged(async (userAuth: any) => {
      if (userAuth) {
        const userRef: any = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot: any) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        setCurrentUser(null);
      }
    });
    return () => {
      authListener();
    };
  }, []);

  useEffect(() => {
    setCurrentUserAction(currentUser);
  }, [currentUser, setCurrentUserAction]);

  return (
    <div className="App">
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
          path="/registration"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout>
                <Registration />
              </MainLayout>
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            currentUser ? (
              <Redirect to="/" />
            ) : (
              <MainLayout>
                <Login />
              </MainLayout>
            )
          }
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
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </WithAuth>
          )}
        />
      </Switch>
    </div>
  );
};

export default App;
