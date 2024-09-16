import {RecoilRoot, useRecoilValue } from 'recoil'
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from './atoms'

function App() {

  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobAtom)
  const notificationAtomCount = useRecoilValue(notificationAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>
      <button>My network({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>notification ({notificationAtomCount})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
