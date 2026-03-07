"use client";

import { useState, useCallback } from "react";
import { z } from "zod";

const projectTypes = [
  "web",
  "mobile",
  "ai",
  "marketing",
  "branding",
  "other",
] as const;
const budgetRanges = ["small", "medium", "large", "enterprise"] as const;

export const leadSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  company: z.string().optional(),
  projectType: z.enum(projectTypes, {
    required_error: "Please select a project type",
  }),
  budgetRange: z.enum(budgetRanges).optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type LeadFormData = z.infer<typeof leadSchema>;

export type LeadFormStatus = "idle" | "submitting" | "success" | "error";

export function useLeadForm() {
  const [formData, setFormData] = useState<Partial<LeadFormData>>({});
  const [errors, setErrors] = useState<
    Partial<Record<keyof LeadFormData, string>>
  >({});
  const [status, setStatus] = useState<LeadFormStatus>("idle");

  const updateField = useCallback(
    <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear field error on change
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    },
    [],
  );

  const validate = useCallback((): boolean => {
    const result = leadSchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }

    const fieldErrors: Partial<Record<keyof LeadFormData, string>> = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof LeadFormData;
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }
    setErrors(fieldErrors);
    return false;
  }, [formData]);

  const onSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setStatus("submitting");

      try {
        // Prepared for API integration
        // await fetch("/api/leads", { method: "POST", body: JSON.stringify(formData) });
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setStatus("success");
        setFormData({});
      } catch {
        setStatus("error");
      }
    },
    [formData, validate],
  );

  const reset = useCallback(() => {
    setFormData({});
    setErrors({});
    setStatus("idle");
  }, []);

  return {
    formData,
    errors,
    status,
    updateField,
    onSubmit,
    reset,
  };
}
