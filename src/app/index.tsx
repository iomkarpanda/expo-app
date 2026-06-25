import { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Button, ButtonText } from '@/components/ui/button';
import { Input, InputField } from '@/components/ui/input';

type AuthTab = 'login' | 'signup';

export default function AuthScreen() {
  const [activeTab, setActiveTab] = useState<AuthTab>('login');

  return (
    <SafeAreaView className="flex-1">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
      >
        <ScrollView
          contentContainerClassName="flex-grow justify-center px-6 max-w-xl self-center w-full gap-4 pb-20"
          keyboardShouldPersistTaps="handled"
        >
          <Pressable
            onPress={() => setActiveTab(activeTab === 'login' ? 'signup' : 'login')}
          >
            <Input variant="outline" size="md" className="self-stretch w-full">
              <InputField placeholder="Email" keyboardType="email-address" />
            </Input>
            <Input variant="outline" size="md" className="self-stretch w-full">
              <InputField placeholder="Password" secureTextEntry />
            </Input>
            <Button action="primary" variant="solid" size="lg">
              <ButtonText>{activeTab === 'login' ? 'Log In' : 'Sign Up'}</ButtonText>
            </Button>
          </Pressable>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
