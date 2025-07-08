
import { router } from 'expo-router'
import { Button, Text, View } from 'react-native'

const signIn = () => {
  return (
    <View>
      <Text>Sign In</Text>
      <Button title="Sign Up" onPress={() => router.push("/sing-up")} />
    </View>
  )
}

export default signIn