import { Client, ClientForm, createClient } from "clients";
import React from "react";
import { useNavigate } from "react-router-dom";

export function CreateClient() {
  const navigate = useNavigate();
  const goBackToClients = () => navigate("/clients");
  const onCreateClient = async (newClient: Partial<Client>) => {
    await createClient(newClient);
    goBackToClients();
  };

  return (
    <ClientForm
      onSubmit={onCreateClient}
      onCancel={goBackToClients}
    ></ClientForm>
  );
}
