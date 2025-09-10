import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = { text: string; color: string; strokeColor?: string; strokeWidth?: number; size?: number };

export default function OutlineTitle({ text, color, strokeColor = '#000', strokeWidth = 4, size = 56 }: Props) {
  const s = getStyles({ color, strokeColor, strokeWidth, size });
  const offsets = [
    [-strokeWidth, 0],[strokeWidth, 0],[0,-strokeWidth],[0, strokeWidth],
    [-strokeWidth,-strokeWidth],[strokeWidth,-strokeWidth],[-strokeWidth, strokeWidth],[strokeWidth, strokeWidth],
  ];
  return (
    <View style={s.wrap}>
      {offsets.map(([x,y], i) => <Text key={i} style={[s.outline, { left: x, top: y }]}>{text}</Text>)}
      <Text style={s.fill}>{text}</Text>
    </View>
  );
}

const getStyles = ({ color, strokeColor, strokeWidth, size }: any) => StyleSheet.create({
  wrap: { position: 'relative' },
  outline: { position: 'absolute', fontFamily: 'LilitaOne', fontSize: size, color: strokeColor },
  fill: {
    fontFamily: 'LilitaOne', fontSize: size, color,
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
});
