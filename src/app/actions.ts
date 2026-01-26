"use server";

import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function submitContactForm(
  prevState: { success: boolean; message: string },
  formData: FormData
) {
  const validatedFields = formSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
    };
  }
  
  try {
    // Here you would typically send an email, save to a database, etc.
    // We'll just log it and simulate a delay.
    console.log("New contact form submission:", validatedFields.data);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      message: "Your message has been sent successfully!",
    };
  } catch (error) {
    console.error("Error submitting form:", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
