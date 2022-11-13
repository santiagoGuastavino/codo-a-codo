export function integrator (req, res, next) {
  const title = 'Integrador / Santiago'
  const icon = '/img/icon_int.png'
  return res.status(200).render('integrator', {
    title,
    icon
  })
}

export function integratorBuy (req, res, next) {
  const title = 'Buy tickets / Santiago'
  const icon = '/img/icon_int.png'
  return res.status(200).render('integrator/buy', {
    title,
    icon
  })
}
