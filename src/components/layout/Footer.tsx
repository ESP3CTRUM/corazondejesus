"use client";
import { motion } from 'motion/react';
import { motionVariants } from '@/lib/motion';

export default function Footer() {
return (
<motion.footer initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}variants={motionVariants.fadeIn}className="bg-dark text-text-on-dark py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
{/* Marca */}
<div>
<a href="/" className="inline-flex items-center">
  <img src="/logo-full.svg" alt="Parador Corazón de Jesús" className="h-10 w-auto" />
</a>
<p className="text-text-on-dark/80">
Comida criolla dominicana<br>
</br> y barbacoa a la leña.
</p>
</div>
      {/* Redes y telefonos */}
      <div>
        <h4 className="font-heading text-xl font-semibold text(--text-primary) mb-4">
          Síguenos en nuestras redes
        </h4>
        <div className="grid grid-cols-2 gap-3 max-w-55">
          <a
            href="https://www.instagram.com/paradorcorazondejesus/?hl=es"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M16.3748 3.24984C17.5342 3.25331 18.6451 3.71539 19.4648 4.53517C20.2846 5.35495 20.7467 6.46582 20.7502 7.62516V16.3748C20.7467 17.5342 20.2846 18.6451 19.4648 19.4648C18.6451 20.2846 17.5342 20.7467 16.3748 20.7502H7.62516C6.46582 20.7467 5.35495 20.2846 4.53517 19.4648C3.71539 18.6451 3.25331 17.5342 3.24984 16.3748V7.62516C3.25331 6.46582 3.71539 5.35495 4.53517 4.53517C5.35495 3.71539 6.46582 3.25331 7.62516 3.24984H16.3748ZM16.3748 1.5H7.62516C4.25625 1.5 1.5 4.25625 1.5 7.62516V16.3748C1.5 19.7437 4.25625 22.5 7.62516 22.5H16.3748C19.7437 22.5 22.5 19.7437 22.5 16.3748V7.62516C22.5 4.25625 19.7437 1.5 16.3748 1.5Z"/>
              <path d="M17.6873 7.62516C17.4278 7.62516 17.174 7.54818 16.9582 7.40396C16.7423 7.25974 16.5741 7.05476 16.4748 6.81493C16.3754 6.5751 16.3494 6.3112 16.4001 6.0566C16.4507 5.802 16.5757 5.56814 16.7593 5.38458C16.9428 5.20102 17.1767 5.07602 17.4313 5.02538C17.6859 4.97473 17.9498 5.00072 18.1896 5.10006C18.4294 5.1994 18.6344 5.36763 18.7786 5.58347C18.9229 5.79931 18.9998 6.05307 18.9998 6.31266C19.0002 6.48512 18.9665 6.65596 18.9007 6.81537C18.8349 6.97477 18.7382 7.11961 18.6162 7.24156C18.4943 7.36351 18.3495 7.46018 18.1901 7.526C18.0306 7.59183 17.8598 7.62553 17.6873 7.62516Z"/>
              <path d="M12 8.49984C12.6923 8.49984 13.369 8.70512 13.9446 9.08973C14.5202 9.47433 14.9688 10.021 15.2337 10.6605C15.4986 11.3001 15.568 12.0039 15.4329 12.6828C15.2978 13.3618 14.9645 13.9855 14.475 14.475C13.9855 14.9645 13.3618 15.2978 12.6828 15.4329C12.0039 15.568 11.3001 15.4986 10.6605 15.2337C10.021 14.9688 9.47433 14.5202 9.08973 13.9446C8.70512 13.369 8.49984 12.6923 8.49984 12C8.50084 11.072 8.86992 10.1823 9.52611 9.52611C10.1823 8.86992 11.072 8.50084 12 8.49984ZM12 6.75C10.9616 6.75 9.94662 7.05791 9.08326 7.63478C8.2199 8.21166 7.54699 9.0316 7.14963 9.99091C6.75227 10.9502 6.64831 12.0058 6.85088 13.0242C7.05345 14.0426 7.55346 14.9781 8.28769 15.7123C9.02192 16.4465 9.95738 16.9466 10.9758 17.1491C11.9942 17.3517 13.0498 17.2477 14.0091 16.8504C14.9684 16.453 15.7883 15.7801 16.3652 14.9167C16.9421 14.0534 17.25 13.0384 17.25 12C17.25 10.6076 16.6969 9.27226 15.7123 8.28769C14.7277 7.30312 13.3924 6.75 12 6.75Z"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/paradorcorazondejesus/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center"
          >
            <svg className="h-12 w-12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path clipRule="evenodd" d="M22.5 12.0632C22.5 6.26479 17.7984 1.56323 12 1.56323C6.20156 1.56323 1.5 6.26479 1.5 12.0632C1.5 17.3039 5.33906 21.6478 10.3594 22.4362V15.0993H7.69266V12.0632H10.3594V9.74995C10.3594 7.11886 11.9273 5.66433 14.3255 5.66433C15.4744 5.66433 16.6763 5.86964 16.6763 5.86964V8.45386H15.3516C14.048 8.45386 13.6402 9.26292 13.6402 10.0945V12.0632H16.552L16.087 15.0993H13.6406V22.4371C18.6609 21.6492 22.5 17.3053 22.5 12.0632Z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Contacto */}
      <div>
        <h4 className="font-heading text-xl font-semibold mb-4">
          Contacto
        </h4>
        <div className="space-y-2 text-text-on-dark/80">
          <p>Jarabacoa: +1 809-865-4811</p>
          <p>Bonao: +1 809-865-2711</p>
        </div>
      </div>
    </div>

    <div className="mt-12 pt-8 border-t border-wood/30 text-center text-text-on-dark/60">
      <p>&copy; {new Date().getFullYear()} Parador Corazón de Jesús. Todos los derechos reservados.</p>
    </div>
  </div>
</motion.footer>);}