import conf from "../conf/conf";
import { Client, TablesDB, Storage, ID, Query } from "appwrite";

export class Service {
    client = new Client();
    tablesDB;
    storage;

    constructor() {
        this.client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId);

        this.tablesDB = new TablesDB(this.client);
        this.storage = new Storage(this.client);
    }

    async createPost({
        title,
        slug,
        content,
        featuredImage,
        status,
        userId,
    }) {
        try {
            return await this.tablesDB.createRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteTablesId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                },
            });
        } catch (error) {
            console.log("createPost", error);
        }
    }

    async updatePost(slug, {
        title,
        content,
        featuredImage,
        status,
    }) {
        try {
            return await this.tablesDB.updateRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteTablesId,
                rowId: slug,
                data: {
                    title,
                    content,
                    featuredImage,
                    status,
                },
            });
        } catch (error) {
            console.log("updatePost", error);
        }
    }

    async deletePost(slug) {
        try {
            await this.tablesDB.deleteRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteTablesId,
                rowId: slug,
            });

            return true;
        } catch (error) {
            console.log("deletePost", error);
            return false;
        }
    }

    async getPost(slug) {
        try {
            return await this.tablesDB.getRow({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteTablesId,
                rowId: slug,
            });
        } catch (error) {
            console.log("getPost", error);
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.tablesDB.listRows({
                databaseId: conf.appWriteDatabaseId,
                tableId: conf.appWriteTablesId,
                queries,
            });
        } catch (error) {
            console.log("getPosts", error);
            return false;
        }
    }

    async uploadFile(file) {
        try {
            return await this.storage.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                file
            );
        } catch (error) {
            console.log("uploadFile", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.storage.deleteFile(
                conf.appWriteBucketId,
                fileId
            );

            return true;
        } catch (error) {
            console.log("deleteFile", error);
            return false;
        }
    }

    getFilePreview(fileId) {
        return this.storage.getFilePreview(
            conf.appWriteBucketId,
            fileId
        );
    }
}

const service = new Service();

export default service;