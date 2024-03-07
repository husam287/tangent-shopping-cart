import { useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import useNotificationsToken from "@/hooks/useNotificationsToken";
import handleNotificationRedirection from "@/utils/handleNotificationRedirection";
import { NotificationData } from "@/apis/@types/notification";

export default function useNotificationListner() {
  const navigation = useNavigation();
  const notificationListener = useRef<Notifications.Subscription | undefined>();
  const responseListener = useRef<Notifications.Subscription | undefined>();
  const lastNotificationResponse = Notifications.useLastNotificationResponse();
  const deviceToken = useNotificationsToken();

  // GETTING NOTIFICATION DEVICE TOKEN
  useEffect(() => {
    if (!deviceToken) return;
    console.log("DEVICE TOKEN =>", deviceToken);
  }, [deviceToken]);

  // LISTNERS FOR NOTIFICATIONS
  useEffect(() => {
    // Getting notification
    notificationListener.current =
      Notifications.addNotificationReceivedListener(() => {
        // nothing here
      });

    // Opening notification
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        const notificationData = response?.notification.request.content
          .data as NotificationData;

        handleNotificationRedirection(
          notificationData,
          navigation as NavigationProp<ReactNavigation.RootParamList>
        );
      });

    return () => {
      if (notificationListener?.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }

      if (responseListener?.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  // FOR OPENING NOTIFICATION WHILE CLOSE APP
  useEffect(() => {
    if (!lastNotificationResponse) return;

    const notificationData = lastNotificationResponse?.notification.request
      .content.data as NotificationData;

    handleNotificationRedirection(
      notificationData,
      navigation as NavigationProp<ReactNavigation.RootParamList>
    );
  }, [lastNotificationResponse]);
}
