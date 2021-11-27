import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
        <main>{children}</main>
      <Footer />
    </>
  )
}