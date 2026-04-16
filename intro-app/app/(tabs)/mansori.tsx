import { Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function DirectImageGridScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.row}>
        
        <View style={styles.column1}>
          <Image
            source={{ uri: 'https://picsum.photos/seed/p3/300/400' }}
            style={[styles.card, { height: 200 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p9/300/300' }}
            style={[styles.card, { height: 150 }]} 
          />
          <Image
           source={{ uri: 'https://picsum.photos/seed/p14/300/500' }}
            style={[styles.card, { height: 300 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p16/300/300' }}
            style={[styles.card, { height: 150 }]} 
            
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p13/300/300' }}
            style={[styles.card, { height: 150 }]} 
            
          />
        </View>

        <View style={styles.column2}>
          

          <Image
            source={{ uri: 'https://picsum.photos/seed/p4/300/360' }}
            style={[styles.card, { height: 180 }]} 
          />
          <ImageBackground
            source={{ uri: 'https://picsum.photos/seed/p5/300/560' }}
            style={[styles.card, { height: 280, justifyContent: "center" }]}
          >
            <View style={{ alignItems: "center", paddingHorizontal: 4 }}>
              <Text style={styles.heroText}>Muhammad Rizqon Sagena</Text>
              <Text style={styles.subText}>1224016</Text>
            </View>
          </ImageBackground>
          <Image
           source={{ uri: 'https://picsum.photos/seed/p7/300/500' }}
            style={[styles.card, { height: 250 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p6/300/200' }}
            style={[styles.card, { height: 100 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p11/300/360' }}
            style={[styles.card, { height: 180 }]}

          />
          <Image
           source={{ uri: 'https://picsum.photos/seed/p1/300/440' }}
            style={[styles.card, { height: 220 }]} 
            
          />
        </View>

        <View style={styles.column3}>
          <Image
           source={{ uri: 'https://picsum.photos/seed/p2/300/500' }}
            style={[styles.card, { height: 250 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p8/300/400' }}
            style={[styles.card, { height: 200 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p10/300/300' }}
            style={[styles.card, { height: 150 }]} 
          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p12/300/300' }}
            style={[styles.card, { height: 150 }]} 

          />
          <Image
            source={{ uri: 'https://picsum.photos/seed/p15/300/400' }}
            style={[styles.card, { height: 200 }]} 
            
          />
        </View>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 4,
  },
  column1: {
    flex: 1,
    paddingHorizontal: 4,
    marginLeft: -80,
  },
  column2: {
    flex: 1,
    paddingHorizontal: 4,
    
  },
  column3: {
    flex: 1,
    paddingHorizontal: 4,
    marginRight: -80,
  },
  card: {
    width: '100%',
    marginBottom: 8,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  },
  subText: {
    marginTop: 4,
    fontSize: 14,
    fontWeight: "700",
    color: "#FFFFFF",
    textAlign: "center",
  }
});