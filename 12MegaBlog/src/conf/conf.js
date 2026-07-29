const conf = {
    appWriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appWriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appWriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appWriteTablesId: String(import.meta.env.VITE_APPWRITE_TABLES_ID),
    appWriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default conf;