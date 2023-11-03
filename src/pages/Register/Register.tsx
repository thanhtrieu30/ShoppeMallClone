import { Link } from 'react-router-dom'

export default function Register() {
  return (
    <div className='bg-registerBg'>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='lg:bg-hero-pattern bg-contain bg-no-repeat h-[600px]  '>
          <div className='grid grid-cols-1 lg:grid-cols-5 py-12 lg:py-32 lg:pr-10'>
            <div className='lg:col-span-2 lg:col-start-4'>
              <form className='p-5 bg-white shadow-sm rounded'>
                <div className='text-xl '>Đăng ký</div>
                <div className='mt-8'>
                  <input
                    placeholder='Email'
                    type='text'
                    name='email'
                    className='w-full p-2 border border-gray-300 outline-none rounded-sm focus:border-gray-500 focus:shadow-md'
                  />
                  {/* <div className='mt-1 text-red-600 min-h-[1rem] text-sm'>Email không tồn tại</div> */}
                </div>
                <div className='mt-3'>
                  <input
                    placeholder='Mật khẩu'
                    type='password'
                    name='password'
                    className='w-full p-2 border border-gray-300 outline-none rounded-sm focus:border-gray-500'
                  />
                </div>
                <div className='mt-3'>
                  <input
                    placeholder='Nhập lại mật khẩu'
                    type='password'
                    name='confirm_password'
                    className='w-full p-2 border border-gray-300 outline-none rounded-sm focus:border-gray-500'
                  />
                </div>
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
