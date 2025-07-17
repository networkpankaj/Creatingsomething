export interface FormField {
  id: string;
  type: 'text' | 'email' | 'tel' | 'select' | 'checkbox' | 'textarea' | 'number';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export interface FormSection {
  title: string;
  fields: FormField[];
}

export interface ServiceFormConfig {
  serviceType: string;
  provider: FormSection[];
  consumer: FormSection[];
}