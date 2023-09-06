import getPosition from '@utils/position';
import { useRef } from 'react';
import { Alert } from 'react-native';

export default function usePosition(onPositionFound: any, showAlert = true) {
  const openSettingRequest = useRef(false);
  const checkPosition = () =>
    new Promise((resolve) =>
      getPosition(false)
        //@ts-ignore
        .then(({ coords }) => {
          openSettingRequest.current = false;
          const { latitude, longitude } = coords;
          const postilion = { lat: latitude, lng: longitude };
          onPositionFound(postilion);
          resolve(postilion);
        })
        .catch(({ msg, code }) => {
          console.log('msg: ', msg);
          console.log('code: ', code);
          Alert.alert('خطا', msg, [{ text: 'باشه', onPress: () => {} }]);
          //   if (showAlert) {
          // showAlertModal({
          //   message: msg,
          //   buttons: code === 1 && [
          //     {
          //       title: 'فعال سازی',
          //       onPress: () => {
          //         openSettingRequest.current = true;
          //         Navigation.dismissOverlay('OVERLAY_ALERT');
          //         try {
          //           Linking.openSettings();
          //         } catch (e) {}
          //       },
          //     },
          //     {
          //       title: 'انصراف',
          //       onPress: 'close',
          //       outline: true,
          //     },
          //   ],
          // });
          //   }
          resolve(null);
        })
    );

  return { checkPosition };
}
