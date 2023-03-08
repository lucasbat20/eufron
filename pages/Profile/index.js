import { useContext } from "react";
import { ScrollView, Text, View } from "react-native";
import { Button, SegmentedButtons, TextInput } from "react-native-paper";
import DateTimePickerInput from "../../components/Input/DateTimePickerInput";
import Main from "../../components/Main";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { signOut } = useContext(AuthContext);
  
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <Main title="Vous">
      <ScrollView>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 10 }}>
            <View style={{ rowGap: 5 }}>
              <Text>Genre</Text>
              <SegmentedButtons
                value={gender}
                onValueChange={setGender}
                buttons={[
                  { value: "F", label: "Femme" },
                  { value: "M", label: "Homme" },
                  { value: "", label: "Autres" },
                ]}
              />
            </View>
            <DateTimePickerInput
              label="Anniversaire"
              mode="date"
              maximumDate={new Date(new Date().getFullYear(), 12, 31)}
              date={birthdate}
              onChange={setBirthdate}
            />
            <TextInput
              onChangeText={setHeight}
              value={height}
              label="Taille (cm)"
              inputMode="decimal"
            />
            <TextInput
              onChangeText={setWeight}
              value={weight}
              label="Poids (kg)"
              inputMode="decimal"
            />
          </View>
          <Button icon="logout" onPress={signOut}>
            Déconnexion
          </Button>
        </View>
      </ScrollView>
    </Main>
  );
}
