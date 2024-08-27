import { View, Pressable, Text, Image } from 'react-native';
import { StoreProps } from '..';
import { Ionicons } from '@expo/vector-icons';

export function StoreItem({ item }: { item: StoreProps }) {
 return (
   <Pressable
    className='flex flex-row items-center justify-start gap-2'
    onPress={ () => console.log("Clicou em " + item.name)}
    >
    <Image
        source={{uri: item.image}}
        className='w-20 h-20 rounded-full'
    ></Image>
    <View className='flex gap-2'>
        <Text className='text-base text-center font-bold leading-4 text-black' numberOfLines={2}>{item.name}</Text>
        <View className='flex-row items-center gap-1'>
            <Ionicons name='star' size={14} color='#ca8a04'></Ionicons>
            <Text className='text-sm'>4.5</Text>
        </View>
    </View>
   </Pressable>
  );
}