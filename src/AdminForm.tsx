import React, { useState } from "react";

const AdminForm: React.FC = () => {
  const [formData, setFormData] = useState({
    cityName: "",
    time: "",
    date: "",
    randomNumber: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await fetch(`${config.API_URL}/admin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cityName: formData.cityName,
          time: formData.time,
          date: formData.date,
          randomNumber: Number(formData.randomNumber),
        }),
      });

      const data = await response.json();
      setMessage(data.message || "Data saved!");

      // Reset form after submit
      setFormData({
        cityName: "",
        time: "",
        date: "",
        randomNumber: "",
      });

    } catch (error) {
      console.error("Error:", error);
      setMessage("Failed to save data.");
    }
  };

  return (
    <div style={{ width: "350px", margin: "20px auto" }}>
      <h2>Admin Data Submit</h2>

      <form onSubmit={handleSubmit}>
        {/* City Name - Dropdown */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="cityName" style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
            City Name
          </label>
          <select
            id="cityName"
            name="cityName"
            value={formData.cityName}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              fontSize: 16,
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          >
            <option value="">-- Select a city --</option>
            <option value="Deshawar">Deshawar</option>
            <option value="Gali">Gali</option>
            <option value="Lucknow">Lucknow</option>
            <option value="Faridabad">Faridabad</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="DD Gold">DD Gold</option>
            <option value="Krishna">Krishna</option>
            <option value="Express">Express</option>
            <option value="Delhi">Delhi</option>
            <option value="Mumbai">Mumbai</option>
          </select>
        </div>

        {/* Time */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="time" style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
            Time
          </label>

          <input
            id="time"
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: 8,
              fontSize: 16,
              borderRadius: 4,
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Date */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="date" style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
            Date
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        {/* Random Number */}
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="randomNumber" style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}>
            Random Number
          </label>
          <input
            id="randomNumber"
            type="number"
            name="randomNumber"
            placeholder="Enter a number"
            value={formData.randomNumber}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: 8, fontSize: 16, borderRadius: 4, border: "1px solid #ccc" }}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            background: "black",
            color: "white",
            border: "none",
            borderRadius: 4,
            fontSize: 16,
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      {message && (
        <p style={{ marginTop: 15, fontWeight: "bold" }}>{message}</p>
      )}
    </div>
  );
};

export default AdminForm;
