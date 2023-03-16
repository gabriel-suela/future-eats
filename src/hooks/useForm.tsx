import React, { useState } from "react";

const useForm = (initialState: any) => {
  const [form, setForm] = useState(initialState);
  const onChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const clean = () => {
    setForm(initialState);
  };
  return { form, onChange, clean };
};

export default useForm;
