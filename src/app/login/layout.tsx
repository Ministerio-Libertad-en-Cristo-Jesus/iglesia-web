import { noto } from "../ui/fonts"

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section className={`${noto.className}`}>
      {children}
    </section>
  )
}
