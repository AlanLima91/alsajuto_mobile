// @flow
import * as React from "react";
import {
  Image, StyleSheet, View, Text
} from "react-native";

import Animated from "react-native-reanimated";

import { Profile } from "../Models";

const { Value } = Animated;

interface CardProps {
  profile: Profile;
}

export default (props: CardProps) => {
  const { profile, likeOpacity, nopeOpacity } = {
    likeOpacity: 0,
    nopeOpacity: 0,
    ...props,
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={profile.profile} />
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Animated.View style={[styles.like, { opacity: likeOpacity }]}>
            <Text style={styles.likeLabel}>LIKE</Text>
          </Animated.View>
          <Animated.View style={[styles.nope, { opacity: nopeOpacity }]}>
            <Text style={styles.nopeLabel}>NOPE</Text>
          </Animated.View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.name}>{profile.name}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 450,
    margin: 5,
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.75,
    shadowRadius: 5,
    shadowColor: 'black'
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 8,
  },
  overlay: {
    flex: 1,
    justifyContent: "space-between",
    padding: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  footer: {
    flexDirection: "row",
  },
  name: {
    color: "white",
    fontSize: 32,
  },
  like: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#6ee3b4",
  },
  likeLabel: {
    fontSize: 32,
    color: "#6ee3b4",
    fontWeight: "bold",

  },
  nope: {
    borderWidth: 4,
    borderRadius: 5,
    padding: 8,
    borderColor: "#ec5288",
  },
  nopeLabel: {
    fontSize: 32,
    color: "#ec5288",
    fontWeight: "bold",
  },
});