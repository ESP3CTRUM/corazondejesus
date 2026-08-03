"use client";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const pdfUrl = "/menu.pdf";

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-base flex flex-col">
      <Header />

      <main className="flex-1 overflow-hidden">
        <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-4 sm:px-6 lg:px-8">
         <div className="relative w-screen h-screen bg-transparent">
            <div className="absolute inset-0 w-screen h-screen bg-transparent" />
            <object data={pdfUrl} type="application/pdf" className="relative w-full h-full">
              <iframe src={pdfUrl} className="w-full h-full" title="Documento PDF" />
              <div className="flex h-full flex-col items-center justify-center gap-4 bg-base p-6 text-center">
                <p className="text-ink-secondary">
                  Tu navegador no puede visualizar el PDF directamente.
                </p>
                <a
                  href={pdfUrl}
                  download
                  className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent/90"
                >
                  Descargar documento
                </a>
              </div>
            </object>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
