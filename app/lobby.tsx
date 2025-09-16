// app/lobby.tsx
import { SafeAreaView, StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { styles } from '../src/styles/lobby.styles';

export default function Lobby() {
  const router = useRouter();

  const onPressPlay = () => router.push('/game');

  return (
    <ImageBackground
      source={require('../assets/images/lobby/forest.png')}
      resizeMode="cover"
      style={styles.bg}
    >
      <SafeAreaView style={styles.safe}>
        {/* TOP BAR */}
        <View style={styles.topRow}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            contentFit="contain"
            transition={250}
          />
          <View style={styles.topButtons}>
            <Pressable style={styles.iconBtn} hitSlop={12} onPress={() => { /* trophy */ }}>
              <Image
                source={require('../assets/images/lobby/icons/trophy.png')}
                style={styles.icon}
                contentFit="contain"
              />
            </Pressable>
            <Pressable style={styles.iconBtn} hitSlop={12} onPress={() => { /* menu */ }}>
              <Image
                source={require('../assets/images/lobby/icons/menu.png')}
                style={styles.icon}
                contentFit="contain"
              />
            </Pressable>
          </View>
        </View>

        {/* CENTER CHARACTER */}
        <View style={styles.centerWrap}>
          <Image
            source={require('../assets/images/lobby/Capivara.png')}
            style={styles.capy}
            contentFit="contain"
            transition={250}
          />
          {/* Badge “10” */}
          <View style={styles.badge}>
            <Text style={styles.badgeText}>10</Text>
          </View>
        </View>

        {/* BOTTOM BAR */}
        <View style={styles.bottomRow}>
          {/* Missões (botão com ícone) */}
          <Pressable style={styles.missionsBtn} onPress={() => { /* missions */ }} hitSlop={10}>
            <Image
              source={require('../assets/images/lobby/icons/missions.png')}
              style={styles.missionIcon}
              contentFit="contain"
            />
            <Text style={styles.missionLabel}>MISSÕES</Text>
          </Pressable>

          {/* PLAY (botão grande com faixa lateral e estrela) */}
          <Pressable style={styles.playWrap} onPress={onPressPlay} hitSlop={12}>
            <View style={styles.playCard}>
              {/* Faixa de “progresso” à esquerda */}
              <View style={styles.playStrip}>
                <View style={[styles.playStripFill, { width: '60%' }]} />
              </View>
              {/* Estrela no canto superior direito do card */}
              {/* <Image
                source={require('../assets/images/lobby/icons/star.png')}
                style={styles.star}
                contentFit="contain"
              /> */}
              <Text style={styles.playLabel}>PLAY</Text>
            </View>
          </Pressable>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}


