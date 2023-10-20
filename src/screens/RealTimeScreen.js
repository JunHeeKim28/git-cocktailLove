import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Alert } from "react-native";

export default function RealTimeScreen() {
  const [cocktails, setCocktails] = useState([]);
  const [selectedCocktail, setSelectedCocktail] = useState(null);

  // API에서 칵테일 데이터를 가져오는 함수
  const fetchCocktails = async () => {
    // API 호출 및 데이터를 cocktails 상태에 설정
    // 예: const response = await fetch('API_URL');
    // const data = await response.json();
    // setCocktails(data);
  };

  useEffect(() => {
    fetchCocktails(); // 컴포넌트가 마운트될 때 API 호출
  }, []);

  const showCocktailDetails = (cocktail) => {
    const message = `칵테일 이름: ${cocktail.name}\n재료: ${cocktail.ingredients}\n용량: ${cocktail.capacity}`;
    Alert.alert("칵테일 상세 정보", message);
  };

  return (
    <View>
      {cocktails.map((cocktail, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => showCocktailDetails(cocktail)}
        >
          <Text>{cocktail.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
