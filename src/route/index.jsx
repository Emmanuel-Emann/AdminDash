import { useMemo, Suspense} from 'react';

import { MainLayout } from '../layout/MainLayout';

import { ToastContainer } from "react-toastify";
import PublicRoute from './public';

import Home from '../layout/Home';
import Loader from '../common/Loader';
import routes from './routes';
import { Navigate, Routes, Route as Switch } from 'react-router-dom';

const Routess = (props) => {
const renderRoutes = useMemo(
    () =>
        routes.map((route, index) =>
        route.redirect ? (
            <Navigate
            key={index}
            from={route.path}
            to={route.redirect}
            {...route}
            />
        ) : (
            <PublicRoute 
            key={index} 
            {...route} 
            />
        )
        ), [props]
    );

    return(
		<Routes>
			<Suspense fallback={<Loader /> }>
                <ToastContainer />
				<Switch>
                    <PublicRoute
                        layout={MainLayout}
                        path="/"
                        exact
                        component={Home}
                    />
                    <PublicRoute
                        layout={MainLayout}
                        path="/index"
                        exact
                        component={Home}
                    />
                    {renderRoutes}
                    </Switch>
			</Suspense>
		</Routes>
    )
}

// const mapStateToProps = (state) => {
//     return {
//         application: state.web.application,
//         isAuthenticated: state.auth.isAuthenticated,
//     };
// };


export default Routess
