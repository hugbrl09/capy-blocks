import { useEffect, useMemo, useRef, useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Asset } from 'expo-asset';
import OutlineTitle from '../components/ui/OutlineTitle';

export default function LoadingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const animRef = useRef<NodeJS.Timeout | null>(null);

  const assets = useMemo(() => [
    require('../assets/images/forest.png'),
  ], []);

  useEffect(() => {
    let mounted = true;
    const smoothTo = (target: number, step = 1, ms = 16) => {
      if (animRef.current) clearInterval(animRef.current);
      animRef.current = setInterval(() => {
        setProgress(p => {
          const next = Math.min(target, p + step);
          if (next >= target && animRef.current) clearInterval(animRef.current);
          return next;
        });
      }, ms);
    };

    const load = async () => {
      smoothTo(10);
      for (let i = 0; i < assets.length; i++) {
        const mod = Asset.fromModule(assets[i]);
        if (!mod.downloaded) await mod.downloadAsync();
        const base = 10;
        const portion = 80 * ((i + 1) / assets.length);
        if (mounted) smoothTo(Math.floor(base + portion));
      }
      await new Promise(r => setTimeout(r, 400));
      if (mounted) smoothTo(100);
    //   await new Promise(r => setTimeout(r, 250));
      await new Promise(r => setTimeout(r, 2000));
      if (mounted) router.push('/lobby'); // ou '/game'
    };

    load();
    return () => { mounted = false; if (animRef.current) clearInterval(animRef.current); };
  }, [assets, router]);

  const pct = Math.max(0, Math.min(100, progress));

  return (
    <ImageBackground source={require('../assets/images/forest.png')} style={styles.bg} resizeMode="cover">
      <View style={styles.container}>
        {/* HEADER (título mais acima) */}
        <View style={styles.header}>
          <OutlineTitle text="CAPY" color="#FFFFFF" />
          <OutlineTitle text="BLOCKS" color="#E32626" />
        </View>

        {/* LOADER (um pouco mais abaixo) */}
        <View style={styles.loader}>
          <Text style={styles.progressText}>{pct}%</Text>
          <View style={styles.bar}>
            <View style={[styles.barFill, { width: `${pct}%` }]} />
          </View>
        </View>

        {/* FOOTER fixo no rodapé */}
        <Text style={styles.legal}>
          ©2024 - 2025 Ulbra All Rights Reserved.{'\n'}
          ©2024 Viacom International Inc. All Rights Reserved. SpongeBob SquarePants created by Stephen Hillenburg.
        </Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 }, // fundo em tela cheia (ImageBackground)
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between', // distribui header (topo) e loader (meio/baixo)
    paddingTop: 48,                  // empurra o título para cima
    paddingBottom: 96,               // cria espaço para o loader sem colar no rodapé
    paddingHorizontal: 24,
  },
  header: {
    alignItems: 'center',
    gap: 4,                          // espaço entre CAPY/BLOCKS
  },
  loader: {
    width: 300,
    alignItems: 'center',
    gap: 8,                          // espaço entre % e barra
  },
  progressText: {
    fontFamily: 'LilitaOne',
    fontSize: 22,
    color: '#FFF',
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,             // sombra do texto (%)
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
    position: 'absolute',            // ancorado no rodapé
    bottom: 16,                      // respiro do fundo
    left: 24,
    right: 24,
    textAlign: 'center',
    fontFamily: 'LilitaOne',
    fontSize: 10,
    color: 'rgba(255,255,255,0.85)',
  },
});
