import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full overflow-hidden">
            <Image
              src="/logo.jpg"
              alt=""
              width={24}
              height={24}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-semibold text-fd-foreground">HNUSEC</span>
        </span>
      ),
      url: '/',
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        type: 'main',
        text: 'Guide',
        url: '/docs/guide',
        active: 'nested-url',
      },
      {
        type: 'main',
        text: 'Friends',
        url: '/friends',
        active: 'url',
      },
    ],
    githubUrl: 'https://github.com/HnuInformationSec/HNUCTF2025',
  };
}
