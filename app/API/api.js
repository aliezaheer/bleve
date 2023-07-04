// pages/api/submit.js

import { connectToDatabase } from "../../mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, phoneNumber, message } = req.body;

    // Validate the form data
    // (You can use the same validation code as before)

    // If validation fails, return an error response
    if (/* validation failed */) {
      return res.status(400).json({ error: "Invalid form data" });
    }

    // Connect to MongoDB
    const client = await connectToDatabase();

    // Insert the form data into the database
    const db = client.db();
    const collection = db.collection("contacts");

    try {
      await collection.insertOne({ name, email, phoneNumber, message });
      res.status(201).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error inserting form data:", error);
      res.status(500).json({ error: "Failed to submit the form" });
    } finally {
      // Close the MongoDB connection
      client.close();
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
