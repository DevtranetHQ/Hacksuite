import { useAsync } from "./useAsync";
import { axios } from "../config/config";
import { INotification } from "../server/modules/notification/notification.model";

const subscribeOptions: PushSubscriptionOptionsInit = {
  userVisibleOnly: true,
  applicationServerKey: Buffer.from(process.env.NEXT_PUBLIC_VAPID_KEY, "base64")
};

const getSubscription = async () => {
  const registration = await navigator.serviceWorker.ready;

  const existing = await registration.pushManager.getSubscription();
  if (existing) return existing;

  return registration.pushManager.subscribe(subscribeOptions);
};

const removeSubscription = async () => {
  const registration = await navigator.serviceWorker.ready;

  const subscription = await registration.pushManager.getSubscription();
  if (!subscription) throw new Error(`Push subscription does not exist`);

  await subscription.unsubscribe();

  return subscription;
};

export const useNotifications = () => {
  const subscribe = useAsync(async () => {
    const subscription = await getSubscription();
    const res = await axios.post("/push/subscribe", { subscription: subscription.toJSON() });
    return res.data;
  });

  const unsubscribe = useAsync(async () => {
    const subscription = await removeSubscription();
    const res = await axios.post("/push/unsubscribe", { subscription: subscription.toJSON() });
    return res.data;
  });

  const requestPermission = useAsync(async () => {
    const res = window.Notification.requestPermission();
    return res;
  });

  const getNotifications = useAsync(async (unread: boolean = false) => {
    const res = await axios.get<{ data: INotification[] }>(`/notifications?unread=${unread}`);
    return res.data.data;
  });

  const markAsRead = useAsync(async () => {
    const res = await axios.patch<void>("/notifications?markAsRead=true");
    return res.data;
  });

  const removeNotification = useAsync(async (id: string) => {
    const res = await axios.delete(`/notifications/${id}`);
    return res.data;
  });

  return {
    subscribe,
    unsubscribe,
    requestPermission,
    getNotifications,
    markAsRead,
    removeNotification
  };
};
