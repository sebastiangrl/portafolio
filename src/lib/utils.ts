// src/lib/utils.ts
import { type ClassValue, clsx } from "clsx";

/**
 * Utilidad para combinar clases CSS de manera condicional
 * Combina clsx con nuestras utilidades personalizadas
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formatea una fecha según el locale
 */
export function formatDate(
  date: string | Date,
  locale: string = 'es',
  options?: Intl.DateTimeFormatOptions
): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date;
  
  const defaultOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    ...options,
  };

  return new Intl.DateTimeFormat(locale, defaultOptions).format(dateObj);
}

/**
 * Convierte un string a slug (URL-friendly)
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remover acentos
    .replace(/[^a-z0-9\s-]/g, '') // Remover caracteres especiales
    .replace(/\s+/g, '-') // Espacios a guiones
    .replace(/-+/g, '-') // Múltiples guiones a uno
    .trim();
}

/**
 * Calcula el tiempo transcurrido desde una fecha
 */
export function getTimeSince(date: string | Date, locale: string = 'es'): string {
  const now = new Date();
  const past = typeof date === 'string' ? new Date(date) : date;
  const diffInMs = now.getTime() - past.getTime();
  
  const years = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));
  const months = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
  const days = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  if (years > 0) {
    return locale === 'es' ? `${years} año${years > 1 ? 's' : ''}` : `${years} year${years > 1 ? 's' : ''}`;
  }
  if (months > 0) {
    return locale === 'es' ? `${months} mes${months > 1 ? 'es' : ''}` : `${months} month${months > 1 ? 's' : ''}`;
  }
  return locale === 'es' ? `${days} día${days > 1 ? 's' : ''}` : `${days} day${days > 1 ? 's' : ''}`;
}

/**
 * Valida si una URL es externa
 */
export function isExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url);
    return urlObj.origin !== window.location.origin;
  } catch {
    return false;
  }
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

/**
 * Debounce function para optimizar renders
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function para eventos de scroll
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(this: any, ...args: Parameters<T>) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/**
 * Copia texto al clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Error copying to clipboard:', err);
    return false;
  }
}

/**
 * Detecta si el dispositivo es móvil
 */
export function isMobile(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
}

/**
 * Scroll suave a un elemento
 */
export function scrollToElement(elementId: string, offset: number = 100): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Formatea números con separadores de miles
 */
export function formatNumber(num: number, locale: string = 'es-CO'): string {
  return new Intl.NumberFormat(locale).format(num);
}

/**
 * Calcula el porcentaje de scroll de la página
 */
export function getScrollPercentage(): number {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return Math.round((scrollTop / docHeight) * 100);
}