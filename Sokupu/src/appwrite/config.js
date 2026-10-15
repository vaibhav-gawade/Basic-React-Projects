import conf from "../config/config";
import {Client,Databases,Query,ID,Storage} from 'appwrite';

export class DatabaseServices {
    client = new Client();
    databases;
    storage;

    constructor () {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.databases = new Databases(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost ({title,slug,content,featuredImage,status,userId}) {
        try {
            return await this.databases.createDocument (
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                ID.unique(),
                {
                    title,
                    slug,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch(error) {
            console.log("appwrite service :: createDocument :: error ",error);
            return false;
        }
    }

    async updatePost (slug,{title,content,featuredImage,status,userId}) {
        try {
            return await this.databases.updateDocument (
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch(error) {
            console.log("appwrite service :: updateDocument :: error ",error);
            return false;
        }
    }

    async deletePost (slug) {
        try {
            await this.databases.deleteDocument (
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch(error) {
            console.log("appwrite service :: deleteDocument :: error ",error);
            return false;
        }
    }

    async getPost (slug) {
        try {
            return await this.databases.getDocument (
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("appwrite service :: getDocument :: error ",error);
            return false;
        }
    }

    async getAllPost (queries = [Query.equal("status","active")]) {
        const finalQueries = queries.length > 0 ? queries : [Query.equal("status", "active")];
        try {
            return await this.databases.listDocuments (
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                finalQueries
            )
        } catch (error) {
            console.log("appwrite service :: listDocuments :: error ",error);
            return false;
        }
    }

    async uploadFile (file) {
        try {
            return await this.storage.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file                // we get here array and if we want to upload all file we can do that by jsut writing the giel as we wrote here
            )
        } catch (error) {
            console.log("appwrite service :: uploadFile :: error ",error);
            return false;
        }
    }

    async deleteFile (id) {
        try {
            await this.storage.deleteFile(
                conf.appwriteBucketId,
                id
            )
            return true;
        } catch(error) {
            console.log("appwrite service :: deleteFile :: error ",error);
            return false;
        }
    }

    getFilePreview(fileId) {                            // it is so fast that the waiting is not required
        if(!fileId) return null;
        return this.storage.getFileView(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const databaseServices = new DatabaseServices();

export default databaseServices;

// we put the post create and all in the database because they are small and database is so fast that it can scan
// millions of the query at a time

// but the storage is the heavy component and here what is done is that the it stores the heavy files like the
// images , files and preview them which are very heavy like 5MB files or more