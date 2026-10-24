import * as Device from "expo-device";
import { useState } from "react";
import { Button, Platform, StyleSheet, ScrollView ,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { StudentCard } from "@/components/StudentCard";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";

function getDevMenuHint() {
  if (Platform.OS === "web") {
    return <ThemedText type="small">use browser devtools</ThemedText>;
  }
  if (Device.isDevice) {
    return (
      <ThemedText type="small">
        shake device or press <ThemedText type="code">m</ThemedText> in terminal
      </ThemedText>
    );
  }
  const shortcut = Platform.OS === "android" ? "cmd+m (or ctrl+m)" : "cmd+d";
  return (
    <ThemedText type="small">
      press <ThemedText type="code">{shortcut}</ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const [students, setStudents] = useState([
    {id: "s1", name: "Ana Cruz",course: "IT313", units: 21,isFullLoad: true, },
    { id: "s2", name: "Bea Santos", course: "IT313", units: 15, isFullLoad: false,  },
    {  id: "s3", name: "Cid Ramos", course: "IT313", units: 18, isFullLoad: true,},
    { id: "s4",  name: "Dex Alonzo",course: "IT313",  units: 12,  isFullLoad: false, },
  ]);

  const reverseRoster = () => {
    setStudents([...students].reverse());
  };

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.SafeArea}>
        <ScrollView contentContainerStyle={styles.content}>
          <ThemedText type="title" style={styles.title}>
            Student Roster
          </ThemedText>

          <ThemedText type="small" style={styles.count}>
            {students.length} Students
          </ThemedText>

          <View style={styles.roster}>
            {students.map((student) => (
              <StudentCard
                key={student.id}
                name={student.name}
                course={student.course}
                units={student.units}
                isFullLoad={student.isFullLoad}
              />
            ))}
          </View>

          <View style={styles.button}>
            <Button title="Reverse Roster" onPress={reverseRoster} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SafeArea: {
    flex: 1,
    padding: 20,
  },
  content: {
    paddingBottom: 20,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
  },
  count: {
    marginBottom: 10,
  },
  roster: {
    backgroundColor: "White",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  button: {
    marginBottom: 20,
  },
  stepContainer: {
    padding: 10,
    gap: 10,
  },
});

/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
*/
