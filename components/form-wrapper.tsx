'use client';

import { FormApi } from '@tanstack/react-form';
import {
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLegend,
} from './ui/field';
import { Button } from './ui/button';
import 'react-phone-input-2/lib/style.css';

type FormWrapperProps<TValues extends Record<string, any>> = {
  header?: string;
  legend: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
  label: string;
  formId: string;
  form: FormApi<TValues, any, any, any, any, any, any, any, any, any, any, any>;
};

const FormWrapper = <TFormValues extends Record<string, any>>(
  props: FormWrapperProps<TFormValues>,
) => {
  const { header, legend, description, children, label, formId, form } = props;

  return (
    <form
      id={`${formId}-form`}
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
          <FieldLegend className="mb-4 text-[1.75rem]/9! font-bold tracking-[-0.03em] text-[#10202B] md:mb-8 md:text-5xl/[3.5rem]!">
            {legend}
          </FieldLegend>
          <FieldDescription className="leading-6 tracking-[-0.01em] text-[#193244] md:text-lg/7">
            {description}
          </FieldDescription>
        </FieldContent>
        <FieldGroup className="grid basis-full grid-cols-2 gap-x-4! gap-y-4! max-lg:max-w-140 max-lg:self-center md:gap-y-8!">
          {children}
          <Button className="col-span-2 max-md:mt-6">{label}</Button>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default FormWrapper;
