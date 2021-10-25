// Create users collection

db.createCollection("users", {
    validator: {
       $jsonSchema: {
            bsonType: "object",
            required: [ "username", "email", "password_digest"],
            properties: {
                username: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                email: {
                    email: "string",
                    description: "must be a string and is required"
                },
                password_digest: {
                    email: "string",
                    description: "must be a string and is required"
                },
            }
       }
    }
 })

//  Create an habit collection

 db.createCollection("habits", {
    validator: {
       $jsonSchema: {
            bsonType: "object",
            required: [ "habitname", "frequency", "currentcount", "streak" ],
            properties: {
                habitname: {
                    bsonType: "string",
                    description: "must be a string and is required"
                },
                frequency: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be a neutral or positive value and is required"
                },
                current_count: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be a neutral or positive value and is required"
                },
                streak: {
                    bsonType: "number",
                    minimum: 0,
                    description: "must be a neutral or positive value and is required"
                },
            }
       }
    }
 })
