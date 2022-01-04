import Head from "next/head"
import Link from "next/link"
import { useState, useContext } from "react"
import valid from "../utils/valid"
import { DataContext } from "../store/GlobalState"
import { postData } from "../utils/fetchData"

const Register = () => {
  const initialState = { name: '', email: '', password: '', cf_password: '' }
  const [userData, setUserData] = useState(initialState)
  const { name, email, password, cf_password } = userData

  const [state, dispatch] = useContext(DataContext)

  const handleChangeInput = e => {
    const { name, value } = e.target
    setUserData({ ...userData, [name]: value })
    dispatch({ type: 'NOTIFY', payload: {} })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const errMsg = valid(name, email, password, cf_password)
    if (errMsg) return dispatch({ type: 'NOTIFY', payload: { error: errMsg } })

    dispatch({ type: 'NOTIFY', payload: { loading: true } })

    const res = await postData('auth/register', userData)
    if (res.err) return dispatch({ type: 'NOTIFY', payload: { error: res.err } })

    return dispatch({ type: 'NOTIFY', payload: { success: res.msg } })
  }

  return (
    <div>
      <Head>
        <title>登録</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }} onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">名前</label>
          <input type="name" className="form-control" id="exampleInputName1" aria-describedby="nameHelp"
            name="name" value={name} onChange={handleChangeInput} />

          <label htmlFor="exampleInputEmail1">メールアドレス</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" value={email} onChange={handleChangeInput} />

          <label htmlFor="exampleInputPassword1">パスワード</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            name="password" value={password} onChange={handleChangeInput} />

          <label htmlFor="exampleInputPassword2">パスワード確認</label>
          <input type="password" className="form-control" id="exampleInputPassword2"
            name="cf_password" value={cf_password} onChange={handleChangeInput} />
        </div>

        <button type="submit" className="btn btn-dark w-100">登録</button>

        <p className="my-2">既存のアカウント→
          <Link href="/signin"><a style={{ color: 'crimson' }}>ログイン</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Register
