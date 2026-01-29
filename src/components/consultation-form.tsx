"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    // In a static site, we can't run server actions.
    // We'll simulate a delay and show a message.
    console.log("Form submitted:", values);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent (Simulated)",
      description:
        "Because this is a static website, form submission isn't active.",
    });

    form.reset();
    setIsSubmitting(false);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your.email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell me about your project or inquiry"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SubmitButton isSubmitting={isSubmitting} />
      </form>
    </Form>
  );
}

function SubmitButton({ isSubmitting }: { isSubmitting: boolean }) {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className="cursor-pointer relative bg-secondary py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group w-full flex items-center justify-start hover:bg-primary transition-all duration-1000 ease-custom-ease shadow-[inset_1px_2px_5px_#00000080] disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center w-full">
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Sending...
        </div>
      ) : (
        <>
          <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
            <div
              className="w-[0%] group-hover:w-full transition-all duration-1000 ease-custom-ease"
            ></div>
            <div
              className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-primary transition-all duration-1000 ease-custom-ease group-hover:bg-foreground"
            >
              <div
                className="size-[0.8rem] text-primary-foreground group-hover:text-background group-hover:-rotate-45 transition-all duration-1000 ease-custom-ease"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 16"
                  height="100%"
                  width="100%"
                >
                  <path
                    fill="currentColor"
                    d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div
            className="w-full text-center pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-1000 ease-custom-ease group-hover:text-primary-foreground text-foreground"
          >
            Send Message
          </div>
        </>
      )}
    </button>
  );
}
