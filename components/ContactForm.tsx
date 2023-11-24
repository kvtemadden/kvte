import React from "react";
import * as Form from "@radix-ui/react-form";

export const ContactForm = () => {
  return (
    <Form.Root className="max-w-[500px] w-full">
      <Form.Field className="grid mb-[10px]" name="email">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
            Email
          </Form.Label>
          <Form.Message
            className="text-sm text-red opacity-[0.8]"
            match="valueMissing"
          >
            Please enter your email
          </Form.Message>
          <Form.Message
            className="text-sm text-red opacity-[0.8]"
            match="typeMismatch"
          >
            Please provide a valid email
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6"
            type="email"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Field className="grid mb-[10px]" name="question">
        <div className="flex items-baseline justify-between">
          <Form.Label className="text-lg font-medium text-white">
            Message
          </Form.Label>
          <Form.Message
            className="text-white opacity-[0.8]"
            match="valueMissing"
          >
            Please enter a message
          </Form.Message>
        </div>
        <Form.Control asChild>
          <textarea
            className="box-border w-full bg-blackA2 shadow-blackA6 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA6 resize-none"
            required
          />
        </Form.Control>
      </Form.Field>
      <Form.Submit asChild>
        <button className="box-border w-full hover:bg-primary-200 inline-flex h-[35px] items-center justify-center rounded bg-primary-400 px-4 font-medium leading-none mt-[10px]">
          Get in touch
        </button>
      </Form.Submit>
    </Form.Root>
  );
};
