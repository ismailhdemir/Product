import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
import CreateProductGroup from './components/ProductGroup/CreateProductGroup';
import UpdateProductGroup from './components/ProductGroup/UpdateProductGroup';
import ListProductGroups from './components/ProductGroup/ListProductGroups';
import DeleteProductGroup from './components/ProductGroup/DeleteProductGroup';
import CreateProduct from './components/Product/CreateProduct';
import UpdateProduct from './components/Product/UpdateProduct';
import ListProducts from './components/Product/ListProducts';
import DeleteProduct from './components/Product/DeleteProduct';
import SearchProduct from './components/SearchProduct';

const App = () => {
    return (
        <Router>
            <div className="app">
                <nav>
                    <ul>
                        <li><Link to="/">Login</Link></li>
                        <li><Link to="/product-group/create">Create Product Group</Link></li>
                        <li><Link to="/product-group/update">Update Product Group</Link></li>
                        <li><Link to="/product-group/list">List Product Groups</Link></li>
                        <li><Link to="/product-group/delete">Delete Product Group</Link></li>
                        <li><Link to="/product/create">Create Product</Link></li>
                        <li><Link to="/product/update">Update Product</Link></li>
                        <li><Link to="/product/delete">Delete Product</Link></li>
                        <li><Link to="/product/search">Search Product</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/product-group/create" component={CreateProductGroup} />
                    <Route path="/product-group/update" component={UpdateProductGroup} />
                    <Route path="/product-group/list" component={ListProductGroups} />
                    <Route path="/product-group/delete" component={DeleteProductGroup} />
                    <Route path="/product/create" component={CreateProduct} />
                    <Route path="/product/update" component={UpdateProduct} />
                    <Route path="/product/delete" component={DeleteProduct} />
                    <Route path="/product/search" component={SearchProduct} />
                    <Route path="/product/list" component={ListProducts} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
