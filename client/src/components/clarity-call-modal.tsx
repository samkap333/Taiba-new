import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { useLocation } from "wouter";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader2, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const step1Schema = z.object({
  businessType: z.string().min(1, "Please select what best describes you"),
  yearsInBusiness: z.string().min(1, "Please select how long you've been in business"),
  annualRevenue: z.string().min(1, "Please select your current annual revenue"),
});

const step2Schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  biggestChallenge: z.string().min(1, "Please select your biggest challenge"),
  customChallenge: z.string().optional(),
  openToContact: z.string().min(1, "Please confirm if you're open to being contacted"),
});

const fullFormSchema = step1Schema.merge(step2Schema);

type Step1FormData = z.infer<typeof step1Schema>;
type Step2FormData = z.infer<typeof step2Schema>;
type FullFormData = z.infer<typeof fullFormSchema>;

interface ClarityCallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ClarityCallModal({ isOpen, onClose }: ClarityCallModalProps) {
  const [step, setStep] = useState(1);
  const [step1Data, setStep1Data] = useState<Step1FormData | null>(null);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();
  const [, setLocation] = useLocation();

  const step1Form = useForm<Step1FormData>({
    resolver: zodResolver(step1Schema),
    defaultValues: {
      businessType: "",
      yearsInBusiness: "",
      annualRevenue: "",
    },
  });

  const step2Form = useForm<Step2FormData>({
    resolver: zodResolver(step2Schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      biggestChallenge: "",
      customChallenge: "",
      openToContact: "",
    },
    mode: "onChange",
  });

  // Reset step2 form when moving to step 2
  useEffect(() => {
    if (step === 2) {
      step2Form.reset({
        name: "",
        phone: "",
        email: "",
        biggestChallenge: "",
        customChallenge: "",
        openToContact: "",
      });
    }
  }, [step, step2Form]);

  const mutation = useMutation({
    mutationFn: async (data: FullFormData) => {
      const response = await fetch("/api/clarity-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit form");
      }
      
      return response.json();
    },
    onSuccess: () => {
      setShowThankYou(true);
      setTimeout(() => {
        setShowThankYou(false);
        onClose();
        resetAllForms();
        setLocation("/thank-you");
      }, 3000);
    },
    onError: (error: Error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const resetAllForms = () => {
    setStep(1);
    setStep1Data(null);
    step1Form.reset();
    step2Form.reset();
  };

  const handleStep1Submit = (data: Step1FormData) => {
    console.log("Step 1 data:", data);
    setStep1Data(data);
    setStep(2);
  };

  const handleStep2Submit = (data: Step2FormData) => {
    console.log("Step 2 data:", data);
    if (step1Data) {
      const fullData: FullFormData = { ...step1Data, ...data };
      console.log("Full data:", fullData);
      mutation.mutate(fullData);
    }
  };

  const goBack = () => {
    setStep(1);
  };

  const handleClose = () => {
    if (!mutation.isPending) {
      onClose();
      resetAllForms();
      setShowThankYou(false);
    }
  };

  // Debug: Log form values
  const step2Values = step2Form.watch();
  console.log("Step 2 form values:", step2Values);

  if (showThankYou) {
    return (
      <Dialog open={isOpen} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-charcoal mb-2">Thank You!</h2>
            <p className="text-gray-600">
              Your clarity call request has been submitted successfully. We'll be in touch soon!
            </p>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-charcoal">
            {step === 1 ? "Let's See If We're A Good Fit" : "Almost There!"}
          </DialogTitle>
        </DialogHeader>

        {step === 1 ? (
          <Form {...step1Form}>
            <form onSubmit={step1Form.handleSubmit(handleStep1Submit)} className="space-y-6" key="step1-form">
              <FormField
                control={step1Form.control}
                name="businessType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">
                      1. What best describes you?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="coach-consultant" id="step1-coach-consultant" />
                          <Label htmlFor="step1-coach-consultant">I'm a coach/consultant running my own business</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="service-business" id="step1-service-business" />
                          <Label htmlFor="step1-service-business">I run a service-based business</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="working-professional" id="step1-working-professional" />
                          <Label htmlFor="step1-working-professional">I'm a working professional exploring sales coaching</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="student-fresher" id="step1-student-fresher" />
                          <Label htmlFor="step1-student-fresher">I'm a student/fresher</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step1Form.control}
                name="yearsInBusiness"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">
                      2. How many years have you been running your business?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="less-than-1" id="step1-less-than-1" />
                          <Label htmlFor="step1-less-than-1">Less than 1 year</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1-2-years" id="step1-1-2-years" />
                          <Label htmlFor="step1-1-2-years">1–2 years</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2-5-years" id="step1-2-5-years" />
                          <Label htmlFor="step1-2-5-years">2–5 years</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5-plus-years" id="step1-5-plus-years" />
                          <Label htmlFor="step1-5-plus-years">5+ years</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step1Form.control}
                name="annualRevenue"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">
                      3. What is your current annual revenue?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="5-10-lakhs" id="step1-5-10-lakhs" />
                          <Label htmlFor="step1-5-10-lakhs">₹5–10 lakhs</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="10-25-lakhs" id="step1-10-25-lakhs" />
                          <Label htmlFor="step1-10-25-lakhs">₹10–25 lakhs</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="25-lakhs-plus" id="step1-25-lakhs-plus" />
                          <Label htmlFor="step1-25-lakhs-plus">₹25 lakhs+</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="w-full bg-deep-pink hover:bg-deep-pink/90 text-white py-3 text-lg font-semibold rounded-full"
              >
                Continue
              </Button>
            </form>
          </Form>
        ) : (
          <Form {...step2Form}>
            <form onSubmit={step2Form.handleSubmit(handleStep2Submit)} className="space-y-6" key="step2-form">
              <div className="flex items-center gap-2 mb-4">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={goBack}
                  className="p-1"
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-gray-600">Step 2 of 2</span>
              </div>

              <FormField
                control={step2Form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">4. Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your full name" 
                        {...field}
                        onChange={(e) => {
                          console.log("Name input change:", e.target.value);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">5. Phone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your phone number" 
                        {...field}
                        onChange={(e) => {
                          console.log("Phone input change:", e.target.value);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">6. Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your email" 
                        type="email" 
                        {...field}
                        onChange={(e) => {
                          console.log("Email input change:", e.target.value);
                          field.onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={step2Form.control}
                name="biggestChallenge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">
                      7. What's your biggest challenge in growing your business right now?
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your biggest challenge" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lead-qualification">Lead Qualification</SelectItem>
                        <SelectItem value="lead-nurturing">Lead Nurturing</SelectItem>
                        <SelectItem value="objection-handling">Objection Handling</SelectItem>
                        <SelectItem value="1on1-sales-closing">1:1 Sales Closing</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {step2Form.watch("biggestChallenge") === "other" && (
                <FormField
                  control={step2Form.control}
                  name="customChallenge"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-semibold">Please specify your challenge</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Describe your specific challenge" 
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              )}

              <FormField
                control={step2Form.control}
                name="openToContact"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-charcoal font-semibold">
                      8. If you're a good fit, are you open to being contacted for a free Sales Growth clarity call?
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        value={field.value}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="step2-yes-contact" />
                          <Label htmlFor="step2-yes-contact">Yes</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="step2-no-contact" />
                          <Label htmlFor="step2-no-contact">No</Label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-deep-pink hover:bg-deep-pink/90 text-white py-3 text-lg font-semibold rounded-full"
              >
                {mutation.isPending ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Application"
                )}
              </Button>
            </form>
          </Form>
        )}
      </DialogContent>
    </Dialog>
  );
}