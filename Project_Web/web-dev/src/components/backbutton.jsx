'use client';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="text-black hover:text-green-800 font-semibold text-lg py-2 px-4 rounded-2xl bg-green-400 border border-red-950"
    >
      ← Back
    </button>
  );
}