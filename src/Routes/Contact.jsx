import React, { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name.length < 5 || !/\S+@\S+\.\S+/.test(form.email)) {
      setMessage("Por favor verifique su información nuevamente.");
    } else {
      setMessage(`Gracias ${form.name}, te contactaremos cuando antes vía mail.`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre completo"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <button type="submit">Enviar</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Contact;