import { Client, Account, Databases} from 'appwrite';


export const PROJECT_ID='66821680002f61c28649';
export const DATABASE_ID='668216f700372bf6da73';
export const COLLECTION_ID_MESSAGES='66821734000c71868dac';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66821680002f61c28649');


export const database = new Databases(client);
export const account = new Account(client);
export default client; 