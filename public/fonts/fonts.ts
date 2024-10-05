import { Montserrat, Lato } from 'next/font/google';

export const primaryFont = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const secondaryFont = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
});
