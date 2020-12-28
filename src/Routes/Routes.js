import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LandingPage from "../Pages/LandingPage/LandingPage";
// import { NonRegisteredMemberContextProvider } from "../Context/NonRegisteredMemberContext";
// import SigninRegistrationPage from "../Pages/RegistrationPages/SigninRegistration";
// import SignupRegistrationPage from "../Pages/RegistrationPages/RegistrationPages";
// import UnProtectedRoutes from "./UnprotectedRoutes";
//       // import ProtectedRoutes from "./ProtectRouted";
// import NotFoundPage from "../Pages/NotFoundPages/NotFound";
import Routers from "../Components/Nav/Routers";


const Routes = () => {
  return (
    <div>
      <Routers/>
      {/* <Router>
         <NonRegisteredMemberContextProvider>
              <Switch>
                <UnProtectedRoutes
                  path="/filba/"
                  exact
                  component={LandingPage}
                />

                <UnProtectedRoutes
                  path="/filba/home"
                  // exact
                  component={LandingPage}
                />

                <UnProtectedRoutes
                  path="/filba/signin"
                  component={SigninRegistrationPage}
                />
                
                <UnProtectedRoutes
                  path="/filba/signup"
                  // exact
                  component={SignupRegistrationPage}
                />
                
                <UnProtectedRoutes
                  path="/filba/signin"
                  // exact
                  component={SigninRegistrationPage}
                />
                      {/* <ProtectedRoutes
                        path="/filba/dash"
                        // exact={true}
                        render={() => <h1>Am protected </h1>}
                      /> */}
                {/* <Route render={NotFoundPage} />
              </Switch>
          </NonRegisteredMemberContextProvider>
      </Router> */}
      {/* <Routers/> */}
    </div>
  );
};

export default Routes;
