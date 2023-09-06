import React, { useState } from 'react';
import { Image, Text, View, StyleSheet, TouchableWithoutFeedback, LayoutChangeEvent } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { IListItemProps } from './type';
import { styles } from './styles';

const duration = {
  duration: 250,
};
export const ListItem = (props: IListItemProps) => {
  const { StepName, status, disabled } = props;
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    !disabled && setExpanded(!expanded);
  };

  return (
    <TouchableWithoutFeedback onPress={onItemPress}>
      <View style={[styles.wrap, disabled && { borderColor: '#ccc' }]}>
        <View style={styles.container}>
          <Text style={[styles.text, disabled && { color: '#cccc' }]}>{StepName}</Text>
        </View>
        <CollapsibleContainer expanded={expanded}>
          <Text style={[styles.details]}>{status}</Text>
        </CollapsibleContainer>
      </View>
    </TouchableWithoutFeedback>
  );
};

export const CollapsibleContainer = ({ children, expanded }: { children: React.ReactNode; expanded: boolean }) => {
  const [height, setHeight] = useState(0);
  const animatedHeight = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const onLayoutHeight = event.nativeEvent.layout.height;

    if (onLayoutHeight > 0 && height !== onLayoutHeight) {
      setHeight(onLayoutHeight);
    }
  };

  const collapsibleStyle = useAnimatedStyle(() => {
    animatedHeight.value = expanded ? withTiming(height, duration) : withTiming(0, duration);

    return {
      height: animatedHeight.value,
    };
  }, [expanded]);

  return (
    <Animated.View style={[collapsibleStyle, { overflow: 'hidden' }]}>
      <View style={{ position: 'absolute' }} onLayout={onLayout}>
        {children}
      </View>
    </Animated.View>
  );
};
