
import { Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

const PublicRoute = ({ 
    component: Component,
    isAuthenticated,
    layout: Layout = MainLayout, 
    ...rest 
}) => {
    return (
        <Route 
            {...rest}
            render={(props) => (
                <div>
                    <Layout>
                        <Component {...props} /> 
                    </Layout>
                </div>
            )}
        />
    )
}

export default PublicRoute