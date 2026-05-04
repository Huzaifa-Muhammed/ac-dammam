import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';

const proxy = createMiddleware(routing);

export { proxy };
export default proxy;

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en)/:path*']
};
