'use client';

import { useField, useForm } from '@tanstack/react-form';
import z from 'zod';
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
import Image from 'next/image';
import { useState } from 'react';
import DocumentEmpty from '@/components/jsx-icons/document-empty';
import { cn } from '@/lib/utils';
import DocumentFill from '@/components/jsx-icons/document-fill';
import { fi } from 'zod/v4/locales';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: 'Please enter your full name.',
  }),
  resume: z
    .array(z.instanceof(File))
    // .optional()
    .refine(value => value === undefined || value.length > 0, {
      message: 'Please select at least one file',
    })
    .refine(
      value =>
        value === undefined ||
        value.every(file => {
          const ext = file.name.toLowerCase().split('.').pop();
          return ['pdf', 'docx', 'doc'].includes(ext ?? '');
        }),
      { message: 'Only PDF, DOCX, and DOC files are allowed' },
    ),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: 'Please enter a valid number.',
  }),
  email: z.email({
    message: 'Please enter a valid email address.',
  }),
  position: z.string().min(2, {
    message: 'Please select a type of service.',
  }),
});

type CareerFormValues = z.infer<typeof formSchema>;

const spokenLanguages = [
  { label: 'English', value: 'en' },
  { label: 'Spanish', value: 'es' },
  { label: 'French', value: 'fr' },
  { label: 'German', value: 'de' },
  { label: 'Italian', value: 'it' },
  { label: 'Chinese', value: 'zh' },
  { label: 'Japanese', value: 'ja' },
] as const;

const CareerForm = () => {
  const [files, setFiles] = useState<File[]>([]);
  const form = useForm({
    defaultValues: {
      fullName: '',
      resume: [],
      phone: '',
      email: '',
      position: '',
    } as CareerFormValues,
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      console.log(value);
    },
  });

  const resume = useField({
    form,
    name: 'resume',
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files);
      setFiles(newFiles);
      resume.setValue(newFiles);
    }
  };

  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!isDragging) {
      setIsDragging(true);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const newFiles = Array.from(e.dataTransfer.files);
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      resume.setValue(updatedFiles);
    }
  };

  return (
    <FormWrapper
      formId="career"
      form={form}
      legend={<>Apply to Join Carevina</>}
      description={
        <span className="flex flex-col gap-8 sm:gap-12">
          <span>
            Fill out the form and upload your resume. If your experience aligns
            with an open role or a future opportunity, we will reach out to you.{' '}
            <br />
            Your information will be kept safe and confidential.
          </span>
          <span className="relative block h-70 w-full overflow-hidden rounded-lg sm:h-90">
            <Image
              src="https://res.cloudinary.com/dl56ef7sx/image/upload/q_auto,f_auto,c_limit/v1765411801/5664981fb3135313269678e878fd26b8821e712f_drirbu.png"
              alt="form"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="size-full object-cover"
            />
          </span>
        </span>
      }
      label="Submit application"
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
        name="resume"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="col-span-2 gap-2">
              <FieldLabel
                htmlFor={field.name}
                className={
                  'flex-col items-start leading-6 font-normal text-[#193244] md:text-lg/7'
                }
              >
                Resume
                <Input
                  id={field.name}
                  name={field.name}
                  onBlur={field.handleBlur}
                  onChange={handleFileChange}
                  aria-invalid={isInvalid}
                  accept=".pdf,.docx,.doc"
                  type="file"
                  className="hidden"
                />
                <div
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                  className={cn(
                    'flex w-full items-center justify-between rounded-xl border border-dashed border-[#D9D9D9] px-5 py-6 leading-6 tracking-[-0.01em]',
                    isDragging ? 'cursor-grabbing' : 'cursor-pointer',
                    files.length > 0 && 'border-0 bg-[#18191A0D] p-3',
                  )}
                >
                  <div className="flex basis-full items-center gap-2">
                    {files.length > 0 ? <DocumentFill /> : <DocumentEmpty />}
                    <p
                      className={cn(
                        'text-[#707980]',
                        files.length > 0 &&
                          'line-clamp-1 font-medium text-ellipsis text-[#10202B]',
                      )}
                    >
                      {files.length > 0
                        ? files[0].name
                        : 'Upload or drag and drop'}
                    </p>
                  </div>
                  <div className="flex basis-full justify-end">
                    {files.length > 0 ? (
                      <button
                        onClick={() => {
                          (setFiles([]), resume.setValue([]));
                        }}
                        className="cursor-pointer font-medium text-[#10202B99]"
                      >
                        Change
                      </button>
                    ) : (
                      <p className="text-[#10202B99]">.pdf, .docx, .doc</p>
                    )}
                  </div>
                </div>
              </FieldLabel>

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
        name="position"
        children={field => {
          const isInvalid =
            field.state.meta.isTouched && !field.state.meta.isValid;
          return (
            <Field data-invalid={isInvalid} className="col-span-2 gap-2">
              <FieldLabel
                htmlFor={field.name}
                className="leading-6 font-normal text-[#193244] md:text-lg/7"
              >
                Position Applying for
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
                  <SelectValue placeholder="Select a position" />
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
    </FormWrapper>
  );
};

export default CareerForm;
