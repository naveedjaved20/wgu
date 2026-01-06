import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Speed of Business Scholarship | WGU',
  description: 'Apply for the Speed of Business Scholarship worth up to $3,000 at Western Governors University',
};

export default function ScholarshipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

