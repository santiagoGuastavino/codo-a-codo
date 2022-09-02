export function welcome (req, res, next) {
  const err = new Error('what')
  err.code = 500
  next(err)
}

export function cv (req, res, next) {
  const title = 'Mi Currículum / Santiago'
  return res.status(200).render('cv/index.ejs', {
    title
  })
}
