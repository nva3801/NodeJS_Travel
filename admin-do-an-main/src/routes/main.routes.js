import React from 'react'
import { Routes } from 'react-router';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Login from '../pages/Auth/Login';
import Register from '../pages/Auth/Register';
import AddCategory from '../pages/CategoryManagement/AddCategory';
import CategoryManagement from '../pages/CategoryManagement/CategoryManagement';
import UpdateCategory from '../pages/CategoryManagement/UpdateCategory';
import ViewCategory from '../pages/CategoryManagement/ViewCategory';
import AddCategoryList from '../pages/CategoryListManagement/AddCategoryList';
import CategoryManagementList from '../pages/CategoryListManagement/CategoryManagementList';
import UpdateCategoryList from '../pages/CategoryListManagement/UpdateCategoryList';
import ViewCategoryList from '../pages/CategoryListManagement/ViewCategoryList';
import AddCategoryItem from '../pages/CategoryItemManagement/AddCategoryItem';
import CategoryManagementItem from '../pages/CategoryItemManagement/CategoryManagementItem';
import UpdateCategoryItem from '../pages/CategoryItemManagement/UpdateCategoryItem';
import ViewCategoryItem from '../pages/CategoryItemManagement/ViewCategoryItem';
import AddProduct from '../pages/ProductManagement/AddProduct';
import ProductManagement from '../pages/ProductManagement/ProductManagement';
import UpdateProduct from '../pages/ProductManagement/UpdateProduct';
import ViewProduct from '../pages/ProductManagement/ViewProduct';
import AddTourCode from '../pages/TourCodeManagement/AddTourCode';
import TourCodeManagement from '../pages/TourCodeManagement/TourCodeManagement';
import UpdateTourCode from '../pages/TourCodeManagement/UpdateTourCode';
import ViewTourCode from '../pages/TourCodeManagement/ViewTourCode';
import Dashboard from '../pages/Dashboard/Dashboard';
import CheckoutManagement from './../pages/CheckoutManagement/CheckoutManagement';
function RoutesMain() {
    let { path, url } = useRouteMatch();
    return (
        <div>
            <Router>
                <Switch>
                    <Route path={`${url}/Dashboard`}><Dashboard /> </Route>


                    <Route path={`${url}/category-management/addCategory`}><AddCategory /> </Route>
                    <Route path={`${url}/category-management/updateCategory/:id`}><UpdateCategory /> </Route>
                    <Route path={`${url}/category-management`}><CategoryManagement /> </Route>
                    <Route path={`${url}/category-management/viewCategory/:id`}><ViewCategory /> </Route>

                    <Route path={`${url}/category-list-management/addCategoryList`}><AddCategoryList /> </Route>
                    <Route path={`${url}/category-list-management/updateCategoryList/:id`}><UpdateCategoryList /> </Route>
                    <Route path={`${url}/category-list-management`}><CategoryManagementList /> </Route>
                    <Route path={`${url}/category-list-management/viewCategoryList/:id`}><ViewCategoryList /> </Route>

                    <Route path={`${url}/category-item-management/addCategoryItem`}><AddCategoryItem /> </Route>
                    <Route path={`${url}/category-item-management/updateCategoryItem/:id`}><UpdateCategoryItem /> </Route>
                    <Route path={`${url}/category-item-management`}><CategoryManagementItem /> </Route>
                    <Route path={`${url}/category-item-management/viewCategoryItem/:id`}><ViewCategoryItem /> </Route>

                    <Route path={`${url}/product-management/addProduct`}><AddProduct /> </Route>
                    <Route path={`${url}/product-management/updateProduct/:id`}><UpdateProduct /> </Route>
                    <Route path={`${url}/product-management`}><ProductManagement /> </Route>
                    <Route path={`${url}/product-management/viewProduct/:id`}><ViewProduct /> </Route>

                    <Route path={`${url}/tourcode-management/addTourCode`}><AddTourCode /> </Route>
                    <Route path={`${url}/tourcode-management/updateTourCode/:id`}><UpdateTourCode /> </Route>
                    <Route path={`${url}/tourcode-management`}><TourCodeManagement /> </Route>
                    <Route path={`${url}/tourcode-management/viewTourCode/:id`}><ViewTourCode /> </Route>

                    <Route path={`${url}/checkout-management`}><CheckoutManagement /> </Route>

                </Switch>
            </Router>
        </div>
    )
}

export default RoutesMain