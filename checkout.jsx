npm install formik --save
npm install yup --save


import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'
import CommonLayout from '../../layouts/commonLayout/CommonLayout'
import styles from './styles.module.scss'

function Checkout() {
  return (
    <CommonLayout>
      <div className={styles.checkoutContainer}>
        <div className={styles.left}>
          <Formik
            initialValues={{ firstName: '', lastName: '', email: '' }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, 'toi da 15 thoi thanh nien')
                .min(5, 'toi thieu 5 nhe')
                .required('Required'),
              lastName: Yup.string()
                .max(10, 'toi da 10 thoi thanh nien')
                .min(5, 'toi thieu 5 nhe')
                .required('Required'),
              email: Yup.string()
                .email('Invalid Email')
                .required('Nhap vao di nao'),
            })}
            onSubmit={(values, { setSubmiting }) => {
              console.log(values)
              setSubmiting(false)
            }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    {...formik.getFieldProps('firstName')}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    {...formik.getFieldProps('lastName')}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div>{formik.errors.email}</div>
                  ) : null}
                </div>
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        </div>
        <div className={styles.right}>
          <Formik
            initialValues={{ ten: '', ho: '', mail: '' }}
            validationSchema={Yup.object({
              ten: Yup.string()
                .required('Required')
                .max(15, 'toi da 15 thoi thanh nien'),
              ho: Yup.string()
                .required('Required')
                .max(12, 'toi da 12 thoi thanh nien'),
              mail: Yup.string().email('khong hop le').required('Required'),
            })}
            onSubmit={(values, { resetForm }) => {
              console.log(values)
              resetForm()
            }}
          >
            <Form>
              {['ten', 'ho', 'mail'].map((item, index) => (
                <div key={index}>
                  <label htmlFor={item}>Nhap {item} vao</label>
                  <Field name={item} type="text" />
                  <ErrorMessage name={item} />
                </div>
              ))}

              <button type="submit">Gui ket qua</button>
            </Form>
          </Formik>
        </div>
      </div>
    </CommonLayout>
  )
}

export default Checkout
