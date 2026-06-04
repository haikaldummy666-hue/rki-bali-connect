import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { TrendingUp, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getFinanceData, addDonation, updateFinanceData } from "@/lib/api/finance.functions";
import { formatIDR } from "@/lib/constants";

export const Route = createFileRoute("/admindaifoundation")({
  loader: async () => await getFinanceData(),
  meta: () => [{ title: "Admin Dai Foundation" }],
  component: AdminPage,
});

function AdminPage() {
  const finance = Route.useLoaderData();
  const router = useRouter();
  
  const [donationAmount, setDonationAmount] = useState("");
  const [income, setIncome] = useState(finance.income.toString());
  const [expense, setExpense] = useState(finance.expense.toString());
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddDonation = async (e: React.FormEvent) => {
    e.preventDefault();
    const amount = Number(donationAmount);
    if (!amount || amount < 1) {
      toast.error("Masukkan nominal yang valid");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await addDonation({ data: { amount } });
      await router.invalidate();
      toast.success("Donasi berhasil ditambahkan", {
        description: `Pemasukan bertambah ${formatIDR(amount)}`
      });
      setDonationAmount("");
      // Update local state to reflect changes without full reload
      const newFinance = await getFinanceData();
      setIncome(newFinance.income.toString());
      setExpense(newFinance.expense.toString());
    } catch (error) {
      toast.error("Gagal menambahkan donasi");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleUpdateFinance = async (e: React.FormEvent) => {
    e.preventDefault();
    const newIncome = Number(income);
    const newExpense = Number(expense);
    
    if (newIncome < 0 || newExpense < 0) {
      toast.error("Nominal tidak boleh negatif");
      return;
    }
    
    setIsSubmitting(true);
    try {
      await updateFinanceData({ data: { income: newIncome, expense: newExpense } });
      await router.invalidate();
      toast.success("Data keuangan berhasil diperbarui");
    } catch (error) {
      toast.error("Gagal memperbarui data");
    } finally {
      setIsSubmitting(false);
    }
  };

  const coverPct = Math.round((finance.income / finance.expense) * 100);

  return (
    <div className="container-rki py-12 md:py-20">
      <div className="mb-10 max-w-2xl">
        <h1 className="font-display text-3xl font-bold text-foreground">
          Dashboard Admin
        </h1>
        <p className="mt-2 text-muted-foreground">
          Kelola data keuangan global. Perubahan di sini akan langsung terlihat di halaman Transparansi.
          (Catatan: Data ini tersimpan di memori server dan akan ter-reset saat server Vercel restart karena tidak terhubung ke database).
        </p>
      </div>

      <div className="mb-10 grid gap-5 md:grid-cols-3">
        <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
          <div className="text-sm font-medium text-muted-foreground">Pemasukan Global</div>
          <div className="mt-1 font-display text-2xl font-bold text-primary">{formatIDR(finance.income)}</div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
          <div className="text-sm font-medium text-muted-foreground">Pengeluaran Target</div>
          <div className="mt-1 font-display text-2xl font-bold text-gold">{formatIDR(finance.expense)}</div>
        </div>
        <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
          <div className="text-sm font-medium text-muted-foreground">Persentase Tercover</div>
          <div className="mt-1 font-display text-2xl font-bold text-foreground">{coverPct}%</div>
        </div>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {/* Tambah Donasi Baru */}
        <div className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <h2 className="font-display text-xl font-bold">Tambah Donasi Cepat</h2>
          </div>
          
          <form onSubmit={handleAddDonation} className="space-y-4">
            <div>
              <Label htmlFor="donationAmount">Nominal Donasi Baru (Rp)</Label>
              <Input
                id="donationAmount"
                type="number"
                placeholder="Contoh: 100000"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
                className="mt-1.5 tabular-nums"
              />
            </div>
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting || !donationAmount}
            >
              Tambahkan Pemasukan
            </Button>
          </form>
        </div>

        {/* Update Keuangan Global */}
        <div className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/15">
              <Settings className="h-5 w-5 text-gold" />
            </div>
            <h2 className="font-display text-xl font-bold">Update Master Data</h2>
          </div>
          
          <form onSubmit={handleUpdateFinance} className="space-y-4">
            <div>
              <Label htmlFor="income">Total Pemasukan (Rp)</Label>
              <Input
                id="income"
                type="number"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
                className="mt-1.5 tabular-nums"
              />
            </div>
            <div>
              <Label htmlFor="expense">Total Pengeluaran (Rp)</Label>
              <Input
                id="expense"
                type="number"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
                className="mt-1.5 tabular-nums"
              />
            </div>
            <Button
              type="submit"
              variant="secondary"
              className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
              disabled={isSubmitting}
            >
              Simpan Perubahan
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
