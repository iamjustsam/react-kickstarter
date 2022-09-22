import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ClientsPage } from './clients';
import { Header, NavItems, Sidenav, SidenavContainer, SidenavContent } from './components';
import { Routes as AppRoutes } from './routes';

const navItems = [{
    name: 'products',
    route: AppRoutes.PRODUCTS
}, {
    name: 'clients',
    route: AppRoutes.CLIENTS
}];

export function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    return (
        <div className="w-full h-full flex flex-col">
            <Header title='My Awesome React App' handleClickMenuButton={() => setIsSidebarOpen(!isSidebarOpen)} />
            <div className="flex flex-1 flex-auto">
                <SidenavContainer>
                    <Sidenav isSidenavOpen={isSidebarOpen}>
                        <NavItems navItems={navItems}/>
                    </Sidenav>
                    <SidenavContent>
                        <Routes>
                            <Route path={Routes.PRODUCTS}>
                                Here comes the products page
                            </Route>
                            <Route path={Routes.CLIENTS}>
                                <ClientsPage/>
                            </Route>
                        </Routes>
                    </SidenavContent>
                </SidenavContainer>
            </div>
        </div>
    );
}

export default App;
