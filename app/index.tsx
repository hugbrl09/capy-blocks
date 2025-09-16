// app/index.tsx
import { useEffect, useMemo, useRef, useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { Asset } from 'expo-asset';
// import Logo from '../assets/images/capy_blocks_logo.svg'; // <-- SVG do Figma como componente
import { Image } from 'expo-image';
import { styles } from '../src/styles/loading.styles';

export default function LoadingScreen() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  // Corrige o erro: usa o tipo do retorno de setInterval para cobrir RN e Node
  const animRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const assets = useMemo(() => [require('../assets/images/forest.png')], []);

  useEffect(() => {
    let mounted = true;

    const smoothTo = (target: number, step = 1, ms = 16) => {
      if (animRef.current) clearInterval(animRef.current);
      animRef.current = setInterval(() => {
        setProgress((p) => {
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
      await new Promise((r) => setTimeout(r, 400));
      if (mounted) smoothTo(100);
      await new Promise((r) => setTimeout(r, 2000));
      if (mounted) router.push('/lobby');
    };

    load();
    return () => {
      mounted = false;
      if (animRef.current) clearInterval(animRef.current);
    };
  }, [assets, router]);

  const pct = Math.max(0, Math.min(100, progress));

  return (
    <ImageBackground source={require('../assets/images/forest.png')} style={styles.bg} resizeMode="cover">
      <View style={styles.container}>
        {/* HEADER com SVG */}
        {/*<View style={styles.header}>
          <Logo width={240} height={120} /> {/* ajuste proporções conforme exportação */}
        {/* </View> */}

        <View style={styles.header}>
            <Image 
                source={require('../assets/images/logo.png')}
                style={{ width: 240, height: 120 }}
                contentFit='contain'
                transition={250}
            />
        </View>
            
        {/* LOADER */}
        <View style={styles.loader}>
          <Text style={styles.progressText}>{pct}%</Text>
          <View style={styles.bar}>
            <View style={[styles.barFill, { width: `${pct}%` }]} />
          </View>
        </View>

        {/* FOOTER */}
        <Text style={styles.legal}>
          ©2024 - 2025 Ulbra All Rights Reserved.{'\n'}
          ©2024 Viacom International Inc. All Rights Reserved. SpongeBob SquarePants created by Stephen Hillenburg.
        </Text>
      </View>
    </ImageBackground>
  );
}
