"use client";

import { cn } from "@/lib/utils";
import { useLeadForm } from "../hooks/use-lead-form";
import { useLanguage } from "@/features/i18n/use-language";

interface LeadFormProps {
  className?: string;
}

export function LeadForm({ className }: LeadFormProps) {
  const { formData, errors, status, updateField, onSubmit, reset } =
    useLeadForm();
  const { t } = useLanguage();

  if (status === "success") {
    return (
      <div
        className={cn("border border-border/40 p-12 text-center", className)}
      >
        <p className="font-mono text-sm text-foreground">{t.lead.success}</p>
        <button
          onClick={reset}
          className="mt-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors duration-200"
        >
          ← {t.lead.sectionLabel}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <FieldGroup label={t.lead.name} error={errors.name} required>
          <input
            type="text"
            value={formData.name ?? ""}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={t.lead.namePlaceholder}
            className="form-input"
          />
        </FieldGroup>

        {/* Email */}
        <FieldGroup label={t.lead.email} error={errors.email} required>
          <input
            type="email"
            value={formData.email ?? ""}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder={t.lead.emailPlaceholder}
            className="form-input"
          />
        </FieldGroup>

        {/* Phone */}
        <FieldGroup label={t.lead.phone} error={errors.phone} required>
          <input
            type="tel"
            value={formData.phone ?? ""}
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder={t.lead.phonePlaceholder}
            className="form-input"
          />
        </FieldGroup>

        {/* Company */}
        <FieldGroup label={t.lead.company} error={errors.company}>
          <input
            type="text"
            value={formData.company ?? ""}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder={t.lead.companyPlaceholder}
            className="form-input"
          />
        </FieldGroup>

        {/* Project Type */}
        <FieldGroup
          label={t.lead.projectType}
          error={errors.projectType}
          required
        >
          <select
            value={formData.projectType ?? ""}
            onChange={(e) =>
              updateField(
                "projectType",
                e.target.value as
                  | "web"
                  | "mobile"
                  | "ai"
                  | "marketing"
                  | "branding"
                  | "other",
              )
            }
            className="form-input"
          >
            <option value="" disabled>
              {t.lead.projectTypePlaceholder}
            </option>
            {(Object.entries(t.lead.projectTypes) as [string, string][]).map(
              ([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ),
            )}
          </select>
        </FieldGroup>

        {/* Budget Range */}
        <FieldGroup label={t.lead.budgetRange} error={errors.budgetRange}>
          <select
            value={formData.budgetRange ?? ""}
            onChange={(e) =>
              updateField(
                "budgetRange",
                e.target.value as "small" | "medium" | "large" | "enterprise",
              )
            }
            className="form-input"
          >
            <option value="" disabled>
              {t.lead.budgetRangePlaceholder}
            </option>
            {(Object.entries(t.lead.budgetRanges) as [string, string][]).map(
              ([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ),
            )}
          </select>
        </FieldGroup>
      </div>

      {/* Message */}
      <FieldGroup label={t.lead.message} error={errors.message} required>
        <textarea
          value={formData.message ?? ""}
          onChange={(e) => updateField("message", e.target.value)}
          placeholder={t.lead.messagePlaceholder}
          rows={5}
          className="form-input resize-none"
        />
      </FieldGroup>

      {/* Error message */}
      {status === "error" && (
        <p className="font-mono text-xs text-destructive">{t.lead.error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "submitting"}
        className={cn(
          "w-full md:w-auto border px-8 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-200",
          "border-foreground/20 text-foreground hover:bg-foreground hover:text-background",
          "disabled:opacity-50 disabled:cursor-not-allowed",
        )}
      >
        {status === "submitting" ? t.lead.sending : t.lead.submit}
      </button>

      {/* Inline styles for form inputs */}
      <style jsx>{`
        .form-input {
          width: 100%;
          background: transparent;
          border: 1px solid oklch(0.25 0 0 / 0.6);
          padding: 0.75rem 1rem;
          font-family: var(--font-mono);
          font-size: 0.75rem;
          color: oklch(0.95 0 0);
          outline: none;
          transition: border-color 0.2s;
        }
        .form-input::placeholder {
          color: oklch(0.55 0 0);
        }
        .form-input:focus {
          border-color: var(--brand-accent, oklch(1 0 0));
        }
        .form-input option {
          background: oklch(0.08 0 0);
          color: oklch(0.95 0 0);
        }
      `}</style>
    </form>
  );
}

function FieldGroup({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="block font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p className="font-mono text-[10px] text-destructive">{error}</p>
      )}
    </div>
  );
}
