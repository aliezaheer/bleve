import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [loading, setLoading] = useState(false); // New loading state

  const validateForm = () => {
    // Validation code (same as before)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Start the loading state

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phoneNumber, message }),
    });

    if (response.ok) {
      // Form submitted successfully
      setSubmissionStatus("success");
      // Empty the form fields
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } else {
      // Form submission failed
      const errorData = await response.json();
      // Handle the error, display an error message, etc.
    }

    setLoading(false); // End the loading state
  };

  return (
    <div className="w-96 ">
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          padding: "10px 20px 10px 20px",
          borderRadius: "3px",
        }}
      >
        {submissionStatus === "success" && (
          <div style={{ marginBottom: "10px", color: "green" }}>
            Thank you for submitting the form. We appreciate your interest, and
            our team will reach out to you.
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
              color="warning"
              helperText={errors.name}
              fullWidth
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              color="warning"
              helperText={errors.email}
              fullWidth
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Phone Number"
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              error={!!errors.phoneNumber}
              color="warning"
              helperText={errors.phoneNumber}
              fullWidth
            />
          </Box>
          <Box my={2}>
            <TextField
              label="Message"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={!!errors.message}
              color="warning"
              helperText={errors.message}
              fullWidth
            />
          </Box>
          <Box my={2}>
            <button
              className="formBtn"
              type="submit"
              variant="contained"
              disabled={loading} // Disable the button while loading
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
