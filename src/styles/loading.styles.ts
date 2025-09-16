import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: { flex: 1 },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 48,
    paddingBottom: 96,
    paddingHorizontal: 24,
  },
  header: { alignItems: 'center', gap: 0 },
  loader: { width: 300, alignItems: 'center', gap: 8 },
  progressText: {
    fontFamily: 'LilitaOne',
    fontSize: 22,
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
  },
  bar: {
    width: '100%',
    height: 18,
    borderRadius: 10,
    backgroundColor: '#E5E5E5',
    borderWidth: 3,
    borderColor: '#1A1A1A',
    overflow: 'hidden',
  },
  barFill: { flex: 1, backgroundColor: '#E32626' },
  legal: {
    position: 'absolute',
    bottom: 16,
    left: 24,
    right: 24,
    textAlign: 'center',
    fontFamily: 'LilitaOne',
    fontSize: 10,
    color: 'rgba(255,255,255,0.85)',
  },
});
