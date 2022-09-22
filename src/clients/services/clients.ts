import { Client } from "../models";

const apiUrl = "https://react-training-app.azurewebsites.net/clients";

export const getClients = async (): Promise<Client[]> =>
  (await fetch(apiUrl)).json();

export const createClient = async (
    client: Partial<Client>
): Promise<Client> =>
    (
        await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(client),
        })
    ).json();
