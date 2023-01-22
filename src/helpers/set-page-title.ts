export default function (title: string) {
  let pageTitle: string = 'Tages'

  if (title) {
    pageTitle = `${title} - Tages`
  }

  document.title = pageTitle
}