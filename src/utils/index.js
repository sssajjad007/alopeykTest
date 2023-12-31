import {useRef} from 'react';

export function useThrottled() {
  const pressTime = useRef(0);
  function onTouchablePress(onPress) {
    // if (!onPress || typeof onPress !== 'function') return;
    if (pressTime.current === 0) {
      onPress(...arguments);
      pressTime.current = Date.now();
      return;
    }
    if (Date.now() - pressTime.current > 500) {
      onPress(...arguments);
      pressTime.current = Date.now();
      return;
    }
  }
  return {pressTime, onTouchablePress};
}

export const throttled = (fn, delay = 500) => {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return null;
    }
    lastCall = now;
    return fn(...args);
  };
};
export const getClosestValues = function (a, x) {
  var lo = -1,
    hi = a.length;
  while (hi - lo > 1) {
    var mid = Math.round((lo + hi) / 2);
    if (a[mid] <= x) {
      lo = mid;
    } else {
      hi = mid;
    }
  }
  if (a[lo] === x) {
    hi = lo;
  }
  return [
    {value: a[lo], index: lo},
    {value: a[hi], index: hi},
  ];
};
