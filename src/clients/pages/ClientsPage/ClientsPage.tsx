import { CreateClient } from 'clients/containers';
import React from 'react';
import {
    Route, Routes, useNavigate
} from "react-router-dom";
import { Page } from '../../../components';
import { ClientsTable } from '../../containers/ClientsTable/ClientsTable';

export function ClientsPage() {
    const navigate = useNavigate ();
    const gotToCreateClient = () => navigate('./create');

    return (
        <Routes>
            <Route path="/" element={<Page title="Clients" onCreateButtonClick={gotToCreateClient}>
                    <ClientsTable></ClientsTable>
                </Page>} />
            <Route path="/create" element={<Page title="Create client">
                    <CreateClient></CreateClient>
                </Page>} />
            <Route path=":clientId/edit" element={<Page title="Edit client">
                    Here will come the EditClient container
                </Page>} />
        </Routes>
    );
}
