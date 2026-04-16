import { IconSymbol } from "@/components/ui/icon-symbol";
import { Image } from "expo-image";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Explore() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* HEADER INSCAGRAM */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Instagram</Text>
          <View style={styles.headerIcons}>
            <Pressable>
              <IconSymbol size={24} name="heart" color="#000" />
            </Pressable>
            <Pressable>
              <IconSymbol size={24} name="paperplane" color="#000" />
            </Pressable>
          </View>
        </View>

        {/* KARTU POST */}
        <View style={styles.post}>
          {/* Post Header: Avatar & Username */}
          <View style={styles.postHeader}>
            <View style={styles.userInfo}>
              <View style={styles.avatarContainer}>
                <Image
                  source="https://eqwkxvz36vnuod1e.public.blob.vercel-storage.com/p4/praktek-1/logo.svg.png"
                  style={styles.avatar}
                  contentFit="cover"
                />
              </View>
              <View>
                <Text style={styles.username}>netflixid</Text>
                <Text style={styles.location}>Netflix Indonesia</Text>
              </View>
            </View>
            <Pressable>
              <IconSymbol size={24} name="ellipsis" color="#000" />
            </Pressable>
          </View>

          {/* Post Image: Gambar Konten */}
          <View style={styles.imageContainer}>
            <Image
              source="https://eqwkxvz36vnuod1e.public.blob.vercel-storage.com/p4/praktek-1/feeds.jpg.webp"
              style={styles.postImage}
              contentFit="cover"
            />
          </View>

          {/* Actions: Tombol Like, Komen, Share, Bookmark */}
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <Pressable>
                <IconSymbol size={26} name="heart" color="#000" />
              </Pressable>
              <Pressable>
                <IconSymbol size={26} name="message" color="#000" />
              </Pressable>
              <Pressable>
                <IconSymbol size={26} name="paperplane" color="#000" />
              </Pressable>
            </View>
            <Pressable>
              <IconSymbol size={24} name="bookmark" color="#000" />
            </Pressable>
          </View>

          {/* Likes & Caption */}
          <View style={styles.textContainer}>
            <Text style={styles.likes}>892.547 suka</Text>

            <Text style={styles.caption}>
              <Text style={styles.username}>netflixid </Text>
              Drama baru yang bikin baper! ...
              <Text style={styles.hashtag}>#CanThisLoveBeTranslated ...</Text>
            </Text>
          </View>

          {/* Komentar & Waktu */}
          <View style={styles.commentContainer}>
            <Pressable>
              <Text style={styles.commentsText}>
                Lihat semua 8.234 komentar
              </Text>
            </Pressable>

            <Text style={styles.commentText}>
              <Text style={styles.commentUsername}>drakor_addict </Text>
              Dramanya bikin nangis terus!
            </Text>

            <Text style={styles.timestamp}>5 JAM YANG LALU</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderBottomColor: "#DBDBDB",
    backgroundColor: "#FFFFFF",
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: -0.5,
  },
  headerIcons: {
    flexDirection: "row",
    gap: 16,
  },
  post: {
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: "hidden",
  },
  avatar: {
    width: "100%",
    height: "100%",
  },
  username: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  location: {
    fontSize: 12,
    color: "#666",
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1, // Agar selalu persegi seperti Instagram Feed
    backgroundColor: "#FAFAFA",
  },
  postImage: {
    width: "100%",
    height: "100%",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingTop: 8,
    paddingBottom: 4,
  },
  leftActions: {
    flexDirection: "row",
    gap: 16,
  },
  textContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  likes: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
    marginBottom: 4,
  },
  caption: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  hashtag: {
    color: "#00376B",
  },
  commentContainer: {
    paddingHorizontal: 12,
  },
  commentsText: {
    fontSize: 14,
    color: "#8E8E8E",
    marginVertical: 4,
  },
  commentText: {
    fontSize: 14,
    color: "#000",
    lineHeight: 20,
  },
  commentUsername: {
    fontWeight: "600",
  },
  timestamp: {
    fontSize: 10,
    color: "#8E8E8E",
    letterSpacing: 0.5,
    marginTop: 8,
  },
});
