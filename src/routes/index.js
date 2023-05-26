import { Route } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import appRoutes from "./appRoutes";

const generateRoute = (props) => {
  return (
    <>
      {props.map((route, index) => {
        return route.index ? (
          <Route
            index
            path={route.path}
            key={index}
            element={
              <PageWrapper state={route.state}>{route.element}</PageWrapper>
            }
          />
        ) : (
          <Route
            path={route.path}
            element={
              route.child ? (
                <PageWrapper>{route.element}</PageWrapper>
              ) : (
                <PageWrapper state={route.state ?? undefined} step={route.step??undefined}>
                  {route.element}
                </PageWrapper>
              )
            }
            key={index}
          >
            {route.child && generateRoute(route.child)}
          </Route>
        );
      })}
  </>
  );
};

const routes=generateRoute(appRoutes);

export default routes;
