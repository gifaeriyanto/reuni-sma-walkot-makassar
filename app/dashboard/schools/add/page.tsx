"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AddSchoolPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    subdomain: "",
    address: "",
    totalAlumni: "",
    contactPerson: "",
    contactPhone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Auto-generate subdomain from school name
    if (name === "name") {
      const subdomain = value
        .toLowerCase()
        .replace(/sma negeri /gi, "sman")
        .replace(/sma /gi, "sma")
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
      setFormData((prev) => ({
        ...prev,
        subdomain,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Add API call to submit school data
    console.log("Form submitted:", formData);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    // Redirect to schools list
    router.push("/dashboard/schools");
  };

  const registrationUrl = formData.subdomain
    ? `https://${formData.subdomain}.reuni-sma.com`
    : "";

  return (
    <div className="space-y-6 p-4 sm:p-6">
      <div className="mx-auto max-w-3xl">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/dashboard/schools"
            className="mb-4 inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Daftar SMA
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Tambah SMA Baru</h1>
          <p className="mt-1 text-sm text-gray-600">
            Tambahkan SMA baru ke dalam sistem reuni
          </p>
        </div>

        {/* Form */}
        <div className="rounded-lg border border-gray-200 bg-white p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* School Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nama SMA <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="contoh: SMA Negeri 1 Makassar"
              />
            </div>

            {/* Subdomain */}
            <div>
              <label
                htmlFor="subdomain"
                className="block text-sm font-medium text-gray-700"
              >
                Subdomain <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <div className="flex">
                  <input
                    type="text"
                    id="subdomain"
                    name="subdomain"
                    value={formData.subdomain}
                    onChange={handleChange}
                    required
                    pattern="[a-z0-9-]+"
                    className="flex-1 rounded-l-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                    placeholder="sman1-makassar"
                  />
                  <span className="inline-flex items-center rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 px-4 text-sm text-gray-600">
                    .reuni-sma.com
                  </span>
                </div>
                {registrationUrl && (
                  <p className="mt-2 text-xs text-gray-500">
                    Link registrasi:{" "}
                    <span className="font-medium text-blue-600">
                      {registrationUrl}
                    </span>
                  </p>
                )}
              </div>
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Alamat <span className="text-red-500">*</span>
              </label>
              <textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                rows={3}
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Masukkan alamat lengkap SMA"
              />
            </div>

            {/* Total Alumni */}
            <div>
              <label
                htmlFor="totalAlumni"
                className="block text-sm font-medium text-gray-700"
              >
                Estimasi Total Alumni <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                id="totalAlumni"
                name="totalAlumni"
                value={formData.totalAlumni}
                onChange={handleChange}
                required
                min="1"
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="contoh: 500"
              />
            </div>

            {/* Contact Person */}
            <div>
              <label
                htmlFor="contactPerson"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contactPerson"
                name="contactPerson"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="Masukkan nama PIC"
              />
            </div>

            {/* Contact Phone */}
            <div>
              <label
                htmlFor="contactPhone"
                className="block text-sm font-medium text-gray-700"
              >
                Nomor Telepon Contact Person <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            {/* Registration Link Preview */}
            {registrationUrl && (
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                <h3 className="text-sm font-medium text-blue-900">
                  Link Registrasi Alumni
                </h3>
                <p className="mt-1 text-sm text-blue-700">
                  Alumni dari SMA ini dapat mendaftar melalui link:
                </p>
                <div className="mt-2 rounded-md bg-white p-3">
                  <code className="text-sm font-mono text-blue-600">
                    {registrationUrl}
                  </code>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 border-t border-gray-200 pt-6">
              <button
                type="button"
                onClick={() => router.push("/dashboard/schools")}
                className="flex-1 rounded-lg border border-gray-300 bg-white px-4 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
              >
                Batal
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Menyimpan..." : "Simpan"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
