import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  bg: { flex: 1 },
  safe: { flex: 1, paddingHorizontal: 16 },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  logo: { width: 150, height: 64 },
  topButtons: { flexDirection: 'row', gap: 10 },
  iconBtn: {
    width: 44, height: 44, borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.35)',
    alignItems: 'center', justifyContent: 'center',
  },
  icon: { width: 22, height: 22, tintColor: '#FFF' },

  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 24,
  },
  capy: { width: 300, height: 220 },
  badge: {
    position: 'absolute',
    bottom: 24,
    backgroundColor: '#FF4D4D',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#FFC83D',
    width: 44, height: 44,
    alignItems: 'center', justifyContent: 'center',
  },
  badgeText: { fontSize: 16, fontWeight: '800', color: '#FFF' },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  missionsBtn: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  missionIcon: {
    width: 64, height: 64,
  },
  missionLabel: {
    fontSize: 12, color: '#FFF', fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  playWrap: { },
  playCard: {
    width: 280, height: 92,
    borderRadius: 14,
    backgroundColor: '#FFD33D',
    borderWidth: 4, borderColor: '#C49E22',
    paddingLeft: 70,
    alignItems: 'center', justifyContent: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  playStrip: {
    position: 'absolute',
    left: 10, top: 20, bottom: 20,
    width: 40,
    borderRadius: 8,
    borderWidth: 3, borderColor: '#1A1A1A',
    backgroundColor: '#E5E5E5',
    overflow: 'hidden',
  },
  playStripFill: { flex: 1, backgroundColor: '#E32626' },
  star: {
    position: 'absolute',
    right: 10, top: -10,
    width: 28, height: 28,
  },
  playLabel: {
    fontSize: 28, fontWeight: '900', color: '#2A2A2A', letterSpacing: 1,
    textShadowColor: 'rgba(255,255,255,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 2,
  },
});