'use client';

import { useField, useForm } from '@tanstack/react-form';
import z from 'zod';
import Link from 'next/link';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import FormWrapper from '@/components/form-wrapper';
import { Field, FieldError, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useQueryState } from 'nuqs';
import { useEffect } from 'react';

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

const typesOfService = [
  {
    label: 'Life Skills & Living Support',
    value: 'life-skills-and-living-support',
  },
  {
    label: 'Social & Emotional Support',
    value: 'social-and-emotional-support',
  },
  {
    label: 'Vocational & Employment Support',
    value: 'vocational-and-employment-support',
  },
  {
    label: 'Educational & Skill-Building Support',
    value: 'educational-and-skill-building-support',
  },
  {
    label: 'Health, Wellness & Community Resources',
    value: 'health-wellness-and-community-resources',
  },
  {
    label: 'Family, Peer & Crisis Support',
    value: 'family-peer-and-crisis-support',
  },
] as const;

const HomeForm = () => {
  const [service, _] = useQueryState('services');

  const form = useForm({
    defaultValues: {
      fullName: '',
      address: '',
      phone: '',
      email: '',
      typeOfservice: service ?? '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  return (
    <FormWrapper
      formId="home"
      form={form}
      legend={
        <>
          Begin a Conversation <br /> with us
        </>
      }
      description={
        <>
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
        </>
      }
      label="Send enquiry"
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
                  {typesOfService.map(service => (
                    <SelectItem key={service.value} value={service.value}>
                      {service.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {isInvalid && <FieldError errors={field.state.meta.errors} />}
            </Field>
          );
        }}
      />
    </FormWrapper>
  );
};

export default HomeForm;
