"use client";

import { motion } from "framer-motion";

import { blockUp } from "@/transition-variants";
import SendEmailBlock from "@/components/ui/footer-components/send-email-block";
import NavigationFooterBlock from "@/components/ui/footer-components/navigation-footer-block";
import LogoButtons from "@/components/ui/logo-button";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-2xl lg:max-w-none"
      >
        <motion.div variants={blockUp}>
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <NavigationFooterBlock />
            <div className="flex lg:justify-end">
              <SendEmailBlock />
            </div>
          </div>
          <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
            <LogoButtons className="[&>*]:fill-gray-950" />
            <p className="text-sm text-neutral-700">
              © Matryoshka Inc., {new Date().getFullYear()}
            </p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;
