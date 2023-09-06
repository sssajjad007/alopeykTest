import { View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { RootState, useSelector } from '@redux/store';
import { styles } from './styles';
import { StaticMap } from '../Components/StaticMap';

import { OrderDetails } from '../Components/OrderDetails';
import { ListItem } from '../Components/StatusCard';
import { IStatus, IStepName } from '../Components/StatusCard/type';

type IStep = {
  step: IStepName;
  status: IStatus;
  disabled: boolean;
};
export function OrdersScreen() {
  const { categoryName, coordinates, productName, productPrice } = useSelector(
    (state: RootState) => state.order.ActiveOrders
  );
  const [stepOrder, setStepOrder] = useState<IStep[]>([
    {
      status: 'Not-Done',
      step: 'pending',
      disabled: false,
    },
    {
      status: 'Not-Done',
      step: 'in-process',
      disabled: true,
    },
    {
      status: 'Not-Done',
      step: 'delivery',
      disabled: true,
    },
    {
      status: 'Not-Done',
      step: 'delivered',
      disabled: true,
    },
  ]);
  const timer = useRef(30);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setStepOrder([
      {
        status: 'Not-Done',
        step: 'pending',
        disabled: false,
      },
      {
        status: 'Not-Done',
        step: 'in-process',
        disabled: true,
      },
      {
        status: 'Not-Done',
        step: 'delivery',
        disabled: true,
      },
      {
        status: 'Not-Done',
        step: 'delivered',
        disabled: true,
      },
    ]);
  }, [productName]);

  useEffect(() => {
    if (categoryName) {
      interval.current = setInterval(handleTimer, 5000);
      return () => {
        clearTimeout(timer.current);
        clearInterval(interval.current);
      };
    }
  }, [stepOrder]);

  const handleTimer = () => {
    timer.current = timer.current - 5;
    if (timer.current === 0) {
      fetchOrderStatus();
      timer.current = 30;
    }
  };
  const fetchOrderStatus = () => {
    const currentStatus = stepOrder.find((step) => step.status === 'Not-Done');
    if (currentStatus) {
      const nextStep = getNextStep(currentStatus.step);
      const updatedStepOrder = stepOrder.map((index) => {
        if (index.step === currentStatus.step) {
          return {
            ...index,
            status: 'Done' as IStatus,
          };
        }
        if (index.step === nextStep) {
          return {
            ...index,
            disabled: false,
          };
        }
        return index;
      });
      setStepOrder(updatedStepOrder);
    }
  };

  function getNextStep(currentStatus: IStepName) {
    if (currentStatus === 'delivered') {
      clearTimeout(timer.current);
      clearInterval(interval.current);
      return 'delivered';
    }
    switch (currentStatus) {
      case 'pending':
        return 'in-process';
      case 'in-process':
        return 'delivery';
      case 'delivery':
        return 'delivered';
      default:
        return 'pending';
    }
  }

  return (
    <View style={styles.container}>
      {coordinates.latitude && coordinates.longitude ? <StaticMap coordinates={coordinates} /> : null}
      <OrderDetails categoryName={categoryName} productName={productName} productPrice={productPrice} />
      {categoryName && (
        <>
          <ListItem StepName="pending" status={stepOrder[0].status} disabled={stepOrder[0].disabled} />
          <ListItem StepName="in-process" status={stepOrder[1].status} disabled={stepOrder[1].disabled} />
          <ListItem StepName="delivery" status={stepOrder[2].status} disabled={stepOrder[2].disabled} />
          <ListItem StepName="delivered" status={stepOrder[3].status} disabled={stepOrder[3].disabled} />
        </>
      )}
    </View>
  );
}
