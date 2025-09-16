import { StyleSheet, Platform } from 'react-native';

export const styles = StyleSheet.create({
  /* ROOT */
  bg: { flex: 1 },
  safe: { flex: 1 },

  /* TOP BAR */
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingHorizontal: 16,
  },
  logo: { width: 140, height: 70 },
  topButtons: { flexDirection: 'row', gap: 12 },
  iconBtn: {
    width: 48,
    height: 42,
    borderRadius: 10,
    backgroundColor: '#2D3440',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    ...Platform.select({ android: { elevation: 6 } }),
  },
  icon: { width: 20, height: 20, tintColor: '#FFF' },

  /* CENTER CAPY */
  centerWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  capy: {
    width: '25%',       // responsive for phones
    aspectRatio: 1,     // keeps shape balanced
  },

  /* BADGE */
  badge: {
    position: 'absolute',
    bottom: '10%',
    alignSelf: 'center',
    width: 56,
    height: 68,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeBg: { position: 'absolute', width: '100%', height: '100%' },
  badgeText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#FFE86B',
    textShadowColor: '#7A0A0A',
    textShadowRadius: 4,
    textShadowOffset: { width: 0, height: 2 },
  },

  /* MISSIONS (absolute bottom-left) */
  missionsBtn: {
    position: 'absolute',
    left: 12,
    bottom: 14,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#1D232D',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
  },
  missionIcon: { width: 40, height: 40 },
  missionLabel: {
    fontSize: 11,
    color: '#FFF',
    fontWeight: '800',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },

  /* PLAY (absolute bottom-right) */
  playWrap: {
    position: 'absolute',
    right: 12,
    bottom: 16,
  },

  playCard: {
    width: 220,                // fixed width (good for phones)
    height: 80,                // fixed height for a card look
    borderRadius: 12,
    backgroundColor: '#F5C11F',
    borderWidth: 5,
    borderColor: '#151515',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    ...Platform.select({ android: { elevation: 4 } }),
  },

  playInner: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* PROGRESS BLOCKS ABOVE THE CARD */
  progressRow: {
    position: 'absolute',
    left: 16,
    right: 44,
    top: -22,
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  progressBlock: {
    width: 22,
    height: 16,
    borderRadius: 3,
    backgroundColor: '#2B2F38',
    borderWidth: 2,
    borderColor: '#0E0E0E',
  },
  progressFilled: { backgroundColor: '#F58D21' },

  playLabel: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 0.5,
    textShadowColor: '#151515',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },

  /* STAR OVERLAP */
  star: {
    position: 'absolute',
    right: -12,
    top: -14,
    width: 32,
    height: 32,
  },
});
