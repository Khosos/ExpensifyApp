import React from 'react'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Header from '../components/Header'; 
import Dashboard from '../components/Dashboard'; 
import NotFoundPage from '../components/NotFound'; 
import AddExpensePage from '../components/AddExpensePage';
import HelpPage from '../components/HelpPage'; 
import EditExpensePage from '../components/EditExpensePage'
const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </BrowserRouter>
); 

export default AppRouter; 


