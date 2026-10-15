import conf from "../config/config";
import {Client,Account,ID} from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor () {
        this.client
            .setProject(conf.appwriteProjectId)
            .setEndpoint(conf.appwriteUrl)

        this.account = new Account(this.client);
    }

    // since we do not want to tell which backend service we will use what we do is create a wrapper by creating the new method so that there we only take the value we need and then directly access then here

    async createAccount ( {password,email,name} ) {
        try {
            const userAccount = await this.account.create(ID.unique(),email,password,name);

            if(userAccount) {
                // if the account is created then we directly call login and login the user
                return this.login({email,password});
            }else {
                // if account was not being successfully created and if gave null or falsy value it comes here
                return userAccount;          
            }
        } catch(error) {
            // if account creation fails then we throw the error here like confilicting accounts i.e same accounts
            throw error;
        }
    }

    async login ({email,password}) {
        try {
            // if login is successful then we directly create the user session
            return await this.account.createEmailPasswordSession({email,password});
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser () {
        try {
            // check if the current user is authenticated 
            const user = await this.account.get();
            return user;
        } catch(error) {
            // throws an error if the current user is not autheticated
            console.log("appwrite service :: getCurrentUser :: error",error);
        }

        return null;  // in case the try catch fail still we return the null
    }

    async logout () {
        try {
            // delete all the sessions of the current user
            return await this.account.deleteSessions();
        } catch(error) {
            console.log("appwrite service :: logout :: error",error);
        }
    }
}

const authService = new AuthService();

// we directly send the object so that the in the other page when we use this directly by authService.login and all methods we get the access and keeps the wrapper around the what backend we are using as the service
export default authService;