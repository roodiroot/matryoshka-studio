import Link from "next/link";
import BlockDemoText from "./block-demo-text";
import Button from "@/components/ui/button";
import LogoButtons from "@/components/ui/logo-button";

const ContentDemo = () => {
  return (
    <div className="absolute inset-0 z-50 text-white text-lg overflow-hidden">
      <div className="h-full py-2  mx-auto max-w-7xl px-6 sm:py-4 lg:py-10 lg:px-8">
        <div className="w-full h-full flex flex-col">
          <div className=" flex justify-between items-center py-4 sm:py-6 lg:py-8">
            <LogoButtons className="[&>*]:fill-neutral-300 w-[120px] sm:w-[150px]" />
            <Button type="white" to="/" label="Перейти на сайт" />
          </div>
          <div className="-mx-10 md:mx-0 py-8 flex justify-end flex-1 items-center">
            {/* <BlockDemoText /> */}
          </div>
          <div className="w-full flex justify-between items-center py-4  sm:py-6 lg:py-8">
            <a
              href="https://t.me/KitisF"
              target="_blank"
              className="max-w-[200px] text-xs"
            >
              Матрешку придумала и нарисовала @KitisF
            </a>
            <Link
              href="https://github.com/roodiroot/matryoshka-studio"
              target="_blank"
              className="flex-1 text-right text-xs"
            >
              {"<Source />"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDemo;
