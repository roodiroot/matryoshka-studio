import InputFooterSendEmail from '@/components/ui/footer-components/input-footer-send-email';

const SendEmailBlock = () => {
  return (
    <div className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Обратная связь
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Подпишитесь, чтобы получать последние новости дизайна, статьи, ресурсы и вдохновение.
      </p>
      <InputFooterSendEmail className="mt-6" />
    </div>
  );
};

export default SendEmailBlock;
