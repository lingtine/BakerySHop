import { Header, Footer } from "~/components";

function DefaultPage({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default DefaultPage;
