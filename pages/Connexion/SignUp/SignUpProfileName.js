import { useState } from "react";
import { ScrollView, View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import Layout from "../../../components/Layout";

export default function SignUpProfileName() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  const [disabled, setDisabled] = useState(true);

  return (
    <Layout
      title="Infos"
      hideNavigation
    >
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <TextInput
              onChangeText={setFirstname}
              value={firstname}
              label="Prénom"
              autoFocus
            />
            <TextInput
              onChangeText={setLastname}
              value={lastname}
              label="Nom"
            />
          </View>
          <Button disabled={disabled} mode="contained" icon="check">
            Valider
          </Button>
        </View>
      </ScrollView>
    </Layout>
  );
}
