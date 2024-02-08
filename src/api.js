export const sendFormData = async (formData) => {
  const response = await fetch("https://formspree.io/f/xknlqeaw", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });

  return response;
};
