import { atom } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

export const jobAtom = atom({
    key: "jobAtom",
    default: 0
})

export const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

export const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

export const totalNotificationSelector = atom({
    key: "totalNotificationSelector",
    get: ({get}) => {
        const networkNotificationCount = get(networkAtom);
        const jobsAtomCount = get(jobAtomAtom);
        const notificationAtomCount = get(notificationAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkNotificationCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
})