// import { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'
// type Rule = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export const getRules = (getValues?: UseFormGetValues<any>): Rule => ({
//   email: {
//     required: {
//       value: true,
//       message: 'Xin vui lòng nhập Email !'
//     },
//     pattern: {
//       value: /^\S+@\S+\.\S+$/,
//       message: 'Không đúng định dạng Email !'
//     },
//     minLength: {
//       value: 5,
//       message: 'Nhập ít nhất 5 kí tự'
//     },
//     maxLength: {
//       value: 200,
//       message: 'Vượt quá kí tự cho phép'
//     }
//   },
//   password: {
//     required: {
//       value: true,
//       message: 'Xin vui lòng nhập Password !'
//     },
//     minLength: {
//       value: 6,
//       message: 'Nhập ít nhất 6 kí tự'
//     },
//     maxLength: {
//       value: 200,
//       message: 'Vượt quá kí tự cho phép'
//     }
//   },
//   confirm_password: {
//     required: {
//       value: true,
//       message: 'Xin vui lòng nhập Password !'
//     },
//     minLength: {
//       value: 6,
//       message: 'Nhập ít nhất 6 kí tự'
//     },
//     maxLength: {
//       value: 200,
//       message: 'Vượt quá kí tự cho phép'
//     },
//     validate:
//       typeof getValues === 'function'
//         ? (value) => value === getValues('password') || 'Nhập lại password không khớp'
//         : undefined
//   }
// })

// yup validate
export const schema = yup
  .object({
    email: yup
      .string()
      .required('Xin vui lòng nhập email !')
      .email('Email không đúng định dạng !')
      .min(5, 'Độ dài từ 5-160 kí tự !')
      .max(160, 'Độ dài từ 5-160 kí tự !'),
    password: yup
      .string()
      .required('Xin vui lòng nhập mật khẩu !')
      .min(5, 'Độ dài từ 6-160 kí tự !')
      .max(160, 'Độ dài từ 6-160 kí tự !'),
    confirm_password: yup
      .string()
      .required('Xin vui lòng nhập lại mật khẩu !')
      .min(5, 'Độ dài từ 6-160 kí tự !')
      .max(160, 'Độ dài từ 6-160 kí tự !')
      .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp !')
  })
  .required()

export type Schema = yup.InferType<typeof schema>
