import conf from "../conf";
import { Client, Databases, Storage, Query, ID } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
            this.client.setEndpoint(conf.appwriteUrl)
                .setProject(conf.appwriteProjectId);

            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client);
        }
        //Here slug is nothing but removing blank spaces from title and adding - , also same string of text can be use as a blog id
    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, conf.appwriteCollectionId, slug, { title, slug, content, featuredImage, status, userId }
            );
        } catch (e) { throw e; }
    }

    // Here we pass slug as a first argument because to update a document or blog we need that unique id which is slug in our case
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, { title, content, featuredImage, status }
            );
        } catch (e) {
            throw e;
        }
    }
    async deletePost(slug) {

            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug
                );
                return true;
            } catch (e) {
                throw e;
                return false;
            }
        }
        // This method will give us perticular blog
    async getPost(slug) {
            try {
                return await this.databases.getDocument(conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    slug);
            } catch (e) { throw e; }

        }
        /*
        We can use listDocument() method to get all the list of blog posts, but it will also returns the blogs with active or inactive status,
        to overcome this issue we can pass some DB queries that only gives the blogs that have active status
        */

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries)
        } catch (e) {
            throw e;
            return false;
        }

    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(conf.appwriteBucketId,
                ID.unique(), file, )
        } catch (e) { throw e; }
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId, fileId
            )
            return true;
        } catch (e) {
            throw e;
            return false;
        }

    }
    async getFilePreview(fileId) {
        try {
            return this.bucket.getFilePreview(conf.appwriteBucketId, fileId)

        } catch (e) { throw e; }

    }
}


const service = new Service();
export default service;