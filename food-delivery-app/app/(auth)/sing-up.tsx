import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const signUp = () => {
  return (
    <View>
      <Text>sing Up</Text>
       <Button title="Sign In" onPress={() => router.push("/sign-in")} />
    </View>
  )
}

export default signUp
