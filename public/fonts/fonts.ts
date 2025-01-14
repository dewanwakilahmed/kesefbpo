import { Montserrat, Lato } from 'next/font/google';

export const primaryFont = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});

export const secondaryFont = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
