import { clientUrl } from './config'

export default (input) => {
  return clientUrl + '?i=' + input
}
