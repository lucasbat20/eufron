import { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  TextInput,
  Button,
  useTheme,
  IconButton,
} from "react-native-paper";
import Main from "../../../components/Main";

export default function SignInPage() {
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  const [disabled, setDisabled] = useState(true);

  const theme = useTheme();

  return (
    <Main
      title="Connexion"
      actions={[
        {
          icon: "login-variant",
          label: "Se connecter",
          disabled: disabled,
          onPress: () => console.log("Sign in actions here @todo"),
        },
      ]}
      onPressBackAction={() => console.log("Back actions here @todo")}
      hideNavigation
    >
      <View
        style={{
          rowGap: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <IconButton icon="google" mode="contained" size={40} />
          <IconButton icon="facebook" mode="contained" size={40} />
          <IconButton icon="apple" mode="contained" size={40} />
        </View>
        <View style={{ rowGap: 10, marginTop: 10 }}>
          <TextInput
            onChangeText={onChangeEmail}
            value={email}
            placeholder="Email"
            inputMode="email"
            autoFocus
          />
          <TextInput
            onChangeText={onChangePassword}
            value={password}
            placeholder="Mot de passe"
            secureTextEntry
          />
          <View style={{ flexDirection: "row"}}>
            <Button mode="text" textColor={theme.colors.primary}>
              Mot de passe oublié
            </Button>
            <Button mode="contained" icon="login-variant">
              Se connecter
            </Button>
          </View>
        </View>
      </View>
    </Main>
  );
}
