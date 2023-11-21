import isBrowser from '../../../utils/isBrowser'

export default function isOnline(): boolean {
  return isBrowser && typeof navigator.onLine !== 'undefined'
    ? navigator.onLine
    : true
}
