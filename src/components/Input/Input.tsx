import { UseFormRegister, RegisterOptions } from 'react-hook-form'

interface Props {
  className?: string
  type: React.HTMLInputTypeAttribute
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>
  name: string
  rules?: RegisterOptions
  placeholder?: string
  errorMessage?: string
  autoComplete?: string
}

export default function Input({
  className,
  type,
  register,
  name,
  rules,
  placeholder,
  errorMessage,
  autoComplete
}: Props) {
  return (
    <div className={className}>
      <input
        {...register(name, rules)}
        placeholder={placeholder}
        type={type}
        className='w-full p-2 border border-gray-300 outline-none rounded-sm focus:border-gray-500 focus:shadow-md'
        autoComplete={autoComplete}
      />
      <div className=' text-red-600 min-h-[1.25rem] text-sm'>{errorMessage}</div>
    </div>
  )
}
