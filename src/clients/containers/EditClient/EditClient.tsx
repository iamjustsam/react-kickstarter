import { Client, ClientForm, editClient, getClient } from "clients";
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export function EditClient() {
    const { clientId } = useParams();
    const navigate = useNavigate();
    const [client, setClient] = useState<Client | undefined>(undefined);
    const goBackToClients = () => navigate("/clients");
    const retrieveClient = async () => {
        const result = await getClient(clientId ?? '');
        setClient(result);
    };
    const onEditClient = async (clientFields: Partial<Client>) => {
        await editClient({ ...client!, ...clientFields });
        goBackToClients();
    };

    useEffect(() => {
        retrieveClient();
        // eslint-disable-next-line
    }, []);

    return client ? (
        <ClientForm
            client={client}
            onSubmit={onEditClient}
            onCancel={goBackToClients}
        ></ClientForm>
    ) : null;
}
