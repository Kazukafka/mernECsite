const valid = (name, email, password, cf_password) => {
  if (!name || !email || !password)
    return 'すべての項目を埋めてください'

  if (!validateEmail(email))
    return '無効なメールアドレスです'

  if (password.length < 6)
    return 'パスワードは６文字以上必要です'

  if (password !== cf_password)
    return '入力されたパスワードがマッチしません'
}


function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export default valid
