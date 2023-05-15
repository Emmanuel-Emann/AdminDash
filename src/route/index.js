import { useMemo, Suspense} from 'react';
import {Redirect, Router, Switch} from 'react-router-dom'
import { MainLayout } from '../layout/MainLayout';
import routes from './routes';
import { ToastContainer } from "react-toastify";
import PublicRoute from './public';
import Loader from '../component/Loader';

const Routes = (props) => {
const renderRoutes = useMemo(
    () =>
        routes.map((route, index) =>
        route.redirect ? (
            <Redirect
            key={index}
            from={route.path}
            to={route.redirect}
            {...route}
            />
        ) : (
            <PublicRoute 
            key={index} {...route} 
            />
        )
        ), [props]
    );

    return(
		<Router>
			<Suspense fallback={<Loader /> }>
                <ToastContainer />
				<Switch>
                    <PublicRoute
                        layout={MainLayout}
                        path="/"
                        exact
                    />
                    <PublicRoute
                        layout={MainLayout}
                        path="/index"
                        exact
                    />
                    {renderRoutes}
                    </Switch>
			</Suspense>
		</Router>
    )
}

const mapStateToProps = (state) => {
    return {
        application: state.web.application,
        isAuthenticated: state.auth.isAuthenticated,
    };
};


export default mapStateToProps(Routes)
