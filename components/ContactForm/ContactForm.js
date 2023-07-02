import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    // Validation code (same as before)
  };

  const handleSubmit = (e) => {
    // Submit code (same as before)
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
        <form onSubmit={handleSubmit}>
          <Box my={2}>
            <TextField
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              error={!!errors.name}
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
              helperText={errors.message}
              fullWidth
            />
          </Box>
          <Box my={2}>
            <Button
              sx={{ color: "#FF0000", border: "1px solid #FF0000" }}
              type="submit"
              variant="contained"
            >
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ContactForm;
