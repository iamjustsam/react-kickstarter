import { Table } from "components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Client } from "../../models";
import { deleteClient, getClients } from "../../services";

interface ClientTableData {
    id: string;
    name: string;
}

export function ClientsTable() {
    const [clients, setClients] = useState<Client[] | undefined>(undefined);
    const navigate = useNavigate();
    const retrieveClients = async () => {
        const result = await getClients();
        setClients(result);
    };

    useEffect(() => {
        retrieveClients();
    }, []);

    const onDeleteClient = async (id: string) => {
        if (window.confirm("Are you sure?")) {
            await deleteClient(id);
            await retrieveClients();
        }
    };

    const clientTableData = clients?.map<ClientTableData>((client) => ({
        id: client.id,
        name: `${client.firstName} ${client.lastName}`,
    }));

    return (
            <Table
                headers={[ "Id", "Name" ]}
                data={clientTableData}
                onEdit={(clientId) => navigate(`./${clientId}/edit`)}
                onDelete={onDeleteClient}
            ></Table>
    );
}
