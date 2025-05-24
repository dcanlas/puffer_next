import ThemeRegistry from "./ThemeRegistry";

export const metadata = {
  title: "Puffer Resort",
  description: "Your perfect beachfront getaway",
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
