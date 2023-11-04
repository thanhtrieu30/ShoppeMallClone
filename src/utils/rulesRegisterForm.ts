export const Rules = {
  email: {
    required: {
      value: true,
      message: 'Xin vui lòng nhập Email !'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Không đúng định dạng Email !'
    },
    minLength: {
      value: 5,
      message: 'Nhập ít nhất 5 kí tự'
    },
    maxLength: {
      value: 200,
      message: 'Vượt quá kí tự cho phép'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Xin vui lòng nhập Password !'
    },
    minLength: {
      value: 6,
      message: 'Nhập ít nhất 6 kí tự'
    },
    maxLength: {
      value: 200,
      message: 'Vượt quá kí tự cho phép'
    }
  }
}
