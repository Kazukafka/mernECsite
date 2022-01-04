import Head from "next/head"
import Link from "next/link"

const Signin = () => {
  return (
    <div>
      <Head>
        <title>ログイン</title>
      </Head>
      <form className="mx-auto my-4" style={{ maxWidth: '500px' }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">メールアドレス</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">パスワード</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            name="pasu" />
        </div>

        <button type="submit" className="btn btn-dark w-100">ログイン</button>

        <p className="my-2">新規アカウント作成→
          <Link href="/register"><a style={{ color: 'crimson' }}>登録</a></Link>
        </p>
      </form>
    </div>
  )
}

export default Signin
