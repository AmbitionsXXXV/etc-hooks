import isBrowser from '../../../utils/isBrowser'

export default function isDocumentVisible(): boolean {
  return isBrowser ? document.visibilityState !== 'hidden' : true
}
