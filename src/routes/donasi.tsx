import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Copy, Check, Landmark, Send, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { DonationTiers } from "@/components/home/DonationTiers";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ORG, formatIDR } from "@/lib/constants";

export const Route = createFileRoute("/donasi")({
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
  amount: z.coerce.number({ message: "Masukkan nominal" }).int().min(10_000, "Minimal Rp10.000").max(1_000_000_000),
  message: z.string().trim().max(500).optional(),
});

type FormValues = z.infer<typeof schema>;

function DonasiPage() {
  const [copied, setCopied] = useState(false);

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

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", amount: 100_000, message: "" },
  });

  const onSubmit = (v: FormValues) => {
    const text = [
      "Assalamu'alaikum, saya ingin berdonasi ke RKI Bali.",
      `Nama: ${v.name}`,
      `Email: ${v.email}`,
      `Nominal: ${formatIDR(v.amount)}`,
      v.message ? `Pesan: ${v.message}` : "",
      "Mohon konfirmasi nomor rekening dan tata caranya. Terima kasih.",
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${ORG.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Membuka WhatsApp...", { description: "Konfirmasi donasi Anda di WhatsApp." });
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
            Donasi Anda menyalakan harapan.
          </h1>
          <p className="mt-5 text-base text-muted-foreground md:text-lg text-balance">
            Pilih tier yang nyaman, transfer langsung ke rekening yayasan, lalu konfirmasi via WhatsApp.
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
    </>
  );
}
