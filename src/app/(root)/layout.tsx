import Footer from "@/components/ui/footer";
import Headrer from "@/components/ui/headrer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Headrer />
      <div
        // style={{ borderTopLeftRadius: "40px", borderTopRightRadius: "40px" }}

        className='relative flex flex-auto overflow-hidden bg-white pt-14 rounded-tl-4xl rounded-tr-4xl'
      >
        <div className='relative isolate flex w-full flex-col pt-9'>
          <main className='w-full flex-auto'>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
