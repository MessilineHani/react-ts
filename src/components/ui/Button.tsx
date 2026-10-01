import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../utils/cn'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'min-h-11 rounded-[0.55rem] border px-4 py-2.5 font-bold transition duration-[160ms] hover:-translate-y-px',
        variant === 'primary'
          ? 'border-transparent bg-[#187c74] text-white hover:bg-[#12665f]'
          : 'border-[#b9cdca] bg-transparent text-[#187c74] hover:border-[#187c74] hover:bg-[#eaf4f2]',
        className,
      )}
      {...props}
    />
  )
}
