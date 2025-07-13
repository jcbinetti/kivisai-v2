'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Loader2, CheckCircle } from 'lucide-react';

const contactFormSchema = z.object({
  firstName: z.string().min(2, { message: "Vorname muss mindestens 2 Zeichen lang sein." }),
  lastName: z.string().min(2, { message: "Nachname muss mindestens 2 Zeichen lang sein." }),
  organization: z.string().optional(),
  email: z.string().email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
  message: z.string().min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
  subscribe: z.boolean().optional(),
});

type ContactFormInputs = z.infer<typeof contactFormSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.');
      }

      setSubmitSuccess(true);
    } catch (error: any) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="text-center p-8 bg-green-50 border-2 border-green-200 rounded-lg">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800">Vielen Dank!</h3>
        <p className="text-green-700">Ihre Nachricht wurde erfolgreich versendet.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" suppressHydrationWarning>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">Vorname</Label>
          <Input 
            id="firstName" 
            {...register('firstName')} 
            suppressHydrationWarning
            autoComplete="given-name"
          />
          {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Nachname</Label>
          <Input 
            id="lastName" 
            {...register('lastName')} 
            suppressHydrationWarning
            autoComplete="family-name"
          />
          {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organisation (optional)</Label>
        <Input 
          id="organization" 
          {...register('organization')} 
          suppressHydrationWarning
          autoComplete="organization"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">E-Mail</Label>
        <Input 
          id="email" 
          type="email" 
          {...register('email')} 
          suppressHydrationWarning
          autoComplete="email"
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Ihre Nachricht</Label>
        <Textarea 
          id="message" 
          {...register('message')} 
          rows={6} 
          suppressHydrationWarning
        />
        {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="privacy"
            required
            className="rounded"
            suppressHydrationWarning
            onChange={(e) => setPrivacyAccepted(e.target.checked)}
          />
          <Label htmlFor="privacy" className="font-normal">
            Ich akzeptiere die <a href="/rechtliches/datenschutz" target="_blank" className="underline text-kivisai-clear-turquoise hover:text-kivisai-deep-dark-blue">Datenschutzerklärung</a>.
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="subscribe"
            {...register('subscribe')}
            className="rounded"
            suppressHydrationWarning
            disabled={!privacyAccepted}
          />
          <Label htmlFor="subscribe" className="font-normal">Ja, ich möchte den Kivisai Newsletter abonnieren.</Label>
        </div>
      </div>
      <div>
        <Button type="submit" disabled={isSubmitting} className="w-full md:w-auto">
          {isSubmitting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
          Nachricht senden
        </Button>
      </div>
       {submitError && <p className="text-red-500 text-sm mt-4">{submitError}</p>}
    </form>
  );
}; 