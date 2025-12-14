'use client';

import { useForm } from '@tanstack/react-form';
import z from 'zod';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormWrapper from '@/components/form-wrapper';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import useSendRequest from '@/lib/hooks/useSendRequests';
import { MUTATIONS } from '@/lib/queries';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Please enter your full name.',
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Please enter a valid number.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  message: z.string().min(10, {
    message: 'Message must be at least 10 characters long.',
  }),
});

const ContactForm = () => {
  const { mutate, isPending, isSuccess } = useSendRequest<
    {
      fullName: string;
      phone: string;
      email: string;
      message: string;
    },
    any
  >({
    mutationFn: (data: {
      fullName: string;
      phone: string;
      email: string;
      message: string;
    }) => MUTATIONS.sendContact(data),
    errorToast: {
      title: 'Error',
      description: 'An unexpected error occurred. Please try again.',
    },
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      phone: '',
      email: '',
      message: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          form.reset();
        },
      });
    },
  });

  return (
    <FormWrapper
      formId="contact"
      form={form}
      header="Contact us"
      isPending={isPending}
      isSuccess={isSuccess}
      legend={<>Reach out and let us support your next step forward</>}
      description={
        <>
          Have questions or need guidance? Reach out to us anytime. <br /> You
          can fill out the form, visit our office, call us, or email{' '}
          <Link href={'mailto:info@carevinahealth.com'}>
            info@carevinahealth.com
          </Link>
          <br />
          <br />
          Whichever feels easiest for you, our team is always ready to listen
          and help.
        </>
      }
      label="Send a message"
    >
      <form.Field
        name="fullName"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="col-span-2 gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="leading-6 font-normal text-[#193244] md:text-lg/7"
              >
                Full name
              </FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                placeholder="Enter full name"
                className="h-14 rounded-xl border-none bg-[#18191A0D] placeholder:text-[#10202B99]"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
      <form.Field
        name="phone"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field
              data-invalid={isInvalid}
              className="gap-2 max-md:col-span-2 lg:max-xl:col-span-2"
            >
              <FieldLabel
                htmlFor={field.name}
                className="leading-6 font-normal text-[#193244] md:text-lg/7"
              >
                Phone
              </FieldLabel>
              <PhoneInput
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e)}
                aria-invalid={isInvalid}
                placeholder="Phone Number"
                inputClass="h-14! rounded-xl! w-full! border-none! bg-[#18191A0D]! placeholder:text-[#10202B99]!"
                dropdownClass="text-black!"
                buttonClass="rounded-l-xl! border-none! hover:bg-transparent! focus:bg-transparent!"
                country={'us'}
                inputProps={{
                  id: field.name,
                  name: field.name,
                  required: true,
                  autoFocus: false,
                  autoComplete: 'none',
                  'data-testid': 'input-id',
                }}
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
      <form.Field
        name="email"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field
              data-invalid={isInvalid}
              className="gap-2 max-md:col-span-2 lg:max-xl:col-span-2"
            >
              <FieldLabel
                htmlFor={field.name}
                className="leading-6 font-normal text-[#193244] md:text-lg/7"
              >
                Email
              </FieldLabel>
              <Input
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                type="email"
                placeholder="Enter email"
                className="h-14 rounded-xl border-none bg-[#18191A0D] placeholder:text-[#10202B99]"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
      <form.Field
        name="message"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="col-span-2 gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="leading-6 font-normal text-[#193244] md:text-lg/7"
              >
                Message
              </FieldLabel>
              <Textarea
                id={field.name}
                name={field.name}
                value={field.state.value}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                aria-invalid={isInvalid}
                className="h-50 resize-y rounded-xl border-none bg-[#18191A0D] placeholder:text-[#10202B99]"
              />
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
    </FormWrapper>
  );
};

export default ContactForm;
