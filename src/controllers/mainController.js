export function index (req, res, next) {
  const title = 'Welcome / Santiago'
  const icon = '/img/icon_index.png'
  return res.status(200).render('index', {
    title,
    icon
  })
}

export function cv (req, res, next) {
  const title = 'Mi Currículum / Santiago'
  const icon = '/img/icon_cv.png'
  return res.status(200).render('cv/index', {
    title,
    icon
  })
}

export function google (req, res, next) {
  const title = 'Google / Santiago'
  const icon = ''
  return res.status(200).render('google/index', {
    title,
    icon
  })
}
