'use client';

import { useForm } from '@tanstack/react-form';
import z from 'zod';
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from './ui/field';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Please enter your full name.',
  }),
  address: z.string().min(2, {
    message: 'Please enter your address.',
  }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Please enter a valid number.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  typeOfservice: z.string().min(2, {
    message: 'Please select a type of service.',
  }),
});

const spokenLanguages = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Italian', value: 'it' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Japanese', value: 'ja' },
] as const;

const ConatctForm = (props: { header?: string }) => {
  const { header } = props;
  const form = useForm({
    defaultValues: {
      fullName: '',
      address: '',
      phone: '',
      email: '',
      typeOfservice: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <form
      id="contact-form"
      onSubmit={e => {
        e.preventDefault();
        form.handleSubmit();
      }}
      className="flex justify-center bg-white"
    >
      <FieldGroup className="w-full max-w-[1440px] gap-14 px-5 pt-10 pb-20 md:gap-28 md:px-16 md:pt-16 md:pb-30 lg:flex-row lg:gap-40 lg:px-20 lg:pt-20">
        <FieldContent className="flex basis-full flex-col max-lg:text-center">
          {header && (
            <h1 className="text-lg/7 font-medium tracking-[-0.01em] text-[#148E91] uppercase">
              {header}
            </h1>
          )}
          <FieldLegend className="mb-4 text-[1.75rem]/9 font-bold tracking-[-0.03em] text-[#10202B] md:mb-8 md:text-5xl/[3.5rem]!">
            Begin a Conversation <br /> with us
          </FieldLegend>
          <FieldDescription className="leading-6 tracking-[-0.01em] text-[#193244] md:text-lg/7">
            You can fill out the form below, or contact us{' '}
            <br className="md:hidden" /> directly at:
            <br />
            <br />
            <Link
              href={'tel:+240510-4216'}
              className="block font-semibold no-underline!"
            >
              📞 (240) 510-4216
            </Link>
            <Link
              href={'mailto:info@carevinahealth.com'}
              className="block font-semibold no-underline!"
            >
              📧 info@carevinahealth.com
            </Link>
            <span className="block">
              Our team will respond with care, <br className="md:hidden" />{' '}
              understanding, and guidance.
            </span>
          </FieldDescription>
        </FieldContent>
        <FieldGroup className="grid basis-full grid-cols-2 gap-x-4! gap-y-4! max-lg:max-w-140 max-lg:self-center md:gap-y-8!">
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
            name="address"
            children={field => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid} className="col-span-2 gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="leading-6 font-normal text-[#193244] md:text-lg/7"
                  >
                    Address
                  </FieldLabel>
                  <Input
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={e => field.handleChange(e.target.value)}
                    aria-invalid={isInvalid}
                    placeholder="Enter address"
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
            name="typeOfservice"
            children={field => {
              const isInvalid =
                field.state.meta.isTouched && !field.state.meta.isValid;
              return (
                <Field data-invalid={isInvalid} className="col-span-2 gap-2">
                  <FieldLabel
                    htmlFor={field.name}
                    className="leading-6 font-normal text-[#193244] md:text-lg/7"
                  >
                    Type of Service
                  </FieldLabel>
                  <Select
                    name={field.name}
                    value={field.state.value}
                    onValueChange={field.handleChange}
                  >
                    <SelectTrigger
                      id={field.name}
                      aria-invalid={isInvalid}
                      className="h-14! rounded-xl border-none bg-[#18191A0D] px-5 placeholder:text-[#10202B99]"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent position="item-aligned">
                      <SelectItem value="auto">Auto</SelectItem>
                      <SelectSeparator />
                      {spokenLanguages.map(language => (
                        <SelectItem key={language.value} value={language.value}>
                          {language.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {isInvalid && <FieldError errors={field.state.meta.errors} />}
                </Field>
              );
            }}
          />
          <Button className="col-span-2 max-md:mt-6">Send enquiry</Button>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default ConatctForm;
