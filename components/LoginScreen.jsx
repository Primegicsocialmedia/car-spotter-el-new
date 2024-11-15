import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";
import * as WebBrowser from "expo-web-browser";

const LoginScreen = () => {
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow()
        ;

      if (createdSessionId) {
        setActive({ session: createdSessionId })//setActive!({ session: createdSessionId })
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View>
      <View className="flex mt-24 items-center">
        <Image
          source={require("../assets/images/login.png")}
          className="w-[350] h-[550] rounded-3xl border-6 border-[#000]"
        />
      </View>
      <View className="bg-white p-5 -mt-5">
        <Text className="text-4xl font-bold text-center">
          Your Ultimate <Text className="text-red-800">Used Car App</Text>{" "}
          Directory
        </Text>
        <Text className="text-center text-xl mt-2">
          Find your next vehicle and post your vehicle for sale
        </Text>
        <TouchableOpacity  onPress={onPress} className="bg-red-800 p-4 rounded-full mt-8">
          <Text className="text-white text-center">Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

export const useWarmUpBrowser = () => {
  React.useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();
