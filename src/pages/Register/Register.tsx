import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getRules } from '../../utils/rulesRegisterForm'
import Input from '../../components/Input'

interface TypeForm {
  email: string
  password: string
  confirm_password?: string
}

export default function Register() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors }
  } = useForm<TypeForm>()

  const Rules = getRules(getValues)
  const onSubmit = handleSubmit(
    (data) => {
      console.log(data)
    },
    () => {
      const password = getValues('password')
      console.log(password)
    }
  )

  return (
    <div className='bg-registerBg'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='lg:bg-hero-pattern bg-contain bg-no-repeat h-[600px]  '>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-5 bg-white shadow-sm rounded' onSubmit={onSubmit}>
                <div className='text-xl '>Đăng ký</div>
                {/* email */}
                <Input
                  name='email'
                  rules={Rules.email}
                  className='mt-8'
                  register={register}
                  placeholder='Email'
                  type='text'
                  errorMessage={errors.email?.message}
                  autoComplete='on'
                />
                {/* password */}
                <Input
                  name='password'
                  rules={Rules.password}
                  className='mt-2'
                  register={register}
                  placeholder='Mật khẩu'
                  type='password'
                  errorMessage={errors.password?.message}
                  autoComplete='on'
                />

                {/* confirm_password */}
                <Input
                  name='confirm_password'
                  rules={Rules.confirm_password}
                  className='mt-2'
                  register={register}
                  placeholder='Nhập lại mật khẩu'
                  type='password'
                  errorMessage={errors.confirm_password?.message}
                  autoComplete='on'
                />
                <button className='mt-3 bg-main w-full p-2 text-white rounded-sm'>Đăng ký</button>
                <div className='flex p-5 w-full justify-center items-center '>
                  <p className='text-sm mr-2 text-non'>Bạn đã có tài khoản?</p>
                  <Link to='/login' className='text-md text-main'>
                    Đăng nhập
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
