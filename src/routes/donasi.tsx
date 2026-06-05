import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Check, CheckCircle2, Copy, Landmark, Send, Heart, MessageCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { DonationTiers } from "@/components/home/DonationTiers";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ORG, formatIDR } from "@/lib/constants";

export const Route = createFileRoute("/donasi")({
  validateSearch: z.object({
    amount: z.number().optional().catch(undefined),
  }),
  head: () => ({
    meta: [
      { title: "Donasi — RKI Bali" },
      {
        name: "description",
        content:
          "Jadi donatur tetap RKI Bali mulai Rp50.000/bulan. Transfer Bank Mandiri 1450013372913 a.n Mery Lusiana / Ledy Yuliawati.",
      },
      { property: "og:title", content: "Donasi — RKI Bali" },
      { property: "og:description", content: "Donasi tetap menjaga pendidikan Al-Qur'an gratis di Denpasar." },
      { property: "og:url", content: "/donasi" },
    ],
    links: [{ rel: "canonical", href: "/donasi" }],
  }),
  component: DonasiPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 huruf").max(80),
  email: z.string().trim().email("Email tidak valid").max(120),
  amount: z
    .union([z.string(), z.number()])
    .transform((v) => (typeof v === "string" ? Number(v) : v))
    .refine((n) => Number.isFinite(n) && n >= 10_000, { message: "Minimal Rp10.000" })
    .refine((n) => n <= 1_000_000_000, { message: "Nominal terlalu besar" }),
  message: z.string().trim().max(500).optional(),
});

type FormValues = z.input<typeof schema>;
type FormOutput = z.output<typeof schema>;

function DonasiPage() {
  const [copied, setCopied] = useState(false);
  const [pending, setPending] = useState<FormOutput | null>(null);

  const copyAccount = async () => {
    try {
      await navigator.clipboard.writeText(ORG.bank.number);
      setCopied(true);
      toast.success("Nomor rekening tersalin");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Tidak dapat menyalin");
    }
  };

  const { amount } = Route.useSearch();
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", amount: amount || 100_000, message: "" },
  });

  const buildMessage = (v: FormOutput, kind: "confirm" | "ask") => {
    const head =
      kind === "confirm"
        ? "Assalamu'alaikum, saya ingin mengkonfirmasi donasi ke RKI Bali."
        : "Assalamu'alaikum, saya ingin berdonasi ke RKI Bali.";
    const tail =
      kind === "confirm"
        ? "Saya sudah melakukan transfer. Mohon konfirmasi diterima. Jazakumullahu khairan."
        : "Mohon info nomor rekening dan tata caranya. Jazakumullahu khairan.";
    return [
      head,
      `Nama: ${v.name}`,
      `Email: ${v.email}`,
      `Nominal: ${formatIDR(v.amount)}`,
      v.message ? `Pesan: ${v.message}` : "",
      tail,
    ]
      .filter(Boolean)
      .join("\n");
  };

  const openWhatsApp = (text: string) => {
    const url = `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Membuka WhatsApp...", { description: "Pesan Anda sudah disiapkan di WhatsApp." });
  };

  const onSubmit = (raw: FormValues) => {
    const v = schema.parse(raw) as FormOutput;
    setPending(v);
  };

  const handleChoice = (kind: "confirm" | "ask") => {
    if (!pending) return;
    openWhatsApp(buildMessage(pending, kind));
    setPending(null);
    form.reset();
  };

  return (
    <>
      <section className="container-rki pt-12 pb-12 md:pt-20 md:pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
            Donasi
          </span>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground text-balance md:text-5xl">
            Mari Menjadi Bagian dari Kebaikan.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            Kontribusi Anda adalah amal jariyah yang akan terus mengalir bersama setiap huruf Al-Qur'an yang dipelajari santri.
          </p>
        </motion.div>
      </section>

      <DonationTiers compact />

      <section className="container-rki py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Bank info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-primary p-8 text-primary-foreground md:p-10"
          >
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold">
              <Landmark className="h-4 w-4" />
              Transfer Bank
            </div>
            <h2 className="mt-2 font-display text-2xl font-bold md:text-3xl">
              Rekening Resmi RKI Bali
            </h2>
            <p className="mt-2 text-sm text-primary-foreground/80">
              Donasi disalurkan melalui {ORG.parent} — amanah dan tercatat.
            </p>

            <div className="mt-8 rounded-2xl bg-primary-foreground/10 p-6 backdrop-blur">
              <div className="text-xs uppercase tracking-wider text-gold">{ORG.bank.name}</div>
              <div className="mt-1 font-display text-3xl font-bold tracking-wide text-primary-foreground tabular-nums md:text-4xl">
                {ORG.bank.number}
              </div>
              <div className="mt-2 text-sm text-primary-foreground/85">
                a.n <strong>{ORG.bank.holder}</strong>
              </div>
              <Button
                onClick={copyAccount}
                variant="secondary"
                className="mt-5 w-full rounded-full bg-gold font-semibold text-gold-foreground hover:bg-gold/90"
              >
                {copied ? <Check className="mr-2 h-4 w-4" /> : <Copy className="mr-2 h-4 w-4" />}
                {copied ? "Tersalin" : "Salin nomor rekening"}
              </Button>
            </div>

            <ul className="mt-8 space-y-2.5 text-sm text-primary-foreground/85">
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" />
                Setelah transfer, mohon konfirmasi via formulir di samping atau WhatsApp.
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" />
                Setiap donasi tercatat dan dilaporkan dalam laporan bulanan.
              </li>
              <li className="flex items-start gap-2">
                <Heart className="mt-0.5 h-4 w-4 shrink-0 text-gold" fill="currentColor" />
                Bukti transfer dapat dikirim ke {ORG.whatsappDisplay}.
              </li>
            </ul>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border md:p-10"
          >
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
              Konfirmasi Donasi Anda
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Isi data Anda — kami akan mengirimkan info lebih lanjut via WhatsApp.
            </p>

            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div>
                <Label htmlFor="name">Nama lengkap</Label>
                <Input id="name" {...form.register("name")} placeholder="Nama Anda" className="mt-1.5 h-11 rounded-xl" />
                {form.formState.errors.name && (
                  <p className="mt-1 text-xs text-destructive">{form.formState.errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" {...form.register("email")} placeholder="anda@email.com" className="mt-1.5 h-11 rounded-xl" />
                {form.formState.errors.email && (
                  <p className="mt-1 text-xs text-destructive">{form.formState.errors.email.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="amount">Nominal donasi (Rp)</Label>
                <Input
                  id="amount"
                  type="number"
                  min={10000}
                  step={10000}
                  {...form.register("amount")}
                  className="mt-1.5 h-11 rounded-xl tabular-nums"
                />
                {form.formState.errors.amount && (
                  <p className="mt-1 text-xs text-destructive">{form.formState.errors.amount.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="message">Pesan (opsional)</Label>
                <Textarea
                  id="message"
                  {...form.register("message")}
                  placeholder="Doa atau pesan untuk para santri..."
                  rows={4}
                  className="mt-1.5 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full h-12 rounded-full bg-primary font-semibold hover:bg-primary/90"
                disabled={form.formState.isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" />
                Kirim via WhatsApp
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Form ini membuka WhatsApp untuk konfirmasi. Tidak ada data yang disimpan di server kami.
              </p>
            </form>
          </motion.div>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <SectionHeading
          eyebrow="Pertanyaan?"
          title="Hubungi kami kapan saja."
          description={`Tim RKI Bali siap menjawab via WhatsApp di ${ORG.whatsappDisplay}.`}
        />
      </section>

      <Dialog open={pending !== null} onOpenChange={(open) => !open && setPending(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-display text-xl">Konfirmasi Donasi</DialogTitle>
            <DialogDescription>
              Sebelum kami membuka WhatsApp, mohon pilih kondisi Anda saat ini agar pesan yang
              terkirim lebih sesuai.
            </DialogDescription>
          </DialogHeader>

          {pending && (
            <div className="rounded-2xl bg-muted/60 p-4 text-sm">
              <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground">
                <span>Nama</span>
                <span className="col-span-2 font-medium text-foreground">{pending.name}</span>
                <span>Email</span>
                <span className="col-span-2 font-medium text-foreground">{pending.email}</span>
                <span>Nominal</span>
                <span className="col-span-2 font-semibold text-primary">{formatIDR(pending.amount)}</span>
              </div>
            </div>
          )}

          <div className="grid gap-3">
            <button
              type="button"
              onClick={() => handleChoice("confirm")}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold text-foreground">
                  Saya sudah transfer
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  Kirim pesan konfirmasi agar donasi Anda segera diverifikasi oleh tim RKI.
                </div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleChoice("ask")}
              className="group flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-left transition hover:border-gold hover:bg-gold/5 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-foreground transition group-hover:bg-gold group-hover:text-gold-foreground">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="font-display text-base font-semibold text-foreground">
                  Saya belum transfer
                </div>
                <div className="mt-0.5 text-xs leading-relaxed text-muted-foreground">
                  Minta nomor rekening resmi dan tata cara transfer ke admin via WhatsApp.
                </div>
              </div>
            </button>
          </div>

          <DialogFooter className="sm:justify-start">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setPending(null)}
              className="rounded-full text-muted-foreground hover:text-foreground"
            >
              <XCircle className="mr-2 h-4 w-4" />
              Batal
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
