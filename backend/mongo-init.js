db.createUser(
    {
        user: "mongoDbuser",
        pwd: "1234",
        roles: [
            {
                role: "readWrite",
                db: "supportPortal"
            }
        ]
    }
);
