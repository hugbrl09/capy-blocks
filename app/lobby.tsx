import { SafeAreaView, View, Text, Pressable, ImageBackground, Platform } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles } from '../src/styles/lobby.styles';

export default function Lobby() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <ImageBackground
      source={require('../assets/images/lobby/forest.png')}
      resizeMode="cover"
      style={[styles.bg, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
    >
      <SafeAreaView style={styles.safe}>
        {/* TOP BAR */}
        <View style={styles.topRow}>
          {/* Logo (text image) on the left */}
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            contentFit="contain"
            accessibilityRole="image"
            accessibilityLabel="CAPY BLOCKS"
          />
          {/* Icon buttons on the right */}
          <View style={styles.topButtons}>
            <Pressable
              style={styles.iconBtn}
              onPress={() => {}}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Troféus"
              android_ripple={Platform.OS === 'android' ? { borderless: true } : undefined}
            >
              <Image
                source={require('../assets/images/lobby/icons/trophy.png')}
                style={styles.icon}
                contentFit="contain"
              />
            </Pressable>
            <Pressable
              style={styles.iconBtn}
              onPress={() => {}}
              hitSlop={10}
              accessibilityRole="button"
              accessibilityLabel="Menu"
              android_ripple={Platform.OS === 'android' ? { borderless: true } : undefined}
            >
              <Image
                source={require('../assets/images/lobby/icons/menu.png')}
                style={styles.icon}
                contentFit="contain"
              />
            </Pressable>
          </View>
        </View>

        {/* CENTER CHARACTER */}
        <View style={styles.centerWrap} pointerEvents="box-none">
          <Image
            source={require('../assets/images/lobby/Capivara.png')} // make sure file name matches case
            style={styles.capy}
            contentFit="contain"
            transition={250}
          />
          {/* Red “10” badge hanging below the character */}
          <View style={styles.badge}>
            <Image
              source={require('../assets/images/lobby/icons/badge-drop.png')} // optional: a droplet badge
              style={styles.badgeBg}
              contentFit="contain"
            />
          </View>
        </View>

        {/* MISSIONS (bottom-left) */}
        <Pressable
          style={styles.missionsBtn}
          onPress={() => {}}
          hitSlop={10}
          accessibilityRole="button"
          accessibilityLabel="Missões"
        >
          <Image
            source={require('../assets/images/lobby/icons/missions.png')}
            style={styles.missionIcon}
            contentFit="contain"
          />
          <Text style={styles.missionLabel}>MISSÕES</Text>
        </Pressable>

        {/* PLAY (bottom-right) */}
        <Pressable
          style={styles.playWrap}
          onPress={() => router.push('/game')}
          hitSlop={12}
          accessibilityRole="button"
          accessibilityLabel="Jogar"
        >
          <View style={styles.playCard}>
            {/* progress blocks above the card */}
            <View style={styles.progressRow}>
              {Array.from({ length: 8 }).map((_, i) => (
                <View
                  key={i}
                  style={[styles.progressBlock, i < 5 ? styles.progressFilled : undefined]}
                />
              ))}
            </View>

            <View style={styles.playInner}>
              <Text style={styles.playLabel}>PLAY</Text>
            </View>

            <Image
              source={require('../assets/images/lobby/icons/star.png')}
              style={styles.star}
              contentFit="contain"
            />
          </View>
        </Pressable>


      </SafeAreaView>
    </ImageBackground>
  );
}