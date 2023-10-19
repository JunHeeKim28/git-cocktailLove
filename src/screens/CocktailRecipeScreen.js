import { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Modal,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CocktailRecipeScreen() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [ingredients, setIngredients] = useState({});
  const [recipeList, setRecipeList] = useState([]);
  const STORAGE_KEY = "cocktailRecipes"; // AsyncStorage에 저장할 키

  useEffect(() => {
    loadRecipesFromStorage();
  }, []);

  // AsyncStorage에서 저장된 레시피 불러오기
  const loadRecipesFromStorage = async () => {
    try {
      const savedRecipesJSON = await AsyncStorage.getItem(STORAGE_KEY);
      if (savedRecipesJSON !== null) {
        const savedRecipes = JSON.parse(savedRecipesJSON);
        setRecipeList(savedRecipes);
      }
    } catch (error) {
      console.error("데이터 로딩 오류:", error);
    }
  };

  // AsyncStorage에 레시피 저장
  const saveRecipesToStorage = async (recipes) => {
    try {
      const recipesJSON = JSON.stringify(recipes);
      await AsyncStorage.setItem(STORAGE_KEY, recipesJSON);
    } catch (error) {
      console.error("데이터 저장 오류:", error);
    }
  };

  const toggleModal = () => {
    setIngredients({
      위스키: "0ml",
      레몬주스: "0ml",
      자몽주스: "0ml",
      라임주스: "0ml",
    });
    setModalVisible(!isModalVisible);
  };

  const addIngredient = (ingredient, amount) => {
    setIngredients({ ...ingredients, [ingredient]: amount });
  };

  const saveRecipe = () => {
    const newRecipe = { ...ingredients };
    const updatedRecipes = [...recipeList, newRecipe];
    setRecipeList(updatedRecipes);
    saveRecipesToStorage(updatedRecipes);
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={{ marginTop: 130 }}>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>위스키:</Text>
              <Picker
                selectedValue={ingredients.위스키}
                onValueChange={(itemValue) =>
                  addIngredient("위스키", itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="0ml" value="0ml" />
                <Picker.Item label="15ml" value="15ml" />
                <Picker.Item label="30ml" value="30ml" />
                <Picker.Item label="45ml" value="45ml" />
                <Picker.Item label="60ml" value="60ml" />
                <Picker.Item label="75ml" value="75ml" />
                <Picker.Item label="90ml" value="90ml" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>레몬주스:</Text>
              <Picker
                selectedValue={ingredients.레몬주스}
                onValueChange={(itemValue) =>
                  addIngredient("레몬주스", itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="0ml" value="0ml" />
                <Picker.Item label="15ml" value="15ml" />
                <Picker.Item label="30ml" value="30ml" />
                <Picker.Item label="45ml" value="45ml" />
                <Picker.Item label="60ml" value="60ml" />
                <Picker.Item label="75ml" value="75ml" />
                <Picker.Item label="90ml" value="90ml" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>자몽주스:</Text>
              <Picker
                selectedValue={ingredients.자몽주스}
                onValueChange={(itemValue) =>
                  addIngredient("자몽주스", itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="0ml" value="0ml" />
                <Picker.Item label="15ml" value="15ml" />
                <Picker.Item label="30ml" value="30ml" />
                <Picker.Item label="45ml" value="45ml" />
                <Picker.Item label="60ml" value="60ml" />
                <Picker.Item label="75ml" value="75ml" />
                <Picker.Item label="90ml" value="90ml" />
              </Picker>
            </View>
            <View style={styles.pickerContainer}>
              <Text style={styles.pickerLabel}>라임주스:</Text>
              <Picker
                selectedValue={ingredients.라임주스}
                onValueChange={(itemValue) =>
                  addIngredient("라임주스", itemValue)
                }
                style={styles.picker}
              >
                <Picker.Item label="0ml" value="0ml" />
                <Picker.Item label="15ml" value="15ml" />
                <Picker.Item label="30ml" value="30ml" />
                <Picker.Item label="45ml" value="45ml" />
                <Picker.Item label="60ml" value="60ml" />
                <Picker.Item label="75ml" value="75ml" />
                <Picker.Item label="90ml" value="90ml" />
              </Picker>
            </View>
            <Button title="재료 저장" onPress={saveRecipe} />
            <Button title="닫기" onPress={toggleModal} />
          </ScrollView>
        </View>
      </Modal>
      <ScrollView>
        {recipeList.map((recipe, index) => (
          <Text key={index} style={styles.recipeTxt}>
            {Object.keys(recipe).map((ingredient) => {
              if (recipe[ingredient] !== "0ml") {
                return `${ingredient}: ${recipe[ingredient]}  `;
              } else {
                return null;
              }
            })}
          </Text>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.addBtn} onPress={toggleModal}>
        <Text style={styles.addBtnTxt}>레시피 추가</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  addBtn: {
    backgroundColor: "lightblue",
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  addBtnTxt: { color: "white" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  pickerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    marginTop: 5,
  },
  pickerLabel: {
    marginRight: 10,
    fontSize: 20,
  },
  picker: {
    width: 150,
    height: 40,
  },
  recipeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
  },
  recipeTxt: {
    fontSize: 18,
    marginTop: 20,
  },
});
