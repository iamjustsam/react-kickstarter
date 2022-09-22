import { Client } from "../models";

const apiUrl = "https://react-training-app.azurewebsites.net/clients";

export const getClients = async (): Promise<Client[]> =>
  (await fetch(apiUrl)).json();

